import { DetailShell } from "@/components/DetailShell";
import { HearthSpecimen } from "@/lib/design-systems/hearth/Specimen";
import { hearthContent } from "@/lib/design-systems/hearth/content";
import classes from "@/lib/design-systems/hearth/detail.module.css";

export default function HearthDetailPage() {
  return (
    <DetailShell
      slug={hearthContent.slug}
      name={hearthContent.name}
      tagline={hearthContent.tagline}
      taglineItalic={hearthContent.taglineItalic}
      downloadLabel={hearthContent.downloadLabel}
      downloadPreparingLabel={hearthContent.downloadPreparingLabel}
      downloadErrorLabel={hearthContent.downloadErrorLabel}
      classes={classes}
    >
      <HearthSpecimen />
    </DetailShell>
  );
}
