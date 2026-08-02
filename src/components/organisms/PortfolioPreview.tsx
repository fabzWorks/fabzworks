"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import ImageFrame from "@/components/molecules/ImageFrame";
import { LinkButton } from "@/components/atoms/Button";
import { portfolioProjects } from "@/data/portfolio";
import { ui } from "@/lib/i18n";

export default function PortfolioPreview() {
  const featured = [
    portfolioProjects.find((p) => p.category === "web"),
    portfolioProjects.find((p) => p.category === "mobile"),
    portfolioProjects.find((p) => p.category === "ai"),
  ].filter(Boolean) as typeof portfolioProjects;

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading
          eyebrow={<Bi t={ui.portfolioEyebrow} />}
          title={<Bi t={ui.portfolioHomeTitle} />}
          description={<Bi t={ui.portfolioHomeDesc} />}
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/portfolio/${p.slug}`}
                className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
              >
                <div className="p-5 pb-0">
                  <ImageFrame src={p.cover} alt={p.title} category={p.category} className="mx-auto" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      <Bi t={p.categoryLabel} />
                    </Badge>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] rtl:rotate-90"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                    <Bi t={p.summary} />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <LinkButton href="/portfolio" variant="outline" size="md">
            <Bi t={ui.viewFullPortfolio} />
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
