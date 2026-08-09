import type { Metadata } from "next";
import { bloomFontVariables } from "@/lib/design-systems/bloom/fonts";
import "../globals.css";
import "@/lib/design-systems/bloom/styles.css";
import "@/lib/design-systems/bloom/typography-vars.css";
import "@/lib/design-systems/bloom/shell.css";

// Root layout for the Bloom detail page ("/bloom") — its own route
// group so Bloom's fonts+tokens only ever load here. See (hearth)/layout.tsx
// for why this can't just be a nested layout under one shared root.
export const metadata: Metadata = {
  title: "Bloom — Design systems",
  description: "Soft pastel foundations — pink, lavender & mint, rounded and gentle.",
};

export default function BloomRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${bloomFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
