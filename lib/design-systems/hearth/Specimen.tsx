import { hearthContent } from "./content";
import styles from "./specimen.module.css";

// Hearth's own specimen — a typeface spec table, colors as set type, and a
// two-column magazine spread, instead of the generic Colors/Type/Effects
// template (DESIGN-DIRECTION.md §4). Rendered inside DetailShell by
// app/(hearth)/hearth/page.tsx.
export function HearthSpecimen() {
  return (
    <>
      <div className={styles.sectionHeading}>Typeface</div>
      <div className={styles.typefaceTable}>
        {hearthContent.typefaces.map((row) => (
          <div key={row.token} className={styles.typefaceRow}>
            <div className={styles.typefaceToken}>{row.token}</div>
            <div className={styles.typefaceSpec}>{row.spec}</div>
            <div className={styles.typefaceSample} style={{ font: row.font }}>
              {row.sample}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Colors</div>
      <div className={styles.legend}>
        {hearthContent.accentLegend.map((item) => (
          <div key={item.name} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: item.value }} />
            <span className={styles.legendName} style={{ color: item.value }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.paperRow}>
        {hearthContent.paperSwatches.map((item) => (
          <div key={item.name} className={styles.paperItem}>
            <div className={styles.paperSwatch} style={{ background: item.value }} />
            <div className={styles.paperCaption}>{item.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>Type &amp; effects</div>
      <div className={styles.spread}>
        <div className={styles.introCol}>
          <p className={styles.introParagraph}>{hearthContent.introParagraph}</p>
        </div>
        <div className={styles.sidebarCol}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarLabel}>{hearthContent.sidebarLabel}</div>
            <div className={styles.sidebarCaption}>{hearthContent.sidebarCaption}</div>
          </div>
        </div>
      </div>

      <div className={styles.sectionHeading}>Components</div>
      <div className={styles.componentsGrid}>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Button</span>
          <button type="button" className={styles.demoButton}>
            {hearthContent.components.buttonLabel}
          </button>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Input</span>
          <div className={styles.demoInput}>{hearthContent.components.inputPlaceholder}</div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Card</span>
          <div className={styles.demoCard}>
            <div className={styles.demoCardTitle}>{hearthContent.components.cardTitle}</div>
            <div className={styles.demoCardBody}>{hearthContent.components.cardBody}</div>
          </div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Badge</span>
          <span className={styles.demoBadge}>{hearthContent.components.badgeLabel}</span>
        </div>
      </div>
    </>
  );
}
