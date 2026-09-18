import type { Metadata } from "next";
import { monsteraFontVariables } from "@/lib/design-systems/monstera/fonts";
import "../globals.css";
import "@/lib/design-systems/monstera/styles.css";
import "@/lib/design-systems/monstera/typography-vars.css";
import "@/lib/design-systems/monstera/shell.css";

export const metadata: Metadata = {
  title: "Monstera — Design systems",
  description: "Parchment, moss and stone — a botanical field-guide system.",
};

export default function MonsteraRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${monsteraFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
