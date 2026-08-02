import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "erp-solutions",
    cat: "erp",
    icon: "🏗️",
    title: { en: "ERP Solutions", ur: "ای آر پی حل" },
    desc: {
      en: "Unified enterprise resource planning systems that connect finance, inventory, HR, and operations into a single source of truth.",
      ur: "متحد انٹرپرائز ریسورس پلاننگ نظام جو فنانس، انوینٹری، ایچ آر اور آپریشنز کو ایک ہی ذریعے میں جوڑتے ہیں۔",
    },
    chips: [
      { en: "Inventory", ur: "انوینٹری" },
      { en: "Finance", ur: "فنانس" },
      { en: "HR", ur: "ایچ آر" },
      { en: "Procurement", ur: "خریداری" },
    ],
    overview: {
      en: "We design and build ERP platforms tailored to how your business actually runs, not the other way around. From multi-warehouse inventory to payroll and procurement, every module is wired together so data entered once flows everywhere it's needed.",
      ur: "ہم ای آر پی پلیٹ فارمز آپ کے کاروبار کے اصل انداز کے مطابق تیار کرتے ہیں، نہ کہ اس کے برعکس۔ ملٹی ویئر ہاؤس انوینٹری سے لے کر تنخواہوں اور خریداری تک، ہر ماڈیول اس طرح جڑا ہوتا ہے کہ ایک بار درج کیا گیا ڈیٹا ہر جگہ خودکار طور پر پہنچ جائے۔",
    },
    deliverables: [
      { en: "Custom modules for finance, inventory, HR & procurement", ur: "فنانس، انوینٹری، ایچ آر اور خریداری کے لیے حسبِ ضرورت ماڈیولز" },
      { en: "Role-based dashboards for every department", ur: "ہر شعبے کے لیے کردار کی بنیاد پر ڈیش بورڈز" },
      { en: "Real-time reporting and audit trails", ur: "حقیقی وقت کی رپورٹنگ اور آڈٹ ٹریلز" },
      { en: "Multi-branch and multi-currency support", ur: "ملٹی برانچ اور ملٹی کرنسی سپورٹ" },
      { en: "Data migration from legacy spreadsheets or systems", ur: "پرانی اسپریڈ شیٹس یا نظاموں سے ڈیٹا منتقلی" },
    ],
    process: [
      { en: "Process mapping & requirements workshop", ur: "عمل کی نقشہ سازی اور ضروریات کی ورکشاپ" },
      { en: "Data model & module architecture design", ur: "ڈیٹا ماڈل اور ماڈیول فن تعمیر کا ڈیزائن" },
      { en: "Iterative build with weekly demos", ur: "ہفتہ وار ڈیمو کے ساتھ مرحلہ وار تعمیر" },
      { en: "User acceptance testing & staff training", ur: "صارف کی قبولیت جانچ اور عملے کی تربیت" },
      { en: "Go-live support and post-launch tuning", ur: "لانچ سپورٹ اور بعد از لانچ بہتری" },
    ],
    faqs: [
      {
        q: { en: "Can the ERP integrate with our existing accounting software?", ur: "کیا ای آر پی ہمارے موجودہ اکاؤنٹنگ سافٹ ویئر سے مربوط ہو سکتا ہے؟" },
        a: { en: "Yes. We build connectors for most major accounting and banking platforms, and can also work directly against your existing database where needed.", ur: "جی ہاں۔ ہم زیادہ تر بڑے اکاؤنٹنگ اور بینکنگ پلیٹ فارمز کے لیے کنیکٹرز تیار کرتے ہیں، اور ضرورت پڑنے پر آپ کے موجودہ ڈیٹابیس کے ساتھ بھی براہ راست کام کر سکتے ہیں۔" },
      },
      {
        q: { en: "How long does an ERP rollout typically take?", ur: "ای آر پی رول آؤٹ میں عام طور پر کتنا وقت لگتا ہے؟" },
        a: { en: "A focused single-department ERP can launch in 6-8 weeks. Full multi-department platforms typically run 3-5 months, delivered in usable phases.", ur: "ایک شعبے پر مرکوز ای آر پی 6 سے 8 ہفتوں میں لانچ ہو سکتا ہے۔ مکمل ملٹی ڈپارٹمنٹ پلیٹ فارمز عام طور پر 3 سے 5 ماہ لیتے ہیں، مرحلہ وار فراہم کیے جاتے ہیں۔" },
      },
    ],
  },
  {
    slug: "crm-platforms",
    cat: "crm",
    icon: "🤝",
    title: { en: "CRM Platforms", ur: "سی آر ایم پلیٹ فارمز" },
    desc: {
      en: "Customer relationship platforms that give sales and support teams a complete view of every lead, deal, and conversation.",
      ur: "کسٹمر ریلیشن شپ پلیٹ فارمز جو سیلز اور سپورٹ ٹیموں کو ہر لیڈ، ڈیل اور گفتگو کا مکمل نظارہ دیتے ہیں۔",
    },
    chips: [
      { en: "Pipelines", ur: "پائپ لائنز" },
      { en: "Automation", ur: "آٹومیشن" },
      { en: "Support Desk", ur: "سپورٹ ڈیسک" },
    ],
    overview: {
      en: "Your CRM should match your sales process, not force your team into a generic template. We build pipeline views, automated follow-ups, and support ticketing that fit exactly how your team sells and serves customers.",
      ur: "آپ کا سی آر ایم آپ کے سیلز عمل کے مطابق ہونا چاہیے، نہ کہ آپ کی ٹیم کو عام سانچے میں دھکیلے۔ ہم پائپ لائن ویوز، خودکار فالو اپس اور سپورٹ ٹکٹنگ تیار کرتے ہیں جو آپ کی ٹیم کے انداز کے عین مطابق ہوں۔",
    },
    deliverables: [
      { en: "Custom sales pipelines & deal stages", ur: "حسبِ ضرورت سیلز پائپ لائنز اور ڈیل مراحل" },
      { en: "Automated lead scoring and follow-up sequences", ur: "خودکار لیڈ اسکورنگ اور فالو اپ سلسلے" },
      { en: "Support ticketing with SLA tracking", ur: "ایس ایل اے ٹریکنگ کے ساتھ سپورٹ ٹکٹنگ" },
      { en: "Email & WhatsApp integration", ur: "ای میل اور واٹس ایپ انضمام" },
      { en: "Sales performance dashboards", ur: "سیلز کارکردگی کے ڈیش بورڈز" },
    ],
    process: [
      { en: "Sales & support workflow discovery", ur: "سیلز اور سپورٹ ورک فلو کی دریافت" },
      { en: "Pipeline and automation design", ur: "پائپ لائن اور آٹومیشن ڈیزائن" },
      { en: "Build & integrate communication channels", ur: "مواصلاتی ذرائع کی تعمیر اور انضمام" },
      { en: "Team onboarding and rollout", ur: "ٹیم کی شمولیت اور رول آؤٹ" },
      { en: "Ongoing optimization based on usage data", ur: "استعمال کے ڈیٹا کی بنیاد پر مسلسل بہتری" },
    ],
    faqs: [
      {
        q: { en: "Can you migrate our data from our current CRM?", ur: "کیا آپ ہمارے موجودہ سی آر ایم سے ڈیٹا منتقل کر سکتے ہیں؟" },
        a: { en: "Yes, we handle full data migration including contacts, deal history, and notes, with a validation pass before go-live.", ur: "جی ہاں، ہم رابطے، ڈیل کی تاریخ اور نوٹس سمیت مکمل ڈیٹا منتقلی کرتے ہیں، لانچ سے پہلے تصدیق کے ساتھ۔" },
      },
      {
        q: { en: "Does the CRM work on mobile?", ur: "کیا سی آر ایم موبائل پر کام کرتا ہے؟" },
        a: { en: "Every CRM we build is responsive by default, and we offer dedicated mobile apps for field sales teams on request.", ur: "ہم جو بھی سی آر ایم بناتے ہیں وہ پہلے سے ریسپانسیو ہوتا ہے، اور فیلڈ سیلز ٹیموں کے لیے مخصوص موبائل ایپس بھی فراہم کرتے ہیں۔" },
      },
    ],
  },
  {
    slug: "web-development",
    cat: "web",
    icon: "🌐",
    title: { en: "Web Development", ur: "ویب ڈویلپمنٹ" },
    desc: {
      en: "Fast, accessible, SEO-ready websites and web applications built on modern frameworks.",
      ur: "جدید فریم ورکس پر تعمیر شدہ تیز، قابلِ رسائی اور ایس ای او کے لیے تیار ویب سائٹس اور ایپلی کیشنز۔",
    },
    chips: [
      { en: "Next.js", ur: "Next.js" },
      { en: "React", ur: "React" },
      { en: "SEO", ur: "ایس ای او" },
    ],
    overview: {
      en: "We build marketing sites, dashboards, and full web applications on modern, maintainable stacks. Every project ships with performance, accessibility, and search visibility built in from day one, not bolted on afterward.",
      ur: "ہم مارکیٹنگ سائٹس، ڈیش بورڈز اور مکمل ویب ایپلی کیشنز جدید اور قابلِ برقرار اسٹیکس پر تیار کرتے ہیں۔ ہر منصوبے میں کارکردگی، رسائی اور تلاش کی نمائش پہلے دن سے شامل ہوتی ہے۔",
    },
    deliverables: [
      { en: "Responsive, accessible marketing websites", ur: "ریسپانسیو اور قابلِ رسائی مارکیٹنگ ویب سائٹس" },
      { en: "Custom web application dashboards", ur: "حسبِ ضرورت ویب ایپلی کیشن ڈیش بورڈز" },
      { en: "SEO-friendly architecture & metadata", ur: "ایس ای او دوست فن تعمیر اور میٹا ڈیٹا" },
      { en: "CMS integration for easy content updates", ur: "آسان مواد کی تازہ کاری کے لیے سی ایم ایس انضمام" },
      { en: "Performance budget & Core Web Vitals tuning", ur: "کارکردگی بجٹ اور کور ویب وائٹلز کی بہتری" },
    ],
    process: [
      { en: "Discovery & sitemap planning", ur: "دریافت اور سائٹ میپ منصوبہ بندی" },
      { en: "UI/UX design in collaboration with your brand", ur: "آپ کے برانڈ کے ساتھ مل کر UI/UX ڈیزائن" },
      { en: "Component-based development", ur: "کمپوننٹ کی بنیاد پر ڈویلپمنٹ" },
      { en: "QA across devices and browsers", ur: "آلات اور براؤزرز میں معیار کی جانچ" },
      { en: "Launch, monitoring & handover documentation", ur: "لانچ، نگرانی اور دستاویزات کی حوالگی" },
    ],
    faqs: [
      {
        q: { en: "Which frameworks do you use?", ur: "آپ کون سے فریم ورکس استعمال کرتے ہیں؟" },
        a: { en: "Primarily Next.js and React on the frontend, with Node.js, or your preferred backend stack, powering the API layer.", ur: "بنیادی طور پر فرنٹ اینڈ کے لیے Next.js اور React، اور اے پی آئی کے لیے Node.js یا آپ کی پسندیدہ بیک اینڈ ٹیکنالوجی۔" },
      },
      {
        q: { en: "Do you offer ongoing maintenance after launch?", ur: "کیا آپ لانچ کے بعد جاری دیکھ بھال فراہم کرتے ہیں؟" },
        a: { en: "Yes, we offer monthly maintenance retainers covering updates, monitoring, and small feature additions.", ur: "جی ہاں، ہم ماہانہ دیکھ بھال کی خدمات فراہم کرتے ہیں جس میں اپ ڈیٹس، نگرانی اور چھوٹے فیچرز شامل ہیں۔" },
      },
    ],
  },
  {
    slug: "mobile-app-development",
    cat: "mobile",
    icon: "📱",
    title: { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
    desc: {
      en: "Native-feeling iOS and Android apps built with cross-platform frameworks for speed without compromise.",
      ur: "کراس پلیٹ فارم فریم ورکس سے تیار کردہ iOS اور Android ایپس جو رفتار پر کوئی سمجھوتہ نہیں کرتیں۔",
    },
    chips: [
      { en: "iOS", ur: "iOS" },
      { en: "Android", ur: "Android" },
      { en: "Cross-platform", ur: "کراس پلیٹ فارم" },
    ],
    overview: {
      en: "We build mobile apps that feel native on both iOS and Android from a single, well-structured codebase, keeping delivery fast without sacrificing performance or platform-native feel.",
      ur: "ہم ایک ہی منظم کوڈ بیس سے ایسی موبائل ایپس بناتے ہیں جو iOS اور Android دونوں پر مقامی محسوس ہوں، کارکردگی یا رفتار پر سمجھوتہ کیے بغیر۔",
    },
    deliverables: [
      { en: "Cross-platform app for iOS & Android", ur: "iOS اور Android کے لیے کراس پلیٹ فارم ایپ" },
      { en: "Push notifications & offline support", ur: "پش نوٹیفیکیشنز اور آف لائن سپورٹ" },
      { en: "Secure authentication & payments", ur: "محفوظ تصدیق اور ادائیگیاں" },
      { en: "App Store & Play Store submission support", ur: "ایپ اسٹور اور پلے اسٹور جمع کرانے میں معاونت" },
      { en: "Analytics and crash monitoring setup", ur: "تجزیات اور کریش نگرانی کی ترتیب" },
    ],
    process: [
      { en: "Product scoping & wireframes", ur: "پروڈکٹ کا دائرہ کار اور وائر فریمز" },
      { en: "UI design & prototyping", ur: "UI ڈیزائن اور پروٹو ٹائپنگ" },
      { en: "Development in two-week sprints", ur: "دو ہفتوں کے اسپرنٹس میں ڈویلپمنٹ" },
      { en: "Device testing across screen sizes", ur: "مختلف اسکرین سائز پر جانچ" },
      { en: "Store submission & release management", ur: "اسٹور جمع کرانا اور ریلیز مینجمنٹ" },
    ],
    faqs: [
      {
        q: { en: "Do you build native apps or hybrid?", ur: "کیا آپ نیٹو ایپس بناتے ہیں یا ہائبرڈ؟" },
        a: { en: "We typically use cross-platform frameworks like React Native for speed and cost efficiency, and recommend fully native builds only when a project truly requires it.", ur: "ہم عام طور پر رفتار اور لاگت کی بچت کے لیے React Native جیسے کراس پلیٹ فارم فریم ورکس استعمال کرتے ہیں۔" },
      },
      {
        q: { en: "Can you maintain our app after launch?", ur: "کیا آپ لانچ کے بعد ہماری ایپ کی دیکھ بھال کر سکتے ہیں؟" },
        a: { en: "Yes, we offer ongoing release management, OS-compatibility updates, and new feature development.", ur: "جی ہاں، ہم جاری ریلیز مینجمنٹ، او ایس مطابقت کی اپ ڈیٹس اور نئے فیچرز فراہم کرتے ہیں۔" },
      },
    ],
  },
  {
    slug: "ai-solutions",
    cat: "ai",
    icon: "🤖",
    title: { en: "AI Solutions", ur: "اے آئی حل" },
    desc: {
      en: "Practical AI features, chat assistants, document intelligence, and predictive models, built into your existing workflows.",
      ur: "عملی اے آئی فیچرز، چیٹ اسسٹنٹس، دستاویزی ذہانت اور پیش گوئی ماڈلز، آپ کے موجودہ ورک فلو میں ضم شدہ۔",
    },
    chips: [
      { en: "Chatbots", ur: "چیٹ بوٹس" },
      { en: "ML Models", ur: "ایم ایل ماڈلز" },
      { en: "NLP", ur: "این ایل پی" },
    ],
    overview: {
      en: "We integrate AI where it actually saves time: intelligent chat assistants, document extraction, demand forecasting, and recommendation engines, connected directly into the tools your team already uses.",
      ur: "ہم اے آئی کو وہاں شامل کرتے ہیں جہاں یہ واقعی وقت بچائے: ذہین چیٹ اسسٹنٹس، دستاویزی نکالنا، طلب کی پیش گوئی اور تجویزی نظام، آپ کی موجودہ ٹولز سے براہ راست جڑے ہوئے۔",
    },
    deliverables: [
      { en: "Custom chat assistants trained on your data", ur: "آپ کے ڈیٹا پر تربیت یافتہ حسبِ ضرورت چیٹ اسسٹنٹس" },
      { en: "Document extraction & classification pipelines", ur: "دستاویزی نکالنے اور درجہ بندی کے نظام" },
      { en: "Predictive models for demand or churn", ur: "طلب یا کسٹمر چھوڑنے کے لیے پیش گوئی ماڈلز" },
      { en: "Recommendation engines", ur: "تجویزی نظام" },
      { en: "Integration into existing ERP/CRM systems", ur: "موجودہ ای آر پی/سی آر ایم نظاموں میں انضمام" },
    ],
    process: [
      { en: "Use-case identification & data audit", ur: "استعمال کے معاملات کی شناخت اور ڈیٹا آڈٹ" },
      { en: "Model selection or fine-tuning", ur: "ماڈل کا انتخاب یا بہتری" },
      { en: "Pipeline & integration build", ur: "پائپ لائن اور انضمام کی تعمیر" },
      { en: "Evaluation against real-world accuracy targets", ur: "حقیقی دنیا کے درستگی اہداف کے خلاف جانچ" },
      { en: "Deployment with monitoring & feedback loops", ur: "نگرانی اور فیڈ بیک کے ساتھ تعیناتی" },
    ],
    faqs: [
      {
        q: { en: "Do we need our own dataset to start?", ur: "کیا شروع کرنے کے لیے ہمیں اپنا ڈیٹا سیٹ چاہیے؟" },
        a: { en: "Not always. Many use cases can start with general-purpose models and your existing documents or records, refined over time as more data becomes available.", ur: "ہمیشہ نہیں۔ بہت سے معاملات عام مقصد کے ماڈلز اور آپ کی موجودہ دستاویزات سے شروع ہو سکتے ہیں۔" },
      },
      {
        q: { en: "How do you handle data privacy?", ur: "آپ ڈیٹا کی رازداری کیسے یقینی بناتے ہیں؟" },
        a: { en: "We design pipelines around your compliance requirements, including on-premise or private-cloud deployment options where needed.", ur: "ہم آپ کی تعمیل کی ضروریات کے مطابق نظام تیار کرتے ہیں، بشمول آن پریمائس یا نجی کلاؤڈ کے اختیارات۔" },
      },
    ],
  },
  {
    slug: "custom-software",
    cat: "custom",
    icon: "🛠️",
    title: { en: "Custom Software Development", ur: "حسبِ ضرورت سافٹ ویئر ڈویلپمنٹ" },
    desc: {
      en: "Bespoke software built around your exact operational workflow when off-the-shelf tools fall short.",
      ur: "جب تیار شدہ ٹولز کافی نہ ہوں تو آپ کے عین آپریشنل ورک فلو کے مطابق تیار کردہ سافٹ ویئر۔",
    },
    chips: [
      { en: "Bespoke Systems", ur: "مخصوص نظام" },
      { en: "Legacy Modernization", ur: "پرانے نظام کی جدت" },
    ],
    overview: {
      en: "When no off-the-shelf product fits, we design software around your actual processes, whether that means replacing a fragile legacy system or building something entirely new.",
      ur: "جب کوئی تیار شدہ پروڈکٹ موزوں نہ ہو، ہم آپ کے اصل عمل کے مطابق سافٹ ویئر ڈیزائن کرتے ہیں، چاہے وہ پرانا نظام تبدیل کرنا ہو یا کچھ بالکل نیا بنانا۔",
    },
    deliverables: [
      { en: "Requirements-driven system architecture", ur: "ضروریات پر مبنی سسٹم فن تعمیر" },
      { en: "Custom internal tools & workflow software", ur: "حسبِ ضرورت اندرونی ٹولز اور ورک فلو سافٹ ویئر" },
      { en: "Legacy system modernization", ur: "پرانے نظام کی جدت" },
      { en: "API-first design for future extensibility", ur: "مستقبل کی توسیع کے لیے API-first ڈیزائن" },
      { en: "Full documentation & knowledge transfer", ur: "مکمل دستاویزات اور علم کی منتقلی" },
    ],
    process: [
      { en: "Deep-dive requirements workshops", ur: "گہرائی سے ضروریات کی ورکشاپس" },
      { en: "Architecture & technology selection", ur: "فن تعمیر اور ٹیکنالوجی کا انتخاب" },
      { en: "Iterative development with regular checkpoints", ur: "باقاعدہ چیک پوائنٹس کے ساتھ مرحلہ وار تعمیر" },
      { en: "Structured QA & UAT", ur: "منظم معیار اور صارف جانچ" },
      { en: "Deployment and long-term support planning", ur: "تعیناتی اور طویل مدتی سپورٹ کی منصوبہ بندی" },
    ],
    faqs: [
      {
        q: { en: "How do you scope a custom project?", ur: "آپ حسبِ ضرورت منصوبے کا دائرہ کار کیسے طے کرتے ہیں؟" },
        a: { en: "We start with structured discovery sessions to map your workflow in detail before proposing architecture and a phased delivery plan.", ur: "ہم آپ کے ورک فلو کی تفصیلی نقشہ سازی کے لیے منظم دریافت اجلاسوں سے آغاز کرتے ہیں۔" },
      },
      {
        q: { en: "Do you provide source code ownership?", ur: "کیا آپ سورس کوڈ کی ملکیت فراہم کرتے ہیں؟" },
        a: { en: "Yes, you retain full ownership of all custom code delivered under our engagements.", ur: "جی ہاں، آپ کو فراہم کردہ تمام حسبِ ضرورت کوڈ کی مکمل ملکیت حاصل ہوتی ہے۔" },
      },
    ],
  },
  {
    slug: "automation",
    cat: "automation",
    icon: "⚡",
    title: { en: "Business Process Automation", ur: "بزنس پراسیس آٹومیشن" },
    desc: {
      en: "Automate repetitive manual work across departments so your team can focus on higher-value tasks.",
      ur: "شعبوں میں بار بار ہونے والے دستی کام کو خودکار بنائیں تاکہ آپ کی ٹیم زیادہ اہم کاموں پر توجہ دے سکے۔",
    },
    chips: [
      { en: "Workflow Automation", ur: "ورک فلو آٹومیشن" },
      { en: "RPA", ur: "آر پی اے" },
    ],
    overview: {
      en: "We identify the repetitive manual work eating up your team's time, invoicing, data entry, approvals, reporting, and automate it end to end, with clear audit trails and exception handling.",
      ur: "ہم آپ کی ٹیم کا وقت لینے والے دستی کاموں کی نشاندہی کرتے ہیں — بلنگ، ڈیٹا انٹری، منظوریاں، رپورٹنگ — اور انہیں سرے سے آخر تک خودکار بناتے ہیں۔",
    },
    deliverables: [
      { en: "Workflow mapping & automation opportunity audit", ur: "ورک فلو نقشہ سازی اور آٹومیشن کے مواقع کا جائزہ" },
      { en: "Automated invoicing, approvals & reporting", ur: "خودکار بلنگ، منظوریاں اور رپورٹنگ" },
      { en: "Cross-system data synchronization", ur: "کراس سسٹم ڈیٹا ہم آہنگی" },
      { en: "Exception handling & alerting", ur: "استثنائی معاملات کی نگرانی اور الرٹس" },
      { en: "Ongoing automation monitoring dashboards", ur: "جاری آٹومیشن نگرانی کے ڈیش بورڈز" },
    ],
    process: [
      { en: "Process audit & opportunity scoring", ur: "عمل کا جائزہ اور مواقع کی درجہ بندی" },
      { en: "Automation design & tool selection", ur: "آٹومیشن ڈیزائن اور ٹول کا انتخاب" },
      { en: "Build & sandbox testing", ur: "تعمیر اور سینڈ باکس جانچ" },
      { en: "Staged rollout with fallback procedures", ur: "متبادل طریقہ کار کے ساتھ مرحلہ وار رول آؤٹ" },
      { en: "Monitoring & continuous refinement", ur: "نگرانی اور مسلسل بہتری" },
    ],
    faqs: [
      {
        q: { en: "Which tools do you build automations with?", ur: "آپ آٹومیشن کے لیے کون سے ٹولز استعمال کرتے ہیں؟" },
        a: { en: "We select the right approach per case, from custom scripts and serverless functions to established workflow platforms, depending on complexity and budget.", ur: "ہم پیچیدگی اور بجٹ کے مطابق درست طریقہ منتخب کرتے ہیں، حسبِ ضرورت اسکرپٹس سے لے کر معروف ورک فلو پلیٹ فارمز تک۔" },
      },
      {
        q: { en: "What happens if an automation fails?", ur: "اگر آٹومیشن ناکام ہو جائے تو کیا ہوتا ہے؟" },
        a: { en: "Every automation we build includes alerting and fallback handling, so failures are caught immediately rather than silently causing downstream problems.", ur: "ہماری بنائی ہر آٹومیشن میں الرٹس اور متبادل طریقہ کار شامل ہوتا ہے تاکہ ناکامی فوری طور پر پکڑی جائے۔" },
      },
    ],
  },
  {
    slug: "api-integrations",
    cat: "integrations",
    icon: "🔌",
    title: { en: "API Integrations", ur: "اے پی آئی انضمام" },
    desc: {
      en: "Connect your systems, payment gateways, shipping providers, marketing tools, into one seamless flow of data.",
      ur: "اپنے نظاموں، ادائیگی کے گیٹ ویز، شپنگ فراہم کنندگان اور مارکیٹنگ ٹولز کو ایک ہموار ڈیٹا بہاؤ میں جوڑیں۔",
    },
    chips: [
      { en: "Payments", ur: "ادائیگیاں" },
      { en: "Third-party APIs", ur: "تھرڈ پارٹی اے پی آئیز" },
      { en: "Webhooks", ur: "ویب ہکس" },
    ],
    overview: {
      en: "Disconnected tools create manual work and data drift. We build reliable integrations between your ERP, CRM, payment gateways, and third-party services so information flows automatically and accurately.",
      ur: "بکھرے ہوئے ٹولز دستی کام اور ڈیٹا کی خرابی پیدا کرتے ہیں۔ ہم آپ کے ای آر پی، سی آر ایم، ادائیگی کے گیٹ ویز اور تھرڈ پارٹی سروسز کے درمیان قابلِ اعتماد انضمام تیار کرتے ہیں۔",
    },
    deliverables: [
      { en: "Payment gateway integrations", ur: "ادائیگی گیٹ وے انضمام" },
      { en: "Shipping & logistics provider connections", ur: "شپنگ اور لاجسٹکس فراہم کنندگان کے رابطے" },
      { en: "Marketing & analytics tool integrations", ur: "مارکیٹنگ اور تجزیاتی ٹولز کا انضمام" },
      { en: "Webhook-based real-time sync", ur: "ویب ہک پر مبنی حقیقی وقت ہم آہنگی" },
      { en: "Integration monitoring & error alerting", ur: "انضمام کی نگرانی اور خرابی کے الرٹس" },
    ],
    process: [
      { en: "Integration mapping across all systems", ur: "تمام نظاموں میں انضمام کی نقشہ سازی" },
      { en: "API contract design & authentication setup", ur: "API معاہدے کا ڈیزائن اور تصدیق کی ترتیب" },
      { en: "Build with sandbox/staging validation", ur: "سینڈ باکس/اسٹیجنگ تصدیق کے ساتھ تعمیر" },
      { en: "Production rollout with monitoring", ur: "نگرانی کے ساتھ پروڈکشن رول آؤٹ" },
      { en: "Documentation for future integrations", ur: "مستقبل کے انضمام کے لیے دستاویزات" },
    ],
    faqs: [
      {
        q: { en: "Can you integrate with APIs that have limited documentation?", ur: "کیا آپ محدود دستاویزات والی اے پی آئیز کے ساتھ انضمام کر سکتے ہیں؟" },
        a: { en: "Yes, we regularly work with sparsely documented or legacy APIs and handle the reverse-engineering and validation work required.", ur: "جی ہاں، ہم اکثر کم دستاویزی یا پرانی اے پی آئیز کے ساتھ کام کرتے ہیں اور ضروری ریورس انجینئرنگ کرتے ہیں۔" },
      },
      {
        q: { en: "How do you handle API rate limits?", ur: "آپ اے پی آئی ریٹ لمٹس کیسے سنبھالتے ہیں؟" },
        a: { en: "We design integrations with queuing, retries, and backoff strategies so rate limits don't cause data loss or downtime.", ur: "ہم قطار بندی، دوبارہ کوشش اور بیک آف حکمت عملیوں کے ساتھ انضمام ڈیزائن کرتے ہیں تاکہ ریٹ لمٹس ڈیٹا کے نقصان کا سبب نہ بنیں۔" },
      },
    ],
  },
];

export const serviceCategories = [
  { key: "all", label: { en: "All Services", ur: "تمام سروسز" } },
  { key: "erp", label: { en: "ERP", ur: "ای آر پی" } },
  { key: "crm", label: { en: "CRM", ur: "سی آر ایم" } },
  { key: "web", label: { en: "Web", ur: "ویب" } },
  { key: "mobile", label: { en: "Mobile", ur: "موبائل" } },
  { key: "ai", label: { en: "AI", ur: "اے آئی" } },
  { key: "custom", label: { en: "Custom Software", ur: "حسبِ ضرورت" } },
  { key: "automation", label: { en: "Automation", ur: "آٹومیشن" } },
  { key: "integrations", label: { en: "Integrations", ur: "انضمام" } },
];
