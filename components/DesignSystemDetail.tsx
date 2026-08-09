import Link from "next/link";
import type { CSSProperties } from "react";

export type ColorSwatch = { name: string; hex: string };

export type DesignSystemDetailConfig = {
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
 * named fields. Every class this component reads is listed here as a
 * reference for whoever writes the next system's module:
 * page, container, backLink, headerRow, name, tagline, downloadButton,
 * sectionHeading, colorGrid, swatch, swatchCaption, typeCard, displaySample,
 * fontDescription, bodySample, monoLabel, effectsRow, effectsBox, effectsCaption.
 */
export type DesignSystemDetailClasses = Record<string, string>;

// Shared structure for all four systems' detail pages (Screens section,
// item 2, in the README) — content and every visual value come from
// `config`/`classes`, driven by a per-system CSS Module + config object.
// The "Download tokens" button renders here but isn't wired up yet — zip
// generation is a later step.
export function DesignSystemDetail({
  config,
  classes,
}: {
  config: DesignSystemDetailConfig;
  classes: DesignSystemDetailClasses;
}) {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <Link href="/" className={classes.backLink}>
          ← All design systems
        </Link>

        <div className={classes.headerRow}>
          <div>
            <div className={classes.name}>{config.name}</div>
            <div
              className={classes.tagline}
              style={config.taglineItalic ? { fontStyle: "italic" } : undefined}
            >
              {config.tagline}
            </div>
          </div>
          <button type="button" className={classes.downloadButton}>
            {config.downloadLabel}
          </button>
        </div>

        <div className={classes.sectionHeading}>Colors</div>
        <div className={classes.colorGrid}>
          {config.colorSwatches.map((swatch) => (
            <div key={swatch.name}>
              <div className={classes.swatch} style={{ background: swatch.hex }} />
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
      </div>
    </div>
  );
}
