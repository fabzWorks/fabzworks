import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  showWordmark = true,
  size = 40,
}: {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 shrink-0 group", className)}
      aria-label="FabzWorks — Home"
    >
      <span
        className="relative shrink-0 rounded-xl overflow-hidden ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt="FabzWorks logo"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-[family-name:var(--font-display)] font-bold text-[15px] sm:text-base tracking-tight text-[var(--text)]">
            Fabz<span className="text-[var(--accent)]">Works</span>
          </span>
          <span className="hidden sm:block text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
            Smart Software Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
