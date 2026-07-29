"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Badge from "@/components/atoms/Badge";
import { LinkButton } from "@/components/atoms/Button";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Real systems, real results"
          description="A look at how FabzWorks platforms have changed the way our clients actually run their day-to-day operations."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featured.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className={`group block h-full rounded-2xl border border-[var(--border)] bg-gradient-to-br ${cs.gradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{cs.cover}</span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                  />
                </div>
                <Badge variant="outline" className="mt-4">
                  {cs.industry}
                </Badge>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {cs.summary}
                </p>
                <div className="mt-5 flex gap-5 border-t border-[var(--border)] pt-4">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r.label}>
                      <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--accent)]">
                        {r.value}
                      </p>
                      <p className="text-[11px] text-[var(--text-faint)]">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <LinkButton href="/case-studies" variant="outline" size="md">
            View All Case Studies
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
