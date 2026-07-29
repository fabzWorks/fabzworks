import type { Metadata } from "next";
import Hero from "@/components/organisms/Hero";
import ServicesSection from "@/components/organisms/ServicesSection";
import CaseStudiesPreview from "@/components/organisms/CaseStudiesPreview";
import TeamPreview from "@/components/organisms/TeamPreview";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import BlogPreview from "@/components/organisms/BlogPreview";
import FaqSection from "@/components/organisms/FaqSection";
import CtaSection from "@/components/organisms/CtaSection";

export const metadata: Metadata = {
  title: "FabzWorks — Smart Software Solutions",
  description:
    "ERP, CRM, web, mobile, and AI-powered software built around how your business actually runs.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseStudiesPreview />
      <TeamPreview />
      <TestimonialsSection />
      <BlogPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
