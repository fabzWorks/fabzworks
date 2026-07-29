import type { NavItem, SocialLink } from "@/types";

export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services?cat=erp", icon: "🏗️", label: "ERP Solutions" },
      { href: "/services?cat=ai", icon: "🤖", label: "AI & Automation" },
      { href: "/services?cat=web", icon: "🌐", label: "Web Development" },
      { href: "/services?cat=mobile", icon: "📱", label: "Mobile Apps" },
      { href: "/services?cat=saas", icon: "☁️", label: "SaaS Development" },
      { href: "/services?cat=design", icon: "🎨", label: "UI/UX Design" },
    ],
  },
  {
    href: "/about",
    label: "Company",
    dropdown: [
      { href: "/about", icon: "🏢", label: "About Us" },
      { href: "/team", icon: "👥", label: "Our Team" },
      { href: "/case-studies", icon: "📊", label: "Case Studies" },
      { href: "/careers", icon: "💼", label: "Careers" },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const mobileNavLinks = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/services", icon: "⚙️", label: "Services" },
  { href: "/about", icon: "🏢", label: "About" },
  { href: "/team", icon: "👥", label: "Team" },
  { href: "/case-studies", icon: "📊", label: "Case Studies" },
  { href: "/blog", icon: "📝", label: "Blog" },
  { href: "/careers", icon: "💼", label: "Careers" },
  { href: "/contact", icon: "📞", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "in", title: "LinkedIn", href: "#" },
  { label: "gh", title: "GitHub", href: "#" },
  { label: "wa", title: "WhatsApp", href: "https://wa.me/923000000000" },
];

export const siteMap = [
  { href: "/services", icon: "🏗️", label: "Services", desc: "ERP, Web, Mobile, SaaS, Marketing & Design" },
  { href: "/case-studies", icon: "📊", label: "Case Studies", desc: "Real systems we've designed & shipped" },
  { href: "/about", icon: "🏢", label: "About Us", desc: "Who we are & what drives us" },
  { href: "/team", icon: "👥", label: "Our Team", desc: "Meet the people behind FabzWorks" },
  { href: "/blog", icon: "📝", label: "Blog", desc: "Insights & knowledge base" },
  { href: "/careers", icon: "🚀", label: "Careers", desc: "Join our team" },
  { href: "/contact", icon: "📞", label: "Contact", desc: "Start your project today" },
];
