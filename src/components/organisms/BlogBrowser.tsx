"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import EmptyState from "@/components/molecules/EmptyState";
import { cn } from "@/lib/utils";
import { blogPosts, blogCategories } from "@/data/blog";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogBrowser() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.tag === active);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {blogCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-14">
            <EmptyState title="No posts in this category" description="Try another topic." />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
                >
                  <div
                    className={`flex h-32 items-center justify-center bg-gradient-to-br ${p.gradient} text-4xl`}
                  >
                    {p.icon}
                  </div>
                  <div className="card-surface flex flex-1 flex-col border-t-0 p-5">
                    <div className="flex items-center gap-2 text-[11px] text-[var(--text-faint)]">
                      <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 font-semibold text-[var(--accent)]">
                        {p.tag}
                      </span>
                      <span>{formatDate(p.date)}</span>
                      <span>·</span>
                      <span>{p.read}</span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                      Read more{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
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
