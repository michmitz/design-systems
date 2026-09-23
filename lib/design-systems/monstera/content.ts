// Monstera's own specimen content — a herbarium/field-guide voice: catalog
// labels over sentences, mono captions everywhere. See Specimen.tsx.
export type MonsteraTypefaceRow = { token: string; spec: string; font: string; sample: string };
export type MonsteraSwatch = { name: string; value: string };
export type MonsteraSpacingStep = { token: string; px: number };

// The 2x2 Components grid — button, input, card, badge, in Monstera's
// specimen-tag voice.
export type MonsteraComponents = {
  buttonLabel: string;
  inputPlaceholder: string;
  cardTitle: string;
  cardBody: string;
  badgeLabel: string;
};

export const monsteraContent = {
  slug: "monstera" as const,
  name: "Monstera",
  tagline: "pressed, cataloged, botanical",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
  typefaces: [
    { token: "--mo-text-display-1", spec: "600 4.5rem/1.05", font: "var(--mo-text-display-1)", sample: "Monstera deliciosa" },
    { token: "--mo-text-display-italic", spec: "italic 500 1.75rem/1.4", font: "var(--mo-text-display-italic)", sample: "Pressed and cataloged" },
    {
      token: "--mo-text-body",
      spec: "400 1rem/1.6",
      font: "var(--mo-text-body)",
      sample: "Karla keeps field notes legible without competing with the display serif.",
    },
    { token: "--mo-text-caption", spec: "700 0.72rem/1.4", font: "var(--mo-text-caption)", sample: "SPECIMEN NO. 014" },
  ] satisfies MonsteraTypefaceRow[],
  swatches: [
    { name: "Ink 900", value: "var(--mo-ink-900)" },
    { name: "Moss 700", value: "var(--mo-moss-700)" },
    { name: "Moss 500", value: "var(--mo-moss-500)" },
    { name: "Moss 300", value: "var(--mo-moss-300)" },
    { name: "Ink 500", value: "var(--mo-ink-500)" },
    { name: "Parchment 200", value: "var(--mo-parchment-200)" },
  ] satisfies MonsteraSwatch[],
  spacing: [
    { token: "--mo-space-1", px: 4 },
    { token: "--mo-space-3", px: 12 },
    { token: "--mo-space-5", px: 24 },
    { token: "--mo-space-7", px: 48 },
    { token: "--mo-space-9", px: 96 },
    { token: "--mo-space-10", px: 128 },
  ] satisfies MonsteraSpacingStep[],
  components: {
    buttonLabel: "Press specimen",
    inputPlaceholder: "Field notes…",
    cardTitle: "Specimen No. 014",
    cardBody: "Monstera deliciosa, collected 2026.",
    badgeLabel: "Cataloged",
  } satisfies MonsteraComponents,
  footnote: "Spacing 4→128px · shadows ink-tinted and minimal · radii stay small, like a printed label.",
};
