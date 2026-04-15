import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

/**
 * EMCD uses Roobert Pro (see brandbook p.21). Roobert Pro is not on Google
 * Fonts, so we ship Inter + Inter Tight as the closest freely-available
 * geometric grotesk with full Cyrillic support. Inter Tight is narrower and
 * is used for display headings; Inter handles body copy.
 *
 * To use real Roobert Pro: drop RoobertPRO-*.woff2 files into public/fonts/,
 * replace these imports with next/font/local, and update the CSS variables.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMCD Slides",
  description:
    "AI-powered corporate presentation builder in EMCD brand style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-app-bg text-app-ink-0">{children}</body>
    </html>
  );
}
