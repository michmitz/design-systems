// Bloom's own specimen content — soft/playful: overlapping color blobs and
// rounded controls, rather than the generic Colors/Type/Effects template.
// `onDark: true` means the blob is dark enough to need a light label.
export type BloomBlob = { name: string; value: string; size: number; onDark?: boolean };
export type BloomTypefaceRow = { token: string; spec: string; font: string; sample: string };
export type BloomSpacingStep = { token: string; px: number };

// The 2x2 Components grid — button, input, card, badge, in Bloom's own
// rounded/pastel voice.
export type BloomComponents = {
  buttonLabel: string;
  inputPlaceholder: string;
  cardTitle: string;
  cardBody: string;
  badgeLabel: string;
};

export const bloomContent = {
  slug: "bloom" as const,
  name: "Bloom",
  tagline: "soft, sweet, unhurried",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
  typefaces: [
    { token: "--b-text-display-1", spec: "700 3.75rem/1.1", font: "var(--b-text-display-1)", sample: "Soft & round" },
    { token: "--b-text-h2", spec: "700 1.75rem/1.25", font: "var(--b-text-h2)", sample: "One rounded sans" },
    {
      token: "--b-text-body",
      spec: "500 1rem/1.6",
      font: "var(--b-text-body)",
      sample: "Nunito carries everything, from display size down to captions.",
    },
    { token: "--b-text-mono", spec: "400 0.9rem/1.5", font: "var(--b-text-mono)", sample: "IBM Plex Mono" },
  ] satisfies BloomTypefaceRow[],
  blobs: [
    { name: "Pink 500", value: "var(--b-pink-500)", size: 132 },
    { name: "Lavender 500", value: "var(--b-lavender-500)", size: 100 },
    { name: "Mint 500", value: "var(--b-mint-500)", size: 116 },
    { name: "Butter 500", value: "var(--b-butter-500)", size: 84 },
    { name: "Coral 500", value: "var(--b-coral-500)", size: 108 },
    { name: "Sky 500", value: "var(--b-sky-500)", size: 92 },
    { name: "Ink 900", value: "var(--b-ink-900)", size: 76, onDark: true },
  ] satisfies BloomBlob[],
  spacing: [
    { token: "--b-space-1", px: 4 },
    { token: "--b-space-3", px: 12 },
    { token: "--b-space-5", px: 24 },
    { token: "--b-space-7", px: 48 },
    { token: "--b-space-9", px: 96 },
    { token: "--b-space-10", px: 128 },
  ] satisfies BloomSpacingStep[],
  components: {
    buttonLabel: "Say hello",
    inputPlaceholder: "you@site.com",
    cardTitle: "Bloom",
    cardBody: "A little note, just because.",
    badgeLabel: "New",
  } satisfies BloomComponents,
  footnote: "Spacing 4→128px · shadows soft and pastel-tinted · easing gently overshoots on hover.",
};
