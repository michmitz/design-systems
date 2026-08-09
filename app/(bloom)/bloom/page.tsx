import { DesignSystemDetail } from "@/components/DesignSystemDetail";
import { bloomDetailConfig } from "@/lib/design-systems/bloom/detail-config";
import classes from "@/lib/design-systems/bloom/detail.module.css";

export default function BloomDetailPage() {
  return <DesignSystemDetail config={bloomDetailConfig} classes={classes} />;
}
