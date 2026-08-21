// Bloom's own specimen content — soft/playful: overlapping color blobs and
// rounded controls, rather than the generic Colors/Type/Effects template.
// `onDark: true` means the blob is dark enough to need a light label.
export type BloomBlob = { name: string; value: string; size: number; onDark?: boolean };

export const bloomContent = {
  slug: "bloom" as const,
  name: "Bloom",
  tagline: "soft, sweet, unhurried",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
  heroLine1: "Hello,",
  heroPill: "gentle world",
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
  demoButtonLabel: "Say hello",
  demoBadgeLabel: "New",
  demoInputText: "you@site.com",
  footnote: "Spacing 4→128px · shadows soft and pastel-tinted · easing gently overshoots on hover.",
};
