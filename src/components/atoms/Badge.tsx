import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Badge({
  children,
  className,
  variant = "soft",
}: {
  children: ReactNode;
  className?: string;
  variant?: "soft" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
        variant === "soft"
          ? "bg-[var(--accent-soft)] text-[var(--accent)]"
          : "border border-[var(--border-strong)] text-[var(--text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
