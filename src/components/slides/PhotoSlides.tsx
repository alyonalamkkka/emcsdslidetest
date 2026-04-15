"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/** Visual family: photo (full-bleed), split-photo, photo-grid, quote-photo. */

export function Photo({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "photo" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="photo"
      topLeft={slide.eyebrow ?? "photo"}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-1 flex-col justify-between px-8 py-6 md:px-14 md:py-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="display-xl max-w-4xl text-fg-0"
        >
          {slide.title}
        </motion.h2>
        {slide.caption && (
          <div className="self-end max-w-md text-right text-sm leading-snug text-fg-1 md:text-base">
            {slide.caption}
          </div>
        )}
      </div>
    </SlideChrome>
  );
}

export function SplitPhoto({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "split-photo" }>;
  index: number;
  total: number;
}) {
  const side = slide.side ?? "right";
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "split photo"}>
      <div className="relative z-10 grid flex-1 grid-cols-1 md:grid-cols-2">
        {side === "left" && (
          <div
            className="hidden bg-cover bg-center md:block"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden
          />
        )}
        <div className="flex flex-col justify-center px-8 py-8 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-md mb-6 text-fg-0"
          >
            {slide.title}
          </motion.h2>
          {slide.body && (
            <p className="max-w-md text-base leading-relaxed text-fg-1 md:text-lg">
              {slide.body}
            </p>
          )}
        </div>
        {side === "right" && (
          <div
            className="h-64 w-full bg-cover bg-center md:h-auto"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden
          />
        )}
        {side === "left" && (
          <div
            className="h-64 w-full bg-cover bg-center md:hidden"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden
          />
        )}
      </div>
    </SlideChrome>
  );
}

export function PhotoGrid({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "photo-grid" }>;
  index: number;
  total: number;
}) {
  const cols = slide.images.length <= 4 ? 2 : 3;
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "photo grid"}>
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
        <div
          className={`grid flex-1 gap-3 md:gap-4 ${
            cols === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3"
          }`}
        >
          {slide.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative overflow-hidden rounded-2xl bg-bg-2 ring-1 ring-bg-3"
              style={{
                backgroundImage: `url(${img.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 180,
              }}
            >
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-xs uppercase tracking-[0.15em] text-fg-1">
                    {img.caption}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

export function QuotePhoto({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "quote-photo" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome
      index={index}
      total={total}
      variant="photo"
      topLeft={slide.eyebrow ?? "testimonial"}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden
      />
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-14">
        <div className="max-w-3xl">
          <div className="mb-6 font-display text-7xl leading-none text-brand md:text-8xl">
            &ldquo;
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="display-md text-fg-0"
          >
            {slide.body}
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <div className="brand-rule" />
            <div>
              <div className="text-base font-semibold text-fg-0">{slide.author}</div>
              {slide.role && <div className="text-sm text-fg-3">{slide.role}</div>}
            </div>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}
