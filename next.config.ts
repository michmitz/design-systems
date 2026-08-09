import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required because the app has multiple root layouts (one route group
    // per design system, so each system's fonts/tokens only load on its own
    // page) — there's no single shared layout Next.js could otherwise
    // compose a 404 page from. See app/global-not-found.tsx.
    globalNotFound: true,
  },
  // The download route reads token/readme files via fs at request time
  // (app/api/download/[system]/route.ts) rather than importing them as
  // modules, so Next's automatic output file tracing may not detect them on
  // serverless deployments — make the include explicit as a safety net.
  outputFileTracingIncludes: {
    "/api/download/\\[system\\]": ["./lib/design-systems/**/*.css", "./lib/design-systems/**/*.md"],
  },
};

export default nextConfig;
