import { bloomContent } from "./content";
import styles from "./specimen.module.css";

// Bloom's own specimen — overlapping color blobs and rounded controls,
// instead of the generic Colors/Type/Effects template (DESIGN-DIRECTION.md
// §4). Rendered inside DetailShell by app/(bloom)/bloom/page.tsx.
export function BloomSpecimen() {
  return (
    <>
      <div className={styles.hero}>
        <h2 className={styles.heroLine}>{bloomContent.heroLine1}</h2>
        <h2 className={styles.heroLine}>
          <span className={styles.heroPill}>{bloomContent.heroPill}</span>
        </h2>
        <p className={styles.heroCaption}>{bloomContent.heroCaption}</p>
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

      <div className={styles.sectionHeading}>In use</div>
      <div className={styles.uiRow}>
        <button type="button" className={styles.demoButton}>
          {bloomContent.demoButtonLabel}
        </button>
        <span className={styles.demoBadge}>{bloomContent.demoBadgeLabel}</span>
        <div className={styles.demoInput}>{bloomContent.demoInputText}</div>
      </div>

      <p className={styles.footnote}>{bloomContent.footnote}</p>
    </>
  );
}
