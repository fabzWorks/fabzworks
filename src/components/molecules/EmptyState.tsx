import { SearchX } from "lucide-react";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Try adjusting your filters or search.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-strong)] py-20 text-center">
      <SearchX size={32} className="text-[var(--text-faint)]" />
      <p className="mt-4 text-base font-semibold text-[var(--text)]">{title}</p>
      <p className="mt-1 max-w-xs text-sm text-[var(--text-muted)]">
        {description}
      </p>
    </div>
  );
}
