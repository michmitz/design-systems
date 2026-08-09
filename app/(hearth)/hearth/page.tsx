import { DesignSystemDetail } from "@/components/DesignSystemDetail";
import { hearthDetailConfig } from "@/lib/design-systems/hearth/detail-config";
import classes from "@/lib/design-systems/hearth/detail.module.css";

export default function HearthDetailPage() {
  return <DesignSystemDetail config={hearthDetailConfig} classes={classes} />;
}
