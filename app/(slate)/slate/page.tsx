import { DetailShell } from "@/components/DetailShell";
import { SlateSpecimen } from "@/lib/design-systems/slate/Specimen";
import { slateContent } from "@/lib/design-systems/slate/content";
import classes from "@/lib/design-systems/slate/detail.module.css";

export default function SlateDetailPage() {
  return (
    <DetailShell
      slug={slateContent.slug}
      name={slateContent.name}
      tagline={slateContent.tagline}
      downloadLabel={slateContent.downloadLabel}
      downloadPreparingLabel={slateContent.downloadPreparingLabel}
      downloadErrorLabel={slateContent.downloadErrorLabel}
      classes={classes}
    >
      <SlateSpecimen />
    </DetailShell>
  );
}
