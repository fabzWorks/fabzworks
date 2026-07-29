"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";

type ToastKind = "success" | "error" | "info";

interface Toast {
  id: number;
  kind: ToastKind;
  message: string;
}

interface ToastContextValue {
  push: (message: string, kind?: ToastKind) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let idCounter = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((message: string, kind: ToastKind = "info") => {
    const id = ++idCounter;
    setToasts((t) => [...t, { id, kind, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 4500);
  }, []);

  const remove = (id: number) =>
    setToasts((t) => t.filter((x) => x.id !== id));

  const icons = {
    success: CheckCircle2,
    error: XCircle,
    info: Info,
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 w-[calc(100%-2rem)] sm:w-96">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = icons[t.kind];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95 }}
                className={`card-surface flex items-start gap-3 rounded-xl border p-4 shadow-lg backdrop-blur ${
                  t.kind === "success"
                    ? "border-l-4 border-l-emerald-500"
                    : t.kind === "error"
                    ? "border-l-4 border-l-rose-500"
                    : "border-l-4 border-l-[var(--accent)]"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    t.kind === "success"
                      ? "text-emerald-500 shrink-0 mt-0.5"
                      : t.kind === "error"
                      ? "text-rose-500 shrink-0 mt-0.5"
                      : "text-[var(--accent)] shrink-0 mt-0.5"
                  }
                />
                <p className="text-sm text-[var(--text)] flex-1">{t.message}</p>
                <button
                  onClick={() => remove(t.id)}
                  aria-label="Dismiss notification"
                  className="text-[var(--text-faint)] hover:text-[var(--text)] transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
