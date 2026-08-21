import { bluebirdContent } from "./content";
import styles from "./specimen.module.css";

export function BluebirdSpecimen() {
  return (
    <>
      <div className={styles.hero}>
        <h2 className={styles.heroLine}>{bluebirdContent.heroLine1}</h2>
        <h2 className={styles.heroLine}>
          <span className={styles.heroPill}>{bluebirdContent.heroPill}</span>
        </h2>
        <p className={styles.heroCaption}>{bluebirdContent.heroCaption}</p>
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

      <div className={styles.sectionHeading}>in use</div>
      <div className={styles.uiRow}>
        <button type="button" className={styles.demoButton}>
          {bluebirdContent.demoButtonLabel}
        </button>
        <span className={styles.demoBadge}>{bluebirdContent.demoBadgeLabel}</span>
        <div className={styles.demoInput}>{bluebirdContent.demoInputText}</div>
      </div>

      <p className={styles.footnote}>{bluebirdContent.footnote}</p>
    </>
  );
}
