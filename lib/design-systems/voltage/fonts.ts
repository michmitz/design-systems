// Self-hosts Voltage's two Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. Weights match that file's Google Fonts URL exactly.
import { Archivo, Space_Mono } from "next/font/google";

// next/font's compiler plugin requires each loader call's options to be
// inline literals, so the variable name is duplicated below rather than
// referencing these constants directly — keep the two in sync by hand.
export const ARCHIVO_VAR = "--v-font-archivo";
export const SPACE_MONO_VAR = "--v-font-space-mono";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--v-font-archivo",
  display: "swap",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--v-font-space-mono",
  display: "swap",
});

export const voltageFontVariables = `${archivo.variable} ${spaceMono.variable}`;
