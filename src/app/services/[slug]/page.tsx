import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, HelpCircle, ArrowRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import BackLink from "@/components/molecules/BackLink";
import { LinkButton } from "@/components/atoms/Button";
import { services } from "@/data/services";

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
  return { title: service.title, description: service.desc };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  return (
    <article className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Ambient Glow Patterns */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-[var(--accent-soft)] opacity-20 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/5 opacity-10 blur-[100px]" />

      <Container className="max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity">
          <BackLink href="/services" label="All services" />
        </div>

        {/* HERO SECTION: Title & Icon Hero Header */}
        <header className="relative mt-8 border-b border-[var(--border)] pb-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5 dark:bg-neutral-900 text-4xl transform transition-transform duration-500 hover:scale-105">
              {service.icon}
            </span>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {service.chips?.map((chip) => (
                  <Badge key={chip} className="bg-[var(--accent-soft)] text-[var(--accent)] font-semibold border-none">
                    {chip}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>
          
          {/* Main Service Overview Paragraph */}
          <p className="mt-8 text-base leading-relaxed text-[var(--text-muted)] max-w-3xl sm:text-lg">
            {service.overview}
          </p>
        </header>

        {/* CORE DETAILS SECTION: Deliverables & Workflow Processes */}
        <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Deliverables Panel (Left Column) */}
          <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              What you get
            </h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[14px] text-[var(--text)] group">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="leading-normal">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workflow Steps (Right Column) */}
          <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-faint)] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--border-strong)]" />
              How we work
            </h2>
            <ol className="mt-6 relative border-l border-[var(--border-strong)] ml-2.5 space-y-6">
              {service.process.map((step, i) => (
                <li key={step} className="relative pl-6 group">
                  {/* Timeline Indicator Dot */}
                  <span className="absolute -left-2.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] text-[9px] font-extrabold text-[var(--accent)] shadow-sm transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                    {i + 1}
                  </span>
                  <p className="text-[14px] leading-normal text-[var(--text)] font-medium">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ACCORDION FAQ SECTION */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={18} className="text-[var(--text-faint)]" />
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-faint)]">
              Frequently asked
            </h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((f) => (
              <details 
                key={f.q} 
                className="group border border-[var(--border)] rounded-2xl bg-[var(--surface)] transition-all duration-300 open:shadow-md [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                  <p className="text-sm font-semibold text-[var(--text)] pr-4 group-open:text-[var(--accent)] transition-colors">
                    {f.q}
                  </p>
                  <ChevronRight size={16} className="text-[var(--text-faint)] transition-transform duration-300 group-open:rotate-90 shrink-0" />
                </summary>
                <div className="px-5 pb-5 border-t border-[var(--border)] pt-4 bg-white/20 dark:bg-black/5 rounded-b-2xl">
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION CONTAINER PANEL */}
        <footer className="relative mt-20 overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--accent-soft)] p-8 sm:p-12 shadow-md">
          {/* Subtle inside graphic light */}
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--accent)] opacity-10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:text-left text-center">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-lg font-bold text-[var(--text)] sm:text-xl">
                Ready to talk about {service.title.toLowerCase()}?
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                We&apos;ll scope your project on a short discovery call, completely free with no obligation.
              </p>
            </div>
            <LinkButton 
              href="/contact" 
              size="lg" 
              className="group/btn shadow-lg shrink-0"
              icon={<ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />}
              iconPosition="right"
            >
              Get in Touch
            </LinkButton>
          </div>
        </footer>
      </Container>
    </article>
  );
}
