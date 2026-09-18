import { InspirationGrid } from "@/components/InspirationGrid";
import { monsteraContent } from "./content";
import { inspirationPins } from "./inspiration-links";
import styles from "./specimen.module.css";

export function MonsteraSpecimen() {
  return (
    <>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>01</span>Typeface
      </div>
      <div className={styles.typefaceStack}>
        {monsteraContent.typefaces.map((row) => (
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

      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>02</span>Color
      </div>
      <div className={styles.paletteRow}>
        {monsteraContent.swatches.map((swatch) => (
          <div key={swatch.name} className={styles.paletteTab}>
            <div className={styles.paletteSwatch} style={{ background: swatch.value }} />
            <div className={styles.paletteLabel}>{swatch.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>03</span>Spacing
      </div>
      <div className={styles.ruler}>
        {monsteraContent.spacing.map((step) => (
          <div key={step.token} className={styles.rulerItem}>
            <div className={styles.rulerBar} style={{ height: step.px }} />
            <div className={styles.rulerLabel}>{step.px}px</div>
          </div>
        ))}
      </div>

      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>04</span>Components
      </div>
      <div className={styles.componentsGrid}>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Button</span>
          <button type="button" className={styles.demoButton}>
            {monsteraContent.components.buttonLabel}
          </button>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Input</span>
          <div className={styles.demoInput}>{monsteraContent.components.inputPlaceholder}</div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Card</span>
          <div className={styles.demoCard}>
            <div className={styles.demoCardTitle}>{monsteraContent.components.cardTitle}</div>
            <div className={styles.demoCardBody}>{monsteraContent.components.cardBody}</div>
          </div>
        </div>
        <div className={styles.componentTile}>
          <span className={styles.componentTileLabel}>Badge</span>
          <span className={styles.demoBadge}>{monsteraContent.components.badgeLabel}</span>
        </div>
      </div>

      <p className={styles.footnote}>{monsteraContent.footnote}</p>

      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>05</span>Inspiration
      </div>
      <InspirationGrid
        pins={inspirationPins}
        classes={{
          grid: styles.inspirationGrid,
          item: styles.inspirationItem,
          imageWrap: styles.inspirationImageWrap,
          image: styles.inspirationImage,
          pinDot: styles.inspirationPinDot,
          overlay: styles.inspirationOverlay,
        }}
      />
    </>
  );
}
