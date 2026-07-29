import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import Badge from "@/components/atoms/Badge";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How FabzWorks platforms have changed the way our clients run their day-to-day operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real systems, real operational change"
        description="Every project below started as a discovery conversation like the one we'd have with you."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group flex flex-col rounded-2xl border border-[var(--border)] bg-gradient-to-br ${cs.gradient} p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{cs.cover}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="outline">{cs.industry}</Badge>
                  <span className="text-xs text-[var(--text-faint)]">
                    {cs.client}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--text)]">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {cs.summary}
                </p>
                <div className="mt-6 flex gap-6 border-t border-[var(--border)] pt-5">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--accent)]">
                        {r.value}
                      </p>
                      <p className="text-[11px] text-[var(--text-faint)]">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
