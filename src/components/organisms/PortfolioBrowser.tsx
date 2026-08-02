"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import Container from "@/components/atoms/Container";
import Badge from "@/components/atoms/Badge";
import EmptyState from "@/components/molecules/EmptyState";
import ImageFrame from "@/components/molecules/ImageFrame";
import Bi from "@/components/atoms/Bi";
import { cn } from "@/lib/utils";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";
import { ui } from "@/lib/i18n";

export default function PortfolioBrowser() {
  const [active, setActive] = useState<"all" | "web" | "mobile" | "ai">("all");
  const filtered =
    active === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c.key
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
              )}
            >
              <Bi t={c.label} />
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-14">
            <EmptyState />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
              >
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl"
                >
                  <div className="p-5 pb-0">
                    <ImageFrame src={p.cover} alt={p.title} category={p.category} className="mx-auto" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
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
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                      <Bi t={p.summary} />
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="ltr-preserve rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] text-[var(--text-faint)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {(p.demoUrl || p.githubUrl) && (
                      <div className="mt-4 flex gap-3 border-t border-[var(--border)] pt-4 text-xs font-medium text-[var(--text-faint)]">
                        {p.demoUrl && (
                          <span className="flex items-center gap-1">
                            <ExternalLink size={12} /> <Bi t={ui.liveDemo} />
                          </span>
                        )}
                        {p.githubUrl && (
                          <span className="flex items-center gap-1">
                            <Code2 size={12} /> <Bi t={ui.sourceCode} />
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
