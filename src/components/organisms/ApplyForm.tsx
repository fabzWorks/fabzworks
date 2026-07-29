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
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.coverMessage.trim() || form.coverMessage.trim().length < 20) {
    errors.coverMessage = "Tell us a little more — at least 20 characters.";
  }
  return errors;
}

export default function ApplyForm({ job }: { job: JobOpening }) {
  const [form, setForm] = useState<ApplyFormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplyFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { push } = useToast();

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
      // Static-frontend demo: simulates a network request. Replace this
      // block with a real fetch()/server action call to your ATS or API.
      // See docs/PROJECT_GUIDE.md for exactly where to wire this up.
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (Math.random() < 0.08) reject(new Error("network"));
          else resolve(true);
        }, 1400)
      );
      setStatus("success");
      push(`Application received for ${job.title}.`, "success");
    } catch {
      setStatus("error");
      push("Something went wrong sending your application.", "error");
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
          Application sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
          Thanks for applying to <strong>{job.title}</strong>. Our team
          reviews every application personally — expect to hear from us
          within 5 business days.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setForm(emptyForm);
            setStatus("idle");
          }}
        >
          Submit another application
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
            <p className="font-medium">We couldn&apos;t send your application.</p>
            <p className="mt-0.5 text-rose-500/80">
              Please check your connection and try again.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
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
          label="Email address"
          error={errors.email}
          input={
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@email.com"
              className={inputClass(!!errors.email)}
              autoComplete="email"
            />
          }
        />
        <Field
          label="Phone number"
          error={errors.phone}
          input={
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+92 3XX XXXXXXX"
              className={inputClass(!!errors.phone)}
              autoComplete="tel"
            />
          }
        />
        <Field
          label="Portfolio / LinkedIn (optional)"
          error={errors.portfolio}
          input={
            <input
              value={form.portfolio}
              onChange={(e) => update("portfolio", e.target.value)}
              placeholder="https://"
              className={inputClass(false)}
            />
          }
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
          Resume / CV
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[var(--border-strong)] px-4 py-4 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]">
          <Upload size={17} className="shrink-0 text-[var(--accent)]" />
          <span className="flex-1 truncate">
            {form.resumeFileName || "Click to upload PDF, DOC, or DOCX (max 5MB)"}
          </span>
          {form.resumeFileName && (
            <FileText size={16} className="shrink-0 text-[var(--text-faint)]" />
          )}
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFile} />
        </label>
        <p className="mt-1.5 text-xs text-[var(--text-faint)]">
          This is a placeholder upload in the demo — no file leaves your device.
        </p>
      </div>

      <Field
        label="Cover message"
        error={errors.coverMessage}
        input={
          <textarea
            value={form.coverMessage}
            onChange={(e) => update("coverMessage", e.target.value)}
            placeholder="Tell us why you're a great fit for this role..."
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
        {status === "submitting" ? "Submitting application..." : `Apply for ${job.title}`}
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
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
        {label}
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
            <AlertCircle size={12} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
