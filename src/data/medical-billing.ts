import type { MedicalService } from "@/types";

export const medicalServices: MedicalService[] = [
  {
    slug: "claims-processing",
    icon: "📋",
    title: { en: "Claims Processing", ur: "کلیمز پروسیسنگ" },
    desc: {
      en: "End-to-end claims submission and follow-up, reducing denials through clean, accurate first-pass submissions.",
      ur: "سرے سے آخر تک کلیمز جمع کروانا اور پیروی، درست پہلی جمع کرانے کے ذریعے مسترد ہونے میں کمی۔",
    },
  },
  {
    slug: "medical-coding",
    icon: "🏷️",
    title: { en: "Medical Coding (ICD-10 / CPT)", ur: "میڈیکل کوڈنگ (ICD-10 / CPT)" },
    desc: {
      en: "Certified coding accuracy across specialties, keeping claims compliant and reimbursements on schedule.",
      ur: "مختلف شعبوں میں تصدیق شدہ کوڈنگ کی درستگی، کلیمز کو ہم آہنگ اور معاوضے وقت پر رکھنا۔",
    },
  },
  {
    slug: "revenue-cycle-management",
    icon: "💰",
    title: { en: "Revenue Cycle Management (RCM)", ur: "ریونیو سائیکل مینجمنٹ (RCM)" },
    desc: {
      en: "Full-cycle oversight from patient intake to final payment, with clear reporting at every stage.",
      ur: "مریض کے داخلے سے حتمی ادائیگی تک مکمل نگرانی، ہر مرحلے پر واضح رپورٹنگ کے ساتھ۔",
    },
  },
  {
    slug: "insurance-verification",
    icon: "🛡️",
    title: { en: "Insurance Eligibility Verification", ur: "انشورنس اہلیت کی تصدیق" },
    desc: {
      en: "Real-time coverage checks before appointments, cutting down claim rejections tied to eligibility issues.",
      ur: "ملاقات سے پہلے حقیقی وقت میں کوریج چیک، اہلیت کے مسائل سے متعلق کلیمز مسترد ہونے میں کمی۔",
    },
  },
  {
    slug: "denial-management",
    icon: "🔁",
    title: { en: "Denial Management & Appeals", ur: "مسترد کیمز کا انتظام اور اپیلیں" },
    desc: {
      en: "Root-cause analysis on every denial, with structured appeals that recover revenue faster.",
      ur: "ہر مسترد کلیم کی جڑ تک تجزیہ، منظم اپیلوں کے ساتھ جو تیزی سے آمدنی واپس لاتی ہیں۔",
    },
  },
  {
    slug: "patient-billing-support",
    icon: "🧾",
    title: { en: "Patient Billing & Statements", ur: "مریض کی بلنگ اور بیانات" },
    desc: {
      en: "Clear, accurate patient statements and support, reducing billing-related calls to your front desk.",
      ur: "واضح اور درست مریض بیانات اور مدد، آپ کے فرنٹ ڈیسک پر بلنگ سے متعلق کالز میں کمی۔",
    },
  },
];

export const medicalBillingStats = [
  { value: "97%", label: { en: "First-Pass Claim Acceptance", ur: "پہلی بار کلیم قبولیت" } },
  { value: "< 24h", label: { en: "Claims Submission Turnaround", ur: "کلیمز جمع کرانے کا وقت" } },
  { value: "30+", label: { en: "Specialties Supported", ur: "معاون طبی شعبے" } },
  { value: "HIPAA", label: { en: "Compliant Workflows", ur: "تعمیل شدہ ورک فلو" } },
];

export const medicalBillingProcess = [
  { en: "Patient intake & eligibility verification", ur: "مریض کا داخلہ اور اہلیت کی تصدیق" },
  { en: "Accurate medical coding (ICD-10 / CPT)", ur: "درست میڈیکل کوڈنگ" },
  { en: "Clean claim submission to payers", ur: "ادا کنندگان کو صاف کلیم جمع کرانا" },
  { en: "Payment posting & reconciliation", ur: "ادائیگی کی پوسٹنگ اور ملاپ" },
  { en: "Denial follow-up & appeals", ur: "مسترد کلیمز کی پیروی اور اپیلیں" },
  { en: "Monthly reporting to your practice", ur: "آپ کے کلینک کو ماہانہ رپورٹنگ" },
];
