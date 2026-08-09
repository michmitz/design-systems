import type { DesignSystemDetailConfig } from "@/components/DesignSystemDetail";

// Content + swatch list copied verbatim from reference/Slate.dc.html.
export const slateDetailConfig: DesignSystemDetailConfig = {
  slug: "slate",
  name: "Slate",
  tagline: "precise, quiet, no color needed",
  colorSwatches: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Gray 100", hex: "#EDEDED" },
    { name: "Gray 200", hex: "#D6D6D6" },
    { name: "Gray 300", hex: "#B8B8B8" },
    { name: "Gray 400", hex: "#8C8C8C" },
    { name: "Gray 500", hex: "#6B6B6B" },
    { name: "Gray 600", hex: "#4A4A4A" },
    { name: "Gray 700", hex: "#2E2E2E" },
    { name: "Black", hex: "#111111" },
  ],
  displaySample: "Precise, quiet, exact",
  fontDescription: "Work Sans, one weight family throughout",
  bodySample:
    "Body copy sits at 16px/1.6 in Work Sans regular — a single sans family carries every size, from display down to caption.",
  monoLabel: "--s-font-mono: IBM Plex Mono",
  effectsBoxes: [
    {
      background: "var(--s-bg-surface-raised)",
      border: "1px solid var(--s-border-hairline)",
      borderRadius: "var(--s-radius-sm)",
    },
    {
      background: "var(--s-bg-surface-raised)",
      border: "1px solid var(--s-border-strong)",
      borderRadius: "var(--s-radius-md)",
    },
    {
      background: "var(--s-black)",
      borderRadius: "var(--s-radius-lg)",
    },
  ],
  effectsCaption:
    "Spacing scale runs 4 → 128px; hairline borders (not shadows) separate surfaces; easing is linear-ish and fast — no bounce.",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
};
