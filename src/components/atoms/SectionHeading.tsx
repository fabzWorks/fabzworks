import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
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
