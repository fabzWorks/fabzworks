"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import EmptyState from "@/components/molecules/EmptyState";
import Bi from "@/components/atoms/Bi";
import { cn } from "@/lib/utils";
import { services, serviceCategories } from "@/data/services";

function ServicesBrowserInner() {
  const params = useSearchParams();
  const [active, setActive] = useState(params.get("cat") || "all");

  const filtered =
    active === "all" ? services : services.filter((s) => s.cat === active);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {serviceCategories.map((c) => (
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
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
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
                      className="text-[var(--text-faint)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] rtl:rotate-90"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
                    <Bi t={s.title} />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    <Bi t={s.desc} />
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.chips.map((c) => (
                      <span
                        key={c.en}
                        className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--text-faint)]"
                      >
                        <Bi t={c} />
                      </span>
                    ))}
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

export default function ServicesBrowser() {
  return (
    <Suspense fallback={null}>
      <ServicesBrowserInner />
    </Suspense>
  );
}
