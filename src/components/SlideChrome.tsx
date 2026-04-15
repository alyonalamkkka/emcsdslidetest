import type { ReactNode } from "react";
import { EmcdWordmark } from "./Logo";

/**
 * Standard slide frame, following the brandbook layout (p. 22/23):
 *  - top-left: tiny meta label
 *  - top-right: tiny meta label (optional)
 *  - bottom-left: lime brand rule + "EMCD / 2026"
 *  - bottom-right: EMCD italic wordmark (real asset from brandbook)
 *  - slide content sits between header and footer
 *  - subtle radial top glow + bottom vignette
 */
export function SlideChrome({
  children,
  index,
  total,
  topLeft,
  topRight,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  index: number;
  total: number;
  topLeft?: string;
  topRight?: string;
  variant?: "default" | "hero" | "photo";
  className?: string;
}) {
  const variantClass =
    variant === "hero"
      ? "slide-base hero-glow"
      : variant === "photo"
        ? "slide-base photo-wash"
        : "slide-base";

  return (
    <section
      className={`relative flex min-h-screen w-full flex-col text-fg-0 ${variantClass} ${className}`}
    >
      {/* Top meta bar */}
      <header className="relative z-20 flex items-start justify-between px-8 pt-8 md:px-14 md:pt-10">
        <span className="eyebrow max-w-xs">
          {topLeft ?? "EMCD · brand style"}
        </span>
        <span className="eyebrow text-right">
          {topRight ?? `No ${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
        </span>
      </header>

      {/* Slide body */}
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>

      {/* Bottom lockup: brand rule + year on the left, real wordmark on the right */}
      <footer className="relative z-20 flex items-end justify-between gap-6 px-8 pb-8 md:px-14 md:pb-10">
        <div className="flex items-center gap-4">
          <div className="brand-rule-long" />
          <span className="eyebrow">emcd · 2026</span>
        </div>
        <EmcdWordmark tone="light" width={88} className="opacity-95" />
      </footer>
    </section>
  );
}
