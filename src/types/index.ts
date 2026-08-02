export interface Bi {
  en: string;
  ur: string;
}

export interface NavDropdownItem {
  href: string;
  label: Bi;
  icon?: string;
}

export interface NavItem {
  href: string;
  label: Bi;
  dropdown?: NavDropdownItem[];
}

export interface SocialLink {
  label: string;
  title: string;
  href: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: Bi;
  photo: string;
  bio: Bi;
  longBio: Bi;
  skills: string[];
  experience: Bi;
  location: Bi;
  email: string;
  socials: { title: string; href: string; icon: "linkedin" | "github" | "dribbble" | "twitter" }[];
}

export interface ServiceItem {
  slug: string;
  cat: string;
  icon: string;
  title: Bi;
  desc: Bi;
  chips: Bi[];
  overview: Bi;
  deliverables: Bi[];
  process: Bi[];
  faqs: { q: Bi; a: Bi }[];
}

export interface CaseStudy {
  slug: string;
  industry: Bi;
  client: string;
  title: Bi;
  summary: Bi;
  cover: string;
  challenge: Bi;
  solution: Bi;
  results: { label: Bi; value: string }[];
  services: Bi[];
  gradient: string;
}

export interface BlogPost {
  slug: string;
  title: Bi;
  excerpt: Bi;
  content: Bi[];
  tag: Bi;
  date: string;
  read: Bi;
  author: string;
  authorInitials: string;
  authorRole: Bi;
  authorPhoto: string;
  gradient: string;
  icon: string;
  cover: string;
}

export interface JobOpening {
  slug: string;
  title: Bi;
  department: Bi;
  type: Bi;
  location: Bi;
  experience: Bi;
  tags: string[];
  overview: Bi;
  responsibilities: Bi[];
  requirements: Bi[];
  niceToHave: Bi[];
}

export interface Testimonial {
  industry: Bi;
  text: Bi;
  avatar: string;
  photo: string;
  avatarGradient: string;
  name: string;
  role: Bi;
  company: string;
}

export interface Faq {
  q: Bi;
  a: Bi;
}

export interface StatItem {
  value: string;
  label: Bi;
}

export interface ApplyFormState {
  fullName: string;
  email: string;
  phone: string;
  portfolio: string;
  coverMessage: string;
  resumeFileName: string;
}

export type PortfolioCategory = "web" | "mobile" | "ai";

export interface GalleryImage {
  src: string;
  label: Bi;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  categoryLabel: Bi;
  summary: Bi;
  description: Bi;
  icon: string;
  gradient: string;
  cover: string;
  tech: string[];
  features: Bi[];
  demoUrl?: string;
  githubUrl?: string;
  storeUrl?: string;
  gallery: GalleryImage[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

export interface MedicalService {
  slug: string;
  icon: string;
  title: Bi;
  desc: Bi;
}
