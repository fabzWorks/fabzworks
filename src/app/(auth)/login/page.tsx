"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import Bi, { useBi } from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/lib/toast-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { push } = useToast();
  const router = useRouter();
  const t = useBi();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.ok) {
      push("Welcome back!", "success");
      router.push("/");
    } else {
      setError(result.error || "Something went wrong.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--text)]"><Bi t={ui.welcomeBack} /></h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]"><Bi t={ui.loginSubtitle} /></p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {error && (
          <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-sm text-rose-500">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
            <Bi t={ui.emailAddress} />
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] rtl:left-auto rtl:right-3.5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              className="ltr-preserve w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] py-2.5 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="mb-1.5 block text-sm font-medium text-[var(--text)]">
              <Bi t={ui.password} />
            </label>
            <Link href="/forgot-password" className="text-xs font-medium text-[var(--accent)]">
              <Bi t={ui.forgotPassword} />
            </Link>
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] rtl:left-auto rtl:right-3.5" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] py-2.5 pl-10 pr-10 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-faint)] rtl:right-auto rtl:left-3.5"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p className="mt-1.5 text-xs text-[var(--text-faint)]"><Bi t={ui.demoLoginNote} /></p>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={loading}
          icon={loading ? <Loader2 size={16} className="animate-spin" /> : undefined}
          iconPosition="left"
        >
          {loading ? t(ui.loggingIn) : t(ui.logIn)}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
        <Bi t={ui.noAccount} />{" "}
        <Link href="/signup" className="font-medium text-[var(--accent)]">
          <Bi t={ui.signUp} />
        </Link>
      </p>
    </div>
  );
}
