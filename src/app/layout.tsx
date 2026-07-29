import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { ToastProvider } from "@/lib/toast-context";
import { AuthProvider } from "@/lib/auth-context";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

// NOTE: next/font/google requires live network access to fonts.googleapis.com
// at build time, which isn't available in every environment. We use curated
// system font stacks defined in globals.css instead (see --font-display,
// --font-sans, --font-mono) so the build is fully offline-safe. If you have
// network access, you can swap these for next/font/google imports — see
// docs/PROJECT_GUIDE.md for instructions.

export const metadata: Metadata = {
  title: {
    default: "FabzWorks — Smart Software Solutions",
    template: "%s | FabzWorks",
  },
  description:
    "FabzWorks builds ERP, CRM, web, mobile, and AI-powered software that fits how your business actually runs. Custom software development, automation, and digital transformation.",
  keywords: [
    "ERP solutions",
    "CRM development",
    "custom software",
    "AI solutions",
    "web development",
    "mobile app development",
    "business automation",
  ],
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var mode = localStorage.getItem('fabzworks-mode') || 'dark';
    var accent = localStorage.getItem('fabzworks-accent') || 'gold';
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.setAttribute('data-accent', accent);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ToastProvider>
            <AuthProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--bg)]"
              >
                Skip to content
              </a>
              <Navbar />
              <main id="main-content">{children}</main>
              <Footer />
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
