"use client";

import { useState } from "react";

// Ports reference/<System>.dc.html's downloadZip(): fetch the zip (now built
// server-side, see app/api/download/[system]/route.ts), trigger a browser
// download, show "Preparing…" while in flight, no-op if clicked again mid-zip.
export function DownloadButton({
  system,
  idleLabel,
  preparingLabel,
  errorLabel,
  className,
}: {
  system: string;
  idleLabel: string;
  preparingLabel: string;
  errorLabel: string;
  className: string;
}) {
  const [state, setState] = useState<"idle" | "downloading" | "error">("idle");

  async function handleClick() {
    if (state === "downloading") return;
    setState("downloading");
    try {
      const response = await fetch(`/api/download/${system}`);
      if (!response.ok) throw new Error(`Download failed: ${response.status}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${system}-design-system.zip`;
      a.click();
      URL.revokeObjectURL(url);
      setState("idle");
    } catch (error) {
      console.error("Token download failed:", error);
      setState("error");
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick} disabled={state === "downloading"}>
      {state === "downloading" ? preparingLabel : state === "error" ? errorLabel : idleLabel}
    </button>
  );
}
