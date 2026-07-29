import type { JobOpening } from "@/types";

export const jobs: JobOpening[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Rawalpindi (Hybrid)",
    experience: "4+ years",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "We're looking for a senior full-stack engineer to help lead delivery on enterprise ERP and CRM platforms, from architecture decisions through hands-on implementation.",
    responsibilities: [
      "Design and build full-stack features across our client ERP/CRM platforms",
      "Participate in architecture reviews and technical planning",
      "Mentor mid-level engineers through code review and pairing",
      "Work directly with project managers and clients on requirements",
      "Own delivery quality from local dev through production deployment",
    ],
    requirements: [
      "4+ years building production web applications",
      "Strong experience with React/Next.js and Node.js",
      "Comfortable designing relational database schemas",
      "Clear written communication for async, distributed teams",
      "Experience working directly with clients or stakeholders",
    ],
    niceToHave: [
      "Experience with ERP or CRM systems specifically",
      "Familiarity with cloud infrastructure (AWS/GCP)",
      "Prior mentorship or tech-lead experience",
    ],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "AI & Data",
    type: "Full-time",
    location: "Remote (Pakistan)",
    experience: "3+ years",
    tags: ["Python", "NLP", "LLMs"],
    overview:
      "Join our AI team building practical, production-grade AI features for clients: document intelligence, chat assistants, and forecasting models that hold up under real usage.",
    responsibilities: [
      "Build and fine-tune models for document extraction and classification",
      "Develop chat assistant pipelines grounded in client data",
      "Evaluate model accuracy against clear business metrics",
      "Collaborate with engineering to integrate AI features into existing systems",
      "Stay current with practical, production-ready AI tooling",
    ],
    requirements: [
      "3+ years of applied ML or NLP experience",
      "Strong Python skills and experience with modern ML frameworks",
      "Experience deploying models to production, not just notebooks",
      "Ability to explain technical tradeoffs to non-technical stakeholders",
    ],
    niceToHave: [
      "Experience with retrieval-augmented generation (RAG) pipelines",
      "Familiarity with vector databases",
      "Prior experience in an agency or client-facing role",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer (UI/UX)",
    department: "Design",
    type: "Full-time",
    location: "Islamabad (Hybrid)",
    experience: "3+ years",
    tags: ["Figma", "Design Systems", "Prototyping"],
    overview:
      "We're hiring a product designer to shape interfaces for complex enterprise workflows, ERP dashboards, CRM pipelines, mobile apps, and make them genuinely pleasant to use.",
    responsibilities: [
      "Design end-to-end user flows for web and mobile products",
      "Maintain and extend our internal design system",
      "Run and synthesize usability feedback sessions with client teams",
      "Partner closely with engineering through implementation",
      "Present design rationale directly to clients",
    ],
    requirements: [
      "3+ years of product design experience with a strong portfolio",
      "Fluency in Figma and modern design systems practice",
      "Experience designing for data-dense or dashboard interfaces",
      "Strong communication skills for client-facing presentations",
    ],
    niceToHave: [
      "Experience designing ERP, CRM, or other enterprise software",
      "Basic front-end coding literacy (HTML/CSS)",
    ],
  },
  {
    slug: "project-delivery-manager",
    title: "Project Delivery Manager",
    department: "Delivery",
    type: "Full-time",
    location: "Rawalpindi (On-site)",
    experience: "3+ years",
    tags: ["Agile", "Client Management"],
    overview:
      "We need an organized, communicative delivery manager to run day-to-day client engagements, keeping scope, timeline, and expectations aligned across every active project.",
    responsibilities: [
      "Run sprint planning, standups, and client status updates",
      "Own project timelines and flag risks before they become blockers",
      "Manage scope conversations and change requests with clients",
      "Coordinate across engineering, design, and AI teams",
      "Maintain clear project documentation throughout delivery",
    ],
    requirements: [
      "3+ years managing software delivery projects",
      "Experience with agile delivery practices",
      "Excellent written and verbal communication",
      "Comfort working directly with external clients",
    ],
    niceToHave: [
      "PMP or equivalent certification",
      "Technical background sufficient to read a system architecture diagram",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Remote (Pakistan)",
    experience: "3+ years",
    tags: ["AWS", "Docker", "CI/CD"],
    overview:
      "Help us keep every client deployment fast, secure, and reliable, from CI/CD pipelines to production monitoring across a growing portfolio of ERP, CRM, and web platforms.",
    responsibilities: [
      "Build and maintain CI/CD pipelines across client projects",
      "Manage cloud infrastructure with an eye on cost and reliability",
      "Set up monitoring, alerting, and incident response processes",
      "Harden deployments against common security risks",
      "Document infrastructure clearly for the wider engineering team",
    ],
    requirements: [
      "3+ years in a DevOps or infrastructure-focused role",
      "Strong experience with AWS or a comparable cloud provider",
      "Hands-on experience with Docker and CI/CD tooling",
      "Working knowledge of security best practices for web applications",
    ],
    niceToHave: [
      "Experience with infrastructure-as-code (Terraform, Pulumi)",
      "Kubernetes experience",
    ],
  },
];

export const departments = [
  "All",
  "Engineering",
  "AI & Data",
  "Design",
  "Delivery",
  "Infrastructure",
];
