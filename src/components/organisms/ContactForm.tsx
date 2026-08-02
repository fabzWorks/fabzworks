"use client";

import { useActionState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContactForm, type ContactState } from "@/lib/actions";
import { Button } from "@/components/atoms/Button";
import Bi, { useBi } from "@/components/atoms/Bi";
import { useToast } from "@/lib/toast-context";
import { services } from "@/data/services";
import { ui } from "@/lib/i18n";

const initialState: ContactState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const { push } = useToast();
  const t = useBi();

  useEffect(() => {
    if (state.message && state.ok) push(state.message, "success");
  }, [state, push]);

  if (state.ok) {
    return (
      <div className="card-surface flex flex-col items-center rounded-3xl border p-10 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
        >
          <CheckCircle2 size={30} className="text-emerald-500" />
        </motion.div>
        <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
          <Bi t={ui.messageSent} />
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="card-surface space-y-5 rounded-3xl border p-7 sm:p-8">
      {!state.ok && state.message && (
        <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-sm text-rose-500">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.fullName} />
          </label>
          <input
            name="name"
            placeholder="Jane Doe"
            className={inputClass(!!state.fieldErrors?.name)}
          />
          {state.fieldErrors?.name && <ErrorText text={state.fieldErrors.name} />}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.emailAddress} />
          </label>
          <input
            name="email"
            type="email"
            placeholder="jane@company.com"
            className={inputClass(!!state.fieldErrors?.email) + " ltr-preserve"}
          />
          {state.fieldErrors?.email && <ErrorText text={state.fieldErrors.email} />}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.companyOptional} />
          </label>
          <input
            name="company"
            placeholder="Acme Inc."
            className={inputClass(false)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.serviceInterested} />
          </label>
          <select name="service" className={inputClass(false)} defaultValue="">
            <option value="" disabled>
              {t(ui.selectService)}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={t(s.title)}>
                {t(s.title)}
              </option>
            ))}
            <option value={t(ui.notSureYet)}>{t(ui.notSureYet)}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
          <Bi t={ui.projectDetails} />
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder={t(ui.projectDetailsPlaceholder)}
          className={inputClass(!!state.fieldErrors?.message)}
        />
        {state.fieldErrors?.message && <ErrorText text={state.fieldErrors.message} />}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={pending}
        icon={pending ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
        iconPosition="left"
      >
        {pending ? t(ui.sendingMessage) : t(ui.sendMessage)}
      </Button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] outline-none transition-colors focus:border-[var(--accent)] ${
    hasError ? "border-rose-500/60" : "border-[var(--border-strong)]"
  }`;
}

function ErrorText({ text }: { text: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-500">
      <AlertCircle size={12} /> {text}
    </p>
  );
}
