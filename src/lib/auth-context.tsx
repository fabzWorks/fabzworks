"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface AuthUser {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const STORAGE_KEY = "fabzworks-demo-user";

// NOTE: This is a static-frontend demo auth flow. It simulates network
// latency and validation so the UI feels real, but does not talk to a
// real backend. Swap the bodies of login/signup for real API calls when
// you're ready to connect authentication. See docs/PROJECT_GUIDE.md.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of client-only localStorage state, cannot run during render (SSR has no localStorage)
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  const persist = (u: AuthUser | null) => {
    setUser(u);
    if (u) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    else window.localStorage.removeItem(STORAGE_KEY);
  };

  const login: AuthContextValue["login"] = async (email, password) => {
    await new Promise((r) => setTimeout(r, 900));
    if (!email || !password) {
      return { ok: false, error: "Please enter both email and password." };
    }
    if (password.length < 6) {
      return { ok: false, error: "Incorrect email or password." };
    }
    const name = email.split("@")[0].replace(/[._]/g, " ");
    persist({ name: name.charAt(0).toUpperCase() + name.slice(1), email });
    return { ok: true };
  };

  const signup: AuthContextValue["signup"] = async (name, email, password) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (!name || !email || !password) {
      return { ok: false, error: "All fields are required." };
    }
    if (password.length < 8) {
      return { ok: false, error: "Password must be at least 8 characters." };
    }
    persist({ name, email });
    return { ok: true };
  };

  const logout = () => persist(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
