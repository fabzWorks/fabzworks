"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { caseStudies } from "@/data/case-studies";
import { ui } from "@/lib/i18n";

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={<Bi t={ui.caseStudiesEyebrow} />}
          title={<Bi t={ui.caseStudiesHomeTitle} />}
          description={<Bi t={ui.caseStudiesHomeDesc} />}
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
                    className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] rtl:rotate-90"
                  />
                </div>
                <Badge variant="outline" className="mt-4">
                  <Bi t={cs.industry} />
                </Badge>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">
                  <Bi t={cs.title} />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  <Bi t={cs.summary} />
                </p>
                <div className="mt-5 flex gap-5 border-t border-[var(--border)] pt-4">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r.label.en}>
                      <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--accent)]">
                        {r.value}
                      </p>
                      <p className="text-[11px] text-[var(--text-faint)]">
                        <Bi t={r.label} />
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
            <Bi t={ui.viewAllCaseStudies} />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
