"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, User, LogOut } from "lucide-react";
import Logo from "@/components/atoms/Logo";
import { LinkButton } from "@/components/atoms/Button";
import Bi, { useBi } from "@/components/atoms/Bi";
import ThemeSwitcher from "@/components/molecules/ThemeSwitcher";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import { navLinks, mobileNavLinks } from "@/data/nav";
import { ui } from "@/lib/i18n";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const t = useBi();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closing the mobile menu on route change is a deliberate UI sync, not derived render state
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 sm:h-[70px] items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(t(link.label))}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                )}
              >
                <Bi t={link.label} />
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform",
                      openDropdown === t(link.label) && "rotate-180"
                    )}
                  />
                )}
              </Link>
              <AnimatePresence>
                {link.dropdown && openDropdown === t(link.label) && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="card-surface absolute left-0 top-full w-64 rounded-2xl border p-2 shadow-xl rtl:left-auto rtl:right-0"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                      >
                        <span aria-hidden="true">{item.icon}</span>
                        <Bi t={item.label} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          {user ? (
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                <User size={14} /> {user.name.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                aria-label={t(ui.logout)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <>
              <LinkButton href="/login" variant="ghost" size="sm">
                <Bi t={ui.login} />
              </LinkButton>
              <LinkButton href="/contact" variant="primary" size="sm">
                <Bi t={ui.startProject} />
              </LinkButton>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium",
                    pathname === link.href
                      ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                      : "text-[var(--text-muted)]"
                  )}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <Bi t={link.label} />
                </Link>
              ))}
              <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-[var(--border)]">
                <ThemeSwitcher />
                {user ? (
                  <button
                    onClick={logout}
                    className="text-sm font-medium text-[var(--text-muted)]"
                  >
                    <Bi t={ui.logout} />
                  </button>
                ) : (
                  <LinkButton href="/login" variant="secondary" size="sm">
                    <Bi t={ui.login} />
                  </LinkButton>
                )}
              </div>
              <LinkButton href="/contact" variant="primary" size="md" className="mt-2 w-full">
                <Bi t={ui.startProject} />
              </LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
