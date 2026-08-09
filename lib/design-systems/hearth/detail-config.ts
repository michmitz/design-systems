import type { DesignSystemDetailConfig } from "@/components/DesignSystemDetail";

// Content + swatch list copied verbatim from reference/Hearth.dc.html.
export const hearthDetailConfig: DesignSystemDetailConfig = {
  slug: "hearth",
  name: "Hearth",
  tagline: "warm, unhurried, hand-finished",
  taglineItalic: true,
  colorSwatches: [
    { name: "Cream 50", hex: "#FBF6EF" },
    { name: "Cream 100", hex: "#F3ECE1" },
    { name: "Ink 900", hex: "#3A332C" },
    { name: "Ink 500", hex: "#8A8074" },
    { name: "Clay 500", hex: "#C1622D" },
    { name: "Clay 700", hex: "#833C19" },
    { name: "Sage 500", hex: "#6B7A55" },
    { name: "Gold 500", hex: "#D9A441" },
    { name: "Brick 500", hex: "#A63D2E" },
    { name: "Teal 500", hex: "#4E7C79" },
  ],
  displaySample: "Good morning, warmly",
  fontDescription: "Newsreader for display, Figtree for body",
  bodySample:
    "Body copy sits at 16px/1.6 in Figtree — a humanist sans that keeps things legible and friendly across long-form reading.",
  monoLabel: "--font-mono: IBM Plex Mono",
  effectsBoxes: [
    { background: "var(--bg-surface-raised)", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-sm)" },
    { background: "var(--bg-surface-raised)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-md)" },
    { background: "var(--bg-surface-raised)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" },
  ],
  effectsCaption:
    "Spacing scale runs 4 → 128px; shadows are warm-tinted (ink, not black); easing is calm — no bounce.",
  downloadLabel: "Download tokens",
  downloadPreparingLabel: "Preparing…",
  downloadErrorLabel: "Download failed",
};
