import Link from "next/link";
import { SLIDE_TYPES } from "@/lib/schema";
import { SAMPLE_SLIDES } from "@/lib/sample-slides";
import { Deck } from "@/components/Deck";
import { EmcdSymbol, EmcdWordmark } from "@/components/Logo";

/**
 * /templates — gallery of all 50 slide types rendered as mini-thumbnails.
 * Each card embeds a real <Deck> with a single sample slide, scaled down
 * via CSS transform so viewers see the *real* template, not a mock-up.
 */
export default function TemplatesPage() {
  // Group by family for readability
  const families = Array.from(
    SLIDE_TYPES.reduce((acc, t) => {
      const list = acc.get(t.family) ?? [];
      list.push(t);
      acc.set(t.family, list);
      return acc;
    }, new Map<string, typeof SLIDE_TYPES>()),
  );

  return (
    <main className="min-h-screen bg-app-bg text-app-ink-0">
      <header className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
        <Link href="/" className="flex items-center gap-3">
          <EmcdSymbol tone="dark" size={44} />
          <span className="text-xl font-semibold tracking-tight">EMCD Slides</span>
        </Link>
        <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-app-ink-2">
          <Link href="/" className="transition hover:text-app-ink-0">
            ← Назад к форме
          </Link>
        </nav>
      </header>

      <div className="mx-auto w-full max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div className="mb-12 flex flex-col gap-4">
          <div className="text-xs uppercase tracking-[0.28em] text-app-ink-3">
            Каталог шаблонов
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-[-0.025em]">
            50 типов слайдов
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-app-ink-2 md:text-lg">
            Каждый шаблон — это реальный React-компонент, рендер 1:1 со слайдом
            в презентации. Claude знает про них и выбирает подходящий под твой бриф.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {families.map(([family, types]) => (
            <section key={family}>
              <div className="mb-6 flex items-baseline gap-4">
                <div className="brand-rule-long bg-app-ink-0!" />
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {family}
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-app-ink-3">
                  {types.length} шаблонов
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {types.map((t) => (
                  <TemplateCard key={t.type} type={t} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 flex items-end justify-between gap-6 border-t border-app-border pt-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-app-ink-3">
            EMCD internal tool · 2026
          </div>
          <EmcdWordmark tone="dark" width={80} className="opacity-60" />
        </footer>
      </div>
    </main>
  );
}

function TemplateCard({
  type,
}: {
  type: (typeof SLIDE_TYPES)[number];
}) {
  const sample = SAMPLE_SLIDES[type.type];
  const sampleDeck = { title: type.title, slides: [sample] };

  return (
    <div className="flex flex-col gap-4">
      {/* Thumbnail: scaled-down deck rendered at 1280×720 inside 360×220 */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-bg-0 ring-1 ring-app-border">
        <div
          className="pointer-events-none absolute left-0 top-0"
          style={{
            width: 1280,
            height: 720,
            transform: "scale(0.28125)",
            transformOrigin: "top left",
          }}
        >
          <StaticSlide>
            <Deck deck={sampleDeck} />
          </StaticSlide>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-base font-semibold text-app-ink-0">
            {type.title}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-app-ink-3">
            {type.type}
          </span>
        </div>
        <p className="text-sm leading-snug text-app-ink-2">{type.description}</p>
      </div>
    </div>
  );
}

/** A thumbnail host that disables .deck's 100vh height so the render fits
 *  inside a fixed-pixel preview box. */
function StaticSlide({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        overflow: "hidden",
      }}
      className="[&_.deck]:!h-[720px] [&_.deck_>_section]:!min-h-[720px]"
    >
      {children}
    </div>
  );
}
