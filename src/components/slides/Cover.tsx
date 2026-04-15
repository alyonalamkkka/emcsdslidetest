"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

type Props = {
  slide: Extract<Slide, { type: "cover" | "cover-minimal" }>;
  index: number;
  total: number;
};

export function Cover({ slide, index, total }: Props) {
  const hasBg = slide.type === "cover" && "bgImage" in slide && slide.bgImage;

  return (
    <SlideChrome
      index={index}
      total={total}
      variant="hero"
      topLeft={slide.eyebrow ?? (slide.type === "cover-minimal" ? "cover / minimal" : "cover")}
      topRight={slide.type === "cover" && "date" in slide ? slide.date : undefined}
    >
      {hasBg && (
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: `url(${(slide as { bgImage?: string }).bgImage})` }}
          aria-hidden
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-bg-0/70 via-bg-0/40 to-bg-0/95" />

      <div className="relative z-10 flex flex-1 flex-col justify-end px-8 pb-8 md:px-14 md:pb-14">
        {slide.eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow eyebrow-brand mb-6"
          >
            {slide.eyebrow}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="display-xl max-w-5xl text-fg-0"
        >
          {slide.title}
        </motion.h1>

        {slide.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-1 md:text-xl"
          >
            {slide.subtitle}
          </motion.p>
        )}
      </div>
    </SlideChrome>
  );
}
