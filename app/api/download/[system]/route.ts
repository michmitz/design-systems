import { readFile } from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";

// Ports reference/<System>.dc.html's client-side fetch+JSZip download to a
// server-side zip instead (README explicitly allows this: "unless you swap
// in your own zip approach server-side"). Reading files here means the
// client never needs to ship a zip library, and the button just downloads
// whatever this route returns.
const SYSTEMS = ["hearth", "voltage", "slate", "bloom"] as const;
type System = (typeof SYSTEMS)[number];

function isSystem(value: string): value is System {
  return (SYSTEMS as readonly string[]).includes(value);
}

// Zip entry path -> source file, relative to lib/design-systems/<system>/.
// "styles.css" ships from original-styles.css (the pristine, unmodified copy
// of reference/<system>/styles.css) rather than this project's own
// styles.css, which was restructured to work around a Next.js CSS-bundling
// quirk — see that file's comment. Token files need no such swap; they were
// already copied verbatim. Entry names match reference/<System>.dc.html's
// download script exactly (flat "tokens/*.css", no system-name folder).
const ZIP_ENTRIES: Record<string, string> = {
  "styles.css": "original-styles.css",
  "readme.md": "readme.md",
  "tokens/colors.css": "tokens/colors.css",
  "tokens/typography.css": "tokens/typography.css",
  "tokens/spacing.css": "tokens/spacing.css",
  "tokens/effects.css": "tokens/effects.css",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ system: string }> },
) {
  const { system } = await params;

  if (!isSystem(system)) {
    return new Response("Not found", { status: 404 });
  }

  const baseDir = path.join(process.cwd(), "lib", "design-systems", system);

  try {
    const zip = new JSZip();
    for (const [zipPath, sourcePath] of Object.entries(ZIP_ENTRIES)) {
      const contents = await readFile(path.join(baseDir, sourcePath), "utf8");
      zip.file(zipPath, contents);
    }

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Buffer isn't directly assignable to BodyInit under this TS config;
    // Uint8Array is (and Buffer already is one, so this is a free wrap, not a copy).
    return new Response(new Uint8Array(zipBuffer), {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${system}-design-system.zip"`,
      },
    });
  } catch (error) {
    console.error(`Failed to build zip for ${system}:`, error);
    return new Response("Failed to build zip", { status: 500 });
  }
}
