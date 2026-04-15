"use server";

import Anthropic from "@anthropic-ai/sdk";
import mammoth from "mammoth";
import JSZip from "jszip";
import { deckSchema, type Deck } from "@/lib/schema";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { mockDeck } from "@/lib/mock";

export type GenerateResult =
  | { ok: true; deck: Deck; source: "claude" | "mock" }
  | { ok: false; error: string };

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB cap per file
const MAX_CONTEXT_CHARS = 60_000; // trim extracted text to avoid blowing context

/**
 * Extract plain text from an uploaded file. Supports .txt / .md / .docx / .pptx.
 * PDFs are noted as unsupported until we wire pdfjs-dist (v2).
 */
async function extractFileText(file: File): Promise<{ text: string; note?: string }> {
  const name = file.name.toLowerCase();
  if (file.size > MAX_FILE_BYTES) {
    return { text: "", note: `${file.name}: файл больше 8 МБ — пропущен.` };
  }
  const ab = await file.arrayBuffer();
  const buf = Buffer.from(ab);

  try {
    if (name.endsWith(".txt") || name.endsWith(".md")) {
      return { text: buf.toString("utf8") };
    }
    if (name.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer: buf });
      return { text: result.value };
    }
    if (name.endsWith(".pptx")) {
      const zip = await JSZip.loadAsync(buf);
      const slideNames = Object.keys(zip.files)
        .filter((f) => /^ppt\/slides\/slide\d+\.xml$/.test(f))
        .sort((a, b) => {
          const ai = Number(a.match(/slide(\d+)\.xml$/)?.[1] ?? 0);
          const bi = Number(b.match(/slide(\d+)\.xml$/)?.[1] ?? 0);
          return ai - bi;
        });
      const chunks: string[] = [];
      for (let i = 0; i < slideNames.length; i++) {
        const xml = await zip.files[slideNames[i]].async("string");
        const text = xml
          .replace(/<a:t[^>]*>([^<]*)<\/a:t>/g, "$1\n")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        if (text) chunks.push(`--- Slide ${i + 1} ---\n${text}`);
      }
      return { text: chunks.join("\n\n") };
    }
    if (name.endsWith(".pdf")) {
      return {
        text: "",
        note: `${file.name}: PDF пока не поддерживается. Сохрани как .docx или .txt.`,
      };
    }
    return { text: "", note: `${file.name}: формат не поддерживается.` };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { text: "", note: `${file.name}: ошибка парсинга — ${msg}` };
  }
}

function buildBrief(
  brief: string,
  files: Array<{ name: string; text: string }>,
  notes: string[],
): string {
  const parts = [`Brief:\n${brief.trim()}`];
  if (files.length) {
    parts.push("\n\n## Uploaded documents\n");
    for (const f of files) {
      parts.push(`\n### ${f.name}\n${f.text}\n`);
    }
  }
  if (notes.length) {
    parts.push(`\n\n(Parser notes: ${notes.join("; ")})`);
  }
  let merged = parts.join("");
  if (merged.length > MAX_CONTEXT_CHARS) {
    merged =
      merged.slice(0, MAX_CONTEXT_CHARS) +
      `\n\n[...truncated: ${merged.length - MAX_CONTEXT_CHARS} chars cut]`;
  }
  return merged;
}

function shouldFallbackToMock(message: string): boolean {
  const normalized = message.toLowerCase();

  return (
    normalized.includes("credit balance is too low") ||
    normalized.includes("plans & billing") ||
    normalized.includes("insufficient") ||
    normalized.includes("rate limit") ||
    normalized.includes("overloaded")
  );
}

/**
 * Server Action — accepts a FormData payload from the client form:
 *   - `brief`: text brief
 *   - `files`: zero-or-more uploaded File objects
 * Parses files → merges into brief → calls Claude → validates against schema.
 */
export async function generateDeck(formData: FormData): Promise<GenerateResult> {
  const briefRaw = (formData.get("brief") ?? "") as string;
  if (!briefRaw.trim()) {
    return { ok: false, error: "Бриф пустой." };
  }

  // Pull all files named "files" — getAll preserves order.
  const rawFiles = formData.getAll("files").filter((f): f is File => f instanceof File);
  const parsed: Array<{ name: string; text: string }> = [];
  const notes: string[] = [];
  for (const f of rawFiles) {
    if (!f.size) continue;
    const res = await extractFileText(f);
    if (res.text) parsed.push({ name: f.name, text: res.text });
    if (res.note) notes.push(res.note);
  }

  const merged = buildBrief(briefRaw, parsed, notes);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { ok: true, deck: mockDeck, source: "mock" };
  }

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 4096,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [
        {
          role: "user",
          content: `${merged}\n\nReturn the JSON deck now.`,
        },
      ],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return { ok: false, error: "Claude вернул пустой ответ." };
    }
    const raw = textBlock.text.trim().replace(/^```(?:json)?\s*|\s*```$/g, "");

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(raw);
    } catch {
      return { ok: false, error: `Claude вернул не-JSON:\n${raw.slice(0, 400)}` };
    }

    const validated = deckSchema.safeParse(parsedJson);
    if (!validated.success) {
      return {
        ok: false,
        error: `Schema mismatch: ${validated.error.issues
          .map((i) => `${i.path.join(".")}: ${i.message}`)
          .join("; ")}`,
      };
    }

    return { ok: true, deck: validated.data, source: "claude" };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);

    if (shouldFallbackToMock(msg)) {
      return { ok: true, deck: mockDeck, source: "mock" };
    }

    return { ok: false, error: `Вызов Claude упал: ${msg}` };
  }
}
