// Self-hosts Bloom's two Google Fonts via next/font/google — see
// hearth/fonts.ts for why this exists instead of relying on tokens/typography.css's
// own `@import`. tokens/typography.css requests Nunito's italic only at weight
// 500 (for the detail page's italic tagline); next/font's Google loader can't
// subset styles per weight in one call, so this pulls normal 400/500/600/700 +
// italic across the same weights — a handful of unused italic files beyond
// what the reference strictly asks for, traded for one unified font-family.
import { IBM_Plex_Mono, Nunito } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--b-font-nunito",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--b-font-ibm-plex-mono",
  display: "swap",
});

export const bloomFontVariables = `${nunito.variable} ${ibmPlexMono.variable}`;
