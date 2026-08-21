import { DetailShell } from "@/components/DetailShell";
import { BluebirdSpecimen } from "@/lib/design-systems/bluebird/Specimen";
import { bluebirdContent } from "@/lib/design-systems/bluebird/content";
import classes from "@/lib/design-systems/bluebird/detail.module.css";

export default function BluebirdDetailPage() {
  return (
    <DetailShell
      slug={bluebirdContent.slug}
      name={bluebirdContent.name}
      tagline={bluebirdContent.tagline}
      downloadLabel={bluebirdContent.downloadLabel}
      downloadPreparingLabel={bluebirdContent.downloadPreparingLabel}
      downloadErrorLabel={bluebirdContent.downloadErrorLabel}
      classes={classes}
    >
      <BluebirdSpecimen />
    </DetailShell>
  );
}
