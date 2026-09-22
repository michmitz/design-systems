import Link from "next/link";
import { DownloadButton } from "./DownloadButton";

/**
 * The classes a detail page's outer chrome needs — back link, container,
 * header row with name/tagline/download button. This is the "shared
 * mechanics" layer (see DESIGN-DIRECTION.md §12): routing, download
 * behavior, and the responsive container. What goes *inside* — the
 * specimen — is deliberately not this component's concern. Each system
 * still supplies these class names from its own CSS Module (e.g.
 * lib/design-systems/slate/detail.module.css) so the chrome itself reads
 * as that system (border weight, hover easing, etc.), not one shared look.
 *
 * This project has no CSS Modules codegen configured, so a module import's
 * real type is just a loose `{ [key: string]: string }` — TypeScript can't
 * verify specific keys exist, hence `Record<string, string>` rather than
 * named fields. Every class this component reads: page, container,
 * backLink, headerRow, name, tagline, downloadButton.
 */
export type DetailShellClasses = Record<string, string>;

// Mechanics shared by every detail page: back-link routing, the
// name/tagline/download header, and the responsive container. The specimen
// itself — colors, type, effects, whatever composition a system wants — is
// passed as `children` rather than baked in here, so this component can't
// dictate a system's visual result. See DesignSystemDetail.tsx for the
// generic specimen (used by Hearth/Slate) and
// lib/design-systems/slate/Specimen.tsx for a bespoke one.
export function DetailShell({
  slug,
  name,
  tagline,
  taglineItalic,
  downloadLabel,
  downloadPreparingLabel,
  downloadErrorLabel,
  classes,
  children,
}: {
  slug: string;
  name: string;
  tagline: string;
  taglineItalic?: boolean;
  downloadLabel: string;
  downloadPreparingLabel: string;
  downloadErrorLabel: string;
  classes: DetailShellClasses;
  children: React.ReactNode;
}) {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <Link href="/" className={classes.backLink}>
          ← All design systems
        </Link>

        <div className={classes.headerRow}>
          <div>
            <div className={classes.name}>{name}</div>
            <div
              className={classes.tagline}
              style={taglineItalic ? { fontStyle: "italic" } : undefined}
            >
              {tagline}
            </div>
          </div>
          <DownloadButton
            system={slug}
            idleLabel={downloadLabel}
            preparingLabel={downloadPreparingLabel}
            errorLabel={downloadErrorLabel}
            className={classes.downloadButton}
          />
        </div>

        {children}
      </div>
    </div>
  );
}
