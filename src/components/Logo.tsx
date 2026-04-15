import Image from "next/image";

/**
 * Official EMCD brand marks extracted from 🟣 Brandbook.zip:
 *  - `emcd-wordmark.png` — italic wordmark from brandbook p. 8
 *  - `emcd-symbol.png`   — primary "E" symbol square from brandbook p. 12
 *
 * Both are black-on-transparent PNGs. For dark backgrounds we invert them
 * via CSS `filter: invert(1) brightness(2)` so a single asset serves both
 * the light app shell and the dark slide canvas.
 */

type Tone = "dark" | "light"; // `dark` = dark logo on light bg, `light` = light logo on dark bg

const TONE_CLASS: Record<Tone, string> = {
  dark: "",
  light: "[filter:invert(1)_brightness(2)]",
};

export function EmcdWordmark({
  tone = "dark",
  className = "",
  width = 96,
}: {
  tone?: Tone;
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src="/brand/logo/emcd-wordmark.png"
      alt="EMCD"
      width={width}
      height={Math.round((width * 241) / 712)}
      priority
      className={`h-auto ${TONE_CLASS[tone]} ${className}`}
    />
  );
}

export function EmcdSymbol({
  tone = "dark",
  className = "",
  size = 40,
}: {
  tone?: Tone;
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/brand/logo/emcd-symbol.png"
      alt="EMCD"
      width={size}
      height={size}
      priority
      className={`${TONE_CLASS[tone]} ${className}`}
    />
  );
}
