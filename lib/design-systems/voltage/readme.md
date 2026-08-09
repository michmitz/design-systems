# Voltage — a loud, playful, dark-mode-first design system

A from-scratch foundations system, built as a deliberate contrast to Hearth: high-contrast dark surfaces, neon accents, bold geometric type, and bouncy motion — arcade energy instead of quiet warmth.

## Content fundamentals

- **Voice:** loud, punchy, a little cheeky. Short sentences, exclamation-friendly, no corporate hedging.
- **Casing:** headings can go UPPERCASE for maximum punch; body copy stays sentence case for readability.
- **Vibe words:** loud, fast, wired, arcade, electric.
- **Emoji:** not used — punch comes from color/type/motion, not glyphs.

## Visual foundations

- **Color:** near-black surfaces (`bg-sunk`, `bg-page`, `bg-surface`, `bg-surface-raised`) with off-white ink text, and three neon accents — lime (primary), pink (secondary), cyan (tertiary). Max two accents active per composition; lime carries most weight and gets the glow treatment.
- **Type:** Archivo (extra-bold 800 for display/headings, 500/600 for body) — one bold geometric sans throughout, no serif. Space Mono for code/data accents.
- **Backgrounds:** flat near-black, no gradients. Cards float on `surface-raised` with a thick light border and a hard offset "pop" shadow — never soft/blurred.
- **Radii:** chunky — 10/16/28px steps, plus full-pill.
- **Shadows:** hard-edged offset "pop" shadows (`3px 3px 0` → `10px 10px 0`, pure black) for a stickers-on-a-desk feel, plus an optional lime glow for the primary accent. No soft/diffuse shadows.
- **Borders:** 2px solid off-white/ink outlines on raised elements — bold, visible, part of the look (not a subtle hairline default).
- **Motion:** bouncy overshoot ease `cubic-bezier(0.34,1.56,0.64,1)`, fast (120ms) for presses, 200ms for larger moves. Hover lifts an element and grows its shadow; press slams it flat (shadow to none, translate into the shadow's offset).
- **Transparency/blur:** unused — flat opaque surfaces only.
- **Imagery:** none included. If added, high-contrast/graphic imagery (not soft photography) would fit best.

## Index

- `styles.css` — root stylesheet for this system, import this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).

## Caveats

- Foundations only — no components/UI kit built yet.
- All tokens are namespaced with a `--v-` prefix to avoid collisions with Hearth's tokens when both are loaded on the same page.
- Fonts load from Google Fonts CDN (Archivo, Space Mono).
