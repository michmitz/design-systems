// bluebird's own specimen content — spring/joy: a rising flight path of
// color circles instead of Bloom's overlapping cluster, and a lowercase
// wordmark throughout (the name is never capitalized — see readme.md).
export type BluebirdSwatch = { name: string; value: string; size: number; onDark?: boolean };

export const bluebirdContent = {
  slug: "bluebird" as const,
  name: "bluebird",
  tagline: "spring, joy, simplicity",
  downloadLabel: "download tokens",
  downloadPreparingLabel: "preparing…",
  downloadErrorLabel: "download failed",
  heroLine1: "good morning,",
  heroPill: "little bird",
  heroCaption: "comfortaa carries the joy in headlines; mulish keeps everything else simple and easy to read.",
  // Arranged along a rising flight path rather than an overlapping cluster —
  // see specimen.module.css's .flightPath.
  swatches: [
    { name: "Sky 500", value: "var(--bb-sky-500)", size: 76 },
    { name: "Sun 300", value: "var(--bb-sun-300)", size: 60 },
    { name: "Rust 500", value: "var(--bb-rust-500)", size: 84 },
    { name: "Sky 300", value: "var(--bb-sky-300)", size: 56 },
    { name: "Sun 500", value: "var(--bb-sun-500)", size: 72 },
    { name: "Leaf 500", value: "var(--bb-leaf-500)", size: 64 },
    { name: "Ink 900", value: "var(--bb-ink-900)", size: 52, onDark: true },
  ] satisfies BluebirdSwatch[],
  demoButtonLabel: "say hi",
  demoBadgeLabel: "new",
  demoInputText: "you@nest.com",
  footnote: "spacing 4→96px · shadows sky-tinted and soft · easing bounces gently on hover.",
};
