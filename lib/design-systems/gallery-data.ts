// Card content + styling for the gallery ("/") page.
//
// Every color below is a `var(--...)` reference into that system's own
// canonical tokens/colors.css (loaded on this route by (hearth)/layout.tsx)
// rather than a hand-copied hex value — the gallery card is a rendering of
// the design set's real tokens, not a second, separately-maintained visual
// description of it. Typography/effects tokens still only load on each
// system's own detail page, so this file has nothing to reference for those
// yet. Each card's title deliberately previews that system's own display
// font (deviating from reference/Design Systems.dc.html, which hardcodes
// Figtree for every card title). Each card that isn't Hearth carries its own
// `fontVariableClassName`: the next/font variable class that has to be
// applied to that card's own DOM subtree for `titleFont`'s var() reference
// to resolve — see slate/bloom/bluebird's fonts.ts.
import { WORK_SANS_VAR, workSans } from "@/lib/design-systems/slate/fonts";
import { NUNITO_VAR, nunito } from "@/lib/design-systems/bloom/fonts";
import { COMFORTAA_VAR, comfortaa } from "@/lib/design-systems/bluebird/fonts";
import { NEWSREADER_VAR } from "@/lib/design-systems/hearth/fonts";
import { PLAYFAIR_DISPLAY_VAR, playfairDisplay } from "@/lib/design-systems/monstera/fonts";

export type GalleryCard = {
  slug: "hearth" | "slate" | "bloom" | "bluebird" | "monstera";
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
    description: "Warm · Editorial",
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
    slug: "slate",
    href: "/slate",
    name: "Slate",
    description: "Monochrome · Precise",
    swatches: [
      "var(--s-gray-100)",
      "var(--s-gray-300)",
      "var(--s-gray-500)",
      "var(--s-black)",
    ],
    swatchStripBackground: "var(--s-white)",
    cardBackground: "var(--s-white)",
    cardBorder: "1px solid var(--s-border-hairline)",
    titleColor: "var(--s-text-primary)",
    titleFont: `700 1.375rem/1.3 var(${WORK_SANS_VAR}), system-ui, sans-serif`,
    fontVariableClassName: workSans.variable,
    descriptionColor: "var(--s-text-muted)",
  },
  {
    slug: "bloom",
    href: "/bloom",
    name: "Bloom",
    description: "Soft · Pastel · Rounded",
    swatches: [
      "var(--b-pink-500)",
      "var(--b-lavender-500)",
      "var(--b-mint-500)",
      "var(--b-butter-500)",
    ],
    swatchStripBackground: "var(--b-bg-page)",
    cardBackground: "var(--b-bg-page)",
    cardBorder: "1px solid var(--b-border-hairline)",
    titleColor: "var(--b-text-primary)",
    titleFont: `700 1.375rem/1.3 var(${NUNITO_VAR}), system-ui, sans-serif`,
    fontVariableClassName: nunito.variable,
    descriptionColor: "var(--b-text-muted)",
  },
  {
    slug: "bluebird",
    href: "/bluebird",
    name: "bluebird",
    description: "Bubbly · Spring · Joyful",
    swatches: [
      "var(--bb-sky-500)",
      "var(--bb-sun-500)",
      "var(--bb-rust-500)",
      "var(--bb-bg-page)",
    ],
    swatchStripBackground: "var(--bb-bg-page)",
    cardBackground: "var(--bb-bg-page)",
    cardBorder: "1px solid var(--bb-border-hairline)",
    titleColor: "var(--bb-text-primary)",
    titleFont: `700 1.375rem/1.3 var(${COMFORTAA_VAR}), system-ui, sans-serif`,
    fontVariableClassName: comfortaa.variable,
    descriptionColor: "var(--bb-text-muted)",
  },
  {
    slug: "monstera",
    href: "/monstera",
    name: "Monstera",
    description: "Parchment · Botanical",
    swatches: [
      "var(--mo-moss-700)",
      "var(--mo-moss-300)",
      "var(--mo-ink-500)",
      "var(--mo-parchment-100)",
    ],
    swatchStripBackground: "var(--mo-bg-page)",
    cardBackground: "var(--mo-bg-surface-raised)",
    cardBorder: "1px solid var(--mo-border-hairline)",
    titleColor: "var(--mo-text-primary)",
    titleFont: `600 1.375rem/1.3 var(${PLAYFAIR_DISPLAY_VAR}), Georgia, serif`,
    fontVariableClassName: playfairDisplay.variable,
    descriptionColor: "var(--mo-text-muted)",
  },
];
