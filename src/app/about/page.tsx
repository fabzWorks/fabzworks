import type { Metadata } from "next";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import CascadeMark from "@/components/atoms/CascadeMark";
import Bi from "@/components/atoms/Bi";
import TeamPreview from "@/components/organisms/TeamPreview";
import CEOMessage from "@/components/organisms/CEOMessage";
import CtaSection from "@/components/organisms/CtaSection";
import { stats } from "@/data/stats";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who FabzWorks is and how we approach every engagement.",
};

const storyParagraphs = [
  {
    en: "FabzWorks started with a simple observation: most business software fails not because of bad technology, but because it was built for a generic use case instead of the specific way a team actually works. We set out to build software the other way around, starting from real operational problems and working backward to the technology.",
    ur: "فیبز ورکس کا آغاز ایک سادہ مشاہدے سے ہوا: زیادہ تر بزنس سافٹ ویئر خراب ٹیکنالوجی کی وجہ سے ناکام نہیں ہوتا، بلکہ اس لیے کہ یہ ایک عمومی استعمال کے لیے بنایا گیا ہوتا ہے نہ کہ ٹیم کے اصل کام کے انداز کے مطابق۔ ہم نے الٹے انداز میں سافٹ ویئر بنانے کا فیصلہ کیا، حقیقی آپریشنل مسائل سے شروع ہو کر ٹیکنالوجی کی طرف بڑھے۔",
  },
  {
    en: "Today we design and build ERP, CRM, web, mobile, and AI-powered systems for growing companies across retail, logistics, financial services, SaaS, and agriculture, always staying close enough to the client relationship to keep every system genuinely useful long after launch.",
    ur: "آج ہم ریٹیل، لاجسٹکس، مالیاتی خدمات، سعاس اور زراعت جیسی صنعتوں میں بڑھتی کمپنیوں کے لیے ای آر پی، سی آر ایم، ویب، موبائل اور اے آئی سسٹمز ڈیزائن اور تیار کرتے ہیں، ہمیشہ کلائنٹ کے ساتھ قریبی تعلق رکھتے ہوئے تاکہ ہر نظام لانچ کے بعد بھی واقعی مفید رہے۔",
  },
];

const values = [
  {
    title: { en: "Start from the real workflow", ur: "اصل ورک فلو سے آغاز" },
    text: { en: "We map how your team actually works before proposing anything, not the other way around.", ur: "ہم کچھ بھی تجویز کرنے سے پہلے یہ نقشہ بناتے ہیں کہ آپ کی ٹیم اصل میں کیسے کام کرتی ہے۔" },
  },
  {
    title: { en: "Ship in usable phases", ur: "قابلِ استعمال مراحل میں فراہمی" },
    text: { en: "Every project delivers value early, not just at one big launch date months from now.", ur: "ہر منصوبہ ابتدا سے ہی قدر فراہم کرتا ہے، نہ کہ صرف مہینوں بعد ایک بڑے لانچ پر۔" },
  },
  {
    title: { en: "Stay senior, stay small", ur: "تجربہ کار اور چھوٹی ٹیم" },
    text: { en: "You work directly with the people building your system, not layers of account managers.", ur: "آپ براہ راست اپنے نظام کو بنانے والے لوگوں کے ساتھ کام کرتے ہیں۔" },
  },
  {
    title: { en: "Build for the next engineer", ur: "اگلے انجینئر کے لیے تعمیر" },
    text: { en: "Code and systems that are still easy to maintain and extend years after we ship them.", ur: "ایسا کوڈ اور نظام جو برسوں بعد بھی آسانی سے برقرار اور توسیع پذیر ہو۔" },
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.aboutEyebrow}
        title={ui.aboutTitle}
        description={ui.aboutDesc}
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <CascadeMark />
            <h2 className="mt-6 text-2xl font-bold text-[var(--text)] sm:text-3xl">
              <Bi t={ui.ourStory} />
            </h2>
            {storyParagraphs.map((p) => (
              <p key={p.en} className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
                <Bi t={p} />
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label.en} className="card-surface rounded-2xl border p-6 text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent)]">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-faint)]"><Bi t={s.label} /></p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
        <Container>
          <h2 className="text-center text-2xl font-bold text-[var(--text)] sm:text-3xl">
            <Bi t={ui.whatGuidesUs} />
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title.en} className="card-surface rounded-2xl border p-6">
                <h3 className="text-base font-semibold text-[var(--text)]"><Bi t={v.title} /></h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  <Bi t={v.text} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CEOMessage />
      <TeamPreview />
      <CtaSection />
    </>
  );
}
