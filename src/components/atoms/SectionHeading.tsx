import Badge from "./Badge";
import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left rtl:text-right"
      }
    >
      {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
      <h2 className="text-balance text-3xl sm:text-4xl font-bold text-[var(--text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
