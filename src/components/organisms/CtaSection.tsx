"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Container from "@/components/atoms/Container";
import { LinkButton } from "@/components/atoms/Button";
import CascadeMark from "@/components/atoms/CascadeMark";
import Bi from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

export default function CtaSection() {
  const { lang } = useLanguage();
  const ArrowIcon = lang === "ur" ? ArrowLeft : ArrowRight;
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent-soft)] to-transparent px-6 py-14 text-center sm:px-16 sm:py-20"
        >
          <CascadeMark className="mx-auto mb-6 justify-center" />
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-bold text-[var(--text)] sm:text-4xl">
            <Bi t={ui.ctaTitle} />
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--text-muted)]">
            <Bi t={ui.ctaDesc} />
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/contact" size="lg" icon={<ArrowIcon size={17} />}>
              <Bi t={ui.startProject} />
            </LinkButton>
            <LinkButton href="/services" variant="outline" size="lg">
              <Bi t={ui.exploreServices} />
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
