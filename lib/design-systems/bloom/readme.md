# Bloom — a soft pastel design system

A from-scratch foundations system: pastel pink, lavender and mint on lavender-white paper, very round corners, and gentle overshoot motion. A contrast point — softer and lighter than Hearth or Slate.

## Content fundamentals

- **Voice:** warm and light, a little whimsical. Short, encouraging sentences.
- **Casing:** sentence case throughout; captions lightly tracked, never shouty.
- **Vibe words:** soft, sweet, gentle, unhurried, light on its feet.
- **Emoji:** not used — softness comes from color, roundness and type, not glyphs.

## Visual foundations

- **Color:** lavender-white paper (`bg-page`) with soft plum-navy ink for text (never pure black — keeps contrast gentle). Three pastel accents — pink (primary), lavender (secondary), mint (tertiary) — plus soft butter/coral/sky for status. Max two accents per composition; pink carries the most weight.
- **Type:** Nunito throughout (700 for display/headings, 500 for body) — one rounded, friendly sans, no serif. IBM Plex Mono for code/data.
- **Backgrounds:** flat lavender-white, no gradients. Cards float on white with a soft diffuse pastel-tinted shadow (lavender/pink-tinted, never gray or black).
- **Radii:** very round — 14/22/32px steps, plus full-pill; this system is the roundest of the four.
- **Shadows:** soft, diffuse, color-tinted (pink/lavender, not neutral gray) — sm/md/lg depth, plus an optional glow for the primary accent.
- **Borders:** thin and rare — most separation comes from shadow and color, not outline; hairline reserved for flat surfaces without elevation.
- **Motion:** gentle overshoot ease `cubic-bezier(0.34,0.2,0.2,1.1)` for hover/lift, standard ease for color fades. 160ms micro / 260ms base — a touch slower and softer than the other three systems.
- **Transparency/blur:** unused — flat pastel surfaces only.
- **Imagery:** none included. If added, soft, light, high-key photography would fit best; avoid harsh contrast or saturated imagery.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`.
- `guidelines/` — foundation specimen cards.

## Caveats

- Foundations only — no components/UI kit built yet.
- Tokens are `--b-` prefixed to avoid collisions with Hearth (unprefixed) and Slate (`--s-`).
- Fonts load from Google Fonts CDN (Nunito, IBM Plex Mono).
