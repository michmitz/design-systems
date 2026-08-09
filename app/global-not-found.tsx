import Link from "next/link";
import type { Metadata } from "next";
import { hearthFontVariables } from "@/lib/design-systems/hearth/fonts";
import "./globals.css";
import "@/lib/design-systems/hearth/styles.css";
import "@/lib/design-systems/hearth/typography-vars.css";
import "@/lib/design-systems/hearth/shell.css";

// Catches any URL that doesn't match one of the route groups' pages at all.
// Required because the app has multiple root layouts (see next.config.ts) —
// there's no single shared layout to compose a normal 404 from, so this file
// bypasses layouts entirely and has to bring its own <html>/<body>, styles,
// and fonts. Styled with Hearth since that's the site's default shell.
export const metadata: Metadata = {
  title: "Page not found — Design systems",
  description: "The page you're looking for doesn't exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`h-full ${hearthFontVariables}`}>
      <body className="min-h-full flex flex-col">
        <div
          style={{
            minHeight: "100vh",
            padding: "var(--space-8) var(--space-6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "var(--space-4)",
          }}
        >
          <div style={{ font: "var(--text-display-2)", color: "var(--text-primary)" }}>
            Page not found
          </div>
          <p style={{ font: "var(--text-body)", color: "var(--text-secondary)", maxWidth: 480 }}>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" style={{ font: "var(--text-body)" }}>
            ← All design systems
          </Link>
        </div>
      </body>
    </html>
  );
}
