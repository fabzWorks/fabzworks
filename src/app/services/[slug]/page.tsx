import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { services } from "@/data/services";
import { ui } from "@/lib/i18n";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title.en, description: service.desc.en };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <BackLink href="/services" label={ui.allServices} />

        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-3xl">
            {service.icon}
          </span>
          <div>
            <Badge><Bi t={service.chips[0]} /></Badge>
            <h1 className="mt-1.5 text-2xl font-bold text-[var(--text)] sm:text-3xl">
              <Bi t={service.title} />
            </h1>
          </div>
        </div>

        <p className="mt-6 text-[15px] leading-relaxed text-[var(--text-muted)]">
          <Bi t={service.overview} />
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              <Bi t={ui.whatYouGet} />
            </h2>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d.en} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
                  />
                  <Bi t={d} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              <Bi t={ui.howWeWork} />
            </h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, i) => (
                <li key={step.en} className="flex items-start gap-3 text-sm text-[var(--text)]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[10px] font-bold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <Bi t={step} />
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            <Bi t={ui.frequentlyAsked} />
          </h2>
          <div className="mt-4 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)]">
            {service.faqs.map((f) => (
              <div key={f.q.en} className="p-5">
                <p className="text-sm font-semibold text-[var(--text)]"><Bi t={f.q} /></p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  <Bi t={f.a} />
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface mt-12 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left rtl:sm:text-right">
          <div>
            <p className="text-base font-semibold text-[var(--text)]">
              <Bi t={ui.readyToTalk} /> <Bi t={service.title} />?
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              <Bi t={ui.scopeProjectCall} />
            </p>
          </div>
          <LinkButton href="/contact" size="md">
            <Bi t={ui.getInTouch} />
          </LinkButton>
        </div>
      </Container>
    </article>
  );
}
