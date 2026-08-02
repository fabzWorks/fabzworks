"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import Bi from "@/components/atoms/Bi";
import { faqs } from "@/data/faqs";
import { ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
      <Container>
        <SectionHeading eyebrow={<Bi t={ui.faqEyebrow} />} title={<Bi t={ui.faqTitle} />} />
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-[var(--border)]">
          {faqs.map((f, i) => (
            <div key={f.q.en} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-4 text-left rtl:text-right"
              >
                <span className="text-[15px] font-medium text-[var(--text)]">
                  <Bi t={f.q} />
                </span>
                <Plus
                  size={18}
                  className={cn(
                    "shrink-0 text-[var(--accent)] transition-transform duration-300",
                    open === i && "rotate-45"
                  )}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-[var(--text-muted)]">
                      <Bi t={f.a} />
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
