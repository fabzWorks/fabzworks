import { cn } from "@/lib/utils";

export default function CascadeMark({ className }: { className?: string }) {
  const heights = [6, 10, 15, 21, 28, 21, 15, 10, 6];
  return (
    <div className={cn("brand-cascade h-7", className)} aria-hidden="true">
      {heights.map((h, i) => (
        <span key={i} style={{ height: h, opacity: 0.35 + (i % 5) * 0.13 }} />
      ))}
    </div>
  );
}
