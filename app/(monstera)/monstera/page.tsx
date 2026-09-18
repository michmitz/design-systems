import { DetailShell } from "@/components/DetailShell";
import { MonsteraSpecimen } from "@/lib/design-systems/monstera/Specimen";
import { monsteraContent } from "@/lib/design-systems/monstera/content";
import classes from "@/lib/design-systems/monstera/detail.module.css";

export default function MonsteraDetailPage() {
  return (
    <DetailShell
      slug={monsteraContent.slug}
      name={monsteraContent.name}
      tagline={monsteraContent.tagline}
      downloadLabel={monsteraContent.downloadLabel}
      downloadPreparingLabel={monsteraContent.downloadPreparingLabel}
      downloadErrorLabel={monsteraContent.downloadErrorLabel}
      classes={classes}
    >
      <MonsteraSpecimen />
    </DetailShell>
  );
}
