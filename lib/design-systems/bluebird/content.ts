// bluebird's own specimen content — spring/joy: a rising flight path of
// color circles, and a lowercase wordmark throughout (the name is never
// capitalized — see readme.md).
export type BluebirdSwatch = { name: string; value: string; size: number; onDark?: boolean };
export type BluebirdTypefaceRow = { token: string; spec: string; font: string; sample: string };
export type BluebirdSpacingStep = { token: string; px: number };

// The 2x2 Components grid — button, input, card, badge, in bluebird's own
// lowercase, spring-morning voice.
export type BluebirdComponents = {
  buttonLabel: string;
  inputPlaceholder: string;
  cardTitle: string;
  cardBody: string;
  badgeLabel: string;
};

export const bluebirdContent = {
  slug: "bluebird" as const,
  name: "bluebird",
  tagline: "spring, joy, simple",
  downloadLabel: "download tokens",
  downloadPreparingLabel: "preparing…",
  downloadErrorLabel: "download failed",
  typefaces: [
    { token: "--bb-text-display-1", spec: "700 3.5rem/1.15", font: "var(--bb-text-display-1)", sample: "spring, joy" },
    { token: "--bb-text-h2", spec: "700 1.5rem/1.3", font: "var(--bb-text-h2)", sample: "set in comfortaa" },
    {
      token: "--bb-text-body",
      spec: "400 1rem/1.6",
      font: "var(--bb-text-body)",
      sample: "mulish keeps body copy simple and easy to read.",
    },
    { token: "--bb-text-mono", spec: "400 0.9rem/1.5", font: "var(--bb-text-mono)", sample: "jetbrains mono" },
  ] satisfies BluebirdTypefaceRow[],
  // Arranged along a rising flight path rather than an overlapping cluster —
  // see specimen.module.css's .flightPath.
  swatches: [
    { name: "Sky 500", value: "var(--bb-sky-500)", size: 76 },
    { name: "Sun 300", value: "var(--bb-sun-300)", size: 60 },
    { name: "Rust 500", value: "var(--bb-rust-500)", size: 84 },
    { name: "Sky 300", value: "var(--bb-sky-300)", size: 56 },
    { name: "Sun 500", value: "var(--bb-sun-500)", size: 72 },
    { name: "Leaf 500", value: "var(--bb-leaf-500)", size: 64 },
    { name: "Ink 900", value: "var(--bb-ink-900)", size: 52, onDark: true },
  ] satisfies BluebirdSwatch[],
  spacing: [
    { token: "--bb-space-1", px: 4 },
    { token: "--bb-space-3", px: 12 },
    { token: "--bb-space-5", px: 24 },
    { token: "--bb-space-7", px: 48 },
    { token: "--bb-space-9", px: 96 },
  ] satisfies BluebirdSpacingStep[],
  components: {
    buttonLabel: "say hi",
    inputPlaceholder: "you@nest.com",
    cardTitle: "nest notes",
    cardBody: "logged automatically",
    badgeLabel: "new",
  } satisfies BluebirdComponents,
  footnote: "spacing 4→96px · shadows sky-tinted and soft · easing bounces gently on hover.",
};
