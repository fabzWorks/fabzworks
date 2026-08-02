import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import CtaSection from "@/components/organisms/CtaSection";
import { testimonials } from "@/data/testimonials";
import { stats } from "@/data/stats";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What FabzWorks clients say after their systems go live.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.testimonialsPageEyebrow}
        title={ui.testimonialsPageTitle}
        description={ui.testimonialsPageDesc}
      >
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {stats.map((s) => (
            <div key={s.label.en}>
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--accent)]">
                {s.value}
              </p>
              <p className="text-xs text-[var(--text-faint)]"><Bi t={s.label} /></p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-surface flex flex-col rounded-2xl border p-6">
                <div className="flex items-center justify-between">
                  <Quote className="text-[var(--accent)]" size={22} />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-[var(--accent)] text-[var(--accent)]" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text)]">
                  &ldquo;<Bi t={t.text} />&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[var(--border)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.photo} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[var(--text)]">{t.name}</p>
                    <p className="text-xs text-[var(--text-faint)]">
                      <Bi t={t.role} />, {t.company}
                    </p>
                  </div>
                  <Badge variant="outline"><Bi t={t.industry} /></Badge>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
