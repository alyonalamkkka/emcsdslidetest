"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

type Props = {
  slide: Extract<Slide, { type: "chapter" }>;
  index: number;
  total: number;
};

export function Chapter({ slide, index, total }: Props) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? "chapter"}
    >
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(9rem,22vw,22rem)] font-bold leading-[0.78] tracking-tight text-brand"
          >
            {slide.number}
          </motion.div>
          <div className="flex max-w-2xl flex-col justify-end md:pb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="display-lg text-fg-0"
            >
              {slide.title}
            </motion.h2>
            {slide.kicker && (
              <p className="mt-6 text-lg leading-relaxed text-fg-2">{slide.kicker}</p>
            )}
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}
