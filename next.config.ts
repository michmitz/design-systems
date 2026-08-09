import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required because the app has multiple root layouts (one route group
    // per design system, so each system's fonts/tokens only load on its own
    // page) — there's no single shared layout Next.js could otherwise
    // compose a 404 page from. See app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
