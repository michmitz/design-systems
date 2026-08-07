import type { Metadata } from "next";
import { hearthFontVariables } from "@/lib/design-systems/hearth/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design systems",
  description:
    "A small library of visual languages — colors, type, and foundations for Hearth, Voltage, Slate, and Bloom.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full ${hearthFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
