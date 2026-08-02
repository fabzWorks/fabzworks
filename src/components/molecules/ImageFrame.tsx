import type { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Wraps a real project image in a device-style frame: a browser chrome
 * bar for web projects, a phone bezel for mobile projects, or a simple
 * dashboard window for AI projects. The image itself is a real photo
 * (see src/data/portfolio.ts) — only the chrome around it is decorative.
 */
export default function ImageFrame({
  src,
  alt,
  category,
  className,
  priority,
}: {
  src: string;
  alt: string;
  category: PortfolioCategory;
  className?: string;
  priority?: boolean;
}) {
  if (category === "mobile") {
    return (
      <div className={cn("flex justify-center", className)}>
        <div className="relative w-[190px] rounded-[2rem] border-[6px] border-[var(--text)]/90 bg-[var(--text)]/90 p-1.5 shadow-xl sm:w-[220px]">
          <div className="absolute left-1/2 top-2.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[var(--bg)]/60" />
          <div className="aspect-[9/19.5] overflow-hidden rounded-[1.6rem] bg-[var(--bg)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    );
  }

  // web + ai: browser-style chrome
  return (
    <div className={cn("overflow-hidden rounded-xl border border-[var(--border)] shadow-lg", className)}>
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 flex-1 truncate rounded-full bg-[var(--bg)] px-3 py-0.5 text-center text-[10px] text-[var(--text-faint)] ltr-preserve">
          fabzworks.app
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-[var(--bg)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
