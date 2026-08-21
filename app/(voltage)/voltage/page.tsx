import { DetailShell } from "@/components/DetailShell";
import { VoltageSpecimen } from "@/lib/design-systems/voltage/Specimen";
import { voltageContent } from "@/lib/design-systems/voltage/content";
import classes from "@/lib/design-systems/voltage/detail.module.css";

export default function VoltageDetailPage() {
  return (
    <DetailShell
      slug={voltageContent.slug}
      name={voltageContent.name}
      tagline={voltageContent.tagline}
      downloadLabel={voltageContent.downloadLabel}
      downloadPreparingLabel={voltageContent.downloadPreparingLabel}
      downloadErrorLabel={voltageContent.downloadErrorLabel}
      classes={classes}
    >
      <VoltageSpecimen />
    </DetailShell>
  );
}
