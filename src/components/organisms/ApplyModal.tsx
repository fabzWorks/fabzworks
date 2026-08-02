"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { JobOpening } from "@/types";
import Badge from "@/components/atoms/Badge";
import { useBi } from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import ApplyForm from "./ApplyForm";

export default function ApplyModal({ job }: { job: JobOpening }) {
  const router = useRouter();
  const close = () => router.back();
  const t = useBi();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="card-surface relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-3xl border p-7 shadow-2xl sm:p-8"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] rtl:right-auto rtl:left-5"
          >
            <X size={16} />
          </button>
          <Badge>{t(job.department)}</Badge>
          <h2 className="mt-3 text-xl font-bold text-[var(--text)]">
            {t(ui.applyFor)} {t(job.title)}
          </h2>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            {t(job.location)} · {t(job.type)}
          </p>
          <div className="mt-6">
            <ApplyForm job={job} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
