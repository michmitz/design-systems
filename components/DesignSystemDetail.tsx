import type { CSSProperties } from "react";
import { DetailShell } from "./DetailShell";

// `value` is a CSS color — in practice always a var(--...) reference into
// that system's own tokens/colors.css, so the swatch renders the actual
// canonical token rather than a hand-copied hex value that could drift.
export type ColorSwatch = { name: string; value: string };

export type DesignSystemDetailConfig = {
  /** Matches app/api/download/[system]/route.ts's allowed slugs. */
  slug: "hearth" | "slate" | "bluebird";
  name: string;
  tagline: string;
  taglineItalic?: boolean;
  colorSwatches: ColorSwatch[];
  displaySample: string;
  fontDescription: string;
  bodySample: string;
  monoLabel: string;
  /** Small/medium/large radius+shadow demo boxes, in that order. */
  effectsBoxes: [CSSProperties, CSSProperties, CSSProperties];
  effectsCaption: string;
  downloadLabel: string;
  downloadPreparingLabel: string;
  downloadErrorLabel: string;
};

/**
 * A per-system CSS Module's class names — see e.g.
 * lib/design-systems/hearth/detail.module.css. Each system's module defines
 * these using its own prefixed tokens, so the bespoke bits (swatch border vs.
 * shadow, button hover easing, caption casing, etc.) live per-system rather
 * than fighting a one-size-fits-all abstraction.
 *
 * This project has no CSS Modules codegen configured, so a module import's
 * real type is just a loose `{ [key: string]: string }` — TypeScript can't
 * verify specific keys exist, hence `Record<string, string>` rather than
 * named fields. Every class this component reads, beyond DetailShellClasses,
 * is listed here as a reference for whoever writes the next system's module:
 * sectionHeading, colorGrid, swatch, swatchCaption, typeCard, displaySample,
 * fontDescription, bodySample, monoLabel, effectsRow, effectsBox, effectsCaption.
 */
export type DesignSystemDetailClasses = Record<string, string>;

// One specimen composition — "here are the colors, here's the type, here
// are spacing/effects" — built on DetailShell like any other composition
// would be, so it has no special claim on how a detail page looks. Hearth
// and Slate each ended up with their own bespoke
// composition instead (see each system's Specimen.tsx) once the point was
// proven that they didn't have to share this one. Kept here as a ready-made
// option for a future set whose visual idea actually suits a plain grid —
// not dead code, just currently unused.
export function DesignSystemDetail({
  config,
  classes,
}: {
  config: DesignSystemDetailConfig;
  classes: DesignSystemDetailClasses;
}) {
  return (
    <DetailShell
      slug={config.slug}
      name={config.name}
      tagline={config.tagline}
      taglineItalic={config.taglineItalic}
      downloadLabel={config.downloadLabel}
      downloadPreparingLabel={config.downloadPreparingLabel}
      downloadErrorLabel={config.downloadErrorLabel}
      classes={classes}
    >
      <div className={classes.sectionHeading}>Colors</div>
      <div className={classes.colorGrid}>
        {config.colorSwatches.map((swatch) => (
          <div key={swatch.name}>
            <div className={classes.swatch} style={{ background: swatch.value }} />
            <div className={classes.swatchCaption}>{swatch.name}</div>
          </div>
        ))}
      </div>

      <div className={classes.sectionHeading}>Type</div>
      <div className={classes.typeCard}>
        <div className={classes.displaySample}>{config.displaySample}</div>
        <div className={classes.fontDescription}>{config.fontDescription}</div>
        <div className={classes.bodySample}>{config.bodySample}</div>
        <div className={classes.monoLabel}>{config.monoLabel}</div>
      </div>

      <div className={classes.sectionHeading}>Spacing &amp; effects</div>
      <div className={classes.effectsRow}>
        {config.effectsBoxes.map((style, i) => (
          <div key={i} className={classes.effectsBox} style={style} />
        ))}
      </div>
      <div className={classes.effectsCaption}>{config.effectsCaption}</div>
    </DetailShell>
  );
}
