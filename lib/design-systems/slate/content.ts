// Slate's own specimen content — a technical/precise composition (spec
// table, dense palette grid, spacing ruler) rather than the generic
// Colors/Type/Effects template. See Specimen.tsx.
export type SlateSwatch = { name: string; value: string };
export type SlateScaleRow = { token: string; spec: string; font: string; sample: string };
export type SlateSpacingStep = { token: string; px: number };

// The 2x2 Components grid — button, input, card, badge, in Slate's
// monochrome/precise voice.
export type SlateComponents = {
  buttonLabel: string;
  inputPlaceholder: string;
  cardTitle: string;
  cardBody: string;
  badgeLabel: string;
};

export const slateContent = {
  slug: "slate" as const,
  name: "Slate",
  tagline: "precise, quiet, no color needed",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
  scale: [
    { token: "--s-text-display-1", spec: "700 4rem/1.0", font: "var(--s-text-display-1)", sample: "Precise, quiet, exact" },
    { token: "--s-text-h2", spec: "600 1.75rem/1.2", font: "var(--s-text-h2)", sample: "One weight family" },
    { token: "--s-text-body", spec: "400 1rem/1.6", font: "var(--s-text-body)", sample: "Work Sans regular carries the whole scale" },
    { token: "--s-text-mono", spec: "400 0.9rem/1.5", font: "var(--s-text-mono)", sample: "IBM Plex Mono" },
  ] satisfies SlateScaleRow[],
  swatches: [
    { name: "White", value: "var(--s-white)" },
    { name: "Gray 100", value: "var(--s-gray-100)" },
    { name: "Gray 200", value: "var(--s-gray-200)" },
    { name: "Gray 300", value: "var(--s-gray-300)" },
    { name: "Gray 400", value: "var(--s-gray-400)" },
    { name: "Gray 500", value: "var(--s-gray-500)" },
    { name: "Gray 600", value: "var(--s-gray-600)" },
    { name: "Gray 700", value: "var(--s-gray-700)" },
    { name: "Black", value: "var(--s-black)" },
  ] satisfies SlateSwatch[],
  spacing: [
    { token: "--s-space-1", px: 4 },
    { token: "--s-space-3", px: 12 },
    { token: "--s-space-5", px: 24 },
    { token: "--s-space-7", px: 48 },
    { token: "--s-space-9", px: 96 },
    { token: "--s-space-10", px: 128 },
  ] satisfies SlateSpacingStep[],
  components: {
    buttonLabel: "Continue",
    inputPlaceholder: "search index",
    cardTitle: "Spec 04",
    cardBody: "Auto-generated from tokens.",
    badgeLabel: "Stable",
  } satisfies SlateComponents,
  footnote: "Hairline borders (not shadows) separate surfaces; easing is linear-ish and fast — no bounce.",
};
