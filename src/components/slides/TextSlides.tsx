"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/**
 * Text-forward slides: statement, quote, tldr, manifesto, definition, thanks.
 * All share the same centred layout and vary in how the body is composed.
 */

function highlight(body: string, highlight?: string) {
  if (!highlight) return <>{body}</>;
  const idx = body.indexOf(highlight);
  if (idx === -1) return <>{body}</>;
  return (
    <>
      {body.slice(0, idx)}
      <span className="text-brand">{highlight}</span>
      {body.slice(idx + highlight.length)}
    </>
  );
}

export function Statement({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "statement" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "statement"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-lg max-w-5xl text-fg-0"
        >
          {highlight(slide.body, slide.highlight)}
        </motion.p>
      </div>
    </SlideChrome>
  );
}

export function Quote({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "quote" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "quote"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="max-w-5xl">
          <div className="mb-8 font-display text-7xl leading-none text-brand md:text-9xl">
            &ldquo;
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="display-md text-fg-0"
          >
            {slide.body}
          </motion.p>
          <div className="mt-10 flex items-center gap-4 border-t border-bg-3/70 pt-6">
            <div className="brand-rule" />
            <div>
              <div className="text-base font-semibold text-fg-0">{slide.author}</div>
              {slide.role && (
                <div className="text-sm text-fg-3">{slide.role}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

export function Tldr({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "tldr" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "tl;dr"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="max-w-4xl">
          <div className="eyebrow eyebrow-brand mb-8">TL;DR</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-lg mb-8 text-fg-0"
          >
            {slide.headline}
          </motion.h2>
          <p className="text-xl leading-relaxed text-fg-1 md:text-2xl">{slide.body}</p>
        </div>
      </div>
    </SlideChrome>
  );
}

export function Manifesto({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "manifesto" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "manifesto"}>
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
        <ul className="flex max-w-5xl flex-col gap-4">
          {slide.lines.map((line, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-baseline gap-4 text-2xl leading-snug text-fg-0 md:text-3xl"
            >
              <span className="text-brand">—</span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SlideChrome>
  );
}

export function Definition({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "definition" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "definition"}>
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="max-w-4xl">
          <div className="eyebrow eyebrow-brand mb-6">Определение</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-lg mb-6 text-brand"
          >
            {slide.term}
          </motion.h2>
          <div className="brand-rule mb-6" />
          <p className="text-xl leading-relaxed text-fg-1 md:text-2xl">{slide.body}</p>
        </div>
      </div>
    </SlideChrome>
  );
}

export function Thanks({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "thanks" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? "закрытие"}
    >
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="display-xl text-brand"
        >
          {slide.body ?? "Спасибо"}
        </motion.h2>
        {slide.footnote && (
          <div className="mt-10 text-lg text-fg-2">{slide.footnote}</div>
        )}
      </div>
    </SlideChrome>
  );
}
