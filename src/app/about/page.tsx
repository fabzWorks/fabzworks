import type { Metadata } from "next";
import Container from "@/components/atoms/Container";
import PageHero from "@/components/molecules/PageHero";
import CascadeMark from "@/components/atoms/CascadeMark";
import TeamPreview from "@/components/organisms/TeamPreview";
import CtaSection from "@/components/organisms/CtaSection";
import { stats } from "@/data/stats";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who FabzWorks is and how we approach every engagement.",
};

const values = [
  {
    title: "Start from the real workflow",
    text: "We map how your team actually works before proposing anything, not the other way around.",
  },
  {
    title: "Ship in usable phases",
    text: "Every project delivers value early, not just at one big launch date months from now.",
  },
  {
    title: "Stay senior, stay small",
    text: "You work directly with the people building your system, not layers of account managers.",
  },
  {
    title: "Build for the next engineer",
    text: "Code and systems that are still easy to maintain and extend years after we ship them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FabzWorks"
        title="Software built around how your business actually runs"
        description="We're a senior team of engineers, designers, and AI specialists who partner with growing businesses to replace fragile spreadsheets and disconnected tools with software that fits."
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <CascadeMark />
            <h2 className="mt-6 text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
              FabzWorks started with a simple observation: most business
              software fails not because of bad technology, but because it
              was built for a generic use case instead of the specific way a
              team actually works. We set out to build software the other
              way around, starting from real operational problems and
              working backward to the technology.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
              Today we design and build ERP, CRM, web, mobile, and
              AI-powered systems for growing companies across retail,
              logistics, financial services, SaaS, and agriculture, always
              staying close enough to the client relationship to keep every
              system genuinely useful long after launch.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card-surface rounded-2xl border p-6 text-center">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent)]">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-faint)]">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
        <Container>
          <h2 className="text-center text-2xl font-bold text-[var(--text)] sm:text-3xl">
            What guides how we work
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card-surface rounded-2xl border p-6">
                <h3 className="text-base font-semibold text-[var(--text)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamPreview />
      <CtaSection />
    </>
  );
}
