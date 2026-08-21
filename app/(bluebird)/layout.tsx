import type { Metadata } from "next";
import { bluebirdFontVariables } from "@/lib/design-systems/bluebird/fonts";
import "../globals.css";
import "@/lib/design-systems/bluebird/styles.css";
import "@/lib/design-systems/bluebird/typography-vars.css";
import "@/lib/design-systems/bluebird/shell.css";

export const metadata: Metadata = {
  title: "bluebird — Design systems",
  description: "Bubbly spring foundations — sky blue, sun yellow & rust, round and joyful.",
};

export default function BluebirdRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${bluebirdFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
