// Self-hosts Monstera's three Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on
// tokens/typography.css's own `@import`.
import { Karla, Playfair_Display, Space_Mono } from "next/font/google";

// next/font's compiler plugin requires each loader call's options to be
// inline literals, so the variable name is duplicated below rather than
// referencing these constants directly — keep the two in sync by hand.
export const PLAYFAIR_DISPLAY_VAR = "--mo-font-playfair-display";
export const KARLA_VAR = "--mo-font-karla";
export const SPACE_MONO_VAR = "--mo-font-space-mono";

// Playfair Display carries display moments only — the herbarium-label
// "scientific name" treatment (see Specimen.tsx). Italic is used for the
// tagline/annotation voice.
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--mo-font-playfair-display",
  display: "swap",
});

// Karla carries everything functional — body copy, labels, UI.
export const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--mo-font-karla",
  display: "swap",
});

// Space Mono stands in for the typewritten specimen-tag voice — captions,
// tokens, and small UI labels read like a field-guide catalog entry.
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--mo-font-space-mono",
  display: "swap",
});

export const monsteraFontVariables = `${playfairDisplay.variable} ${karla.variable} ${spaceMono.variable}`;
