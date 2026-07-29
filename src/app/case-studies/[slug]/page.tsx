import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import { LinkButton } from "@/components/atoms/Button";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const cs = caseStudies.find((c) => c.slug === resolvedParams.slug);
  if (!cs) notFound();

  return (
    <article className="py-14 sm:py-20">
      <div
        className={`bg-gradient-to-br ${cs.gradient} border-b border-[var(--border)] pb-14 pt-4`}
      >
        <Container className="max-w-3xl">
          <BackLink href="/case-studies" label="All case studies" />
          <div className="mt-6 flex items-center gap-3">
            <span className="text-4xl">{cs.cover}</span>
            <div>
              <Badge variant="outline">{cs.industry}</Badge>
              <p className="mt-1 text-sm text-[var(--text-faint)]">{cs.client}</p>
            </div>
          </div>
          <h1 className="mt-5 text-balance text-2xl font-bold text-[var(--text)] sm:text-3xl">
            {cs.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-8">
            {cs.results.map((r) => (
              <div key={r.label}>
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent)]">
                  {r.value}
                </p>
                <p className="text-xs text-[var(--text-faint)]">{r.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="max-w-3xl">
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              The Challenge
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
              {cs.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Our Solution
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
              {cs.solution}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Services Involved
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {cs.services.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        <div className="card-surface mt-12 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">
              Have a similar challenge?
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Let&apos;s talk through what a project like this could look like for you.
            </p>
          </div>
          <LinkButton href="/contact" size="md">
            Start a Conversation
          </LinkButton>
        </div>
      </Container>
    </article>
  );
}
