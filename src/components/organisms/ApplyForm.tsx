"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Upload,
  Loader2,
  FileText,
} from "lucide-react";
import type { JobOpening, ApplyFormState } from "@/types";
import { Button } from "@/components/atoms/Button";
import Bi, { useBi } from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { useToast } from "@/lib/toast-context";

const emptyForm: ApplyFormState = {
  fullName: "",
  email: "",
  phone: "",
  portfolio: "",
  coverMessage: "",
  resumeFileName: "",
};

function validate(form: ApplyFormState) {
  const errors: Partial<Record<keyof ApplyFormState, string>> = {};
  if (!form.fullName.trim()) errors.fullName = "required";
  if (!form.email.trim()) {
    errors.email = "required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "invalid";
  }
  if (!form.phone.trim()) errors.phone = "required";
  if (!form.coverMessage.trim() || form.coverMessage.trim().length < 20) {
    errors.coverMessage = "short";
  }
  return errors;
}

export default function ApplyForm({ job }: { job: JobOpening }) {
  const [form, setForm] = useState<ApplyFormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplyFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { push } = useToast();
  const t = useBi();

  const update = (field: keyof ApplyFormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    update("resumeFileName", file ? file.name : "");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (Math.random() < 0.08) reject(new Error("network"));
          else resolve(true);
        }, 1400)
      );
      setStatus("success");
      push(`${t(ui.applicationSent)} — ${t(job.title)}`, "success");
    } catch {
      setStatus("error");
      push(t(ui.couldntSendApplication), "error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15"
        >
          <CheckCircle2 size={32} className="text-emerald-500" />
        </motion.div>
        <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">
          <Bi t={ui.applicationSent} />
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
          <Bi t={ui.applicationSentDesc} />
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setForm(emptyForm);
            setStatus("idle");
          }}
        >
          <Bi t={ui.submitAnother} />
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-500">
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-medium"><Bi t={ui.couldntSendApplication} /></p>
            <p className="mt-0.5 text-rose-500/80"><Bi t={ui.checkConnectionRetry} /></p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label={ui.fullName}
          error={errors.fullName}
          input={
            <input
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Jane Doe"
              className={inputClass(!!errors.fullName)}
              autoComplete="name"
            />
          }
        />
        <Field
          label={ui.emailAddress}
          error={errors.email}
          input={
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@email.com"
              className={inputClass(!!errors.email) + " ltr-preserve"}
              autoComplete="email"
            />
          }
        />
        <Field
          label={ui.phoneNumber}
          error={errors.phone}
          input={
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+92 3XX XXXXXXX"
              className={inputClass(!!errors.phone) + " ltr-preserve"}
              autoComplete="tel"
            />
          }
        />
        <Field
          label={ui.portfolioLinkOptional}
          input={
            <input
              value={form.portfolio}
              onChange={(e) => update("portfolio", e.target.value)}
              placeholder="https://"
              className={inputClass(false) + " ltr-preserve"}
            />
          }
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
          <Bi t={ui.resumeCv} />
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[var(--border-strong)] px-4 py-4 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]">
          <Upload size={17} className="shrink-0 text-[var(--accent)]" />
          <span className="flex-1 truncate">
            {form.resumeFileName || t(ui.uploadResumeHint)}
          </span>
          {form.resumeFileName && (
            <FileText size={16} className="shrink-0 text-[var(--text-faint)]" />
          )}
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFile} />
        </label>
        <p className="mt-1.5 text-xs text-[var(--text-faint)]">
          <Bi t={ui.demoUploadNote} />
        </p>
      </div>

      <Field
        label={ui.coverMessage}
        error={errors.coverMessage}
        input={
          <textarea
            value={form.coverMessage}
            onChange={(e) => update("coverMessage", e.target.value)}
            placeholder={t(ui.coverMessagePlaceholder)}
            rows={5}
            className={inputClass(!!errors.coverMessage)}
          />
        }
      />

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
        icon={status === "submitting" ? <Loader2 size={16} className="animate-spin" /> : undefined}
        iconPosition="left"
      >
        {status === "submitting" ? t(ui.submittingApplication) : `${t(ui.applyFor)} ${t(job.title)}`}
      </Button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] outline-none transition-colors focus:border-[var(--accent)] ${
    hasError ? "border-rose-500/60" : "border-[var(--border-strong)]"
  }`;
}

function Field({
  label,
  input,
  error,
}: {
  label: { en: string; ur: string };
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
        <Bi t={label} />
      </label>
      {input}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 flex items-center gap-1 text-xs text-rose-500"
          >
            <AlertCircle size={12} /> {error === "required" ? "Required field / لازمی خانہ" : error === "invalid" ? "Invalid email / غلط ای میل" : "Please add more detail / مزید تفصیل شامل کریں"}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
