"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import { LinkButton } from "@/components/atoms/Button";
import { blogPosts } from "@/data/blog";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading
          eyebrow="From the Blog"
          title="Practical notes from inside our projects"
          description="Short, honest write-ups on what we're learning from ERP rollouts, AI integrations, and everything in between."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
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
        <div className="mt-12 text-center">
          <LinkButton href="/blog" variant="outline" size="md">
            Visit the Blog
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
