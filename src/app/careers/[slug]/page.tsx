import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Clock, Briefcase } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import { LinkButton } from "@/components/atoms/Button";
import { jobs } from "@/data/careers";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.overview };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.slug === resolvedParams.slug);
  if (!job) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <BackLink href="/careers" label="All open roles" />

        <div className="mt-6">
          <Badge>{job.department}</Badge>
          <h1 className="mt-3 text-2xl font-bold text-[var(--text)] sm:text-3xl">
            {job.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} /> {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} /> {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={15} /> {job.experience}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--text-faint)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[15px] leading-relaxed text-[var(--text-muted)]">
          {job.overview}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Responsibilities
            </h2>
            <ul className="mt-4 space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              What we&apos;re looking for
            </h2>
            <ul className="mt-4 space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  {r}
                </li>
              ))}
            </ul>
            {job.niceToHave.length > 0 && (
              <>
                <h2 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
                  Nice to have
                </h2>
                <ul className="mt-4 space-y-3">
                  {job.niceToHave.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-faint)]" />
                      {r}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="card-surface mt-12 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">
              Ready to apply for this role?
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              The application takes about three minutes.
            </p>
          </div>
          <LinkButton href={`/careers/${job.slug}/apply`} size="md">
            Apply Now
          </LinkButton>
        </div>
      </Container>
    </article>
  );
}
