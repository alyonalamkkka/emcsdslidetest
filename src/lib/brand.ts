/**
 * Curated list of brand-approved imagery available to the AI.
 * The model picks from `BRAND_IMAGES` keys only — it cannot invent URLs.
 * All paths are served from /public.
 */

export const BRAND_IMAGES = {
  "mining-rig": {
    path: "/brand/photos/mining-rig.png",
    description:
      "Dark metallic mining rig fans, industrial, suits topics about infrastructure, mining, hardware.",
  },
  "data-bokeh": {
    path: "/brand/photos/data-bokeh.jpg",
    description:
      "Blurred digital data points, glowing highlights on black, good for abstract/tech/data slides.",
  },
  "emcd-lens": {
    path: "/brand/photos/emcd-lens.jpg",
    description:
      "EMCD logo inside a circular purple lens/iris, cinematic — best for brand-hero covers.",
  },
  "phone-app": {
    path: "/brand/photos/phone-app.png",
    description:
      "iPhone mock showing EMCD app icon next to Calendar/Photos/Mail — use for product/mobile slides.",
  },
} as const;

export type BrandImageKey = keyof typeof BRAND_IMAGES;

export function brandImageList(): string {
  return Object.entries(BRAND_IMAGES)
    .map(([key, v]) => `- ${v.path} — ${v.description}`)
    .join("\n");
}
