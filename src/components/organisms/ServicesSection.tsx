"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import { LinkButton } from "@/components/atoms/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="One partner for every layer of your business software"
          description="From core ERP and CRM systems to the AI features and integrations that connect them, we build it as one coherent platform."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="card-surface group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-2xl">
                    {s.icon}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--text-faint)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LinkButton href="/services" variant="outline" size="md">
            View All Services
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
