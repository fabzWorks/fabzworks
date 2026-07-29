"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import EmptyState from "@/components/molecules/EmptyState";
import { LinkButton } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { jobs, departments } from "@/data/careers";

export default function CareersBrowser() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === d
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
              )}
            >
              {d}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              title="No open roles in this department"
              description="Check back soon, or send us your resume anyway."
            />
          </div>
        ) : (
          <div className="mt-12 space-y-4">
            {filtered.map((job, i) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (i % 8) * 0.05 }}
                className="card-surface flex flex-col gap-4 rounded-2xl border p-6 transition-colors hover:border-[var(--accent)] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-[var(--text)]">
                      {job.title}
                    </h3>
                    <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--accent)]">
                      {job.department}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-[var(--text-faint)]">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={13} /> {job.experience}
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <LinkButton href={`/careers/${job.slug}`} variant="secondary" size="sm">
                    Details
                  </LinkButton>
                  <LinkButton
                    href={`/careers/${job.slug}/apply`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                  >
                    Apply
                  </LinkButton>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
