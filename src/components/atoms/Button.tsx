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
  primary:
    "bg-[var(--accent)] text-[var(--bg)] hover:brightness-110 shadow-[0_8px_24px_-8px_var(--accent)]",
  secondary:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border-strong)] hover:bg-[var(--surface-hover)]",
  outline:
    "bg-transparent text-[var(--text)] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--surface-hover)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-xs px-3.5 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-[15px] px-7 py-3.5 gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer";

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
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
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
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}
