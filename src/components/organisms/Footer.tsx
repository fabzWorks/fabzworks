import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import CascadeMark from "@/components/atoms/CascadeMark";
import { siteMap, socialLinks } from "@/data/nav";
import { contactDetails } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo size={44} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              We design and build ERP, CRM, web, mobile, and AI-powered
              software that fits how your business actually runs.
            </p>
            <CascadeMark className="mt-6" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text)]">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {siteMap.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text)]">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {siteMap.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Client Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--text)]">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                <Mail size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-[var(--accent)]">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                <Phone size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-[var(--accent)]">
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <span>{contactDetails.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  aria-label={s.title}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-xs font-semibold uppercase text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--text-faint)]">
            © {new Date().getFullYear()} FabzWorks. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-faint)]">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
