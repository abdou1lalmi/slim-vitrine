import type { ReactNode } from "react";
import { Spark } from "./icons";

/** Étiquette de section : astérisque + petites capitales + filet. */
export function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "bg-ligne-light" : "bg-ligne";
  const text = tone === "dark" ? "text-citron" : "text-ink/70";
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${text}`}>
      <Spark className="h-3 w-3 shrink-0" />
      <span>{children}</span>
      <span aria-hidden="true" className={`h-px flex-1 ${line}`} />
    </p>
  );
}
