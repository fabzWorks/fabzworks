"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Mode = "light" | "dark";
export type Accent = "gold" | "ocean" | "sea" | "floral";

interface ThemeContextValue {
  mode: Mode;
  accent: Accent;
  setMode: (m: Mode) => void;
  setAccent: (a: Accent) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const MODE_KEY = "fabzworks-mode";
const ACCENT_KEY = "fabzworks-accent";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark");
  const [accent, setAccentState] = useState<Accent>("gold");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedMode = window.localStorage.getItem(MODE_KEY) as Mode | null;
    const storedAccent = window.localStorage.getItem(
      ACCENT_KEY
    ) as Accent | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of client-only localStorage state, cannot run during render (SSR has no localStorage)
    if (storedMode) setModeState(storedMode);
    if (storedAccent) setAccentState(storedAccent);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-accent", accent);
    window.localStorage.setItem(MODE_KEY, mode);
    window.localStorage.setItem(ACCENT_KEY, accent);
  }, [mode, accent, mounted]);

  const setMode = (m: Mode) => setModeState(m);
  const setAccent = (a: Accent) => setAccentState(a);
  const toggleMode = () => setModeState((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{ mode, accent, setMode, setAccent, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
