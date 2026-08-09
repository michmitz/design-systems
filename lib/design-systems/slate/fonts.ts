// Self-hosts Slate's two Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. Weights match that file's Google Fonts URL exactly.
import { IBM_Plex_Mono, Work_Sans } from "next/font/google";

// next/font's compiler plugin requires each loader call's options to be
// inline literals, so the variable name is duplicated below rather than
// referencing these constants directly — keep the two in sync by hand.
export const WORK_SANS_VAR = "--s-font-work-sans";
export const IBM_PLEX_MONO_VAR = "--s-font-ibm-plex-mono";

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--s-font-work-sans",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--s-font-ibm-plex-mono",
  display: "swap",
});

export const slateFontVariables = `${workSans.variable} ${ibmPlexMono.variable}`;
