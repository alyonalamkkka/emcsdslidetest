"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/** Number family: big-number, bento, stat-row, comparison, pros-cons, progress. */

export function BigNumber({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "big-number" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "metric"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(6rem,22vw,18rem)] font-bold leading-[0.82] tracking-tight text-brand"
        >
          {slide.value}
        </motion.div>
        <div className="mt-6 max-w-3xl text-2xl leading-snug text-fg-0 md:text-3xl">
          {slide.label}
        </div>
        {slide.body && (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-2 md:text-lg">
            {slide.body}
          </p>
        )}
      </div>
    </SlideChrome>
  );
}

export function Bento({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "bento" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "bento"}>
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {slide.tiles.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={[
                "relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 md:p-7",
                "min-h-[150px] md:min-h-[180px]",
                tile.span === 2 ? "col-span-2" : "col-span-1",
                tile.accent
                  ? "bg-brand text-brand-ink"
                  : "bg-bg-2 text-fg-0 ring-1 ring-bg-3",
              ].join(" ")}
            >
              <div
                className={[
                  "font-display font-bold leading-none tracking-tight whitespace-nowrap",
                  tile.span === 2
                    ? "text-5xl md:text-6xl lg:text-7xl"
                    : "text-3xl md:text-4xl lg:text-5xl",
                  tile.accent ? "text-brand-ink" : "text-fg-0",
                ].join(" ")}
              >
                {tile.value}
              </div>
              <div
                className={`mt-4 text-xs leading-snug uppercase tracking-[0.12em] md:text-sm ${
                  tile.accent ? "text-brand-ink/80" : "text-fg-2"
                }`}
              >
                {tile.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

export function StatRow({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "stat-row" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "stats"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-14 max-w-4xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div
          className={`grid gap-8 ${
            slide.stats.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {slide.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l border-bg-3 pl-6"
            >
              <div
                className={`font-display text-6xl font-bold leading-none tracking-tight whitespace-nowrap md:text-7xl ${
                  s.accent ? "text-brand" : "text-fg-0"
                }`}
              >
                {s.value}
              </div>
              <div className="mt-4 text-sm uppercase tracking-[0.14em] leading-snug text-fg-2 md:text-base">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

function ComparisonCard({
  col,
  delay,
}: {
  col: { heading: string; value: string; label: string; accent?: boolean };
  delay: number;
}) {
  const isAccent = col.accent === true;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`rounded-2xl p-8 md:p-10 ${
        isAccent ? "bg-brand text-brand-ink" : "bg-bg-2 text-fg-0 ring-1 ring-bg-3"
      }`}
    >
      <div className={`eyebrow mb-4 ${isAccent ? "text-brand-ink/70" : "text-fg-3"}`}>
        {col.heading}
      </div>
      <div className="font-display text-6xl font-bold leading-none tracking-tight md:text-7xl">
        {col.value}
      </div>
      <div className="mt-4 text-sm leading-snug uppercase tracking-[0.12em] md:text-base">
        {col.label}
      </div>
    </motion.div>
  );
}

export function Comparison({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "comparison" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "comparison"}>
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

        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <ComparisonCard col={slide.before} delay={0} />
          <div
            className="hidden text-center font-display text-5xl font-bold text-brand md:block"
            aria-hidden
          >
            →
          </div>
          <ComparisonCard col={slide.after} delay={0.15} />
        </div>
      </div>
    </SlideChrome>
  );
}

export function ProsCons({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "pros-cons" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "pros / cons"}>
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
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="rounded-2xl bg-bg-1/70 p-7 ring-1 ring-brand/40">
            <div className="eyebrow eyebrow-brand mb-5">+ Плюсы</div>
            <ul className="flex flex-col gap-3">
              {slide.pros.map((item, i) => (
                <li key={i} className="flex items-baseline gap-3 text-base leading-snug text-fg-0 md:text-lg">
                  <span className="text-brand">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-bg-1/70 p-7 ring-1 ring-bg-3">
            <div className="eyebrow mb-5 text-fg-3">− Минусы</div>
            <ul className="flex flex-col gap-3">
              {slide.cons.map((item, i) => (
                <li key={i} className="flex items-baseline gap-3 text-base leading-snug text-fg-2 md:text-lg">
                  <span className="text-fg-3">−</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

export function Progress({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "progress" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "progress"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-12 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        <div className="flex max-w-4xl flex-col gap-8">
          {slide.bars.map((bar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <span className="text-lg text-fg-0 md:text-xl">{bar.label}</span>
                <span className="font-display text-2xl font-bold text-brand tabular-nums md:text-3xl">
                  {bar.value}%
                  {bar.caption && (
                    <span className="ml-2 text-xs uppercase tracking-[0.15em] text-fg-3">
                      {bar.caption}
                    </span>
                  )}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-bg-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-brand"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}
