import type { InspirationPin } from "@/components/InspirationGrid";

// Pinboard for Monstera's Inspiration section — image + source link only,
// no Pinterest API. See components/InspirationGrid.tsx for the renderer.
export const inspirationPins: InspirationPin[] = [
  {
    href: "https://www.pinterest.com/pin/3096293491584843/",
    image: "/monstera/pin-1.jpg",
    alt: "Illustrated Monstera care card with Spanish-language plant notes",
  },
  {
    href: "https://www.pinterest.com/pin/1105352302284970575/",
    image: "/monstera/pin-2.jpg",
    alt: "Kleen Organics plant shop homepage with a puppy curled up among houseplants",
  },
  {
    href: "https://www.pinterest.com/pin/532128512246029473/",
    image: "/monstera/pin-3.jpg",
    alt: "Plant Journal editorial spread pairing a serif wordmark with script and typewriter type",
  },
];
