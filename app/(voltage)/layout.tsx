import type { Metadata } from "next";
import { voltageFontVariables } from "@/lib/design-systems/voltage/fonts";
import "../globals.css";
import "@/lib/design-systems/voltage/styles.css";
import "@/lib/design-systems/voltage/typography-vars.css";
import "@/lib/design-systems/voltage/shell.css";

// Root layout for the Voltage detail page ("/voltage") — its own route
// group so Voltage's fonts+tokens only ever load here. See (hearth)/layout.tsx
// for why this can't just be a nested layout under one shared root.
export const metadata: Metadata = {
  title: "Voltage — Design systems",
  description: "Loud, dark-mode-first foundations — neon lime, pink & cyan on near-black.",
};

export default function VoltageRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${voltageFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
