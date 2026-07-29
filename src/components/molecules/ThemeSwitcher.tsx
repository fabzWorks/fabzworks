"use client";

import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { accentThemes } from "@/data/themes";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { mode, accent, toggleMode, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={toggleMode}
        aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {mode === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Choose accent theme"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <Palette size={16} />
        </button>
        {open && (
          <div
            role="menu"
            className="card-surface absolute right-0 top-11 z-50 w-52 rounded-2xl border p-2 shadow-xl"
          >
            <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Accent theme
            </p>
            {accentThemes.map((t) => (
              <button
                key={t.key}
                role="menuitem"
                onClick={() => {
                  setAccent(t.key);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-sm transition-colors hover:bg-[var(--surface-hover)]",
                  accent === t.key && "bg-[var(--surface-hover)]"
                )}
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full border border-[var(--border-strong)]"
                  style={{ background: t.swatch }}
                />
                <span className="flex-1 text-[var(--text)]">{t.label}</span>
                {accent === t.key && (
                  <Check size={14} className="text-[var(--accent)]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
