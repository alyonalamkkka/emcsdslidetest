"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/** Flow family: timeline, roadmap, process, pyramid. */

export function Timeline({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "timeline" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "timeline"}>
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-14 max-w-3xl text-fg-0"
        >
          {slide.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 right-0 top-5 h-px bg-bg-3" />
          <div
            className={`relative grid gap-8 ${
              slide.steps.length === 2
                ? "grid-cols-2"
                : slide.steps.length === 3
                  ? "grid-cols-3"
                  : slide.steps.length === 4
                    ? "grid-cols-2 md:grid-cols-4"
                    : slide.steps.length === 5
                      ? "grid-cols-2 md:grid-cols-5"
                      : "grid-cols-2 md:grid-cols-6"
            }`}
          >
            {slide.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="mb-5 h-3 w-3 rounded-full bg-brand ring-4 ring-bg-0" />
                <div className="eyebrow eyebrow-brand mb-2">{step.label}</div>
                <div className="mb-2 text-lg font-semibold leading-snug text-fg-0 md:text-xl">
                  {step.title}
                </div>
                {step.body && (
                  <div className="text-sm leading-snug text-fg-2">{step.body}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

export function Roadmap({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "roadmap" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "roadmap"}>
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
            slide.quarters.length === 2
              ? "md:grid-cols-2"
              : slide.quarters.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-4"
          }`}
        >
          {slide.quarters.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex min-h-[220px] flex-col rounded-2xl bg-bg-1/70 p-6 ring-1 ring-bg-3"
            >
              <div className="eyebrow eyebrow-brand mb-4">{q.label}</div>
              <ul className="flex flex-col gap-3">
                {q.items.map((item, j) => (
                  <li key={j} className="flex items-baseline gap-3 text-sm leading-snug text-fg-0 md:text-base">
                    <span className="text-brand">▸</span>
                    <span>{item}</span>
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

export function Process({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "process" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "process"}>
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
        <div className="flex flex-col gap-3">
          {slide.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-5 rounded-2xl bg-bg-1/70 px-6 py-5 ring-1 ring-bg-3"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand font-display text-2xl font-bold text-brand-ink tabular-nums">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold leading-snug text-fg-0 md:text-xl">
                  {step.title}
                </div>
                {step.body && (
                  <div className="mt-1 text-sm leading-snug text-fg-2">{step.body}</div>
                )}
              </div>
              {i < slide.steps.length - 1 && (
                <div className="hidden text-3xl font-bold text-brand md:block" aria-hidden>
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

export function Pyramid({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "pyramid" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "pyramid"}>
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
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3">
          {slide.levels.map((level, i) => {
            const widthPct = 40 + (i * 60) / Math.max(1, slide.levels.length - 1);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl px-6 py-4 text-center ring-1 ${
                  i === 0
                    ? "bg-brand text-brand-ink ring-brand"
                    : "bg-bg-2 text-fg-0 ring-bg-3"
                }`}
                style={{ width: `${widthPct}%` }}
              >
                <div className="text-base font-semibold leading-snug md:text-lg">
                  {level.label}
                </div>
                {level.caption && (
                  <div
                    className={`mt-1 text-xs leading-snug ${
                      i === 0 ? "text-brand-ink/70" : "text-fg-3"
                    }`}
                  >
                    {level.caption}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideChrome>
  );
}
