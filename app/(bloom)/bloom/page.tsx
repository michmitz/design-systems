import { DetailShell } from "@/components/DetailShell";
import { BloomSpecimen } from "@/lib/design-systems/bloom/Specimen";
import { bloomContent } from "@/lib/design-systems/bloom/content";
import classes from "@/lib/design-systems/bloom/detail.module.css";

export default function BloomDetailPage() {
  return (
    <DetailShell
      slug={bloomContent.slug}
      name={bloomContent.name}
      tagline={bloomContent.tagline}
      downloadLabel={bloomContent.downloadLabel}
      downloadPreparingLabel={bloomContent.downloadPreparingLabel}
      downloadErrorLabel={bloomContent.downloadErrorLabel}
      classes={classes}
    >
      <BloomSpecimen />
    </DetailShell>
  );
}
