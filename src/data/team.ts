import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    slug: "hamza-fabani",
    name: "Hamza Fabani",
    role: { en: "Founder & CEO", ur: "بانی و چیف ایگزیکٹو" },
    photo: "https://i.pravatar.cc/400?img=12",
    bio: {
      en: "Leads product vision and enterprise strategy across every FabzWorks engagement.",
      ur: "ہر فیبز ورکس منصوبے میں پروڈکٹ وژن اور انٹرپرائز حکمت عملی کی قیادت کرتے ہیں۔",
    },
    longBio: {
      en: "Hamza founded FabzWorks with a simple belief: business software should fit the business, not the other way around. Over the past decade he's led enterprise platform builds across manufacturing, retail, and logistics, and now spends most of his time in discovery workshops making sure every FabzWorks project starts from a real operational problem, not a template.",
      ur: "حمزہ نے ایک سادہ عقیدے کے ساتھ فیبز ورکس کی بنیاد رکھی: بزنس سافٹ ویئر کو کاروبار کے مطابق ہونا چاہیے، نہ کہ اس کے برعکس۔ گزشتہ دہائی میں انہوں نے مینوفیکچرنگ، ریٹیل اور لاجسٹکس میں انٹرپرائز پلیٹ فارمز کی قیادت کی ہے، اور اب زیادہ تر وقت ابتدائی ورکشاپس میں گزارتے ہیں تاکہ یقینی بنایا جا سکے کہ ہر منصوبہ ایک حقیقی آپریشنل مسئلے سے شروع ہو۔",
    },
    skills: ["Enterprise Architecture", "Product Strategy", "Client Discovery", "ERP Design"],
    experience: { en: "12+ years", ur: "12+ سال" },
    location: { en: "Rawalpindi, Pakistan", ur: "راولپنڈی، پاکستان" },
    email: "hamza@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "GitHub", href: "#", icon: "github" },
    ],
  },
  {
    slug: "sara-imran",
    name: "Sara Imran",
    role: { en: "Head of Engineering", ur: "سربراہ انجینئرنگ" },
    photo: "https://i.pravatar.cc/400?img=47",
    bio: {
      en: "Owns technical architecture and engineering quality across all delivery teams.",
      ur: "تمام ڈلیوری ٹیموں میں تکنیکی فن تعمیر اور معیار کی نگرانی کرتی ہیں۔",
    },
    longBio: {
      en: "Sara leads the engineering organization at FabzWorks, setting architecture standards and reviewing every system design before it reaches build. She's especially focused on making sure systems stay maintainable years after launch, not just at delivery, and mentors the team on writing code that the next engineer can actually understand.",
      ur: "سارہ فیبز ورکس میں انجینئرنگ ٹیم کی سربراہ ہیں، فن تعمیر کے معیارات طے کرتی ہیں اور تعمیر سے پہلے ہر سسٹم ڈیزائن کا جائزہ لیتی ہیں۔ ان کی خاص توجہ اس بات پر ہے کہ نظام لانچ کے برسوں بعد بھی قابلِ برقرار رہے، اور وہ ٹیم کو ایسا کوڈ لکھنے کی تربیت دیتی ہیں جسے اگلا انجینئر آسانی سے سمجھ سکے۔",
    },
    skills: ["System Architecture", "Next.js", "Node.js", "Cloud Infrastructure"],
    experience: { en: "10+ years", ur: "10+ سال" },
    location: { en: "Islamabad, Pakistan", ur: "اسلام آباد، پاکستان" },
    email: "sara@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "GitHub", href: "#", icon: "github" },
    ],
  },
  {
    slug: "ali-raza",
    name: "Ali Raza",
    role: { en: "Lead AI Engineer", ur: "سربراہ اے آئی انجینئر" },
    photo: "https://i.pravatar.cc/400?img=33",
    bio: {
      en: "Builds practical AI features, from chat assistants to document intelligence pipelines.",
      ur: "چیٹ اسسٹنٹس سے لے کر دستاویزی ذہانت تک، عملی اے آئی فیچرز تیار کرتے ہیں۔",
    },
    longBio: {
      en: "Ali specializes in taking AI from an interesting demo to a production feature that actually holds up under real usage. He's shipped document extraction pipelines, forecasting models, and internal copilots for clients across finance and retail, always with a close eye on accuracy, latency, and cost.",
      ur: "علی اے آئی کو ایک دلچسپ ڈیمو سے حقیقی پروڈکشن فیچر تک لے جانے میں مہارت رکھتے ہیں۔ انہوں نے فنانس اور ریٹیل کے کلائنٹس کے لیے دستاویزی نکالنے کے نظام، پیش گوئی ماڈلز اور اندرونی کوپائلٹس تیار کیے ہیں، ہمیشہ درستگی، رفتار اور لاگت پر گہری نظر رکھتے ہوئے۔",
    },
    skills: ["Machine Learning", "NLP", "Python", "Model Fine-tuning"],
    experience: { en: "7+ years", ur: "7+ سال" },
    location: { en: "Lahore, Pakistan", ur: "لاہور، پاکستان" },
    email: "ali@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "GitHub", href: "#", icon: "github" },
    ],
  },
  {
    slug: "mahnoor-khan",
    name: "Mahnoor Khan",
    role: { en: "Head of Design", ur: "سربراہ ڈیزائن" },
    photo: "https://i.pravatar.cc/400?img=45",
    bio: {
      en: "Shapes the visual language and user experience across web, mobile, and dashboards.",
      ur: "ویب، موبائل اور ڈیش بورڈز میں بصری زبان اور صارف تجربے کی تشکیل کرتی ہیں۔",
    },
    longBio: {
      en: "Mahnoor leads design at FabzWorks, translating complex enterprise workflows into interfaces people actually enjoy using. She works closely with engineering from the earliest wireframe through final QA, making sure every screen stays consistent, accessible, and true to each client's brand.",
      ur: "مہ نور فیبز ورکس میں ڈیزائن کی قیادت کرتی ہیں، پیچیدہ انٹرپرائز ورک فلوز کو ایسے انٹرفیسز میں تبدیل کرتی ہیں جنہیں لوگ واقعی استعمال کرنا پسند کریں۔ وہ ابتدائی وائر فریم سے لے کر حتمی جانچ تک انجینئرنگ کے ساتھ قریبی تعاون کرتی ہیں۔",
    },
    skills: ["UI/UX Design", "Design Systems", "Prototyping", "Accessibility"],
    experience: { en: "8+ years", ur: "8+ سال" },
    location: { en: "Karachi, Pakistan", ur: "کراچی، پاکستان" },
    email: "mahnoor@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "Dribbble", href: "#", icon: "dribbble" },
    ],
  },
  {
    slug: "usman-tariq",
    name: "Usman Tariq",
    role: { en: "DevOps & Cloud Lead", ur: "ڈیو آپس اور کلاؤڈ لیڈ" },
    photo: "https://i.pravatar.cc/400?img=53",
    bio: {
      en: "Keeps every FabzWorks deployment fast, secure, and reliably online.",
      ur: "ہر فیبز ورکس ڈیپلائمنٹ کو تیز، محفوظ اور قابلِ اعتماد رکھتے ہیں۔",
    },
    longBio: {
      en: "Usman owns infrastructure and deployment pipelines for every FabzWorks client, from single-server web apps to multi-region ERP platforms. He's built the internal standards the whole team follows for CI/CD, monitoring, and incident response, so launches are boring in the best possible way.",
      ur: "عثمان ہر فیبز ورکس کلائنٹ کے لیے انفراسٹرکچر اور ڈیپلائمنٹ پائپ لائنز کے ذمہ دار ہیں۔ انہوں نے CI/CD، نگرانی اور واقعے کے ردعمل کے لیے اندرونی معیارات وضع کیے ہیں، جن پر پوری ٹیم عمل کرتی ہے۔",
    },
    skills: ["AWS", "Docker", "CI/CD", "Monitoring & Security"],
    experience: { en: "9+ years", ur: "9+ سال" },
    location: { en: "Rawalpindi, Pakistan", ur: "راولپنڈی، پاکستان" },
    email: "usman@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "GitHub", href: "#", icon: "github" },
    ],
  },
  {
    slug: "zoya-ahmed",
    name: "Zoya Ahmed",
    role: { en: "Project Delivery Manager", ur: "پراجیکٹ ڈلیوری مینیجر" },
    photo: "https://i.pravatar.cc/400?img=25",
    bio: {
      en: "Keeps every engagement on time, on budget, and in constant communication with clients.",
      ur: "ہر منصوبے کو وقت پر، بجٹ میں اور کلائنٹس سے مسلسل رابطے میں رکھتی ہیں۔",
    },
    longBio: {
      en: "Zoya is the point of contact clients talk to most, running sprint planning, status updates, and scope conversations so engineering can stay focused on building. Her background in operations means she's just as comfortable reading a Gantt chart as she is sitting in on a technical design review.",
      ur: "زویا وہ رابطہ کار ہیں جن سے کلائنٹس سب سے زیادہ بات کرتے ہیں، وہ سپرنٹ پلاننگ، پیش رفت کی اپ ڈیٹس اور دائرہ کار کی گفتگو سنبھالتی ہیں تاکہ انجینئرنگ ٹیم تعمیر پر توجہ مرکوز رکھ سکے۔",
    },
    skills: ["Project Management", "Agile Delivery", "Client Communication", "Risk Management"],
    experience: { en: "6+ years", ur: "6+ سال" },
    location: { en: "Islamabad, Pakistan", ur: "اسلام آباد، پاکستان" },
    email: "zoya@fabzworks.com",
    socials: [
      { title: "LinkedIn", href: "#", icon: "linkedin" },
      { title: "Twitter", href: "#", icon: "twitter" },
    ],
  },
];
