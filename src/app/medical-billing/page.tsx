import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Clock, FileCheck2 } from "lucide-react";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import Badge from "@/components/atoms/Badge";
import Bi from "@/components/atoms/Bi";
import { LinkButton } from "@/components/atoms/Button";
import { ui } from "@/lib/i18n";
import {
  medicalServices,
  medicalBillingStats,
  medicalBillingProcess,
} from "@/data/medical-billing";

export const metadata: Metadata = {
  title: "Medical Billing Services",
  description:
    "HIPAA-compliant medical billing, coding, and revenue cycle management services from FabzWorks.",
};

const trustPoints = [
  { icon: ShieldCheck, text: { en: "HIPAA-compliant workflows", ur: "HIPAA کے مطابق ورک فلو" } },
  { icon: Clock, text: { en: "Claims submitted within 24 hours", ur: "24 گھنٹوں میں کلیمز جمع" } },
  { icon: FileCheck2, text: { en: "Certified medical coders", ur: "تصدیق شدہ میڈیکل کوڈرز" } },
];

export default function MedicalBillingPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.medicalBillingEyebrow}
        title={{
          en: "Medical billing that gets your practice paid faster",
          ur: "میڈیکل بلنگ جو آپ کے کلینک کو تیزی سے ادائیگی دلائے",
        }}
        description={{
          en: "A dedicated, HIPAA-compliant billing team handling claims, coding, and revenue cycle management — completely separate from our software engineering practice, run by billing specialists.",
          ur: "کلیمز، کوڈنگ اور ریونیو سائیکل مینجمنٹ سنبھالنے والی ایک مخصوص، HIPAA کے مطابق بلنگ ٹیم — ہماری سافٹ ویئر انجینئرنگ سے بالکل الگ، بلنگ ماہرین کی سربراہی میں۔",
        }}
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {trustPoints.map((p) => (
            <span
              key={p.text.en}
              className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-muted)]"
            >
              <p.icon size={14} className="text-[var(--accent)]" />
              <Bi t={p.text} />
            </span>
          ))}
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {medicalBillingStats.map((s) => (
              <div key={s.label.en} className="card-surface rounded-2xl border p-5 text-center">
                <p className="ltr-preserve font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--accent)]">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[var(--text-faint)]"><Bi t={s.label} /></p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-[var(--text)] sm:text-3xl">
              <Bi t={{ en: "What our medical billing team handles", ur: "ہماری میڈیکل بلنگ ٹیم کیا سنبھالتی ہے" }} />
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {medicalServices.map((s) => (
                <div key={s.slug} className="card-surface rounded-2xl border p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-2xl">
                    {s.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-[var(--text)]">
                    <Bi t={s.title} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    <Bi t={s.desc} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Badge>
                <Bi t={{ en: "Our Process", ur: "ہمارا طریقہ کار" }} />
              </Badge>
              <h2 className="mt-4 text-2xl font-bold text-[var(--text)]">
                <Bi t={{ en: "From patient visit to payment posted", ur: "مریض کے دورے سے ادائیگی تک" }} />
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">
                <Bi
                  t={{
                    en: "Our billing specialists work as an extension of your front desk, not a black box. You always know where a claim stands.",
                    ur: "ہمارے بلنگ ماہرین آپ کے فرنٹ ڈیسک کی توسیع کے طور پر کام کرتے ہیں۔ آپ کو ہمیشہ معلوم ہوگا کہ کلیم کہاں تک پہنچا ہے۔",
                  }}
                />
              </p>
            </div>
            <ol className="space-y-3">
              {medicalBillingProcess.map((step, i) => (
                <li
                  key={step.en}
                  className="card-surface flex items-start gap-3 rounded-2xl border p-4 text-sm text-[var(--text)]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[11px] font-bold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <Bi t={step} />
                </li>
              ))}
            </ol>
          </div>

          <div className="card-surface mt-16 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center sm:flex-row sm:justify-between sm:text-left rtl:sm:text-right">
            <div>
              <p className="flex items-center gap-2 text-base font-semibold text-[var(--text)]">
                <CheckCircle2 size={18} className="text-[var(--accent)]" />
                <Bi t={{ en: "Ready to stop chasing denied claims?", ur: "کیا آپ مسترد کلیمز کا پیچھا کرنا بند کرنا چاہتے ہیں؟" }} />
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                <Bi
                  t={{
                    en: "Talk to our billing team about your practice's specialty and current claim rejection rate.",
                    ur: "اپنے کلینک کے شعبے اور موجودہ کلیم مسترد ہونے کی شرح کے بارے میں ہماری بلنگ ٹیم سے بات کریں۔",
                  }}
                />
              </p>
            </div>
            <LinkButton href="/contact" size="md">
              <Bi t={ui.getInTouch} />
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
