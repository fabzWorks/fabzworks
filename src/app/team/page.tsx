import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import Bi from "@/components/atoms/Bi";
import { team } from "@/data/team";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the senior team behind every FabzWorks engagement.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.teamEyebrow}
        title={ui.teamPageTitle}
        description={ui.teamPageDesc}
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
                <div className="h-20 w-20 overflow-hidden rounded-2xl shadow-lg ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-4 text-base font-semibold text-[var(--text)]">
                  {m.name}
                </p>
                <p className="text-sm text-[var(--accent)]"><Bi t={m.role} /></p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  <Bi t={m.bio} />
                </p>
                <span className="mt-4 text-xs font-medium text-[var(--text-faint)] group-hover:text-[var(--accent)]">
                  <Bi t={ui.viewProfile} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
