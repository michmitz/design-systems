import { bloomContent } from "./content";
import styles from "./specimen.module.css";

// Bloom's own specimen — a typeface card list, overlapping color blobs, and
// rounded controls, instead of the generic Colors/Type/Effects template
// (DESIGN-DIRECTION.md §4). Rendered inside DetailShell by
// app/(bloom)/bloom/page.tsx.
export function BloomSpecimen() {
  return (
    <>
      <div className={styles.sectionHeading}>Typeface</div>
      <div className={styles.typefaceList}>
        {bloomContent.typefaces.map((row) => (
          <div key={row.token} className={styles.typefaceRow}>
            <div className={styles.typefaceMeta}>
              <div className={styles.typefaceToken}>{row.token}</div>
              <div className={styles.typefaceSpec}>{row.spec}</div>
            </div>
            <div className={styles.typefaceSample} style={{ font: row.font }}>
              {row.sample}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Colors — hover to reveal</div>
      <div className={styles.blobCluster}>
        {bloomContent.blobs.map((blob) => (
          <div
            key={blob.name}
            className={styles.blob}
            style={{ width: blob.size, height: blob.size, background: blob.value }}
          >
            <span className={`${styles.blobLabel} ${blob.onDark ? styles.blobLabelOnDark : ""}`}>
              {blob.name}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Components</div>
      <div className={styles.componentsGrid}>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Button</span>
          <button type="button" className={styles.demoButton}>
            {bloomContent.components.buttonLabel}
          </button>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Input</span>
          <div className={styles.demoInput}>{bloomContent.components.inputPlaceholder}</div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Card</span>
          <div className={styles.demoCard}>
            <div className={styles.demoCardTitle}>{bloomContent.components.cardTitle}</div>
            <div className={styles.demoCardBody}>{bloomContent.components.cardBody}</div>
          </div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Badge</span>
          <span className={styles.demoBadge}>{bloomContent.components.badgeLabel}</span>
        </div>
      </div>

      <p className={styles.footnote}>{bloomContent.footnote}</p>
    </>
  );
}
