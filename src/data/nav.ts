import type { NavItem, SocialLink } from "@/types";

export const navLinks: NavItem[] = [
  { href: "/", label: { en: "Home", ur: "ہوم" } },
  {
    href: "/services",
    label: { en: "Services", ur: "سروسز" },
    dropdown: [
      { href: "/services?cat=erp", icon: "🏗️", label: { en: "ERP Solutions", ur: "ای آر پی حل" } },
      { href: "/services?cat=ai", icon: "🤖", label: { en: "AI & Automation", ur: "اے آئی اور آٹومیشن" } },
      { href: "/services?cat=web", icon: "🌐", label: { en: "Web Development", ur: "ویب ڈویلپمنٹ" } },
      { href: "/services?cat=mobile", icon: "📱", label: { en: "Mobile Apps", ur: "موبائل ایپس" } },
      { href: "/services?cat=custom", icon: "🛠️", label: { en: "Custom Software", ur: "حسبِ ضرورت سافٹ ویئر" } },
      { href: "/services?cat=automation", icon: "⚡", label: { en: "Automation", ur: "آٹومیشن" } },
    ],
  },
  { href: "/portfolio", label: { en: "Portfolio", ur: "پورٹ فولیو" } },
  {
    href: "/about",
    label: { en: "Company", ur: "کمپنی" },
    dropdown: [
      { href: "/about", icon: "🏢", label: { en: "About Us", ur: "ہمارے بارے میں" } },
      { href: "/team", icon: "👥", label: { en: "Our Team", ur: "ہماری ٹیم" } },
      { href: "/case-studies", icon: "📊", label: { en: "Case Studies", ur: "کیس اسٹڈیز" } },
      { href: "/testimonials", icon: "💬", label: { en: "Testimonials", ur: "آراء" } },
      { href: "/careers", icon: "💼", label: { en: "Careers", ur: "کیریئر" } },
    ],
  },
  { href: "/medical-billing", label: { en: "Medical Billing", ur: "میڈیکل بلنگ" } },
  { href: "/blog", label: { en: "Blog", ur: "بلاگ" } },
  { href: "/contact", label: { en: "Contact", ur: "رابطہ" } },
];

export const mobileNavLinks = [
  { href: "/", icon: "🏠", label: { en: "Home", ur: "ہوم" } },
  { href: "/services", icon: "⚙️", label: { en: "Services", ur: "سروسز" } },
  { href: "/portfolio", icon: "🖼️", label: { en: "Portfolio", ur: "پورٹ فولیو" } },
  { href: "/medical-billing", icon: "🩺", label: { en: "Medical Billing", ur: "میڈیکل بلنگ" } },
  { href: "/about", icon: "🏢", label: { en: "About", ur: "ہمارے بارے میں" } },
  { href: "/team", icon: "👥", label: { en: "Team", ur: "ٹیم" } },
  { href: "/case-studies", icon: "📊", label: { en: "Case Studies", ur: "کیس اسٹڈیز" } },
  { href: "/testimonials", icon: "💬", label: { en: "Testimonials", ur: "آراء" } },
  { href: "/blog", icon: "📝", label: { en: "Blog", ur: "بلاگ" } },
  { href: "/careers", icon: "💼", label: { en: "Careers", ur: "کیریئر" } },
  { href: "/contact", icon: "📞", label: { en: "Contact", ur: "رابطہ" } },
];

export const socialLinks: SocialLink[] = [
  { label: "in", title: "LinkedIn", href: "#" },
  { label: "gh", title: "GitHub", href: "#" },
  { label: "wa", title: "WhatsApp", href: "https://wa.me/923000000000" },
];

export const siteMap = [
  { href: "/services", icon: "🏗️", label: { en: "Services", ur: "سروسز" }, desc: { en: "ERP, Web, Mobile, AI & Automation", ur: "ای آر پی، ویب، موبائل، اے آئی اور آٹومیشن" } },
  { href: "/portfolio", icon: "🖼️", label: { en: "Portfolio", ur: "پورٹ فولیو" }, desc: { en: "Web, mobile & AI projects we've shipped", ur: "ویب، موبائل اور اے آئی پراجیکٹس" } },
  { href: "/medical-billing", icon: "🩺", label: { en: "Medical Billing", ur: "میڈیکل بلنگ" }, desc: { en: "RCM & claims processing services", ur: "آر سی ایم اور کلیمز پروسیسنگ سروسز" } },
  { href: "/case-studies", icon: "📊", label: { en: "Case Studies", ur: "کیس اسٹڈیز" }, desc: { en: "Real systems we've designed & shipped", ur: "حقیقی نظام جو ہم نے تیار کیے" } },
  { href: "/about", icon: "🏢", label: { en: "About Us", ur: "ہمارے بارے میں" }, desc: { en: "Who we are & what drives us", ur: "ہم کون ہیں اور ہمارا مقصد کیا ہے" } },
  { href: "/team", icon: "👥", label: { en: "Our Team", ur: "ہماری ٹیم" }, desc: { en: "Meet the people behind FabzWorks", ur: "فیبز ورکس کے پیچھے موجود لوگوں سے ملیں" } },
  { href: "/testimonials", icon: "💬", label: { en: "Testimonials", ur: "آراء" }, desc: { en: "What our clients say about working with us", ur: "کلائنٹس ہمارے ساتھ کام کرنے کے بارے میں کیا کہتے ہیں" } },
  { href: "/blog", icon: "📝", label: { en: "Blog", ur: "بلاگ" }, desc: { en: "Insights & knowledge base", ur: "بصیرت اور معلوماتی مضامین" } },
  { href: "/careers", icon: "🚀", label: { en: "Careers", ur: "کیریئر" }, desc: { en: "Join our team", ur: "ہماری ٹیم میں شامل ہوں" } },
  { href: "/contact", icon: "📞", label: { en: "Contact", ur: "رابطہ" }, desc: { en: "Start your project today", ur: "آج ہی اپنا منصوبہ شروع کریں" } },
];
