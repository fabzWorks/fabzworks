import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "erp-solutions",
    cat: "erp",
    icon: "🏗️",
    title: "ERP Solutions",
    desc: "Unified enterprise resource planning systems that connect finance, inventory, HR, and operations into a single source of truth.",
    chips: ["Inventory", "Finance", "HR", "Procurement"],
    overview:
      "We design and build ERP platforms tailored to how your business actually runs, not the other way around. From multi-warehouse inventory to payroll and procurement, every module is wired together so data entered once flows everywhere it's needed.",
    deliverables: [
      "Custom modules for finance, inventory, HR & procurement",
      "Role-based dashboards for every department",
      "Real-time reporting and audit trails",
      "Multi-branch and multi-currency support",
      "Data migration from legacy spreadsheets or systems",
    ],
    process: [
      "Process mapping & requirements workshop",
      "Data model & module architecture design",
      "Iterative build with weekly demos",
      "User acceptance testing & staff training",
      "Go-live support and post-launch tuning",
    ],
    faqs: [
      {
        q: "Can the ERP integrate with our existing accounting software?",
        a: "Yes. We build connectors for most major accounting and banking platforms, and can also work directly against your existing database where needed.",
      },
      {
        q: "How long does an ERP rollout typically take?",
        a: "A focused single-department ERP can launch in 6-8 weeks. Full multi-department platforms typically run 3-5 months, delivered in usable phases.",
      },
    ],
  },
  {
    slug: "crm-platforms",
    cat: "crm",
    icon: "🤝",
    title: "CRM Platforms",
    desc: "Customer relationship platforms that give sales and support teams a complete view of every lead, deal, and conversation.",
    chips: ["Pipelines", "Automation", "Support Desk"],
    overview:
      "Your CRM should match your sales process, not force your team into a generic template. We build pipeline views, automated follow-ups, and support ticketing that fit exactly how your team sells and serves customers.",
    deliverables: [
      "Custom sales pipelines & deal stages",
      "Automated lead scoring and follow-up sequences",
      "Support ticketing with SLA tracking",
      "Email & WhatsApp integration",
      "Sales performance dashboards",
    ],
    process: [
      "Sales & support workflow discovery",
      "Pipeline and automation design",
      "Build & integrate communication channels",
      "Team onboarding and rollout",
      "Ongoing optimization based on usage data",
    ],
    faqs: [
      {
        q: "Can you migrate our data from our current CRM?",
        a: "Yes, we handle full data migration including contacts, deal history, and notes, with a validation pass before go-live.",
      },
      {
        q: "Does the CRM work on mobile?",
        a: "Every CRM we build is responsive by default, and we offer dedicated mobile apps for field sales teams on request.",
      },
    ],
  },
  {
    slug: "web-development",
    cat: "web",
    icon: "🌐",
    title: "Web Development",
    desc: "Fast, accessible, SEO-ready websites and web applications built on modern frameworks.",
    chips: ["Next.js", "React", "SEO"],
    overview:
      "We build marketing sites, dashboards, and full web applications on modern, maintainable stacks. Every project ships with performance, accessibility, and search visibility built in from day one, not bolted on afterward.",
    deliverables: [
      "Responsive, accessible marketing websites",
      "Custom web application dashboards",
      "SEO-friendly architecture & metadata",
      "CMS integration for easy content updates",
      "Performance budget & Core Web Vitals tuning",
    ],
    process: [
      "Discovery & sitemap planning",
      "UI/UX design in collaboration with your brand",
      "Component-based development",
      "QA across devices and browsers",
      "Launch, monitoring & handover documentation",
    ],
    faqs: [
      {
        q: "Which frameworks do you use?",
        a: "Primarily Next.js and React on the frontend, with Node.js, or your preferred backend stack, powering the API layer.",
      },
      {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes, we offer monthly maintenance retainers covering updates, monitoring, and small feature additions.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    cat: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native-feeling iOS and Android apps built with cross-platform frameworks for speed without compromise.",
    chips: ["iOS", "Android", "Cross-platform"],
    overview:
      "We build mobile apps that feel native on both iOS and Android from a single, well-structured codebase, keeping delivery fast without sacrificing performance or platform-native feel.",
    deliverables: [
      "Cross-platform app for iOS & Android",
      "Push notifications & offline support",
      "Secure authentication & payments",
      "App Store & Play Store submission support",
      "Analytics and crash monitoring setup",
    ],
    process: [
      "Product scoping & wireframes",
      "UI design & prototyping",
      "Development in two-week sprints",
      "Device testing across screen sizes",
      "Store submission & release management",
    ],
    faqs: [
      {
        q: "Do you build native apps or hybrid?",
        a: "We typically use cross-platform frameworks like React Native for speed and cost efficiency, and recommend fully native builds only when a project truly requires it.",
      },
      {
        q: "Can you maintain our app after launch?",
        a: "Yes, we offer ongoing release management, OS-compatibility updates, and new feature development.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    cat: "ai",
    icon: "🤖",
    title: "AI Solutions",
    desc: "Practical AI features, chat assistants, document intelligence, and predictive models, built into your existing workflows.",
    chips: ["Chatbots", "ML Models", "NLP"],
    overview:
      "We integrate AI where it actually saves time: intelligent chat assistants, document extraction, demand forecasting, and recommendation engines, connected directly into the tools your team already uses.",
    deliverables: [
      "Custom chat assistants trained on your data",
      "Document extraction & classification pipelines",
      "Predictive models for demand or churn",
      "Recommendation engines",
      "Integration into existing ERP/CRM systems",
    ],
    process: [
      "Use-case identification & data audit",
      "Model selection or fine-tuning",
      "Pipeline & integration build",
      "Evaluation against real-world accuracy targets",
      "Deployment with monitoring & feedback loops",
    ],
    faqs: [
      {
        q: "Do we need our own dataset to start?",
        a: "Not always. Many use cases can start with general-purpose models and your existing documents or records, refined over time as more data becomes available.",
      },
      {
        q: "How do you handle data privacy?",
        a: "We design pipelines around your compliance requirements, including on-premise or private-cloud deployment options where needed.",
      },
    ],
  },
  {
    slug: "custom-software",
    cat: "custom",
    icon: "🛠️",
    title: "Custom Software Development",
    desc: "Bespoke software built around your exact operational workflow when off-the-shelf tools fall short.",
    chips: ["Bespoke Systems", "Legacy Modernization"],
    overview:
      "When no off-the-shelf product fits, we design software around your actual processes, whether that means replacing a fragile legacy system or building something entirely new.",
    deliverables: [
      "Requirements-driven system architecture",
      "Custom internal tools & workflow software",
      "Legacy system modernization",
      "API-first design for future extensibility",
      "Full documentation & knowledge transfer",
    ],
    process: [
      "Deep-dive requirements workshops",
      "Architecture & technology selection",
      "Iterative development with regular checkpoints",
      "Structured QA & UAT",
      "Deployment and long-term support planning",
    ],
    faqs: [
      {
        q: "How do you scope a custom project?",
        a: "We start with structured discovery sessions to map your workflow in detail before proposing architecture and a phased delivery plan.",
      },
      {
        q: "Do you provide source code ownership?",
        a: "Yes, you retain full ownership of all custom code delivered under our engagements.",
      },
    ],
  },
  {
    slug: "automation",
    cat: "automation",
    icon: "⚡",
    title: "Business Process Automation",
    desc: "Automate repetitive manual work across departments so your team can focus on higher-value tasks.",
    chips: ["Workflow Automation", "RPA"],
    overview:
      "We identify the repetitive manual work eating up your team's time, invoicing, data entry, approvals, reporting, and automate it end to end, with clear audit trails and exception handling.",
    deliverables: [
      "Workflow mapping & automation opportunity audit",
      "Automated invoicing, approvals & reporting",
      "Cross-system data synchronization",
      "Exception handling & alerting",
      "Ongoing automation monitoring dashboards",
    ],
    process: [
      "Process audit & opportunity scoring",
      "Automation design & tool selection",
      "Build & sandbox testing",
      "Staged rollout with fallback procedures",
      "Monitoring & continuous refinement",
    ],
    faqs: [
      {
        q: "Which tools do you build automations with?",
        a: "We select the right approach per case, from custom scripts and serverless functions to established workflow platforms, depending on complexity and budget.",
      },
      {
        q: "What happens if an automation fails?",
        a: "Every automation we build includes alerting and fallback handling, so failures are caught immediately rather than silently causing downstream problems.",
      },
    ],
  },
  {
    slug: "api-integrations",
    cat: "integrations",
    icon: "🔌",
    title: "API Integrations",
    desc: "Connect your systems, payment gateways, shipping providers, marketing tools, into one seamless flow of data.",
    chips: ["Payments", "Third-party APIs", "Webhooks"],
    overview:
      "Disconnected tools create manual work and data drift. We build reliable integrations between your ERP, CRM, payment gateways, and third-party services so information flows automatically and accurately.",
    deliverables: [
      "Payment gateway integrations",
      "Shipping & logistics provider connections",
      "Marketing & analytics tool integrations",
      "Webhook-based real-time sync",
      "Integration monitoring & error alerting",
    ],
    process: [
      "Integration mapping across all systems",
      "API contract design & authentication setup",
      "Build with sandbox/staging validation",
      "Production rollout with monitoring",
      "Documentation for future integrations",
    ],
    faqs: [
      {
        q: "Can you integrate with APIs that have limited documentation?",
        a: "Yes, we regularly work with sparsely documented or legacy APIs and handle the reverse-engineering and validation work required.",
      },
      {
        q: "How do you handle API rate limits?",
        a: "We design integrations with queuing, retries, and backoff strategies so rate limits don't cause data loss or downtime.",
      },
    ],
  },
];

export const serviceCategories = [
  { key: "all", label: "All Services" },
  { key: "erp", label: "ERP" },
  { key: "crm", label: "CRM" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "ai", label: "AI" },
  { key: "custom", label: "Custom Software" },
  { key: "automation", label: "Automation" },
  { key: "integrations", label: "Integrations" },
];
