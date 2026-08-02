import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import CareersBrowser from "@/components/organisms/CareersBrowser";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at FabzWorks across engineering, AI, design, and delivery.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.careersEyebrow}
        title={ui.careersTitle}
        description={ui.careersDesc}
      />
      <CareersBrowser />
    </>
  );
}
