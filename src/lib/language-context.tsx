"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ur";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANG_KEY = "fabzworks-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_KEY) as Lang | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of client-only localStorage state, cannot run during render (SSR has no localStorage)
    if (stored) setLangState(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("lang", lang === "ur" ? "ur" : "en");
    root.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
    root.classList.toggle("font-urdu", lang === "ur");
    window.localStorage.setItem(LANG_KEY, lang);
  }, [lang, mounted]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((l) => (l === "en" ? "ur" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
