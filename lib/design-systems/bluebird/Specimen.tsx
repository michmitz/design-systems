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
