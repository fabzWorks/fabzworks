"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
    >
      <ArrowLeft size={15} /> {label}
    </Link>
  );
}
