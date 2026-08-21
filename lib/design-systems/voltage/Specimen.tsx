import { voltageContent } from "./content";
import styles from "./specimen.module.css";

// Voltage's own specimen — colors, type, and effects demonstrated together
// as one electric/arcade composition, not the generic Colors/Type/Effects
// template (see DESIGN-DIRECTION.md §4). Rendered inside DetailShell by
// app/(voltage)/voltage/page.tsx.
export function VoltageSpecimen() {
  return (
    <>
      <div className={styles.hero}>
        <h2 className={styles.heroLine}>{voltageContent.heroLine1}</h2>
        <h2 className={styles.heroLine}>
          <span className={styles.heroLineAccent}>{voltageContent.heroLine2}</span>
        </h2>
        <p className={styles.heroCaption}>{voltageContent.heroCaption}</p>
      </div>

      <div className={styles.sectionHeading}>Colors — hover to reveal</div>
      <div className={styles.colorRail}>
        {voltageContent.swatches.map((swatch) => (
          <div key={swatch.name} className={styles.colorCell} style={{ background: swatch.value }}>
            <span className={`${styles.colorLabel} ${swatch.light ? styles.colorLabelDark : ""}`}>
              {swatch.name}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>In use</div>
      <div className={styles.uiRow}>
        <button type="button" className={styles.demoButton}>
          {voltageContent.demoButtonLabel}
        </button>
        <span className={styles.demoBadge}>{voltageContent.demoBadgeLabel}</span>
        <div className={styles.demoInput}>{voltageContent.demoInputText}</div>
      </div>

      <p className={styles.footnote}>{voltageContent.footnote}</p>
    </>
  );
}
