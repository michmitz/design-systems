// Card content + styling for the gallery ("/") page.
//
// Only Hearth's tokens/fonts are loaded site-wide (see app/globals.css and
// app/layout.tsx), so the Hearth card is styled with `var(--...)` references
// straight off the global tokens. The other three systems' full token sets
// (--v-*, --s-*, --b-*) are scoped to their own detail pages, not the gallery
// shell — but each card's title deliberately previews that system's own
// display font (deviating from reference/Design Systems.dc.html, which
// hardcodes Figtree for every card title). Each card that isn't Hearth
// carries its own `fontVariableClassName`: the next/font variable class that
// has to be applied to that card's own DOM subtree for `titleFont`'s
// var() reference to resolve — see voltage/slate/bloom's fonts.ts.
import { ARCHIVO_VAR, archivo } from "@/lib/design-systems/voltage/fonts";
import { WORK_SANS_VAR, workSans } from "@/lib/design-systems/slate/fonts";
import { NUNITO_VAR, nunito } from "@/lib/design-systems/bloom/fonts";
import { NEWSREADER_VAR } from "@/lib/design-systems/hearth/fonts";

export type GalleryCard = {
  slug: "hearth" | "voltage" | "slate" | "bloom";
  href: string;
  name: string;
  description: string;
  swatches: [string, string, string, string];
  swatchStripBackground?: string;
  cardBackground: string;
  cardBorder: string;
  titleColor: string;
  /** CSS `font` shorthand for the card title, in that system's own display font. */
  titleFont: string;
  /** next/font variable class to apply to the card so titleFont's var() resolves. */
  fontVariableClassName?: string;
  descriptionColor: string;
};

export const galleryCards: GalleryCard[] = [
  {
    slug: "hearth",
    href: "/hearth",
    name: "Hearth",
    description: "Warm, human foundations — clay, sage & gold on cream paper.",
    swatches: [
      "var(--color-clay-500)",
      "var(--color-sage-500)",
      "var(--color-gold-500)",
      "var(--color-cream-100)",
    ],
    cardBackground: "var(--bg-surface-raised)",
    cardBorder: "1px solid var(--border-hairline)",
    titleColor: "var(--text-primary)",
    // Hearth's fonts are already global (root layout), so no fontVariableClassName needed.
    titleFont: `600 1.375rem/1.3 var(${NEWSREADER_VAR}), 'Iowan Old Style', Georgia, serif`,
    descriptionColor: "var(--text-muted)",
  },
  {
    slug: "voltage",
    href: "/voltage",
    name: "VOLTAGE",
    description: "Loud, dark-mode-first foundations — neon lime, pink & cyan on near-black.",
    swatches: ["#C6FF3D", "#FF3CAC", "#00E5FF", "#0A0A0F"],
    swatchStripBackground: "#0A0A0F",
    cardBackground: "#15151D",
    cardBorder: "1px solid rgba(247, 247, 250, 0.14)",
    titleColor: "#F7F7FA",
    titleFont: `800 1.375rem/1.3 var(${ARCHIVO_VAR}), system-ui, sans-serif`,
    fontVariableClassName: archivo.variable,
    descriptionColor: "#8A8A9B",
  },
  {
    slug: "slate",
    href: "/slate",
    name: "Slate",
    description: "Monochrome foundations — pure grayscale, sharp corners, no color needed.",
    swatches: ["#EDEDED", "#B8B8B8", "#6B6B6B", "#111111"],
    swatchStripBackground: "#FFFFFF",
    cardBackground: "#FFFFFF",
    cardBorder: "1px solid rgba(17, 17, 17, 0.14)",
    titleColor: "#111111",
    titleFont: `700 1.375rem/1.3 var(${WORK_SANS_VAR}), system-ui, sans-serif`,
    fontVariableClassName: workSans.variable,
    descriptionColor: "#6B6B6B",
  },
  {
    slug: "bloom",
    href: "/bloom",
    name: "Bloom",
    description: "Soft pastel foundations — pink, lavender & mint, rounded and gentle.",
    swatches: ["#F48FB1", "#B39DDB", "#80CBC4", "#FFE082"],
    swatchStripBackground: "#FFFBFE",
    cardBackground: "#FFFBFE",
    cardBorder: "1px solid rgba(61, 53, 82, 0.10)",
    titleColor: "#3D3552",
    titleFont: `700 1.375rem/1.3 var(${NUNITO_VAR}), system-ui, sans-serif`,
    fontVariableClassName: nunito.variable,
    descriptionColor: "#8A8098",
  },
];
