import type { Metadata } from "next";
import { hearthFontVariables } from "@/lib/design-systems/hearth/fonts";
import "../globals.css";
import "@/lib/design-systems/hearth/styles.css";
import "@/lib/design-systems/hearth/typography-vars.css";
import "@/lib/design-systems/hearth/shell.css";

// Root layout for the gallery ("/") and the Hearth detail page ("/hearth") —
// grouped together because both are themed with Hearth, the site's default
// shell. Voltage/Slate/Bloom each get their own root layout (see the other
// route groups) so their fonts only ever load on their own page: token
// var()s resolve in the scope where they're declared (:root, i.e. <html>),
// not where they're consumed, so each system's font-variable classes have to
// land on this route group's own <html> to work at all.
export const metadata: Metadata = {
  title: "Design systems",
  description:
    "A small library of visual languages — colors, type, and foundations for Hearth, Voltage, Slate, and Bloom.",
};

export default function HearthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${hearthFontVariables}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
