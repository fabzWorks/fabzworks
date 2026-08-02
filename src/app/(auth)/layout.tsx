import type { ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import CascadeMark from "@/components/atoms/CascadeMark";
import Bi from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";
import { stats } from "@/data/stats";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[calc(100vh-70px)] grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <Logo size={44} />
          <div className="mt-10">{children}</div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden border-l border-[var(--border)] bg-[var(--bg-elevated)] lg:flex lg:flex-col lg:justify-center lg:px-16 rtl:border-l-0 rtl:border-r">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--accent)" }}
        />
        <CascadeMark className="relative" />
        <h2 className="relative mt-6 max-w-md text-balance text-3xl font-bold leading-tight text-[var(--text)]">
          <Bi t={ui.authSideTitle} />
        </h2>
        <p className="relative mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--text-muted)]">
          <Bi t={ui.authSideDesc} />
        </p>
        <div className="relative mt-10 flex gap-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)]">
              {stats[0].value}
            </p>
            <p className="text-xs text-[var(--text-faint)]"><Bi t={ui.projectsDelivered} /></p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text)]">
              {stats[3].value}
            </p>
            <p className="text-xs text-[var(--text-faint)]"><Bi t={ui.clientRetention} /></p>
          </div>
        </div>
        <Link
          href="/"
          className="relative mt-12 text-sm text-[var(--text-faint)] hover:text-[var(--accent)]"
        >
          <Bi t={ui.backToHome} />
        </Link>
      </div>
    </div>
  );
}
