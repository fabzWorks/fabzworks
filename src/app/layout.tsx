import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import { ToastProvider } from "@/lib/toast-context";
import { AuthProvider } from "@/lib/auth-context";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import WhatsAppButton from "@/components/organisms/WhatsAppButton";
import ChatWidget from "@/components/organisms/ChatWidget";

// NOTE: next/font/google requires live network access to fonts.googleapis.com
// at build time, which isn't available in every environment. We use curated
// system font stacks defined in globals.css instead (see --font-display,
// --font-sans, --font-mono) so the build is fully offline-safe. If you have
// network access, you can swap these for next/font/google imports — see
// docs/PROJECT_GUIDE.md for instructions.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabzworks.com"),
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
  authors: [{ name: "FabzWorks" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "FabzWorks",
    title: "FabzWorks — Smart Software Solutions",
    description:
      "ERP, CRM, web, mobile, and AI-powered software built around how your business actually runs.",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "FabzWorks" }],
  },
  twitter: {
    card: "summary",
    title: "FabzWorks — Smart Software Solutions",
    description:
      "ERP, CRM, web, mobile, and AI-powered software built around how your business actually runs.",
    images: ["/images/logo.png"],
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FabzWorks",
  url: "https://www.fabzworks.com",
  logo: "https://www.fabzworks.com/images/logo.png",
  description:
    "FabzWorks builds ERP, CRM, web, mobile, and AI-powered software for growing businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@fabzworks.com",
  },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var mode = localStorage.getItem('fabzworks-mode') || 'dark';
    var accent = localStorage.getItem('fabzworks-accent') || 'gold';
    var lang = localStorage.getItem('fabzworks-lang') || 'en';
    document.documentElement.classList.toggle('dark', mode === 'dark');
    document.documentElement.setAttribute('data-accent', accent);
    document.documentElement.setAttribute('lang', lang === 'ur' ? 'ur' : 'en');
    document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
    document.documentElement.classList.toggle('font-urdu', lang === 'ur');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body className="antialiased">
        
        <ThemeProvider>
          <LanguageProvider>
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
              <WhatsAppButton />
              <ChatWidget />
            </AuthProvider>
          </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
