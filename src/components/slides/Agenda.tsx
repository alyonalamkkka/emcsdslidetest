"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

type Props = {
  slide: Extract<Slide, { type: "agenda" }>;
  index: number;
  total: number;
};

export function Agenda({ slide, index, total }: Props) {
  return (
    <SlideChrome
      index={index}
      total={total}
      topLeft={slide.eyebrow ?? "agenda"}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 md:px-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-md mb-12 max-w-3xl text-fg-0"
        >
          {slide.title ?? "Агенда"}
        </motion.h2>

        <ol className="flex max-w-4xl flex-col gap-5">
          {slide.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-baseline gap-6 border-b border-bg-3/70 pb-5"
            >
              <span className="w-10 font-display text-xl font-semibold text-brand tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-xl leading-snug text-fg-0 md:text-2xl">
                {item}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </SlideChrome>
  );
}
