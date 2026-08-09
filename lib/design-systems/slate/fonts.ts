// Self-hosts Slate's two Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. Weights match that file's Google Fonts URL exactly.
import { IBM_Plex_Mono, Work_Sans } from "next/font/google";

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
