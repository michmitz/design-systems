// Self-hosts Hearth's three Google Fonts via next/font/google.
//
// tokens/typography.css's own `@import url('https://fonts.googleapis.com/...')`
// line is kept verbatim there as the literal source of truth (it's what ships
// in the "download/copy tokens" feature) — but Next's CSS pipeline silently
// drops external `@import`s from the bundled stylesheet, so it can't be what
// actually loads the fonts for our own rendering. These self-hosted fonts are
// wired to the same --font-display/--font-body/--font-mono variables in
// globals.css instead, matching the same families/weights/styles.
import { Figtree, IBM_Plex_Mono, Newsreader } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const hearthFontVariables = `${newsreader.variable} ${figtree.variable} ${ibmPlexMono.variable}`;
