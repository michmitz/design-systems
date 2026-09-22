import { galleryCards } from "@/lib/design-systems/gallery-data";
import { GalleryCard } from "@/components/GalleryCard";
import styles from "./page.module.css";

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Design systems</h1>
          <p className={styles.meta}>2026</p>
        </div>
        <p className={styles.lede}>
           A small library of curated design themes. Click through to
          explore each one&apos;s colors, type, and examples, or download the
          source tokens.
        </p>
        <div className={styles.list}>
          {galleryCards.map((card, index) => (
            <GalleryCard key={card.slug} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
