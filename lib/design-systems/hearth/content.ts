// Hearth's own specimen content — editorial: a huge serif hero, colors as
// set type rather than swatches, and a two-column magazine spread — rather
// than the generic Colors/Type/Effects template. See Specimen.tsx.
export type HearthLegendItem = { name: string; value: string };

// The 2x2 Components grid — button, input, card, badge, in Hearth's warm
// editorial voice.
export type HearthComponents = {
  buttonLabel: string;
  inputPlaceholder: string;
  cardTitle: string;
  cardBody: string;
  badgeLabel: string;
};

export const hearthContent = {
  slug: "hearth" as const,
  name: "Hearth",
  tagline: "warm, unhurried, hand-finished",
  taglineItalic: true,
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
  heroLead: "Hello",
  heroAccent: "world.",
  heroCaption: "A quiet note on color, type, and light.",
  // Accent colors carry enough contrast to read as their own colored word.
  accentLegend: [
    { name: "Ink 900", value: "var(--color-ink-900)" },
    { name: "Clay 500", value: "var(--color-clay-500)" },
    { name: "Clay 700", value: "var(--color-clay-700)" },
    { name: "Sage 500", value: "var(--color-sage-500)" },
    { name: "Gold 500", value: "var(--color-gold-500)" },
    { name: "Brick 500", value: "var(--color-brick-500)" },
    { name: "Teal 500", value: "var(--color-teal-500)" },
  ] satisfies HearthLegendItem[],
  // Paper/neutral tones stay quiet — small chips, not colored words.
  paperSwatches: [
    { name: "Cream 50", value: "var(--color-cream-50)" },
    { name: "Cream 100", value: "var(--color-cream-100)" },
    { name: "Ink 500", value: "var(--color-ink-500)" },
  ] satisfies HearthLegendItem[],
  introParagraph:
    "Body copy sits at 16px/1.6 in Figtree — a humanist sans that keeps things legible and friendly across long-form reading, from captions up through full articles.",
  sidebarLabel: "--font-mono: IBM Plex Mono",
  sidebarCaption:
    "Spacing scale runs 4 → 128px; shadows are warm-tinted (ink, not black); easing is calm — no bounce.",
  components: {
    buttonLabel: "Subscribe",
    inputPlaceholder: "you@hearth.co",
    cardTitle: "Field Notes",
    cardBody: "Autumn issue, out now.",
    badgeLabel: "Essay",
  } satisfies HearthComponents,
};
