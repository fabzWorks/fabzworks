"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Container from "@/components/atoms/Container";
import { LinkButton } from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { stats } from "@/data/stats";
import { useLanguage } from "@/lib/language-context";

const codeLines = [
  { k: "const", v: "business", c: "= { erp, crm, ai, automation };" },
  { k: "await", v: "fabzworks", c: ".build(business);" },
  { k: "// ", v: "ships in weeks,", c: "not quarters" },
];

export default function Hero() {
  const { lang } = useLanguage();
  const ArrowIcon = lang === "ur" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl rtl:right-auto rtl:left-[-10%]"
        style={{ background: "var(--accent)" }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge className="mb-6">
            <Sparkles size={12} /> <Bi t={ui.heroBadge} />
          </Badge>
          <h1 className="text-balance text-4xl font-bold leading-[1.15] text-[var(--text)] sm:text-5xl lg:text-[3.2rem]">
            <Bi t={ui.heroTitle} />
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base">
            <Bi t={ui.heroDesc} />
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact" size="lg" icon={<ArrowIcon size={17} />}>
              <Bi t={ui.startProject} />
            </LinkButton>
            <LinkButton href="/case-studies" variant="outline" size="lg">
              <Bi t={ui.viewAllCaseStudies} />
            </LinkButton>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label.en}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[var(--text-faint)]">
                  <Bi t={s.label} />
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="card-surface rounded-3xl border p-6 shadow-2xl sm:p-7">
            <div className="flex items-center gap-1.5 border-b border-[var(--border)] pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-[var(--text-faint)] font-[family-name:var(--font-mono)] ltr-preserve">
                fabzworks / platform.ts
              </span>
            </div>
            <div className="mt-4 space-y-2.5 font-[family-name:var(--font-mono)] text-[12.5px] sm:text-[13px] ltr-preserve" dir="ltr">
              {codeLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="text-[var(--text-muted)]"
                >
                  <span className="text-[var(--accent)]">{line.k}</span>{" "}
                  <span className="text-[var(--text)]">{line.v}</span> {line.c}
                </motion.p>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["ERP", "CRM", "AI"].map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] px-3 py-4 text-center"
                >
                  <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text)] ltr-preserve">
                    {m}
                  </p>
                  <p className="mt-1 text-[10px] text-[var(--text-faint)]">Active</p>
                  <span className="mx-auto mt-2 block h-1 w-1 rounded-full bg-[var(--accent)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
