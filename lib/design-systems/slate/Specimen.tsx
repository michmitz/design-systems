import { slateContent } from "./content";
import styles from "./specimen.module.css";

// Slate's own specimen — a spec table, a dense grid, and a ruler, instead
// of the generic Colors/Type/Effects template (DESIGN-DIRECTION.md §4).
// Rendered inside DetailShell by app/(slate)/slate/page.tsx.
export function SlateSpecimen() {
  return (
    <>
      <div className={styles.sectionHeading}>Type scale</div>
      <div className={styles.scaleTable}>
        {slateContent.scale.map((row) => (
          <div key={row.token} className={styles.scaleRow}>
            <div className={styles.scaleToken}>{row.token}</div>
            <div className={styles.scaleSpec}>{row.spec}</div>
            <div className={styles.scaleSample} style={{ font: row.font }}>
              {row.sample}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Palette</div>
      <div className={styles.paletteGrid}>
        {slateContent.swatches.map((swatch) => (
          <div key={swatch.name} className={styles.paletteCell}>
            <div className={styles.paletteSwatch} style={{ background: swatch.value }} />
            <div className={styles.paletteLabel}>{swatch.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Spacing</div>
      <div className={styles.ruler}>
        {slateContent.spacing.map((step) => (
          <div key={step.token} className={styles.rulerItem}>
            <div className={styles.rulerBar} style={{ height: step.px }} />
            <div className={styles.rulerLabel}>{step.px}px</div>
          </div>
        ))}
      </div>
      <p className={styles.footnote}>{slateContent.footnote}</p>
    </>
  );
}
