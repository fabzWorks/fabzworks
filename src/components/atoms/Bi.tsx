"use client";

import { useLanguage } from "@/lib/language-context";
import type { Bi as BiType } from "@/types";

/**
 * Renders bilingual text based on the active language. Works inside
 * server-component pages too, since this leaf itself is a client
 * component that reads LanguageContext — the parent page doesn't need
 * "use client".
 *
 * Usage: <Bi t={{ en: "Hello", ur: "ہیلو" }} />
 * Or shorthand: <Bi en="Hello" ur="ہیلو" />
 */
export default function Bi({
  t,
  en,
  ur,
  as: As = "span",
  className,
}: {
  t?: BiType;
  en?: string;
  ur?: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const { lang } = useLanguage();
  const text = t ? (lang === "ur" ? t.ur : t.en) : lang === "ur" ? ur : en;
  return <As className={className}>{text}</As>;
}

/** Hook form for use inside other client components / event handlers. */
export function useBi() {
  const { lang } = useLanguage();
  return (t: BiType) => (lang === "ur" ? t.ur : t.en);
}
