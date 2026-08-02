import type { PortfolioProject } from "@/types";

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const portfolioProjects: PortfolioProject[] = [
  // ---------------- WEB DEVELOPMENT ----------------
  {
    slug: "orbitpay-merchant-dashboard",
    title: "OrbitPay Merchant Dashboard",
    client: "OrbitPay",
    category: "web",
    categoryLabel: { en: "Web Development", ur: "ویب ڈویلپمنٹ" },
    summary: {
      en: "A real-time payments dashboard for merchants to track transactions, payouts, and disputes across every sales channel.",
      ur: "تاجروں کے لیے ایک حقیقی وقت کی ادائیگیوں کا ڈیش بورڈ جو ہر سیلز چینل میں لین دین، ادائیگیاں اور تنازعات ٹریک کرتا ہے۔",
    },
    description: {
      en: "OrbitPay needed a single dashboard where merchants could see payments coming in from web, POS, and mobile checkout in real time. We built a Next.js dashboard with live transaction feeds, payout scheduling, dispute management, and exportable reporting, all wrapped in a fast, keyboard-navigable interface.",
      ur: "اوربٹ پے کو ایک ایسا ڈیش بورڈ چاہیے تھا جہاں تاجر ویب، POS اور موبائل چیک آؤٹ سے آنے والی ادائیگیاں حقیقی وقت میں دیکھ سکیں۔",
    },
    icon: "💳",
    gradient: "from-[#0f6e93] to-[#5b6472]",
    cover: img("orbitpay-cover", 900, 600),
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe API"],
    features: [
      { en: "Real-time transaction feed with filters and search", ur: "فلٹرز اور تلاش کے ساتھ حقیقی وقت لین دین فیڈ" },
      { en: "Automated payout scheduling and history", ur: "خودکار ادائیگی شیڈولنگ اور تاریخ" },
      { en: "Dispute and chargeback management workflow", ur: "تنازعات اور چارج بیک کے انتظام کا ورک فلو" },
      { en: "Exportable financial reports (CSV/PDF)", ur: "قابلِ برآمد مالیاتی رپورٹس" },
      { en: "Role-based access for merchant staff", ur: "تاجر عملے کے لیے کردار پر مبنی رسائی" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      { src: img("orbitpay-1", 900, 600), label: { en: "Dashboard Overview", ur: "ڈیش بورڈ کا جائزہ" } },
      { src: img("orbitpay-2", 900, 600), label: { en: "Transaction Feed", ur: "لین دین فیڈ" } },
      { src: img("orbitpay-3", 900, 600), label: { en: "Payout Scheduling", ur: "ادائیگی شیڈولنگ" } },
      { src: img("orbitpay-4", 900, 600), label: { en: "Reports & Export", ur: "رپورٹس اور برآمد" } },
    ],
  },
  {
    slug: "greenfield-realestate-platform",
    title: "Greenfield Real Estate Platform",
    client: "Greenfield Properties",
    category: "web",
    categoryLabel: { en: "Web Development", ur: "ویب ڈویلپمنٹ" },
    summary: {
      en: "A listings and lead-management website replacing a slow WordPress site, with a 3x faster load time and built-in CRM sync.",
      ur: "ایک لسٹنگ اور لیڈ مینجمنٹ ویب سائٹ جس نے سست ورڈ پریس سائٹ کی جگہ لی، 3 گنا تیز لوڈنگ کے ساتھ۔",
    },
    description: {
      en: "Greenfield's old WordPress site couldn't handle their growing listing catalog or connect cleanly to their CRM. We rebuilt it on Next.js with server-rendered listing pages for SEO, an interactive map search, and a lead capture flow that syncs straight into their sales pipeline.",
      ur: "گرین فیلڈ کی پرانی ورڈپریس سائٹ ان کی بڑھتی ہوئی لسٹنگ کیٹلاگ کو سنبھال نہیں پا رہی تھی۔",
    },
    icon: "🏡",
    gradient: "from-[#0d7a5f] to-[#0f6e93]",
    cover: img("greenfield-cover", 900, 600),
    tech: ["Next.js", "Tailwind CSS", "Mapbox", "CRM API"],
    features: [
      { en: "SEO-optimized, server-rendered listing pages", ur: "ایس ای او کے لیے بہتر بنائے گئے لسٹنگ صفحات" },
      { en: "Interactive map-based property search", ur: "نقشے پر مبنی جائیداد کی تلاش" },
      { en: "Lead capture forms synced to CRM in real time", ur: "حقیقی وقت میں سی آر ایم سے منسلک لیڈ فارمز" },
      { en: "Agent profile pages with saved-search alerts", ur: "محفوظ تلاش الرٹس کے ساتھ ایجنٹ پروفائل صفحات" },
      { en: "3x faster page loads than the previous site", ur: "پرانی سائٹ سے 3 گنا تیز لوڈنگ" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      { src: img("greenfield-1", 900, 600), label: { en: "Homepage & Search", ur: "ہوم پیج اور تلاش" } },
      { src: img("greenfield-2", 900, 600), label: { en: "Map View", ur: "نقشہ منظر" } },
      { src: img("greenfield-3", 900, 600), label: { en: "Listing Detail", ur: "لسٹنگ کی تفصیل" } },
    ],
  },
  {
    slug: "brightdesk-support-portal",
    title: "BrightDesk Support Portal",
    client: "BrightDesk",
    category: "web",
    categoryLabel: { en: "Web Development", ur: "ویب ڈویلپمنٹ" },
    summary: {
      en: "A customer-facing help center and ticketing portal with integrated AI-assisted search across the knowledge base.",
      ur: "ایک کسٹمر کے لیے مدد کا مرکز اور ٹکٹنگ پورٹل جس میں اے آئی کی مدد سے تلاش شامل ہے۔",
    },
    description: {
      en: "BrightDesk wanted customers to self-serve more before opening a ticket. We built a support portal with a searchable knowledge base, AI-assisted article suggestions as users type, and a ticket submission flow that pre-fills context from the article the customer was reading.",
      ur: "برائٹ ڈیسک چاہتا تھا کہ کسٹمرز ٹکٹ کھولنے سے پہلے خود مدد لے سکیں۔",
    },
    icon: "🎧",
    gradient: "from-[#b6532f] to-[#0f6e93]",
    cover: img("brightdesk-web-cover", 900, 600),
    tech: ["Next.js", "Node.js", "Elasticsearch", "OpenAI API"],
    features: [
      { en: "AI-assisted knowledge base search", ur: "اے آئی کی مدد سے نالج بیس تلاش" },
      { en: "Context-aware ticket submission", ur: "سیاق و سباق سے آگاہ ٹکٹ جمع کرانا" },
      { en: "Article feedback and analytics", ur: "مضمون فیڈ بیک اور تجزیات" },
      { en: "Multi-language support", ur: "کثیر لسانی سپورٹ" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      { src: img("brightdesk-web-1", 900, 600), label: { en: "Help Center Home", ur: "مدد مرکز ہوم" } },
      { src: img("brightdesk-web-2", 900, 600), label: { en: "AI-Assisted Search", ur: "اے آئی سے تلاش" } },
      { src: img("brightdesk-web-3", 900, 600), label: { en: "Ticket Submission", ur: "ٹکٹ جمع کرانا" } },
    ],
  },

  // ---------------- MOBILE APPS ----------------
  {
    slug: "cargoline-driver-app",
    title: "CargoLine Driver App",
    client: "CargoLine Express",
    category: "mobile",
    categoryLabel: { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
    summary: {
      en: "A cross-platform driver app with live GPS tracking and digital proof-of-delivery, replacing paper delivery slips entirely.",
      ur: "لائیو جی پی ایس ٹریکنگ کے ساتھ کراس پلیٹ فارم ڈرائیور ایپ جس نے کاغذی رسیدیں مکمل طور پر ختم کر دیں۔",
    },
    description: {
      en: "CargoLine's drivers were relying on phone calls and paper slips to confirm deliveries. We built a React Native app with live GPS tracking, photo and signature capture for proof-of-delivery, and offline support for areas with patchy connectivity, syncing automatically once back online.",
      ur: "کارگو لائن کے ڈرائیورز فون کالز اور کاغذی رسیدوں پر انحصار کرتے تھے۔",
    },
    icon: "🚚",
    gradient: "from-[#0d7a5f] to-[#5b6472]",
    cover: img("cargoline-cover", 480, 960),
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    features: [
      { en: "Live GPS route tracking", ur: "لائیو جی پی ایس روٹ ٹریکنگ" },
      { en: "Photo & signature proof-of-delivery capture", ur: "تصویر اور دستخط سے ڈیلیوری کا ثبوت" },
      { en: "Offline-first with automatic background sync", ur: "آف لائن سے شروع، خودکار پس منظر ہم آہنگی" },
      { en: "Push notifications for new assignments", ur: "نئے کاموں کے لیے پش نوٹیفیکیشنز" },
    ],
    demoUrl: "#",
    storeUrl: "#",
    githubUrl: "#",
    gallery: [
      { src: img("cargoline-1", 480, 960), label: { en: "Today's Route", ur: "آج کا روٹ" } },
      { src: img("cargoline-2", 480, 960), label: { en: "Proof of Delivery", ur: "ڈیلیوری کا ثبوت" } },
      { src: img("cargoline-3", 480, 960), label: { en: "Delivery History", ur: "ڈیلیوری کی تاریخ" } },
    ],
  },
  {
    slug: "harvestpoint-field-app",
    title: "HarvestPoint Field App",
    client: "HarvestPoint Co-operative",
    category: "mobile",
    categoryLabel: { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
    summary: {
      en: "An offline-first field data app for 60+ member farms to log planting, yield, and input usage from anywhere.",
      ur: "60 سے زائد رکن فارمز کے لیے آف لائن فیلڈ ڈیٹا ایپ، کہیں سے بھی کاشت اور پیداوار لاگ کرنے کے لیے۔",
    },
    description: {
      en: "Most of HarvestPoint's member farms have unreliable connectivity. We built an offline-first React Native app that lets field staff log crop data, yields, and input usage locally, syncing automatically the moment a connection is available, feeding straight into co-operative-wide reporting.",
      ur: "ہارویسٹ پوائنٹ کے زیادہ تر رکن فارمز میں ناقابلِ اعتماد انٹرنیٹ ہے۔",
    },
    icon: "🌾",
    gradient: "from-[#b8862f] to-[#0d7a5f]",
    cover: img("harvestpoint-cover", 480, 960),
    tech: ["React Native", "SQLite", "Background Sync"],
    features: [
      { en: "Fully offline field data entry", ur: "مکمل آف لائن فیلڈ ڈیٹا اینٹری" },
      { en: "Automatic background sync when online", ur: "آن لائن ہونے پر خودکار ہم آہنگی" },
      { en: "Photo-based crop condition logging", ur: "تصویر پر مبنی فصل کی حالت کا اندراج" },
      { en: "Simple, large-touch-target UI for outdoor use", ur: "باہر استعمال کے لیے آسان اور بڑا انٹرفیس" },
    ],
    demoUrl: "#",
    storeUrl: "#",
    gallery: [
      { src: img("harvestpoint-1", 480, 960), label: { en: "Field Log Entry", ur: "فیلڈ لاگ اندراج" } },
      { src: img("harvestpoint-2", 480, 960), label: { en: "Yield Tracking", ur: "پیداوار ٹریکنگ" } },
      { src: img("harvestpoint-3", 480, 960), label: { en: "Sync Status", ur: "ہم آہنگی کی صورتحال" } },
    ],
  },
  {
    slug: "flexfit-membership-app",
    title: "FlexFit Membership App",
    client: "FlexFit Studios",
    category: "mobile",
    categoryLabel: { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
    summary: {
      en: "A class-booking and membership app for a multi-location fitness studio, with live class availability and wallet passes.",
      ur: "ایک ملٹی لوکیشن فٹنس اسٹوڈیو کے لیے کلاس بکنگ ایپ، لائیو دستیابی اور ڈیجیٹل والیٹ پاس کے ساتھ۔",
    },
    description: {
      en: "FlexFit's members were booking classes through a clunky third-party platform. We built a native-feeling app for class discovery and booking, real-time waitlists, membership management, and digital wallet passes for frictionless check-in at any location.",
      ur: "فلیکس فٹ کے ممبرز ایک پیچیدہ تھرڈ پارٹی پلیٹ فارم کے ذریعے کلاسز بک کرتے تھے۔",
    },
    icon: "🏋️",
    gradient: "from-[#b6532f] to-[#b8862f]",
    cover: img("flexfit-cover", 480, 960),
    tech: ["React Native", "Firebase", "Apple Wallet API"],
    features: [
      { en: "Real-time class booking with waitlists", ur: "ویٹنگ لسٹ کے ساتھ حقیقی وقت کلاس بکنگ" },
      { en: "Digital membership pass (Apple/Google Wallet)", ur: "ڈیجیٹل ممبرشپ پاس" },
      { en: "Multi-location schedule browsing", ur: "متعدد مقامات کے شیڈول براؤزنگ" },
      { en: "Push reminders for upcoming classes", ur: "آنے والی کلاسز کے لیے پش یاد دہانیاں" },
    ],
    demoUrl: "#",
    storeUrl: "#",
    gallery: [
      { src: img("flexfit-1", 480, 960), label: { en: "Class Schedule", ur: "کلاس شیڈول" } },
      { src: img("flexfit-2", 480, 960), label: { en: "Booking Confirmation", ur: "بکنگ کی تصدیق" } },
      { src: img("flexfit-3", 480, 960), label: { en: "Wallet Pass", ur: "والیٹ پاس" } },
    ],
  },

  // ---------------- AI SOLUTIONS ----------------
  {
    slug: "brightdesk-ai-assistant",
    title: "BrightDesk AI Support Assistant",
    client: "BrightDesk",
    category: "ai",
    categoryLabel: { en: "AI Solutions", ur: "اے آئی حل" },
    summary: {
      en: "A support chat assistant grounded in BrightDesk's own documentation, resolving 38% of tickets without a human agent.",
      ur: "برائٹ ڈیسک کی اپنی دستاویزات پر مبنی سپورٹ چیٹ اسسٹنٹ، 38% ٹکٹس بغیر انسان کے حل۔",
    },
    description: {
      en: "We built a retrieval-augmented chat assistant trained on BrightDesk's documentation and historical tickets. It handles common questions directly and escalates to a human agent with full context whenever its confidence drops below a set threshold, deployed first internally, then to customers.",
      ur: "ہم نے برائٹ ڈیسک کی دستاویزات اور سابقہ ٹکٹس پر تربیت یافتہ چیٹ اسسٹنٹ تیار کیا۔",
    },
    icon: "🤖",
    gradient: "from-[#0d7a5f] to-[#b6532f]",
    cover: img("brightdesk-ai-cover", 900, 600),
    tech: ["Python", "RAG Pipeline", "Vector DB", "OpenAI API"],
    features: [
      { en: "Retrieval-augmented answers grounded in real docs", ur: "حقیقی دستاویزات پر مبنی جوابات" },
      { en: "Automatic escalation to human agents with context", ur: "سیاق کے ساتھ خودکار انسانی منتقلی" },
      { en: "Continuous learning from resolved tickets", ur: "حل شدہ ٹکٹس سے مسلسل سیکھنا" },
      { en: "38% of tickets resolved without a human", ur: "38% ٹکٹس بغیر انسان کے حل" },
    ],
    demoUrl: "#",
    githubUrl: "#",
    gallery: [
      { src: img("brightdesk-ai-1", 900, 600), label: { en: "Chat Assistant UI", ur: "چیٹ اسسٹنٹ انٹرفیس" } },
      { src: img("brightdesk-ai-2", 900, 600), label: { en: "Confidence & Escalation", ur: "اعتماد اور منتقلی" } },
      { src: img("brightdesk-ai-3", 900, 600), label: { en: "Analytics Dashboard", ur: "تجزیاتی ڈیش بورڈ" } },
    ],
  },
  {
    slug: "northbridge-lead-scoring",
    title: "Northbridge Lead Scoring Engine",
    client: "Northbridge Advisors",
    category: "ai",
    categoryLabel: { en: "AI Solutions", ur: "اے آئی حل" },
    summary: {
      en: "A predictive lead-scoring model that prioritizes advisors' pipelines automatically, lifting qualified conversion by 41%.",
      ur: "ایک پیش گوئی لیڈ اسکورنگ ماڈل جو ایڈوائزرز کی پائپ لائن کو خودکار طور پر ترجیح دیتا ہے، تبدیلی میں 41% اضافہ۔",
    },
    description: {
      en: "Northbridge's advisors were spending equal time on every lead regardless of likelihood to convert. We trained a scoring model on historical engagement and conversion data, surfaced directly inside their CRM pipeline view, so advisors always know which leads to call first.",
      ur: "نارتھ برج کے ایڈوائزرز ہر لیڈ پر برابر وقت صرف کرتے تھے۔",
    },
    icon: "📈",
    gradient: "from-[#0f6e93] to-[#b8862f]",
    cover: img("northbridge-cover", 900, 600),
    tech: ["Python", "scikit-learn", "CRM Integration"],
    features: [
      { en: "Predictive lead scoring based on engagement signals", ur: "مشغولیت کی بنیاد پر پیش گوئی لیڈ اسکورنگ" },
      { en: "Live score updates as new activity comes in", ur: "نئی سرگرمی پر لائیو اسکور اپ ڈیٹس" },
      { en: "Explainable scoring factors for advisor trust", ur: "ایڈوائزر کے اعتماد کے لیے قابلِ وضاحت عوامل" },
      { en: "41% increase in qualified lead conversion", ur: "اہل لیڈ تبدیلی میں 41% اضافہ" },
    ],
    demoUrl: "#",
    gallery: [
      { src: img("northbridge-1", 900, 600), label: { en: "Scored Pipeline View", ur: "اسکور شدہ پائپ لائن" } },
      { src: img("northbridge-2", 900, 600), label: { en: "Score Breakdown", ur: "اسکور کی تفصیل" } },
    ],
  },
];

export const portfolioCategories: { key: "all" | "web" | "mobile" | "ai"; label: { en: string; ur: string } }[] = [
  { key: "all", label: { en: "All Work", ur: "تمام کام" } },
  { key: "web", label: { en: "Web Development", ur: "ویب ڈویلپمنٹ" } },
  { key: "mobile", label: { en: "Mobile Apps", ur: "موبائل ایپس" } },
  { key: "ai", label: { en: "AI Solutions", ur: "اے آئی حل" } },
];
