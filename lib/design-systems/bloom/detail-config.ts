import type { DesignSystemDetailConfig } from "@/components/DesignSystemDetail";

// Content + swatch list copied verbatim from reference/Bloom.dc.html.
export const bloomDetailConfig: DesignSystemDetailConfig = {
  name: "Bloom",
  tagline: "soft, sweet, unhurried",
  colorSwatches: [
    { name: "Pink 500", hex: "#F48FB1" },
    { name: "Pink 600", hex: "#EC6FA0" },
    { name: "Lavender 500", hex: "#B39DDB" },
    { name: "Mint 500", hex: "#80CBC4" },
    { name: "Butter 500", hex: "#FFE082" },
    { name: "Coral 500", hex: "#FFAB91" },
    { name: "Sky 500", hex: "#90CAF9" },
    { name: "Ink 900", hex: "#3D3552" },
    { name: "Bg page", hex: "#FFFBFE" },
  ],
  displaySample: "Hello, gentle world",
  fontDescription: "Nunito, one rounded sans",
  bodySample:
    "Body copy sits at 16px/1.6 in Nunito medium — friendly and round from display size down to captions.",
  monoLabel: "--b-font-mono: IBM Plex Mono",
  effectsBoxes: [
    { background: "var(--b-bg-surface-raised)", borderRadius: "var(--b-radius-sm)", boxShadow: "var(--b-shadow-sm)" },
    { background: "var(--b-bg-surface-raised)", borderRadius: "var(--b-radius-md)", boxShadow: "var(--b-shadow-md)" },
    { background: "var(--b-accent-primary)", borderRadius: "var(--b-radius-lg)", boxShadow: "var(--b-shadow-glow)" },
  ],
  effectsCaption:
    "Spacing scale runs 4 → 128px; shadows are soft and pastel-tinted; easing gently overshoots on hover for a light, floaty feel.",
  downloadLabel: "Download tokens",
};
