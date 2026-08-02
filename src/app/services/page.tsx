import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import ServicesBrowser from "@/components/organisms/ServicesBrowser";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ERP, CRM, web, mobile, AI, automation, and integration services from FabzWorks.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.servicesEyebrow}
        title={ui.servicesPageTitle}
        description={ui.servicesPageDesc}
      />
      <ServicesBrowser />
    </>
  );
}
