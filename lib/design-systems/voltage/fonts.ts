// Self-hosts Voltage's two Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. Weights match that file's Google Fonts URL exactly.
import { Archivo, Space_Mono } from "next/font/google";

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
