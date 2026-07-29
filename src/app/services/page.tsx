import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import ServicesBrowser from "@/components/organisms/ServicesBrowser";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ERP, CRM, web, mobile, AI, automation, and integration services from FabzWorks.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software built around how you work"
        description="Every engagement starts with your actual workflow, not a generic template. Explore what we build, then let's talk about your specific case."
      />
      <ServicesBrowser />
    </>
  );
}
