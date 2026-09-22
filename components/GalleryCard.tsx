import Link from "next/link";
import type { CSSProperties } from "react";
import type { GalleryCard as GalleryCardData } from "@/lib/design-systems/gallery-data";
import styles from "./GalleryCard.module.css";

// A gallery row card renders entirely off CSS custom properties supplied by
// its data (see gallery-data.ts) — the module below has no per-system
// selectors, just structure. That's what lets one component serve five
// visually distinct systems: `data-system` is present only for debugging,
// nothing in the CSS keys off it.
//
// Entrance stagger is the one thing derived from `index` rather than data:
// cards rise in 240ms, +70ms each; each card's four color bands wipe in
// starting 380ms + index*70ms, then +60/+50/+50ms apart (see
// Gallery-Cards-Update.md's "Entrance animation" section).
export function GalleryCard({ card, index }: { card: GalleryCardData; index: number }) {
  const cardDelay = 240 + index * 70;
  const bandBase = 380 + index * 70;
  const bandDelays = [bandBase, bandBase + 60, bandBase + 110, bandBase + 160];

  const style = {
    "--card-bg": card.cardBackground,
    "--card-border": card.cardBorder,
    "--card-radius": card.radius,
    "--card-shadow-rest": card.shadowRest,
    "--card-shadow-hover": card.shadowHover,
    "--card-ease": card.easing,
    "--card-duration": card.duration,
    "--card-delay": `${cardDelay}ms`,
    "--text-pad-x": card.textPaddingX,

    "--name-font": card.nameFont,
    "--name-color": card.nameColor,
    "--name-ls": card.nameLetterSpacing ?? "normal",
    "--name-lh": card.nameLineHeight,

    "--tagline-font": card.taglineFont,
    "--tagline-color": card.taglineColor,

    "--mono-font": card.monoFont,
    "--mono-color": card.monoColor,
    "--mono-ls": card.monoLetterSpacing,

    "--veil": card.veil,
    "--pill-color": card.pillColor,
    "--pill-border": card.pillBorder,
    "--pill-radius": card.pillRadius,
    "--pill-font": card.pillFont,
    "--pill-ls": card.pillLetterSpacing,
  } as CSSProperties;

  return (
    <Link
      href={card.href}
      data-system={card.slug}
      className={`${styles.card} ${card.fontVariableClassName ?? ""}`}
      style={style}
    >
      <div className={styles.textZone}>
        <div className={styles.textStack}>
          <span className={styles.name}>{card.name}</span>
          <span className={styles.tagline}>{card.tagline}</span>
          <span className={styles.monoLine}>{card.fontStackLabel}</span>
        </div>
        <div className={styles.overlay}>
          <span className={styles.pill}>
            View more
            <span className={styles.pillArrow} aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
      <div className={styles.colorField}>
        {card.bands.map((color, i) => (
          <div
            key={i}
            className={styles.band}
            style={{
              background: color,
              animationDelay: `${bandDelays[i]}ms`,
            } as CSSProperties}
          />
        ))}
      </div>
    </Link>
  );
}
