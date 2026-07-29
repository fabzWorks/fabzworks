"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/atoms/Container";
import { LinkButton } from "@/components/atoms/Button";
import CascadeMark from "@/components/atoms/CascadeMark";

export default function CtaSection() {
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
            Ready to replace the spreadsheets for good?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--text-muted)]">
            Tell us what&apos;s slowing your team down. We&apos;ll come back with a
            clear plan, not a sales pitch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton href="/contact" size="lg" icon={<ArrowRight size={17} />}>
              Start Your Project
            </LinkButton>
            <LinkButton href="/services" variant="outline" size="lg">
              Explore Services
            </LinkButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
