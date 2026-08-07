// Card content + styling for the gallery ("/") page.
//
// Only Hearth's tokens are loaded site-wide (see app/globals.css), so the Hearth
// card below is styled with `var(--...)` references while the other three systems'
// cards use literal values straight from reference/Design Systems.dc.html — their
// own prefixed token sets (--v-*, --s-*, --b-*) are scoped to their detail pages,
// not the gallery shell.
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
  /** CSS `font` shorthand override for the card title; omit to use Hearth's --text-h3. */
  titleFont?: string;
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
    descriptionColor: "var(--text-muted)",
  },
  {
    slug: "voltage",
    href: "/voltage",
    name: "Voltage",
    description: "Loud, dark-mode-first foundations — neon lime, pink & cyan on near-black.",
    swatches: ["#C6FF3D", "#FF3CAC", "#00E5FF", "#0A0A0F"],
    swatchStripBackground: "#0A0A0F",
    cardBackground: "#15151D",
    cardBorder: "1px solid rgba(247, 247, 250, 0.14)",
    titleColor: "#F7F7FA",
    titleFont: "800 1.375rem/1.3 'Figtree', sans-serif",
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
    titleFont: "700 1.375rem/1.3 'Figtree', sans-serif",
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
    titleFont: "700 1.375rem/1.3 'Figtree', sans-serif",
    descriptionColor: "#8A8098",
  },
];
