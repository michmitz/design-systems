import type { Metadata } from "next";
import { slateFontVariables } from "@/lib/design-systems/slate/fonts";
import "../globals.css";
import "@/lib/design-systems/slate/styles.css";
import "@/lib/design-systems/slate/typography-vars.css";
import "@/lib/design-systems/slate/shell.css";

// Root layout for the Slate detail page ("/slate") — its own route
// group so Slate's fonts+tokens only ever load here. See (hearth)/layout.tsx
// for why this can't just be a nested layout under one shared root.
export const metadata: Metadata = {
  title: "Slate — Design systems",
  description: "Monochrome foundations — pure grayscale, sharp corners, no color needed.",
};

export default function SlateRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${slateFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
