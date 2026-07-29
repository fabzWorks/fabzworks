import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import CareersBrowser from "@/components/organisms/CareersBrowser";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at FabzWorks across engineering, AI, design, and delivery.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software that businesses actually rely on"
        description="We're a small, senior team that cares about doing the work right. Here's what's open right now."
      />
      <CareersBrowser />
    </>
  );
}
