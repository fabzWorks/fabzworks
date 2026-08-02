import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { caseStudies } from "@/data/case-studies";
import { ui } from "@/lib/i18n";

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
  return { title: cs.title.en, description: cs.summary.en };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <article className="py-14 sm:py-20">
      <div
        className={`bg-gradient-to-br ${cs.gradient} border-b border-[var(--border)] pb-14 pt-4`}
      >
        <Container className="max-w-3xl">
          <BackLink href="/case-studies" label={ui.allCaseStudies} />
          <div className="mt-6 flex items-center gap-3">
            <span className="text-4xl">{cs.cover}</span>
            <div>
              <Badge variant="outline"><Bi t={cs.industry} /></Badge>
              <p className="mt-1 text-sm text-[var(--text-faint)]">{cs.client}</p>
            </div>
          </div>
          <h1 className="mt-5 text-balance text-2xl font-bold text-[var(--text)] sm:text-3xl">
            <Bi t={cs.title} />
          </h1>
          <div className="mt-8 flex flex-wrap gap-8">
            {cs.results.map((r) => (
              <div key={r.label.en}>
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent)]">
                  {r.value}
                </p>
                <p className="text-xs text-[var(--text-faint)]"><Bi t={r.label} /></p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="max-w-3xl">
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              <Bi t={ui.theChallenge} />
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
              <Bi t={cs.challenge} />
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              <Bi t={ui.ourSolution} />
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
              <Bi t={cs.solution} />
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            <Bi t={ui.servicesInvolved} />
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {cs.services.map((s) => (
              <Badge key={s.en} variant="outline">
                <Bi t={s} />
              </Badge>
            ))}
          </div>
        </div>

        <div className="card-surface mt-12 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left rtl:sm:text-right">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">
              <Bi t={ui.similarChallenge} />
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              <Bi t={ui.talkThroughSimilarProject} />
            </p>
          </div>
          <LinkButton href="/contact" size="md">
            <Bi t={ui.startConversation} />
          </LinkButton>
        </div>
      </Container>
    </article>
  );
}
