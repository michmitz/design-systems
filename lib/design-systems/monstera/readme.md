# Monstera — a botanical field-guide system

A from-scratch foundations system built around a herbarium/specimen-sheet idea: parchment paper, moss and stone tones, and a typewritten catalog voice. No existing brand was attached — palette and type were invented to feel pressed, cataloged, and quietly botanical rather than lush or tropical.

## Content fundamentals

- **Voice:** a field notebook, not a plant shop — factual, catalog-like, slightly clinical in a warm way. Short labels over sentences.
- **Casing:** sentence case for body copy; small caps-style uppercase (letter-spaced, mono) for tags, tokens, and specimen labels.
- **Vibe words:** pressed, cataloged, archival, quiet, precise.
- **Emoji:** not used.

## Visual foundations

- **Color:** off-white parchment (`parchment-50/100/200`) as the base, warm near-black ink for text, moss green as the single accent family (700/500/300), plus stone/ink grays for secondary weight. Danger/warning are muted, off-palette on purpose — reserved for status only, never composition.
- **Type:** Playfair Display (serif, upright for headings, italic for annotations) for display moments; Karla (humanist sans) for body and UI; Space Mono for every label, token, and caption — the field-guide "typed tag" running through the whole system.
- **Backgrounds:** flat parchment, no gradients or photography in the base system.
- **Radii:** small and restrained — 2/4/8px — closer to a printed label than a soft UI surface.
- **Shadows:** minimal and ink-tinted, just enough to lift a card off the page like a pinned specimen.
- **Borders:** hairline (14% ink) by default, a stronger 26% variant for emphasis; moss for accent/focus.
- **Motion:** standard ease, no bounce — 120ms micro, 200ms base. Calm and precise.
- **Imagery:** the Inspiration section is a small pinboard of externally sourced reference images, each linking back to its Pinterest pin rather than mirroring the Pinterest API.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`.
- `inspiration-links.ts` — pinboard data (image + source link) for the Inspiration section.

## Caveats

- Foundations only — no components/UI kit built yet.
- Tokens are `--mo-` prefixed to avoid collisions with the other four systems.
- Fonts load from Google Fonts CDN (Playfair Display, Karla, Space Mono).
- The Inspiration pinboard is Monstera-only for now; other sets may get one later using the same `components/InspirationGrid.tsx`.
