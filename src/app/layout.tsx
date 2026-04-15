import type { Metadata } from "next";
import "./globals.css";

/**
 * Production builds on locked-down servers were failing because next/font/google
 * needs outbound network access during `next build`. We keep the theme and use
 * a local/system sans stack by default so the app can be built and deployed
 * fully offline. If you later get licensed brand fonts, wire them via
 * next/font/local instead of Google Fonts.
 */

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
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full bg-app-bg text-app-ink-0">{children}</body>
    </html>
  );
}
