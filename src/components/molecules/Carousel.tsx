"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBi } from "@/components/atoms/Bi";
import ImageFrame from "./ImageFrame";
import type { GalleryImage, PortfolioCategory } from "@/types";

export default function Carousel({
  images,
  category,
  autoPlay = true,
  interval = 3800,
}: {
  images: GalleryImage[];
  category: PortfolioCategory;
  autoPlay?: boolean;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const t = useBi();

  const go = useCallback(
    (i: number) => {
      setDirection(i > index ? 1 : -1);
      setIndex((i + images.length) % images.length);
    },
    [index, images.length]
  );

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, images.length]);

  if (images.length === 0) return null;
  const current = images[index];

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            <ImageFrame
              src={current.src}
              alt={t(current.label)}
              category={category}
              className="mx-auto w-full max-w-lg"
              priority={index === 0}
            />
            <p className="mt-3 text-center text-sm font-medium text-[var(--text-muted)]">
              {t(current.label)}
            </p>
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous image"
              className="absolute left-0 top-[38%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--text-muted)] shadow-md backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] rtl:right-0 rtl:left-auto"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next image"
              className="absolute right-0 top-[38%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--text-muted)] shadow-md backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] rtl:left-0 rtl:right-auto"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[var(--accent)]" : "w-1.5 bg-[var(--border-strong)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
