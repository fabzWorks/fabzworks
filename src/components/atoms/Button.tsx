import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<Variant, string> = {
  // Primary mein dynamic spinning/moving border shine reflection add ki hai
  primary:
    "relative overflow-hidden bg-[var(--accent)] text-[var(--bg)] hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_24px_-8px_var(--accent)] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
  secondary:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:border-[var(--text-muted)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-transparent text-[var(--text)] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 active:translate-y-0",
  ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--surface-hover)] hover:scale-[1.02]",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-xs px-3.5 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-[15px] px-7 py-3.5 gap-2.5",
};

// Base styles mein smooth scale aur transform handling inject ki hai
const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer select-none";

// Icons ki custom modern transition handling ke liye separate sub-component
const RenderContent = ({ children, icon, iconPosition }: BaseProps) => (
  <>
    {icon && iconPosition === "left" && (
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:scale-110">
        {icon}
      </span>
    )}
    <span className="relative z-10">{children}</span>
    {icon && iconPosition === "right" && (
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-110">
        {icon}
      </span>
    )}
  </>
);

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, "group", variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      <RenderContent icon={icon} iconPosition={iconPosition}>
        {children}
      </RenderContent>
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "right",
  target,
}: BaseProps & { href: string; target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(base, "group", variantClasses[variant], sizeClasses[size], className)}
    >
      <RenderContent icon={icon} iconPosition={iconPosition}>
        {children}
      </RenderContent>
    </Link>
  );
}
