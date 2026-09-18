# Slate — a monochrome, precise design system

A from-scratch foundations system built as a contrast point: pure grayscale (no hue at all), sharp corners, thin hairlines, and calm linear motion. Where Hearth is warm, Slate is quiet and exact.

## Content fundamentals

- **Voice:** plain and precise. Short, declarative sentences; no flourish, no hedging.
- **Casing:** sentence case for headings and body; tracked uppercase reserved for tiny captions/labels only.
- **Vibe words:** precise, quiet, exact, restrained.
- **Emoji:** not used.

## Visual foundations

- **Color:** a single achromatic ramp (white → gray-100…800 → black). Black is the *only* accent — used for primary buttons, active states, and emphasis. No hue is introduced anywhere, including status colors (success/warning/danger/info are all differentiated by icon/label, not color, or by gray-scale weight if truly needed).
- **Type:** Work Sans throughout (700 for display/headings with tight -0.02em tracking, 400/500 for body) — one geometric-leaning humanist sans, no serif. IBM Plex Mono for code/data.
- **Backgrounds:** flat white/near-white. Cards sit on white with a thin 1px hairline border — elevation comes from a border, not a shadow, in the default state.
- **Radii:** sharp — 2/4/8px steps, plus full-pill only for pills/avatars. Deliberately less rounded than Hearth.
- **Shadows:** minimal and rarely used; hairline borders do the separating work. When used, shadows are small and neutral-gray, never colored.
- **Borders:** the primary structuring device — 1px hairline by default, thicker/black for emphasis or focus.
- **Motion:** snappy, linear-ish ease `cubic-bezier(0.4,0,0.2,1)`, 100ms micro / 180ms base. No bounce, no overshoot — motion communicates state, not personality.
- **Transparency/blur:** unused.
- **Imagery:** none included. If added, black-and-white or fully desaturated photography would be the only fit — any color image breaks the system's core constraint.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`.
- `guidelines/` — foundation specimen cards.

## Caveats

- Foundations only — no components/UI kit built yet.
- Tokens are `--s-` prefixed to avoid collisions with Hearth (`--`/unprefixed) when systems share a page.
- Fonts load from Google Fonts CDN (Work Sans, IBM Plex Mono).
