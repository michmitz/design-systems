// Card content + styling for the gallery ("/") page's row cards.
//
// Every color/font below is a `var(--...)` reference into that system's own
// canonical tokens/colors.css + tokens/typography.css (loaded on this route
// by (hearth)/layout.tsx) rather than a hand-copied hex value — the gallery
// card is a rendering of the design set's real tokens, not a second,
// separately-maintained visual description of it.
//
// Shadows, hover/entrance easings and pill-specific letter-spacing are the
// one category that ISN'T token-backed: per the row-card spec (see
// Gallery-Cards-Update.md), these are a bespoke motion/elevation signature
// designed for this card specifically, and in several cases don't match any
// existing effects.css value (e.g. Slate has no --s-shadow-lg at all). Those
// are literals here by design, not an oversight.
//
// Bluebird has no entry in the row-card spec (it predates that system
// getting a page). Its values below follow the same resolution method used
// for the other specced systems: colors/fonts/radius from its own tokens,
// with the same per-system judgment calls the spec makes elsewhere (e.g.
// Almanac uses a darker pill color than the band accent for
// contrast against the veil — Bluebird's sky-500 accent has the same
// problem, so its pill uses sky-600 too).
import { WORK_SANS_VAR, IBM_PLEX_MONO_VAR as SLATE_MONO_VAR, workSans, ibmPlexMono as slateMono } from "@/lib/design-systems/slate/fonts";
import { COMFORTAA_VAR, MULISH_VAR, JETBRAINS_MONO_VAR, comfortaa, mulish, jetbrainsMono } from "@/lib/design-systems/bluebird/fonts";
import { NEWSREADER_VAR, FIGTREE_VAR, IBM_PLEX_MONO_VAR as HEARTH_MONO_VAR } from "@/lib/design-systems/hearth/fonts";
import { PLAYFAIR_DISPLAY_VAR, SPACE_MONO_VAR, playfairDisplay, spaceMono } from "@/lib/design-systems/monstera/fonts";

export type GalleryCard = {
  slug: "hearth" | "slate" | "bluebird" | "monstera";
  href: string;
  name: string;
  tagline: string;
  fontStackLabel: string;
  /** next/font variable class(es) that have to land on this card's DOM
   * subtree for its font `var()` references to resolve. Space-separated
   * when a card needs more than one (e.g. a display font + a mono font). */
  fontVariableClassName?: string;

  cardBackground: string;
  cardBorder: string;
  radius: string;
  shadowRest: string;
  shadowHover: string;
  easing: string;
  duration: string;
  textPaddingX: string;

  nameFont: string;
  nameColor: string;
  nameLetterSpacing?: string;
  nameLineHeight: string;

  taglineFont: string;
  taglineColor: string;

  monoFont: string;
  monoColor: string;
  monoLetterSpacing: string;

  /** [accent, c2, c3, c4] — band 1 (accent) takes remaining width, 2-4 are fixed 20px. */
  bands: [string, string, string, string];

  veil: string;
  pillColor: string;
  pillBorder: string;
  pillRadius: string;
  pillFont: string;
  pillLetterSpacing: string;
};

export const galleryCards: GalleryCard[] = [
  {
    slug: "hearth",
    href: "/hearth",
    name: "Hearth",
    tagline: "warm, human, made of paper and clay",
    fontStackLabel: "Newsreader · Figtree · IBM Plex Mono",
    // Hearth's fonts are already global (root layout), so no fontVariableClassName needed.

    cardBackground: "var(--bg-surface-raised)",
    cardBorder: "1px solid var(--border-hairline)",
    radius: "var(--radius-lg)",
    shadowRest: "var(--shadow-sm)",
    shadowHover: "0 16px 38px rgba(58, 51, 44, 0.16)",
    easing: "var(--ease-standard)",
    duration: "240ms",
    textPaddingX: "30px",

    nameFont: `500 2rem/1.1 var(${NEWSREADER_VAR}), 'Iowan Old Style', Georgia, serif`,
    nameColor: "var(--text-primary)",
    nameLineHeight: "1.1",

    taglineFont: `400 1.0625rem/1.4 var(${FIGTREE_VAR}), 'Helvetica Neue', Arial, sans-serif`,
    taglineColor: "var(--text-secondary)",

    monoFont: `400 0.6875rem/1.6 var(${HEARTH_MONO_VAR}), ui-monospace, monospace`,
    monoColor: "var(--text-muted)",
    monoLetterSpacing: "var(--tracking-caption)",

    bands: ["var(--accent-primary)", "var(--accent-secondary)", "var(--accent-tertiary)", "var(--accent-primary-tint)"],

    veil: "rgba(255, 253, 249, 0.93)",
    pillColor: "var(--accent-primary)",
    pillBorder: "rgba(193, 98, 45, 0.28)",
    pillRadius: "var(--radius-full)",
    pillFont: `500 0.75rem/1 var(${HEARTH_MONO_VAR}), ui-monospace, monospace`,
    pillLetterSpacing: "0.08em",
  },
  {
    slug: "slate",
    href: "/slate",
    name: "SLATE",
    tagline: "grayscale only — weight and space",
    fontStackLabel: "Work Sans · IBM Plex Mono",
    fontVariableClassName: `${workSans.variable} ${slateMono.variable}`,

    cardBackground: "var(--s-white)",
    cardBorder: "1px solid var(--s-border-hairline)",
    radius: "var(--s-radius-md)",
    shadowRest: "var(--s-shadow-sm)",
    shadowHover: "0 12px 22px rgba(17, 17, 17, 0.10)",
    easing: "var(--s-ease-standard)",
    duration: "200ms",
    textPaddingX: "30px",

    nameFont: `700 2rem/1.1 var(${WORK_SANS_VAR}), system-ui, sans-serif`,
    nameColor: "var(--s-text-primary)",
    nameLetterSpacing: "-0.02em",
    nameLineHeight: "1.1",

    taglineFont: `400 1.0625rem/1.4 var(${WORK_SANS_VAR}), system-ui, sans-serif`,
    taglineColor: "var(--s-text-secondary)",

    monoFont: `400 0.6875rem/1.6 var(${SLATE_MONO_VAR}), ui-monospace, monospace`,
    monoColor: "var(--s-text-muted)",
    monoLetterSpacing: "var(--s-tracking-caption)",

    bands: ["var(--s-accent-primary)", "var(--s-gray-700)", "var(--s-gray-500)", "var(--s-gray-300)"],

    veil: "rgba(255, 255, 255, 0.93)",
    pillColor: "var(--s-accent-primary)",
    pillBorder: "rgba(17, 17, 17, 0.28)",
    pillRadius: "var(--s-radius-md)",
    pillFont: `600 0.75rem/1 var(${WORK_SANS_VAR}), system-ui, sans-serif`,
    pillLetterSpacing: "0.12em",
  },
  {
    slug: "bluebird",
    href: "/bluebird",
    name: "bluebird",
    tagline: "bright, sunny, cheerful",
    fontStackLabel: "Comfortaa · Mulish · JetBrains Mono",
    fontVariableClassName: `${comfortaa.variable} ${mulish.variable} ${jetbrainsMono.variable}`,

    cardBackground: "var(--bb-bg-page)",
    cardBorder: "1px solid var(--bb-border-hairline)",
    radius: "var(--bb-radius-lg)",
    shadowRest: "var(--bb-shadow-sm)",
    shadowHover: "var(--bb-shadow-lg)",
    easing: "var(--bb-ease-standard)",
    duration: "240ms",
    textPaddingX: "30px",

    nameFont: `700 2rem/1.1 var(${COMFORTAA_VAR}), system-ui, sans-serif`,
    nameColor: "var(--bb-text-primary)",
    nameLineHeight: "1.1",

    taglineFont: `600 1.0625rem/1.4 var(${MULISH_VAR}), system-ui, sans-serif`,
    taglineColor: "var(--bb-text-secondary)",

    monoFont: `400 0.6875rem/1.6 var(${JETBRAINS_MONO_VAR}), ui-monospace, monospace`,
    monoColor: "var(--bb-text-muted)",
    monoLetterSpacing: "var(--bb-tracking-caption)",

    bands: ["var(--bb-sky-500)", "var(--bb-sun-500)", "var(--bb-rust-500)", "var(--bb-sky-100)"],

    veil: "rgba(244, 250, 255, 0.93)",
    pillColor: "var(--bb-sky-600)",
    pillBorder: "rgba(79, 173, 235, 0.28)",
    pillRadius: "var(--bb-radius-full)",
    pillFont: `700 0.75rem/1 var(${MULISH_VAR}), system-ui, sans-serif`,
    pillLetterSpacing: "0.08em",
  },
  {
    slug: "monstera",
    href: "/monstera",
    name: "Monstera",
    tagline: "pressed, cataloged, quietly botanical",
    fontStackLabel: "Playfair Display · Karla · Space Mono",
    fontVariableClassName: `${playfairDisplay.variable} ${spaceMono.variable}`,

    cardBackground: "var(--mo-bg-surface-raised)",
    cardBorder: "1px solid var(--mo-border-hairline)",
    radius: "var(--mo-radius-md)",
    shadowRest: "0 1px 2px rgba(35, 38, 30, 0.07)",
    shadowHover: "0 16px 34px rgba(35, 38, 30, 0.14)",
    easing: "cubic-bezier(0.2, 0, 0.15, 1)",
    duration: "240ms",
    textPaddingX: "30px",

    nameFont: `600 2rem/1.1 var(${PLAYFAIR_DISPLAY_VAR}), Georgia, serif`,
    nameColor: "var(--mo-text-primary)",
    nameLineHeight: "1.1",

    taglineFont: `italic 500 1.0625rem/1.4 var(${PLAYFAIR_DISPLAY_VAR}), Georgia, serif`,
    taglineColor: "var(--mo-text-secondary)",

    monoFont: `400 0.6875rem/1.6 var(${SPACE_MONO_VAR}), ui-monospace, monospace`,
    monoColor: "var(--mo-text-muted)",
    monoLetterSpacing: "var(--mo-tracking-caption)",

    bands: ["var(--mo-moss-700)", "var(--mo-moss-500)", "var(--mo-moss-300)", "var(--mo-parchment-200)"],

    veil: "rgba(255, 253, 247, 0.93)",
    pillColor: "var(--mo-moss-700)",
    pillBorder: "rgba(58, 82, 64, 0.28)",
    pillRadius: "var(--mo-radius-md)",
    pillFont: `700 0.75rem/1 var(${SPACE_MONO_VAR}), ui-monospace, monospace`,
    pillLetterSpacing: "0.12em",
  },
];
