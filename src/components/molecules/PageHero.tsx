import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import type { Bi as BiType } from "@/types";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: BiType;
  title: BiType;
  description?: BiType;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-14 pb-14 sm:pt-20 sm:pb-16 border-b border-[var(--border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <Container className="relative text-center">
        {eyebrow && (
          <Badge className="mb-5 mx-auto w-fit">
            <Bi t={eyebrow} />
          </Badge>
        )}
        <h1 className="mx-auto max-w-2xl text-balance text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
          <Bi t={title} />
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--text-muted)]">
            <Bi t={description} />
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
