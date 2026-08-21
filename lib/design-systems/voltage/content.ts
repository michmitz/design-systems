// Voltage's own specimen content — not shaped to DesignSystemDetailConfig,
// because Voltage doesn't use the generic Colors/Type/Effects composition
// (see Specimen.tsx). `light: true` means the swatch itself is light enough
// that its hover-revealed label needs dark text, not the usual light one.
export type VoltageSwatch = { name: string; value: string; light?: boolean };

export const voltageContent = {
  slug: "voltage" as const,
  name: "VOLTAGE",
  tagline: "loud, fast, wired for fun",
  downloadLabel: "DOWNLOAD TOKENS",
  downloadPreparingLabel: "PREPARING…",
  downloadErrorLabel: "DOWNLOAD FAILED",
  heroLine1: "HELLO,",
  heroLine2: "LOUD WORLD",
  heroCaption: "Archivo, extra bold — one geometric sans carries the whole scale.",
  swatches: [
    { name: "Bg sunk", value: "var(--v-bg-sunk)" },
    { name: "Surface raised", value: "var(--v-bg-surface-raised)" },
    { name: "Ink 0", value: "var(--v-ink-0)", light: true },
    { name: "Lime 500", value: "var(--v-lime-500)", light: true },
    { name: "Pink 500", value: "var(--v-pink-500)" },
    { name: "Cyan 500", value: "var(--v-cyan-500)", light: true },
    { name: "Yellow 500", value: "var(--v-yellow-500)", light: true },
    { name: "Red 500", value: "var(--v-red-500)" },
  ] satisfies VoltageSwatch[],
  demoButtonLabel: "Buy now",
  demoBadgeLabel: "New",
  demoInputText: "you@site.com",
  footnote:
    'Spacing 4→128px · hard "pop" shadows, no blur · bounce easing on hover.',
};
