import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Code2, Store, CheckCircle2 } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import Carousel from "@/components/molecules/Carousel";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { portfolioProjects } from "@/data/portfolio";
import { ui } from "@/lib/i18n";

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary.en };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-4xl">
        <BackLink href="/portfolio" label={ui.allPortfolioWork} />

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl">
                {project.icon}
              </span>
              <div>
                <Badge><Bi t={project.categoryLabel} /></Badge>
                <h1 className="mt-1 text-2xl font-bold text-[var(--text)] sm:text-3xl">
                  {project.title}
                </h1>
              </div>
            </div>
            <p className="mt-2 text-sm text-[var(--text-faint)]">
              <Bi t={ui.client} />: {project.client}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.demoUrl && (
              <LinkButton
                href={project.demoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<ExternalLink size={14} />}
                iconPosition="left"
              >
                <Bi t={ui.liveDemo} />
              </LinkButton>
            )}
            {project.storeUrl && (
              <LinkButton
                href={project.storeUrl}
                target="_blank"
                variant="secondary"
                size="sm"
                icon={<Store size={14} />}
                iconPosition="left"
              >
                <Bi t={ui.appStore} />
              </LinkButton>
            )}
            {project.githubUrl && (
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                variant="outline"
                size="sm"
                icon={<Code2 size={14} />}
                iconPosition="left"
              >
                <Bi t={ui.github} />
              </LinkButton>
            )}
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[var(--text-muted)]">
          <Bi t={project.description} />
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="ltr-preserve rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--text-faint)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            <Bi t={ui.gallery} />
          </h2>
          <div className="mt-5">
            <Carousel images={project.gallery} category={project.category} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            <Bi t={ui.keyFeatures} />
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f.en} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <Bi t={f} />
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface mt-12 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left rtl:sm:text-right">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">
              <Bi t={ui.wantSomethingLikeThis} />
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              <Bi t={ui.letsTalkThroughProject} />
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
