"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { generateDeck, type GenerateResult } from "@/app/actions";
import type { Deck as DeckType } from "@/lib/schema";
import { Deck } from "./Deck";
import { EmcdWordmark } from "./Logo";

const EXAMPLES = [
  "Презентация про итоги Q1 2026 для отдела маркетинга EMCD — 8 слайдов, обязательно с ключевыми цифрами (активные пользователи, прирост, выручка) и timeline по месяцам.",
  "Питч нового продукта EMCD Earn для внешних инвесторов. 10 слайдов, с quote от клиента и bento-сеткой KPI.",
  "Внутренняя презентация про культуру команды — миссия, ценности, 5 ключевых фактов, команда, финал.",
  "Технический разбор архитектуры платформы — process, comparison, roadmap на Q2.",
];

const ACCEPTED = ".txt,.md,.docx,.pptx";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
      <div className="flex items-center gap-3">
        <EmcdWordmark tone="dark" width={98} className="shrink-0" />
        <span className="text-lg font-semibold tracking-tight text-app-ink-0 md:text-xl">
          Slides
        </span>
      </div>
      <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-app-ink-2">
        <Link
          href="/templates"
          className="transition hover:text-app-ink-0"
        >
          50 шаблонов →
        </Link>
        <span className="hidden text-app-ink-3 md:inline">a.kvashina@emcd.io</span>
      </nav>
    </header>
  );
}

function GeneratingOverlay() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-app-bg/78 px-6 backdrop-blur-md">
      <div className="w-full max-w-[640px] rounded-[32px] bg-app-card px-6 py-6 shadow-[0_24px_80px_rgba(10,10,10,0.12)] ring-1 ring-app-border md:px-8 md:py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand" />
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-app-ink-3">
            EMCD Slides · генерация
          </div>
        </div>

        <div className="mb-3 text-2xl font-semibold tracking-tight text-app-ink-0 md:text-3xl">
          Собираю презентацию
        </div>
        <p className="max-w-[44ch] text-sm leading-relaxed text-app-ink-2 md:text-base">
          Анализирую бриф, раскладываю структуру и подбираю подходящие
          шаблоны слайдов.
        </p>

        <div className="mt-8 space-y-3">
          <div className="h-3 w-[84%] animate-pulse rounded-full bg-app-border" />
          <div className="h-3 w-[66%] animate-pulse rounded-full bg-app-border [animation-delay:120ms]" />
          <div className="h-3 w-[74%] animate-pulse rounded-full bg-app-border [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}

export function PromptForm() {
  const [brief, setBrief] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isPending, startTransition] = useTransition();
  const [deck, setDeck] = useState<DeckType | null>(null);
  const [source, setSource] = useState<"claude" | "mock" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const longBriefHint = brief.trim().length > 900;

  function handleGenerate() {
    setError(null);
    const fd = new FormData();
    fd.set("brief", brief);
    for (const f of files) fd.append("files", f);
    startTransition(async () => {
      const result: GenerateResult = await generateDeck(fd);
      if (result.ok) {
        setDeck(result.deck);
        setSource(result.source);
      } else {
        setError(result.error);
      }
    });
  }

  function handleReset() {
    setDeck(null);
    setSource(null);
    setError(null);
  }

  function onPickFiles(picked: FileList | null) {
    if (!picked) return;
    const arr = Array.from(picked);
    setFiles((prev) => [...prev, ...arr]);
  }

  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  if (deck) {
    return (
      <div className="relative">
        <button
          onClick={handleReset}
          className="fixed top-6 left-6 z-50 rounded-full bg-app-card/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-app-ink-0 ring-1 ring-app-border backdrop-blur transition hover:bg-white"
        >
          ← Новый бриф
        </button>
        {source === "mock" && (
          <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
            Mock deck · Claude unavailable or Anthropic credits exhausted
          </div>
        )}
        <Deck deck={deck} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-app-bg text-app-ink-0">
      {isPending && <GeneratingOverlay />}
      <Header />

      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-10 px-6 py-16 md:py-24">
        {/* Eyebrow + tiny brand mark strip */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-app-ink-3">
          <div className="h-px w-10 bg-app-border-strong" />
          <span>AI slide studio · Claude opus 4.6</span>
        </div>

        {/* Huge display title (sentence case, per brandbook) */}
        <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-app-ink-0">
          <span className="block">Опиши презентацию</span>
          <span className="mt-3 block text-app-ink-2">
            — соберу в стиле{" "}
            <span className="italic text-app-ink-0">EMCD</span>
            <span className="text-app-ink-2">.</span>
          </span>
        </h1>

        {/* Big minimalist textarea */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            onPickFiles(e.dataTransfer.files);
          }}
          className={`relative rounded-[24px] bg-app-card ring-1 transition ${
            dragging ? "ring-2 ring-brand" : "ring-app-border"
          }`}
        >
          {longBriefHint && (
            <div className="border-b border-app-border bg-app-card-alt px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-app-ink-2">
              Большой текст ок — сначала сожму смысл, потом соберу структуру слайдов.
            </div>
          )}
          <textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            placeholder="Например: питч нового продукта EMCD Earn для инвесторов, 10 слайдов, обязательно с bento-сеткой KPI и timeline по кварталам…"
            rows={7}
            className="block w-full resize-none rounded-[24px] bg-transparent px-8 py-7 text-xl leading-relaxed text-app-ink-0 placeholder:text-app-ink-3 focus:outline-none md:text-2xl"
          />

          {/* File chips */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2 border-t border-app-border px-6 py-4">
              {files.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-app-bg px-3 py-1.5 text-xs font-medium text-app-ink-1 ring-1 ring-app-border"
                >
                  <span className="max-w-[220px] truncate">{f.name}</span>
                  <span className="text-app-ink-3">·</span>
                  <span className="text-app-ink-3">
                    {(f.size / 1024).toFixed(0)} KB
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="ml-1 text-app-ink-3 hover:text-app-ink-0"
                    aria-label="Удалить файл"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Action row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-app-border px-4 py-4 md:px-6">
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED}
                multiple
                className="hidden"
                onChange={(e) => {
                  onPickFiles(e.target.files);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full bg-app-bg px-4 py-2.5 text-xs font-medium text-app-ink-1 ring-1 ring-app-border transition hover:bg-app-border/60 hover:text-app-ink-0"
              >
                <span aria-hidden>📎</span> Прикрепить файл
              </button>
              <span className="hidden text-[11px] text-app-ink-3 md:inline">
                .txt · .md · .docx · .pptx
              </span>
            </div>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isPending || !brief.trim()}
              className="inline-flex items-center gap-2 rounded-full bg-app-ink-0 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brand transition hover:bg-app-ink-1 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isPending ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border border-brand/35 border-t-brand" />
                  Собираю слайды…
                </>
              ) : (
                <>
                  Создать презентацию
                  <span aria-hidden>→</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Examples (grey, per user request) */}
        <div className="flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.22em] text-app-ink-3">
            Примеры брифа
          </div>
          <div className="grid gap-2">
            {EXAMPLES.map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setBrief(ex)}
                className="group flex items-start gap-4 rounded-xl bg-transparent px-4 py-3 text-left transition hover:bg-app-card"
              >
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-app-ink-3 group-hover:bg-app-ink-0" />
                <span className="text-sm leading-relaxed text-app-ink-2 group-hover:text-app-ink-0 md:text-base">
                  {ex}
                </span>
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700 ring-1 ring-red-200">
            <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
              Ошибка
            </div>
            <div className="whitespace-pre-wrap">{error}</div>
          </div>
        )}

        {/* Footer strip */}
        <footer className="mt-8 flex items-end justify-between gap-6 border-t border-app-border pt-8">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-app-ink-3">
              50 типов слайдов · sentence case · prompt caching
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-app-ink-3">
              EMCD internal tool · 2026
            </div>
          </div>
          <EmcdWordmark tone="dark" width={80} className="opacity-60" />
        </footer>
      </div>
    </main>
  );
}
