import { DesignSystemDetail } from "@/components/DesignSystemDetail";
import { slateDetailConfig } from "@/lib/design-systems/slate/detail-config";
import classes from "@/lib/design-systems/slate/detail.module.css";

export default function SlateDetailPage() {
  return <DesignSystemDetail config={slateDetailConfig} classes={classes} />;
}
