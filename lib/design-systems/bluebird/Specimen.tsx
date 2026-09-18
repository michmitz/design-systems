import { bluebirdContent } from "./content";
import styles from "./specimen.module.css";

export function BluebirdSpecimen() {
  return (
    <>
      <div className={styles.sectionHeading}>typeface</div>
      <div className={styles.typefaceList}>
        {bluebirdContent.typefaces.map((row) => (
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

      <div className={styles.sectionHeading}>colors — hover to reveal</div>
      <div className={styles.flightPath}>
        {bluebirdContent.swatches.map((swatch, i) => (
          <div
            key={swatch.name}
            className={styles.swatch}
            style={{
              width: swatch.size,
              height: swatch.size,
              background: swatch.value,
              marginBottom: i * 18,
            }}
          >
            <span className={`${styles.swatchLabel} ${swatch.onDark ? styles.swatchLabelOnDark : ""}`}>
              {swatch.name}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>components</div>
      <div className={styles.componentsGrid}>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>button</span>
          <button type="button" className={styles.demoButton}>
            {bluebirdContent.components.buttonLabel}
          </button>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>input</span>
          <div className={styles.demoInput}>{bluebirdContent.components.inputPlaceholder}</div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>card</span>
          <div className={styles.demoCard}>
            <div className={styles.demoCardTitle}>{bluebirdContent.components.cardTitle}</div>
            <div className={styles.demoCardBody}>{bluebirdContent.components.cardBody}</div>
          </div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>badge</span>
          <span className={styles.demoBadge}>{bluebirdContent.components.badgeLabel}</span>
        </div>
      </div>

      <p className={styles.footnote}>{bluebirdContent.footnote}</p>
    </>
  );
}
