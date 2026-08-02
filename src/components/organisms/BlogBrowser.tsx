"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Container from "@/components/atoms/Container";
import EmptyState from "@/components/molecules/EmptyState";
import Bi, { useBi } from "@/components/atoms/Bi";
import { cn } from "@/lib/utils";
import { blogPosts, blogCategories } from "@/data/blog";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

function formatDate(d: string, lang: string) {
  return new Date(d).toLocaleDateString(lang === "ur" ? "ur-PK" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogBrowser() {
  const [active, setActive] = useState("All");
  const { lang } = useLanguage();
  const t = useBi();
  const ArrowIcon = lang === "ur" ? ArrowLeft : ArrowRight;
  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.tag.en === active);

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {blogCategories.map((c) => (
            <button
              key={c.en}
              onClick={() => setActive(c.en)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c.en
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
              )}
            >
              <Bi t={c} />
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-14">
            <EmptyState />
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
                  <div className="h-36 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.cover} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="card-surface flex flex-1 flex-col border-t-0 p-5">
                    <div className="flex items-center gap-2 text-[11px] text-[var(--text-faint)]">
                      <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 font-semibold text-[var(--accent)]">
                        {t(p.tag)}
                      </span>
                      <span>{formatDate(p.date, lang)}</span>
                      <span>·</span>
                      <span>{t(p.read)}</span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">
                      {t(p.title)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                      {t(p.excerpt)}
                    </p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                      <Bi t={ui.readMore} />{" "}
                      <ArrowIcon
                        size={14}
                        className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
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
