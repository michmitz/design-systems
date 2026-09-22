# bluebird — a bubbly spring design system

A from-scratch foundations system: sky blue, sunny yellow and a warm rust accent on pale morning-sky white, big round shapes, and a joyful bounce on hover. The name stays lowercase everywhere — headings, wordmark, even here — matching the system's quiet, unshowy voice.

## Content fundamentals

- **Voice:** warm, kind, plain-spoken. Short sentences, simple words — the joy comes through in color and shape, not exclamation points.
- **Casing:** lowercase throughout — headings, labels, buttons, the name itself. No ALL CAPS, ever.
- **Vibe words:** spring, joy, luck, peace, kindness, simplicity.
- **Emoji:** not used — joy comes from color, roundness and motion, not glyphs.

## Visual foundations

- **Color:** pale sky-white paper (`bg-page`) with deep sky-navy ink for text (never pure black). Three accents — sky (primary), sun (secondary), rust (tertiary) — plus leaf green for success. Max two accents per composition; sky carries the most weight.
- **Type:** Comfortaa (rounded, bubbly, geometric) for display/headline moments only; Mulish (plain, simple sans) for everything functional — body, labels, UI. Keeping the bubble in headlines only is what keeps this system calm at small sizes rather than overwhelming. JetBrains Mono for code/data.
- **Backgrounds:** flat pale sky-blue, no gradients. Cards float on white with a soft sky-tinted shadow.
- **Radii:** round and getting rounder — 16/28/40px steps, plus full-pill. Bigger jumps than a typical system for a bubble-like feel without applying it everywhere.
- **Shadows:** soft, diffuse, blue-tinted (never gray or black) — sm/md/lg depth, plus a sun-colored glow for the primary accent.
- **Borders:** thin and rare — most separation comes from shadow and color, not outline.
- **Motion:** a joyful bounce `cubic-bezier(0.34,1.56,0.64,1)` for hover/press, standard ease for color fades. 150ms micro / 240ms base — snappier and springier than a gentle system.
- **Transparency/blur:** unused — flat surfaces only.
- **Imagery:** none included. If added, soft daylight photography (spring mornings, open sky) would fit; avoid moody or high-contrast imagery.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`.

## Caveats

- Foundations only — no components/UI kit built yet.
- Tokens are `--bb-` prefixed to avoid collisions with Hearth (unprefixed) and Slate (`--s-`).
- Fonts load from Google Fonts CDN (Comfortaa, Mulish, JetBrains Mono).
