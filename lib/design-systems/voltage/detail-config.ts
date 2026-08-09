import type { DesignSystemDetailConfig } from "@/components/DesignSystemDetail";

// Content + swatch list copied verbatim from reference/Voltage.dc.html —
// including the uppercase "VOLTAGE"/"DOWNLOAD TOKENS" literal text.
export const voltageDetailConfig: DesignSystemDetailConfig = {
  slug: "voltage",
  name: "VOLTAGE",
  tagline: "loud, fast, wired for fun",
  colorSwatches: [
    { name: "Bg sunk", hex: "#050507" },
    { name: "Surface raised", hex: "#1D1D28" },
    { name: "Ink 0", hex: "#F7F7FA" },
    { name: "Lime 500", hex: "#C6FF3D" },
    { name: "Lime 600", hex: "#A8DE1F" },
    { name: "Pink 500", hex: "#FF3CAC" },
    { name: "Cyan 500", hex: "#00E5FF" },
    { name: "Yellow 500", hex: "#FFD23C" },
    { name: "Red 500", hex: "#FF4D4D" },
  ],
  displaySample: "HELLO, LOUD WORLD",
  fontDescription: "Archivo, extra bold",
  bodySample:
    "Body copy sits at 16px/1.6 in Archivo medium — one geometric sans family carries the whole scale, from whisper to shout.",
  monoLabel: "--v-font-mono: Space Mono",
  effectsBoxes: [
    {
      background: "var(--v-bg-surface-raised)",
      border: "2px solid var(--v-ink-0)",
      borderRadius: "var(--v-radius-sm)",
      boxShadow: "var(--v-shadow-pop-sm)",
    },
    {
      background: "var(--v-bg-surface-raised)",
      border: "2px solid var(--v-ink-0)",
      borderRadius: "var(--v-radius-md)",
      boxShadow: "var(--v-shadow-pop-md)",
    },
    {
      background: "var(--v-accent-primary)",
      borderRadius: "var(--v-radius-lg)",
      boxShadow: "var(--v-shadow-pop-lg)",
    },
  ],
  effectsCaption:
    'Spacing scale runs 4 → 128px; shadows are hard offset "pop" shapes, not soft blurs; easing overshoots on hover for a bouncy, arcade feel.',
  downloadLabel: "DOWNLOAD TOKENS",
  downloadPreparingLabel: "PREPARING…",
  downloadErrorLabel: "DOWNLOAD FAILED",
};
