import Image from "next/image";

// Shared mechanic (DESIGN-DIRECTION.md §12): a grid of pinned reference
// images, each linking out to its Pinterest pin. Deliberately dumb — a
// static image plus a link — so we don't need the Pinterest API. Any design
// set can add its own pinboard by creating an inspiration-links.ts (see
// lib/design-systems/monstera/inspiration-links.ts) and a matching set of
// classes in its own specimen.module.css; the visual treatment (rotation,
// borders, pin marks, hover) lives entirely in that CSS, not here.
export type InspirationPin = {
  href: string;
  image: string;
  alt: string;
};

export type InspirationGridClasses = {
  grid: string;
  item: string;
  imageWrap: string;
  image?: string;
  pinDot?: string;
  overlay?: string;
};

export function InspirationGrid({
  pins,
  classes,
}: {
  pins: InspirationPin[];
  classes: InspirationGridClasses;
}) {
  return (
    <div className={classes.grid}>
      {pins.map((pin) => (
        <a key={pin.href} href={pin.href} target="_blank" rel="noopener noreferrer" className={classes.item}>
          {classes.pinDot ? <span className={classes.pinDot} aria-hidden="true" /> : null}
          <span className={classes.imageWrap}>
            <Image
              src={pin.image}
              alt={pin.alt}
              fill
              sizes="(min-width: 900px) 25vw, (min-width: 600px) 33vw, 50vw"
              className={classes.image}
            />
          </span>
          {classes.overlay ? <span className={classes.overlay}>View pin ↗</span> : null}
          <span className="sr-only">Opens the original pin on Pinterest</span>
        </a>
      ))}
    </div>
  );
}
