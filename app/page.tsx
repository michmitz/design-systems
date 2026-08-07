import Link from "next/link";
import { galleryCards } from "@/lib/design-systems/gallery-data";
import styles from "./page.module.css";

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Design systems</h1>
        <p className={styles.intro}>
          A small library of visual languages I&apos;ve built — click through to
          explore each one&apos;s colors, type, and foundations, or download the
          source tokens.
        </p>
        <div className={styles.grid}>
          {galleryCards.map((card) => (
            <Link
              key={card.slug}
              href={card.href}
              className={styles.card}
              style={{
                background: card.cardBackground,
                border: card.cardBorder,
              }}
            >
              <div
                className={styles.swatchStrip}
                style={{ background: card.swatchStripBackground }}
              >
                {card.swatches.map((color, i) => (
                  <div
                    key={i}
                    className={styles.swatch}
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className={styles.cardBody}>
                <p
                  className={styles.cardTitle}
                  style={{
                    color: card.titleColor,
                    font: card.titleFont,
                  }}
                >
                  {card.name}
                </p>
                <p
                  className={styles.cardDescription}
                  style={{ color: card.descriptionColor }}
                >
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
