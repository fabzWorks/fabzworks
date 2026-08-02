"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import Bi, { useBi } from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-context";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const t = useBi();
  const { lang } = useLanguage();
  const BackIcon = lang === "ur" ? ArrowRight : ArrowLeft;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
        >
          <CheckCircle2 size={30} className="text-emerald-500" />
        </motion.div>
        <h1 className="mt-5 text-xl font-bold text-[var(--text)]"><Bi t={ui.checkInbox} /></h1>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
          {lang === "ur" ? (
            <>اگر <strong className="ltr-preserve">{email}</strong> کے لیے کوئی اکاؤنٹ موجود ہے تو ہم نے پاس ورڈ ری سیٹ کرنے کا لنک بھیج دیا ہے۔</>
          ) : (
            <>If an account exists for <strong className="ltr-preserve">{email}</strong>, we&apos;ve sent a link to reset your password.</>
          )}
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]"
        >
          <BackIcon size={14} /> <Bi t={ui.backToLogin} />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--text)]"><Bi t={ui.resetPassword} /></h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]"><Bi t={ui.resetPasswordDesc} /></p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.emailAddress} />
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] rtl:left-auto rtl:right-3.5" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              className="ltr-preserve w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] py-2.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={loading}
          icon={loading ? <Loader2 size={16} className="animate-spin" /> : undefined}
          iconPosition="left"
        >
          {loading ? t(ui.sendingLink) : t(ui.sendResetLink)}
        </Button>
      </form>

      <Link
        href="/login"
        className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"
      >
        <BackIcon size={14} /> <Bi t={ui.backToLogin} />
      </Link>
    </div>
  );
}
