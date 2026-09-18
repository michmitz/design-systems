// Bloom's own specimen content — soft/playful: overlapping color blobs and
// rounded controls, rather than the generic Colors/Type/Effects template.
// `onDark: true` means the blob is dark enough to need a light label.
export type BloomBlob = { name: string; value: string; size: number; onDark?: boolean };

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
  heroLine1: "Hello",
  heroPill: "world",
  heroCaption: "Nunito, one rounded sans — friendly and round from display size down to captions.",
  blobs: [
    { name: "Pink 500", value: "var(--b-pink-500)", size: 132 },
    { name: "Lavender 500", value: "var(--b-lavender-500)", size: 100 },
    { name: "Mint 500", value: "var(--b-mint-500)", size: 116 },
    { name: "Butter 500", value: "var(--b-butter-500)", size: 84 },
    { name: "Coral 500", value: "var(--b-coral-500)", size: 108 },
    { name: "Sky 500", value: "var(--b-sky-500)", size: 92 },
    { name: "Ink 900", value: "var(--b-ink-900)", size: 76, onDark: true },
  ] satisfies BloomBlob[],
  components: {
    buttonLabel: "Say hello",
    inputPlaceholder: "you@site.com",
    cardTitle: "Bloom",
    cardBody: "A little note, just because.",
    badgeLabel: "New",
  } satisfies BloomComponents,
  footnote: "Spacing 4→128px · shadows soft and pastel-tinted · easing gently overshoots on hover.",
};
