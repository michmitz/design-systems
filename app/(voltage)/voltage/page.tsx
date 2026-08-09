import { DesignSystemDetail } from "@/components/DesignSystemDetail";
import { voltageDetailConfig } from "@/lib/design-systems/voltage/detail-config";
import classes from "@/lib/design-systems/voltage/detail.module.css";

export default function VoltageDetailPage() {
  return <DesignSystemDetail config={voltageDetailConfig} classes={classes} />;
}
