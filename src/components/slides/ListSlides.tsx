"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/** List family: bullets, numbered, checklist, two-columns. */

export function Bullets({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "bullets" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "list"}>
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
        <ul className="flex max-w-5xl flex-col gap-5">
          {slide.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-baseline gap-5 border-b border-bg-3/60 pb-5 text-xl leading-snug text-fg-0 md:text-2xl"
            >
              <span className="h-2 w-2 translate-y-[-4px] rounded-full bg-brand" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SlideChrome>
  );
}

export function Numbered({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "numbered" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "list"}>
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
        <ol className="grid max-w-5xl gap-x-10 gap-y-6 md:grid-cols-2">
          {slide.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5"
            >
              <span className="font-display text-4xl font-bold leading-none text-brand tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg leading-snug text-fg-0 md:text-xl">
                {item}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </SlideChrome>
  );
}

export function Checklist({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "checklist" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "checklist"}>
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
        <ul className="flex max-w-5xl flex-col gap-4">
          {slide.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`flex items-center gap-5 rounded-xl px-5 py-4 ${
                item.done ? "bg-brand/15 ring-1 ring-brand/40" : "bg-bg-2/60 ring-1 ring-bg-3"
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold ${
                  item.done ? "bg-brand text-brand-ink" : "border border-fg-3 text-transparent"
                }`}
              >
                {item.done ? "✓" : ""}
              </span>
              <span
                className={`text-lg leading-snug md:text-xl ${
                  item.done ? "text-fg-0" : "text-fg-2"
                }`}
              >
                {item.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SlideChrome>
  );
}

export function TwoColumns({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "two-columns" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "two columns"}>
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
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {[slide.left, slide.right].map((col, ci) => (
            <div key={ci} className="rounded-2xl bg-bg-1/70 p-8 ring-1 ring-bg-3">
              <div className="eyebrow eyebrow-brand mb-5">{col.heading}</div>
              <ul className="flex flex-col gap-4">
                {col.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="flex items-baseline gap-4 text-base leading-snug text-fg-0 md:text-lg"
                  >
                    <span className="h-1.5 w-1.5 translate-y-[-4px] rounded-full bg-brand" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}
