"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/atoms/Container";
import SectionHeading from "@/components/atoms/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Client Voices" title="What partners say after launch" />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="card-surface relative rounded-3xl border p-8 sm:p-10">
            <Quote className="text-[var(--accent)]" size={28} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-5 text-lg leading-relaxed text-[var(--text)] text-balance">
                  “{t.text}”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarGradient} text-sm font-bold text-white`}
                  >
                    {t.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--text-faint)]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-5">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-[var(--accent)]" : "w-1.5 bg-[var(--border-strong)]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
