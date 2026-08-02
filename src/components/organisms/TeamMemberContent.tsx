import { Mail, MapPin, Briefcase, Link2, Code2, AtSign, Palette } from "lucide-react";
import type { TeamMember } from "@/types";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import { ui } from "@/lib/i18n";

const iconMap = {
  linkedin: Link2,
  github: Code2,
  twitter: AtSign,
  dribbble: Palette,
};

export default function TeamMemberContent({ member }: { member: TeamMember }) {
  return (
    <div>
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left rtl:sm:text-right sm:gap-5">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl shadow-lg ring-1 ring-[var(--border)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-4 sm:mt-1">
          <h1 className="text-2xl font-bold text-[var(--text)]">{member.name}</h1>
          <p className="text-sm font-medium text-[var(--accent)]">
            <Bi t={member.role} />
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3 text-xs text-[var(--text-faint)] sm:justify-start">
            <span className="flex items-center gap-1.5">
              <Briefcase size={13} /> <Bi t={member.experience} />
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> <Bi t={member.location} />
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-[15px] leading-relaxed text-[var(--text-muted)]">
        <Bi t={member.longBio} />
      </p>

      <div className="mt-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
          <Bi t={ui.skills} />
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {member.skills.map((s) => (
            <Badge key={s} variant="outline">
              <span className="ltr-preserve">{s}</span>
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
        <a
          href={`mailto:${member.email}`}
          className="ltr-preserve flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
        >
          <Mail size={15} /> {member.email}
        </a>
        <div className="flex gap-2 sm:ml-auto">
          {member.socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.title}
                href={s.href}
                title={s.title}
                aria-label={s.title}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
