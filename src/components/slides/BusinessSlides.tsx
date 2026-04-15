"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/**
 * Business + advanced slide family — v2/v3 templates:
 * feature-grid, logo-wall, faq, pricing, kpi-dashboard, problem-solution,
 * testimonial-grid, matrix-2x2, callout, scorecard, funnel, venn, code,
 * section-divider, hero-metrics, icon-list, release-notes, contacts,
 * principle, qr-cta.
 *
 * All share SlideChrome + brand tokens (bg-*, text-*, brand) so they sit
 * cleanly alongside the original 30.
 */

// ----------------------- feature-grid -----------------------
export function FeatureGrid({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "feature-grid" }>;
  index: number;
  total: number;
}) {
  const cols = slide.features.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-3";
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "features"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-12 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${cols}`}>
          {slide.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col gap-3 rounded-2xl bg-bg-2 p-6 ring-1 ring-bg-3"
            >
              <div
                className="font-display text-4xl leading-none text-brand"
                aria-hidden
              >
                {f.glyph}
              </div>
              <div className="text-lg font-semibold text-fg-0 md:text-xl">
                {f.title}
              </div>
              <p className="text-sm leading-snug text-fg-2 md:text-base">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- logo-wall -----------------------
export function LogoWall({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "logo-wall" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "partners"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        {slide.caption && (
          <p className="mt-4 max-w-2xl text-base text-fg-2 md:text-lg">
            {slide.caption}
          </p>
        )}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {slide.logos.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex h-20 items-center justify-center rounded-xl bg-bg-2 ring-1 ring-bg-3"
            >
              <span className="font-display text-lg font-semibold tracking-tight text-fg-1 md:text-xl">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- faq -----------------------
export function Faq({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "faq" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "faq"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="flex max-w-4xl flex-col gap-6">
          {slide.items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l-2 border-brand pl-5"
            >
              <div className="text-lg font-semibold text-fg-0 md:text-xl">
                {it.q}
              </div>
              <p className="mt-2 text-base leading-relaxed text-fg-2 md:text-lg">
                {it.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- pricing -----------------------
export function Pricing({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "pricing" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "pricing"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div
          className={`grid gap-5 ${
            slide.plans.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {slide.plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`flex flex-col gap-5 rounded-2xl p-7 md:p-8 ${
                p.accent
                  ? "bg-brand text-brand-ink"
                  : "bg-bg-2 text-fg-0 ring-1 ring-bg-3"
              }`}
            >
              <div
                className={`eyebrow ${p.accent ? "text-brand-ink/70" : "text-fg-3"}`}
              >
                {p.name}
              </div>
              <div className="flex items-baseline gap-2">
                <div className="font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
                  {p.price}
                </div>
                {p.period && (
                  <div
                    className={`text-sm ${
                      p.accent ? "text-brand-ink/70" : "text-fg-3"
                    }`}
                  >
                    {p.period}
                  </div>
                )}
              </div>
              <ul className="mt-2 flex flex-col gap-2">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-baseline gap-2 text-sm md:text-base ${
                      p.accent ? "text-brand-ink/90" : "text-fg-1"
                    }`}
                  >
                    <span className={p.accent ? "text-brand-ink" : "text-brand"}>
                      +
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- kpi-dashboard -----------------------
export function KpiDashboard({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "kpi-dashboard" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "dashboard"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl bg-bg-2 p-8 ring-1 ring-bg-3 md:p-10"
          >
            <div className="eyebrow eyebrow-brand">Hero KPI</div>
            <div>
              <div className="font-display text-7xl font-bold leading-none tracking-tight text-brand md:text-8xl">
                {slide.hero.value}
              </div>
              <div className="mt-4 text-lg text-fg-1 md:text-xl">
                {slide.hero.label}
              </div>
              {slide.hero.delta && (
                <div className="mt-3 inline-block rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand">
                  {slide.hero.delta}
                </div>
              )}
            </div>
          </motion.div>
          <div className="grid grid-rows-3 gap-4">
            {slide.supports.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-between rounded-2xl bg-bg-2 p-5 ring-1 ring-bg-3"
              >
                <div className="text-sm uppercase tracking-[0.12em] text-fg-3 md:text-base">
                  {m.label}
                </div>
                <div
                  className={`font-display text-3xl font-bold leading-none md:text-4xl ${
                    m.accent ? "text-brand" : "text-fg-0"
                  }`}
                >
                  {m.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- problem-solution -----------------------
export function ProblemSolution({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "problem-solution" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "problem / solution"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-bg-2 p-8 ring-1 ring-bg-3"
          >
            <div className="eyebrow mb-4 text-fg-3">— {slide.problem.heading}</div>
            <p className="text-xl leading-snug text-fg-1 md:text-2xl">
              {slide.problem.body}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl bg-brand p-8 text-brand-ink"
          >
            <div className="eyebrow mb-4 text-brand-ink/70">
              + {slide.solution.heading}
            </div>
            <p className="text-xl leading-snug text-brand-ink md:text-2xl">
              {slide.solution.body}
            </p>
          </motion.div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- testimonial-grid -----------------------
export function TestimonialGrid({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "testimonial-grid" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "testimonials"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div
          className={`grid gap-5 ${
            slide.quotes.length === 2
              ? "md:grid-cols-2"
              : slide.quotes.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
          }`}
        >
          {slide.quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-6 rounded-2xl bg-bg-2 p-6 ring-1 ring-bg-3 md:p-7"
            >
              <div className="font-display text-4xl leading-none text-brand">
                &ldquo;
              </div>
              <p className="text-base leading-snug text-fg-0 md:text-lg">
                {q.body}
              </p>
              <div className="border-t border-bg-3 pt-4">
                <div className="text-sm font-semibold text-fg-0 md:text-base">
                  {q.author}
                </div>
                {q.role && (
                  <div className="text-xs text-fg-3 md:text-sm">{q.role}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- matrix-2x2 -----------------------
export function Matrix2x2({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "matrix-2x2" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "matrix"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-8 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-6">
          <div className="hidden flex-col items-end justify-between pt-4 pb-12 pr-2 md:flex">
            <div className="eyebrow -rotate-90 whitespace-nowrap text-fg-3">
              ↑ {slide.yAxis}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-[1.4/1]">
              {slide.quadrants.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex flex-col justify-between rounded-2xl p-5 md:p-6 ${
                    q.accent
                      ? "bg-brand text-brand-ink"
                      : "bg-bg-2 text-fg-0 ring-1 ring-bg-3"
                  }`}
                >
                  <div className="font-display text-xl font-semibold leading-tight md:text-2xl">
                    {q.label}
                  </div>
                  {q.caption && (
                    <div
                      className={`mt-4 text-xs leading-snug md:text-sm ${
                        q.accent ? "text-brand-ink/75" : "text-fg-3"
                      }`}
                    >
                      {q.caption}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="eyebrow text-fg-3">{slide.xAxis} →</div>
            </div>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- callout -----------------------
export function Callout({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "callout" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "callout"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl rounded-3xl bg-bg-2 p-10 ring-1 ring-brand/40 md:p-14"
        >
          <div className="font-display text-6xl leading-none text-brand md:text-7xl">
            {slide.glyph}
          </div>
          <h2 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-fg-0 md:text-5xl">
            {slide.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-fg-1 md:text-xl">
            {slide.body}
          </p>
          {slide.cta && (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-ink">
              {slide.cta} →
            </div>
          )}
        </motion.div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- scorecard -----------------------
const STATUS_STYLE: Record<"good" | "warn" | "bad", string> = {
  good: "bg-brand/15 text-brand",
  warn: "bg-amber-500/15 text-amber-300",
  bad: "bg-red-500/15 text-red-300",
};
const STATUS_LABEL: Record<"good" | "warn" | "bad", string> = {
  good: "Отлично",
  warn: "Внимание",
  bad: "Проблема",
};

export function Scorecard({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "scorecard" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "scorecard"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="flex max-w-4xl flex-col divide-y divide-bg-3 rounded-2xl bg-bg-2 ring-1 ring-bg-3">
          {slide.rows.map((r, i) => {
            const status = r.status ?? "good";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex items-center justify-between gap-4 px-6 py-5 md:px-8"
              >
                <div className="text-base text-fg-0 md:text-lg">{r.label}</div>
                <div className="flex items-center gap-4">
                  <div className="font-display text-2xl font-bold leading-none tabular-nums text-fg-0 md:text-3xl">
                    {r.score}
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${STATUS_STYLE[status]}`}
                  >
                    {STATUS_LABEL[status]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- funnel -----------------------
export function Funnel({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "funnel" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "funnel"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {slide.stages.map((s, i) => {
            const width = 100 - i * (60 / Math.max(1, slide.stages.length - 1));
            const isLast = i === slide.stages.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ width: `${width}%` }}
                className={`mx-auto flex items-center justify-between gap-4 rounded-2xl p-5 md:p-6 ${
                  isLast
                    ? "bg-brand text-brand-ink"
                    : "bg-bg-2 text-fg-0 ring-1 ring-bg-3"
                }`}
              >
                <div>
                  <div
                    className={`text-[11px] uppercase tracking-[0.12em] ${
                      isLast ? "text-brand-ink/70" : "text-fg-3"
                    }`}
                  >
                    {s.label}
                  </div>
                  {s.caption && (
                    <div
                      className={`text-xs md:text-sm ${
                        isLast ? "text-brand-ink/80" : "text-fg-2"
                      }`}
                    >
                      {s.caption}
                    </div>
                  )}
                </div>
                <div className="font-display text-3xl font-bold leading-none tabular-nums md:text-4xl">
                  {s.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- venn -----------------------
export function Venn({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "venn" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "venn"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-8 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="relative mx-auto mt-4 aspect-[1.6/1] w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-[8%] top-[6%] h-[62%] w-[48%] rounded-full bg-brand/20 ring-2 ring-brand/60 mix-blend-screen"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute right-[8%] top-[6%] h-[62%] w-[48%] rounded-full bg-brand/20 ring-2 ring-brand/60 mix-blend-screen"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-1/2 bottom-[4%] h-[62%] w-[48%] -translate-x-1/2 rounded-full bg-brand/20 ring-2 ring-brand/60 mix-blend-screen"
          />
          <div className="absolute left-[10%] top-[14%] max-w-[28%]">
            <div className="text-sm font-semibold text-fg-0 md:text-base">
              {slide.circles[0].label}
            </div>
            {slide.circles[0].caption && (
              <div className="text-xs text-fg-3">{slide.circles[0].caption}</div>
            )}
          </div>
          <div className="absolute right-[10%] top-[14%] max-w-[28%] text-right">
            <div className="text-sm font-semibold text-fg-0 md:text-base">
              {slide.circles[1].label}
            </div>
            {slide.circles[1].caption && (
              <div className="text-xs text-fg-3">{slide.circles[1].caption}</div>
            )}
          </div>
          <div className="absolute left-1/2 bottom-[10%] max-w-[28%] -translate-x-1/2 text-center">
            <div className="text-sm font-semibold text-fg-0 md:text-base">
              {slide.circles[2].label}
            </div>
            {slide.circles[2].caption && (
              <div className="text-xs text-fg-3">{slide.circles[2].caption}</div>
            )}
          </div>
          <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-ink md:text-base">
            {slide.intersection}
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- code -----------------------
export function Code({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "code" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "code"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-8 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="overflow-hidden rounded-2xl bg-bg-0 ring-1 ring-bg-3"
        >
          <div className="flex items-center justify-between border-b border-bg-3 px-5 py-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-bg-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-bg-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-fg-3">
              {slide.language ?? "code"}
            </div>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-fg-1 md:text-base">
            {slide.body}
          </pre>
        </motion.div>
        {slide.caption && (
          <p className="mt-4 max-w-3xl text-sm text-fg-3 md:text-base">
            {slide.caption}
          </p>
        )}
      </div>
    </SlideChrome>
  );
}

// ----------------------- section-divider -----------------------
export function SectionDivider({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "section-divider" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? "divider"}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5"
        >
          <div className="brand-rule-long" />
          <div className="eyebrow eyebrow-brand">{slide.label}</div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-xl mt-8 max-w-5xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
      </div>
    </SlideChrome>
  );
}

// ----------------------- hero-metrics -----------------------
export function HeroMetrics({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "hero-metrics" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? "hero metrics"}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-between px-8 pb-4 pt-6 md:px-14">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="display-xl text-fg-0"
          >
            {slide.title}
          </motion.h2>
          {slide.subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-fg-2 md:text-xl">
              {slide.subtitle}
            </p>
          )}
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-bg-3 pt-8">
          {slide.metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`font-display text-5xl font-bold leading-none tracking-tight md:text-6xl ${
                  m.accent ? "text-brand" : "text-fg-0"
                }`}
              >
                {m.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.14em] text-fg-3 md:text-sm">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- icon-list -----------------------
export function IconList({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "icon-list" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "icon list"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <ul className="flex max-w-4xl flex-col gap-5">
          {slide.items.map((it, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-5"
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-bg-2 ring-1 ring-bg-3">
                <span className="font-display text-2xl text-brand">{it.glyph}</span>
              </div>
              <span className="text-lg leading-snug text-fg-0 md:text-xl">
                {it.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SlideChrome>
  );
}

// ----------------------- release-notes -----------------------
export function ReleaseNotes({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "release-notes" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "release"}>
      <div className="relative z-10 flex flex-1 flex-col px-8 pt-4 md:px-14">
        <div className="flex items-baseline gap-5">
          <div className="eyebrow eyebrow-brand">Release</div>
          <div className="font-display text-3xl font-bold leading-none tracking-tight text-brand md:text-4xl">
            {slide.version}
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mt-6 mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="rounded-2xl bg-bg-2 p-7 ring-1 ring-bg-3">
            <div className="eyebrow eyebrow-brand mb-5">+ Добавили</div>
            <ul className="flex flex-col gap-3">
              {slide.added.map((t, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-base leading-snug text-fg-0 md:text-lg"
                >
                  <span className="text-brand">+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-bg-2 p-7 ring-1 ring-bg-3">
            <div className="eyebrow mb-5 text-fg-3">✓ Починили</div>
            <ul className="flex flex-col gap-3">
              {slide.fixed.map((t, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-base leading-snug text-fg-1 md:text-lg"
                >
                  <span className="text-fg-3">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- contacts -----------------------
export function Contacts({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "contacts" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "contacts"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-10 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div
          className={`grid gap-5 ${
            slide.people.length === 2
              ? "md:grid-cols-2"
              : slide.people.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
          }`}
        >
          {slide.people.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3 rounded-2xl bg-bg-2 p-6 ring-1 ring-bg-3"
            >
              <div className="eyebrow text-fg-3">{p.role}</div>
              <div className="font-display text-2xl font-semibold leading-tight text-fg-0 md:text-3xl">
                {p.name}
              </div>
              <div className="font-mono text-sm text-brand md:text-base">
                {p.contact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- principle -----------------------
export function Principle({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "principle" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "principle"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="grid max-w-6xl gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(5rem,16vw,14rem)] font-bold leading-[0.82] tracking-tight text-brand"
          >
            {slide.number}
          </motion.div>
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-md text-fg-0"
            >
              {slide.title}
            </motion.h2>
            <div className="brand-rule my-6" />
            <p className="max-w-2xl text-lg leading-relaxed text-fg-2 md:text-xl">
              {slide.body}
            </p>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ----------------------- qr-cta -----------------------
export function QrCta({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "qr-cta" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? "cta"}
    >
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="display-lg text-fg-0"
            >
              {slide.title}
            </motion.h2>
            {slide.body && (
              <p className="max-w-xl text-lg leading-relaxed text-fg-2 md:text-xl">
                {slide.body}
              </p>
            )}
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-brand-ink">
                {slide.cta} →
              </div>
              <div className="font-mono text-sm text-fg-3 md:text-base">
                {slide.url}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-48 w-48 rounded-2xl bg-fg-0 p-3 md:h-56 md:w-56"
            aria-label="QR placeholder"
          >
            <div
              className="h-full w-full rounded-xl bg-bg-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #0a0a0a 0 6px, transparent 6px 12px), repeating-linear-gradient(90deg, #0a0a0a 0 6px, transparent 6px 12px)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </SlideChrome>
  );
}
