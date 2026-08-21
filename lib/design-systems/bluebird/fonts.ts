// Self-hosts bluebird's three Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. Weights match that file's Google Fonts URL exactly.
import { Comfortaa, JetBrains_Mono, Mulish } from "next/font/google";

// next/font's compiler plugin requires each loader call's options to be
// inline literals, so the variable name is duplicated below rather than
// referencing these constants directly — keep the two in sync by hand.
export const COMFORTAA_VAR = "--bb-font-comfortaa";
export const MULISH_VAR = "--bb-font-mulish";
export const JETBRAINS_MONO_VAR = "--bb-font-jetbrains-mono";

// Comfortaa is the bubble: rounded, geometric, a little cursive-feeling.
// It's kept to display/headline moments only (see Specimen.tsx) — at body
// sizes its wide, low-contrast letterforms read as decorative rather than
// legible, so it never carries paragraphs.
export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--bb-font-comfortaa",
  display: "swap",
});

// Mulish carries everything functional — body copy, labels, UI — plain and
// simple on purpose, so the bubble in the headlines doesn't tip into
// overwhelming.
export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--bb-font-mulish",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--bb-font-jetbrains-mono",
  display: "swap",
});

export const bluebirdFontVariables = `${comfortaa.variable} ${mulish.variable} ${jetbrainsMono.variable}`;
