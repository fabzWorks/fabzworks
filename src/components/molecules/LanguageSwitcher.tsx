"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language / زبان تبدیل کریں"
      className="relative flex h-9 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs font-semibold text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <Languages size={14} />
      <span className="relative flex w-11 items-center justify-between">
        <motion.span
          animate={{ opacity: lang === "en" ? 1 : 0.4 }}
          className="ltr-preserve"
        >
          EN
        </motion.span>
        <motion.span
          animate={{ opacity: lang === "ur" ? 1 : 0.4 }}
          className="ltr-preserve"
        >
          اردو
        </motion.span>
      </span>
    </button>
  );
}
