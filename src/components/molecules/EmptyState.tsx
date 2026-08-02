import { SearchX } from "lucide-react";
import Bi from "@/components/atoms/Bi";
import type { Bi as BiType } from "@/types";

export default function EmptyState({
  title = { en: "Nothing here yet", ur: "ابھی یہاں کچھ نہیں" },
  description = { en: "Try adjusting your filters or search.", ur: "اپنے فلٹرز یا تلاش کو تبدیل کر کے دیکھیں۔" },
}: {
  title?: BiType;
  description?: BiType;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border-strong)] py-20 text-center">
      <SearchX size={32} className="text-[var(--text-faint)]" />
      <p className="mt-4 text-base font-semibold text-[var(--text)]">
        <Bi t={title} />
      </p>
      <p className="mt-1 max-w-xs text-sm text-[var(--text-muted)]">
        <Bi t={description} />
      </p>
    </div>
  );
}
