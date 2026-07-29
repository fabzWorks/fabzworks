import type { ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import CascadeMark from "@/components/atoms/CascadeMark";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[calc(100vh-70px)] grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <Logo size={44} />
          <div className="mt-10">{children}</div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden border-l border-[var(--border)] bg-[var(--bg-elevated)] lg:flex lg:flex-col lg:justify-center lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <CascadeMark className="relative" />
        <h2 className="relative mt-6 max-w-md text-balance text-3xl font-bold leading-tight text-[var(--text)]">
          One platform for every layer of your business software.
        </h2>
        <p className="relative mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--text-muted)]">
          Log in to track proposals, review project status, and message your
          FabzWorks delivery team directly.
        </p>
        <div className="relative mt-10 flex gap-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)]">
              120+
            </p>
            <p className="text-xs text-[var(--text-faint)]">Projects delivered</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)]">
              98%
            </p>
            <p className="text-xs text-[var(--text-faint)]">Client retention</p>
          </div>
        </div>
        <Link
          href="/"
          className="relative mt-12 text-sm text-[var(--text-faint)] hover:text-[var(--accent)]"
        >
          ← Back to fabzworks.com
        </Link>
      </div>
    </div>
  );
}
