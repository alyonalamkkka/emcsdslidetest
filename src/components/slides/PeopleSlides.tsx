"use client";

import { motion } from "framer-motion";
import type { Slide } from "@/lib/schema";
import { SlideChrome } from "../SlideChrome";

/** People family: team, speaker. */

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function Team({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "team" }>;
  index: number;
  total: number;
}) {
  const cols = slide.members.length <= 4 ? 4 : slide.members.length <= 6 ? 3 : 4;
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "team"}>
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
            cols === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
          }`}
        >
          {slide.members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col gap-4 rounded-2xl bg-bg-1/70 p-5 ring-1 ring-bg-3"
            >
              <div
                className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-bg-3 font-display text-4xl font-bold text-brand"
                style={
                  m.image
                    ? {
                        backgroundImage: `url(${m.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {!m.image && initials(m.name)}
              </div>
              <div>
                <div className="text-base font-semibold leading-snug text-fg-0 md:text-lg">
                  {m.name}
                </div>
                <div className="text-xs uppercase tracking-[0.14em] leading-snug text-fg-3 md:text-sm">
                  {m.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

export function Speaker({
  slide,
  index,
  total,
}: {
  slide: Extract<Slide, { type: "speaker" }>;
  index: number;
  total: number;
}) {
  return (
    <SlideChrome index={index} total={total} topLeft={slide.eyebrow ?? "speaker"}>
      <div className="relative z-10 grid flex-1 grid-cols-1 gap-10 px-8 pt-4 md:grid-cols-[minmax(0,1fr)_1.2fr] md:px-14">
        <div
          className="flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl bg-bg-3 font-display text-7xl font-bold text-brand ring-1 ring-bg-3"
          style={
            slide.image
              ? {
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {!slide.image && initials(slide.name)}
        </div>
        <div className="flex flex-col justify-center">
          <div className="eyebrow eyebrow-brand mb-4">Спикер</div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="display-md mb-3 text-fg-0"
          >
            {slide.name}
          </motion.h2>
          <div className="mb-6 text-lg text-fg-2 md:text-xl">{slide.role}</div>
          {slide.bio && (
            <p className="max-w-xl text-base leading-relaxed text-fg-1 md:text-lg">
              {slide.bio}
            </p>
          )}
        </div>
      </div>
    </SlideChrome>
  );
}
