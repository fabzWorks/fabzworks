"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Bi from "@/components/atoms/Bi";
import { useLanguage } from "@/lib/language-context";
import type { Bi as BiType } from "@/types";

export default function BackLink({
  href,
  label,
}: {
  href: string;
  label: BiType;
}) {
  const { lang } = useLanguage();
  const Icon = lang === "ur" ? ArrowRight : ArrowLeft;
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
    >
      <Icon size={15} /> <Bi t={label} />
    </Link>
  );
}
