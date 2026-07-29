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
      className={cn("flex items-center gap-2.5 shrink-0 group perspective", className)}
      aria-label="FabzWorks — Home"
    >
      {/* 3D Flipping Container */}
      <span
        className="relative shrink-0 rounded-xl ring-1 ring-border transition-transform duration-700 ease-out group-hover:transform-[rotateY(180deg)] transform-3d"
        style={{ width: size, height: size }}
      >
        {/* Front Side of the Logo */}
        <span className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
          <Image
            src="/images/logo.png"
            alt="FabzWorks logo"
            fill
            sizes={`${size}px`}
            className="object-cover"
            priority
          />
        </span>

        {/* Back Side of the Logo (Flipped View) */}
        <span className="absolute inset-0 overflow-hidden rounded-xl backface-hidden transform-[rotateY(180deg)]">
          <Image
            src="/images/logo.png"
            alt="FabzWorks logo flipped"
            fill
            sizes={`${size}px`}
            className="object-cover"
            priority
          />
        </span>
      </span>

      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-display font-bold text-[15px] sm:text-base tracking-tight text-text">
            Fabz<span className="text-accent">Works</span>
          </span>
          <span className="hidden sm:block text-[9px] uppercase tracking-[0.16em] text-text-faint">
            Smart Software Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
