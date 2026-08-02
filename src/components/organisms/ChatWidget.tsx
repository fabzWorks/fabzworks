"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bot } from "lucide-react";
import type { ChatMessage } from "@/types";
import Bi, { useBi } from "@/components/atoms/Bi";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/i18n";

/**
 * Static-frontend AI chat widget.
 *
 * Responses below are keyword-matched, canned demo replies — there is no
 * live model call. This keeps the widget fully functional (typing
 * indicator, scrolling, message history) without a backend. To connect a
 * real assistant, replace `getReply()` with a fetch() to your own API
 * route, which can call Claude, OpenAI, or any model you like server-side
 * (never call a model provider directly from the client with a secret
 * key). See docs/PROJECT_GUIDE.md.
 */

const QUICK_PROMPTS: { en: string; ur: string }[] = [
  { en: "What services do you offer?", ur: "آپ کون سی سروسز فراہم کرتے ہیں؟" },
  { en: "How much does a project cost?", ur: "ایک منصوبے کی قیمت کتنی ہوتی ہے؟" },
  { en: "Can I see your portfolio?", ur: "کیا میں آپ کا پورٹ فولیو دیکھ سکتا ہوں؟" },
  { en: "How do I apply for a job?", ur: "میں نوکری کے لیے کیسے درخواست دوں؟" },
];

function getReply(input: string, lang: "en" | "ur"): string {
  const q = input.toLowerCase();
  const en = {
    services: "We build ERP, CRM, web, mobile, and AI-powered software, plus automation and API integrations. You can browse everything on the /services page, or tell me what you're trying to solve and I'll point you to the right one.",
    price: "Pricing depends on scope — we quote fixed-price for well-defined projects, or a monthly retainer for ongoing work. The fastest way to get a real number is a quick discovery call — want me to send you to the contact form?",
    portfolio: "Take a look at /portfolio — it's filterable by Web, Mobile, and AI, with a gallery, live demo links, and GitHub links for each project.",
    jobs: "We're hiring across Engineering, AI, Design, and Delivery — check out /careers for open roles. Each one has a full description and a quick apply form.",
    contact: "You can reach us at hello@fabzworks.com, on WhatsApp using the green button in the corner, or through the form on /contact — we usually reply within a business day.",
    hi: "Hey there! I'm the FabzWorks assistant (demo mode). Ask me about our services, portfolio, pricing, or careers.",
    fallback: "Thanks for the message! This is a demo assistant, so my answers are limited right now — but for anything specific, the fastest path is our contact form, or WhatsApp using the green button in the corner.",
  };
  const ur = {
    services: "ہم ای آر پی، سی آر ایم، ویب، موبائل اور اے آئی سافٹ ویئر بناتے ہیں، اس کے علاوہ آٹومیشن اور اے پی آئی انضمام بھی۔ /services صفحہ ملاحظہ کریں یا بتائیں کہ آپ کیا حل کرنا چاہتے ہیں۔",
    price: "قیمت دائرہ کار پر منحصر ہے — ہم مقررہ قیمت یا ماہانہ بنیاد پر پیشکش دیتے ہیں۔ درست نمبر جاننے کا تیز ترین طریقہ ایک مختصر کال ہے۔",
    portfolio: "/portfolio ملاحظہ کریں — یہ ویب، موبائل اور اے آئی کے مطابق فلٹر ہو سکتا ہے، گیلری اور ڈیمو لنکس کے ساتھ۔",
    jobs: "ہم انجینئرنگ، اے آئی، ڈیزائن اور ڈلیوری میں بھرتی کر رہے ہیں — /careers پر دیکھیں۔",
    contact: "آپ hello@fabzworks.com پر، واٹس ایپ کے سبز بٹن پر، یا /contact کے فارم کے ذریعے ہم سے رابطہ کر سکتے ہیں۔",
    hi: "سلام! میں فیبز ورکس اسسٹنٹ ہوں (ڈیمو موڈ)۔ ہماری سروسز، پورٹ فولیو، قیمت یا کیریئر کے بارے میں پوچھیں۔",
    fallback: "پیغام کا شکریہ! یہ ایک ڈیمو اسسٹنٹ ہے، اس لیے میرے جوابات محدود ہیں — لیکن کسی بھی خاص معاملے کے لیے، رابطہ فارم یا واٹس ایپ بہترین طریقہ ہے۔",
  };
  const dict = lang === "ur" ? ur : en;
  if (/(service|erp|crm|automation|integration|ai\b|سروس|ای آر پی)/.test(q)) return dict.services;
  if (/(price|cost|budget|quote|قیمت|بجٹ)/.test(q)) return dict.price;
  if (/(portfolio|project|work|example|پورٹ فولیو|کام)/.test(q)) return dict.portfolio;
  if (/(job|career|apply|hiring|position|نوکری|کیریئر)/.test(q)) return dict.jobs;
  if (/(contact|talk|call|email|reach|رابطہ)/.test(q)) return dict.contact;
  if (/(hi|hello|hey|سلام|ہیلو)/.test(q)) return dict.hi;
  return dict.fallback;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const t = useBi();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    // eslint-disable-next-line react-hooks/purity -- runs inside a user-triggered event callback (send), not during render; jitter is intentional for a natural typing-delay feel
    const delay = 900 + Math.random() * 500;
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", text: getReply(trimmed, lang) },
      ]);
    }, delay);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with FabzWorks assistant"}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: open ? 0 : -6 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-[150] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent)] text-[var(--bg)] shadow-2xl rtl:right-auto rtl:left-6"
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--accent)" }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} className="relative">
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex"
              >
                <MessageCircle size={24} />
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-[var(--bg)]"
          >
            <Sparkles size={8} className="text-white" />
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.22, type: "spring", stiffness: 260, damping: 24 }}
            className="card-surface fixed bottom-[6.5rem] right-4 z-[150] flex h-[70vh] max-h-[560px] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border shadow-2xl sm:right-6 rtl:right-auto rtl:left-4 sm:rtl:left-6"
            role="dialog"
            aria-label="FabzWorks AI assistant"
          >
            <div className="relative flex items-center gap-3 overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-[var(--accent-soft)] to-[var(--bg-elevated)] px-4 py-3.5">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-lg">
                <Bot size={19} />
              </span>
              <div className="flex-1">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text)]">
                  <Bi t={ui.chatAssistant} /> <Sparkles size={13} className="text-[var(--accent)]" />
                </p>
                <p className="text-[11px] text-[var(--text-faint)]"><Bi t={ui.chatDemoMode} /></p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--accent)] text-[var(--bg)]"
                        : "bg-[var(--surface-hover)] text-[var(--text)]"
                    }`}
                  >
                    {i === 0 && m.role === "assistant" ? t(ui.chatWelcome) : m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-[var(--surface-hover)] px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--text-faint)]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.1, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {messages.length < 3 && (
              <div className="flex flex-wrap gap-1.5 border-t border-[var(--border)] px-4 py-3">
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q.en}
                    onClick={() => send(t(q))}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {t(q)}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[var(--border)] p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t(ui.chatPlaceholder)}
                aria-label="Message"
                className="flex-1 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] transition-transform active:scale-90 disabled:opacity-40"
              >
                <Send size={15} className="rtl:-scale-x-100" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
