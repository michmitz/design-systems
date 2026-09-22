import type { Metadata } from "next";
import { hearthFontVariables } from "@/lib/design-systems/hearth/fonts";
import "../globals.css";
import "@/lib/design-systems/hearth/styles.css";
import "@/lib/design-systems/hearth/typography-vars.css";
import "@/lib/design-systems/hearth/shell.css";
// Colors + typography + effects (radius) from the other three systems,
// loaded here purely so the gallery row card in gallery-data.ts can
// reference their real `--s-*`/`--bb-*`/`--mo-*` tokens with var()
// instead of hand-copied hex. Their prefixes don't collide with each other or
// with Hearth's unprefixed --color-*/--bg-*/--text-*/--font-*/--radius-*
// names, so all four token sets can coexist at :root on this one page.
// typography.css's own `@import url(...)` line is a no-op here — Next's CSS
// pipeline drops external `@import`s from the bundled stylesheet (see
// hearth/fonts.ts) — the actual font files still only load via each of
// these systems' own next/font calls, applied per-card in gallery-data.ts.
// A system's own route still loads all of this again itself (see the other
// route groups); it's not redundant, since token var()s resolve in the
// scope where they're declared, not where they're consumed.
import "@/lib/design-systems/slate/tokens/colors.css";
import "@/lib/design-systems/slate/tokens/typography.css";
import "@/lib/design-systems/slate/tokens/effects.css";
import "@/lib/design-systems/bluebird/tokens/colors.css";
import "@/lib/design-systems/bluebird/tokens/typography.css";
import "@/lib/design-systems/bluebird/tokens/effects.css";
import "@/lib/design-systems/monstera/tokens/colors.css";
import "@/lib/design-systems/monstera/tokens/typography.css";
import "@/lib/design-systems/monstera/tokens/effects.css";

// Root layout for the gallery ("/") and the Hearth detail page ("/hearth") —
// grouped together because both are themed with Hearth, the site's default
// shell. Slate/bluebird each get their own root layout (see
// the other route groups) so their fonts only ever load on their own page:
// token var()s resolve in the scope where they're declared (:root, i.e.
// <html>), not where they're consumed, so each system's font-variable
// classes have to land on this route group's own <html> to work at all.
export const metadata: Metadata = {
  title: "Design systems",
  description:
    "A small library of curated design systems.",
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
