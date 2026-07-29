export interface NavDropdownItem {
  href: string;
  label: string;
  icon?: string;
}

export interface NavItem {
  href: string;
  label: string;
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
  role: string;
  initials: string;
  gradient: string;
  bio: string;
  longBio: string;
  skills: string[];
  experience: string;
  location: string;
  email: string;
  socials: { title: string; href: string; icon: "linkedin" | "github" | "dribbble" | "twitter" }[];
}

export interface ServiceItem {
  slug: string;
  cat: string;
  icon: string;
  title: string;
  desc: string;
  chips: string[];
  overview: string;
  deliverables: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export interface CaseStudy {
  slug: string;
  industry: string;
  client: string;
  title: string;
  summary: string;
  cover: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  services: string[];
  gradient: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  tag: string;
  date: string;
  read: string;
  author: string;
  authorInitials: string;
  authorRole: string;
  gradient: string;
  icon: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  tags: string[];
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export interface Testimonial {
  industry: string;
  text: string;
  avatar: string;
  avatarGradient: string;
  name: string;
  role: string;
  company: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ApplyFormState {
  fullName: string;
  email: string;
  phone: string;
  portfolio: string;
  coverMessage: string;
  resumeFileName: string;
}
