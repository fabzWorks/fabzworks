import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the senior team behind every FabzWorks engagement.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="A small, senior team that stays with your project"
        description="Click on anyone below to see their full background, skills, and how to reach them."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="card-surface group flex flex-col items-center rounded-2xl border p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${m.gradient} text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                >
                  {m.initials}
                </div>
                <p className="mt-4 text-base font-semibold text-[var(--text)]">
                  {m.name}
                </p>
                <p className="text-sm text-[var(--accent)]">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {m.bio}
                </p>
                <span className="mt-4 text-xs font-medium text-[var(--text-faint)] group-hover:text-[var(--accent)]">
                  View profile →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
