import Hero from "@/components/organisms/Hero";
import ServicesSection from "@/components/organisms/ServicesSection";
import PortfolioPreview from "@/components/organisms/PortfolioPreview";
import AICapabilities from "@/components/organisms/AICapabilities";
import CaseStudiesPreview from "@/components/organisms/CaseStudiesPreview";
import TeamPreview from "@/components/organisms/TeamPreview";
import CEOMessage from "@/components/organisms/CEOMessage";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import BlogPreview from "@/components/organisms/BlogPreview";
import FaqSection from "@/components/organisms/FaqSection";
import CtaSection from "@/components/organisms/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioPreview />
      <AICapabilities />
      <CaseStudiesPreview />
      <TeamPreview />
      <CEOMessage />
      <TestimonialsSection />
      <BlogPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
