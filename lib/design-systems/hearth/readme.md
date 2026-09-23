# Hearth — a warm, human design system

A from-scratch foundations system built for a personal portfolio / fun project. No existing brand or codebase was attached, so the palette, type, and tone below are original — invented to feel warm, unhurried, and hand-finished rather than corporate or SaaS-generic.

## Content fundamentals

- **Voice:** warm and direct, plainspoken. Second person ("you"), contractions welcome, no corporate hedging, no poetic scene-setting.
- **Casing:** sentence case everywhere — headings, buttons, labels. No ALL CAPS except tiny eyebrow/caption labels, and even those stay light (letter-spaced, not shouty).
- **Vibe words:** warm, direct, unpretentious, hand-finished.
- **Emoji:** not used. Warmth comes from color and type — not word choice or glyphs.
- **Example line:** *"Body copy sits at 16px/1.6 in Figtree."* / *"Spacing runs 4 → 128px."*

## Visual foundations

- **Color:** cream/paper neutrals (`cream-50/100/200`, `paper-0`) as the base, warm ink browns for text (never pure black), with three accent families — clay (primary), sage (secondary), gold (tertiary) — plus brick (danger) and teal (info) for semantic states. Max two accents active in any one composition; clay carries most of the weight.
- **Type:** Newsreader (serif, sometimes italic) for display moments and personality; Figtree (humanist sans) for everything functional — body copy, UI labels, headings below H1; IBM Plex Mono for code/data. Display serif is used sparingly, as an accent, not throughout.
- **Backgrounds:** flat warm cream, no gradients, no photography/imagery required. Cards sit on a slightly deeper "surface" tone or float on paper-white with a soft shadow — never glassy/blurred.
- **Radii:** soft but restrained — 8/14/22px steps, plus a full-pill for chips/avatars. Not maximally rounded; corners read as "eased," not "bubbly."
- **Shadows:** warm-tinted (brown, not black) and soft — sm/md/lg depth steps, used to imply a raised paper surface, never a hard drop shadow.
- **Borders:** hairline (12% ink) by default; a stronger 22% variant for emphasis; a 2px accent-colored border reserved for focus/selected states.
- **Motion:** standard ease `cubic-bezier(0.3,0,0.15,1)`, 140ms for micro (press/scale), 220ms for color/opacity transitions. No bounce, no spring — motion is calm.
- **Hover/press states:** hover deepens the accent one step (clay-500 → clay-600); press deepens again and scales to 0.97. No lightening on hover — this system gets warmer/darker, not lighter, when touched.
- **Transparency/blur:** essentially unused — surfaces are opaque paper tones, not glass.
- **Imagery:** none included (no source photography was provided). If added later, warm/natural-light photography with minimal color grading would fit; avoid cool/blue-toned or heavily desaturated imagery.

## Iconography

No icon set was provided. If icons are needed, a simple line-icon set (e.g. Lucide, similar 1.5–2px stroke weight, rounded joins) from CDN would suit the warm/human feel best. No emoji-as-icon usage.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/colors.css` — palette + semantic color aliases.
- `tokens/typography.css` — font faces (Google Fonts import), type scale.
- `tokens/spacing.css` — 4px-based spacing scale.
- `tokens/effects.css` — radii, shadows, easing/duration.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.

## Caveats

- No brand/codebase/Figma was attached — this is an original palette and type pairing built to spec ("warm & human"), not derived from an existing brand.
- Foundations only, per scope — no components or UI kit built yet.
- Fonts are loaded from Google Fonts CDN (Newsreader, Figtree, IBM Plex Mono); no local font files needed.
