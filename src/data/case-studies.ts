import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "retailflow-inventory-erp",
    industry: { en: "Retail", ur: "ریٹیل" },
    client: "RetailFlow Group",
    title: {
      en: "Unifying 14 Store Locations Under One Inventory System",
      ur: "14 اسٹور مقامات کو ایک انوینٹری نظام کے تحت متحد کرنا",
    },
    summary: {
      en: "Replaced spreadsheet-based inventory tracking across 14 retail locations with a real-time multi-branch ERP, cutting stock discrepancies by 92%.",
      ur: "14 ریٹیل مقامات پر اسپریڈ شیٹ کی جگہ ایک حقیقی وقت ملٹی برانچ ای آر پی نصب کیا، اسٹاک کے فرق میں 92% کمی۔",
    },
    cover: "🏬",
    gradient: "from-[#b8862f]/30 to-[#5b6472]/10",
    challenge: {
      en: "RetailFlow's 14 stores each tracked inventory in separate spreadsheets that were manually reconciled at head office once a week. Stock discrepancies were common, transfers between branches were untracked, and management had no real-time view of company-wide inventory.",
      ur: "ریٹیل فلو کے 14 اسٹورز ہر ایک الگ اسپریڈ شیٹ میں انوینٹری رکھتے تھے جو ہفتے میں ایک بار دستی طور پر ملائی جاتی تھی۔ اسٹاک کا فرق عام تھا اور برانچوں کے درمیان منتقلی غیر ٹریک شدہ تھی۔",
    },
    solution: {
      en: "We built a multi-branch ERP module with a shared product catalog, real-time stock levels per location, and an approvals workflow for inter-branch transfers. Store staff use a simplified point-of-sale-linked interface, while head office gets a live company-wide dashboard.",
      ur: "ہم نے مشترکہ پروڈکٹ کیٹلاگ، ہر مقام کے لیے حقیقی وقت اسٹاک اور برانچوں کے درمیان منتقلی کے لیے منظوری کے عمل کے ساتھ ملٹی برانچ ای آر پی ماڈیول تیار کیا۔",
    },
    results: [
      { label: { en: "Stock discrepancies", ur: "اسٹاک کا فرق" }, value: "-92%" },
      { label: { en: "Weekly reconciliation time", ur: "ہفتہ وار ملاپ کا وقت" }, value: "-18 hrs" },
      { label: { en: "Branches unified", ur: "متحد برانچیں" }, value: "14" },
    ],
    services: [
      { en: "ERP Solutions", ur: "ای آر پی حل" },
      { en: "API Integrations", ur: "اے پی آئی انضمام" },
    ],
  },
  {
    slug: "northbridge-crm-automation",
    industry: { en: "Financial Services", ur: "مالیاتی خدمات" },
    client: "Northbridge Advisors",
    title: {
      en: "Automating Lead Follow-Up for a Growing Advisory Firm",
      ur: "ایک بڑھتی ہوئی ایڈوائزری فرم کے لیے لیڈ فالو اپ کو خودکار بنانا",
    },
    summary: {
      en: "Built a custom CRM with automated lead scoring and follow-up sequences, increasing qualified lead conversion by 41%.",
      ur: "خودکار لیڈ اسکورنگ اور فالو اپ کے ساتھ حسبِ ضرورت سی آر ایم تیار کیا، اہل لیڈز کی تبدیلی میں 41% اضافہ۔",
    },
    cover: "📈",
    gradient: "from-[#0f6e93]/30 to-[#5b6472]/10",
    challenge: {
      en: "Northbridge's advisors were manually tracking leads in shared spreadsheets, with no consistent follow-up process. High-value leads were sometimes contacted days late, while low-priority leads consumed disproportionate time.",
      ur: "نارتھ برج کے ایڈوائزرز مشترکہ اسپریڈ شیٹس میں دستی طور پر لیڈز ٹریک کرتے تھے، بغیر کسی مستقل فالو اپ عمل کے۔",
    },
    solution: {
      en: "We implemented a custom CRM with automated lead scoring based on engagement signals, triggered follow-up sequences by lead tier, and a unified pipeline view for the whole advisory team, integrated directly with their email system.",
      ur: "ہم نے مشغولیت کی بنیاد پر خودکار لیڈ اسکورنگ، درجے کے مطابق فالو اپ اور پوری ٹیم کے لیے متحد پائپ لائن ویو کے ساتھ حسبِ ضرورت سی آر ایم نافذ کیا۔",
    },
    results: [
      { label: { en: "Qualified lead conversion", ur: "اہل لیڈ تبدیلی" }, value: "+41%" },
      { label: { en: "Average first response time", ur: "اوسط پہلا جواب وقت" }, value: "-76%" },
      { label: { en: "Advisor hours saved / week", ur: "ہفتہ وار بچائے گئے گھنٹے" }, value: "22" },
    ],
    services: [
      { en: "CRM Platforms", ur: "سی آر ایم پلیٹ فارمز" },
      { en: "Automation", ur: "آٹومیشن" },
    ],
  },
  {
    slug: "cargoline-logistics-app",
    industry: { en: "Logistics", ur: "لاجسٹکس" },
    client: "CargoLine Express",
    title: {
      en: "A Driver App That Cut Delivery Confirmation Time in Half",
      ur: "ایک ڈرائیور ایپ جس نے ڈیلیوری تصدیق کا وقت آدھا کر دیا",
    },
    summary: {
      en: "Designed and built a cross-platform driver app with real-time tracking and proof-of-delivery, halving delivery confirmation turnaround.",
      ur: "حقیقی وقت ٹریکنگ اور ڈیلیوری کے ثبوت کے ساتھ کراس پلیٹ فارم ڈرائیور ایپ ڈیزائن اور تیار کی۔",
    },
    cover: "🚚",
    gradient: "from-[#0d7a5f]/30 to-[#5b6472]/10",
    challenge: {
      en: "CargoLine's drivers relied on phone calls and paper delivery slips to confirm completed deliveries, causing delays in invoicing and frequent disputes over delivery status.",
      ur: "کارگو لائن کے ڈرائیورز فون کالز اور کاغذی رسیدوں پر انحصار کرتے تھے، جس سے بلنگ میں تاخیر اور تنازعات پیدا ہوتے تھے۔",
    },
    solution: {
      en: "We built a cross-platform mobile app for drivers with real-time GPS tracking, digital proof-of-delivery (photo and signature capture), and instant sync back to the dispatch dashboard, removing paper from the process entirely.",
      ur: "ہم نے حقیقی وقت جی پی ایس ٹریکنگ اور ڈیجیٹل ثبوتِ ڈیلیوری کے ساتھ کراس پلیٹ فارم موبائل ایپ تیار کی، جس نے کاغذ کو مکمل طور پر ختم کر دیا۔",
    },
    results: [
      { label: { en: "Delivery confirmation time", ur: "ڈیلیوری تصدیق وقت" }, value: "-52%" },
      { label: { en: "Delivery disputes", ur: "ڈیلیوری تنازعات" }, value: "-67%" },
      { label: { en: "Drivers onboarded", ur: "شامل ڈرائیورز" }, value: "180+" },
    ],
    services: [
      { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
      { en: "API Integrations", ur: "اے پی آئی انضمام" },
    ],
  },
  {
    slug: "brightdesk-support-ai",
    industry: { en: "SaaS", ur: "سعاس" },
    client: "BrightDesk",
    title: {
      en: "An AI Support Assistant That Resolved 38% of Tickets Without a Human",
      ur: "ایک اے آئی سپورٹ اسسٹنٹ جس نے بغیر انسانی مدد کے 38% ٹکٹس حل کیے",
    },
    summary: {
      en: "Deployed a support chat assistant trained on BrightDesk's documentation, resolving over a third of incoming tickets automatically.",
      ur: "برائٹ ڈیسک کی دستاویزات پر تربیت یافتہ سپورٹ چیٹ اسسٹنٹ تعینات کیا، ایک تہائی سے زیادہ ٹکٹس خودکار طور پر حل۔",
    },
    cover: "💬",
    gradient: "from-[#b6532f]/30 to-[#5b6472]/10",
    challenge: {
      en: "BrightDesk's support team was overwhelmed by repetitive tickets, password resets, billing questions, basic setup issues, that consumed hours better spent on complex customer problems.",
      ur: "برائٹ ڈیسک کی سپورٹ ٹیم بار بار آنے والے ٹکٹس سے مغلوب تھی، جیسے پاس ورڈ ری سیٹ اور بلنگ سوالات۔",
    },
    solution: {
      en: "We built a chat assistant grounded in BrightDesk's own documentation and ticket history, deployed first internally for the support team, then rolled out to customers with clear escalation to a human agent whenever confidence was low.",
      ur: "ہم نے برائٹ ڈیسک کی اپنی دستاویزات پر مبنی چیٹ اسسٹنٹ تیار کیا، پہلے اندرونی طور پر پھر کسٹمرز کے لیے، کم اعتماد پر انسانی ایجنٹ کو منتقلی کے ساتھ۔",
    },
    results: [
      { label: { en: "Tickets resolved automatically", ur: "خودکار حل شدہ ٹکٹس" }, value: "38%" },
      { label: { en: "Average response time", ur: "اوسط جواب وقت" }, value: "-81%" },
      { label: { en: "Support hours saved / month", ur: "ماہانہ بچائے گئے گھنٹے" }, value: "160" },
    ],
    services: [
      { en: "AI Solutions", ur: "اے آئی حل" },
      { en: "Custom Software Development", ur: "حسبِ ضرورت سافٹ ویئر" },
    ],
  },
  {
    slug: "harvestpoint-farm-management",
    industry: { en: "Agriculture", ur: "زراعت" },
    client: "HarvestPoint Co-operative",
    title: {
      en: "Replacing Paper Field Logs With a Digital Farm Management Platform",
      ur: "کاغذی فیلڈ لاگز کی جگہ ڈیجیٹل فارم مینجمنٹ پلیٹ فارم",
    },
    summary: {
      en: "Custom software connecting 60+ member farms to shared crop planning, yield tracking, and reporting, replacing entirely paper-based records.",
      ur: "60 سے زائد رکن فارمز کو مشترکہ فصل منصوبہ بندی اور رپورٹنگ سے جوڑنے والا حسبِ ضرورت سافٹ ویئر۔",
    },
    cover: "🌾",
    gradient: "from-[#0f6e93]/30 to-[#0d7a5f]/10",
    challenge: {
      en: "HarvestPoint's 60+ member farms tracked planting schedules, yields, and input usage entirely on paper, making co-operative-wide reporting and planning nearly impossible.",
      ur: "ہارویسٹ پوائنٹ کے 60 سے زائد رکن فارمز کاغذ پر مکمل ریکارڈ رکھتے تھے، جس سے مجموعی رپورٹنگ تقریباً ناممکن تھی۔",
    },
    solution: {
      en: "We designed a custom platform for field data entry (usable on low-connectivity mobile devices), automatic yield and input tracking, and co-operative-wide reporting dashboards, with offline-first sync for areas with unreliable internet.",
      ur: "ہم نے کم انٹرنیٹ والے علاقوں کے لیے آف لائن سنک کے ساتھ فیلڈ ڈیٹا اینٹری اور رپورٹنگ ڈیش بورڈز کا حسبِ ضرورت پلیٹ فارم ڈیزائن کیا۔",
    },
    results: [
      { label: { en: "Farms digitized", ur: "ڈیجیٹل فارمز" }, value: "60+" },
      { label: { en: "Reporting time (season-end)", ur: "رپورٹنگ وقت (موسم کے آخر میں)" }, value: "-85%" },
      { label: { en: "Data entry errors", ur: "ڈیٹا اینٹری غلطیاں" }, value: "-70%" },
    ],
    services: [
      { en: "Custom Software Development", ur: "حسبِ ضرورت سافٹ ویئر" },
      { en: "Mobile App Development", ur: "موبائل ایپ ڈویلپمنٹ" },
    ],
  },
];
