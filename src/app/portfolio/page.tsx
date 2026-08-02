import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import PortfolioBrowser from "@/components/organisms/PortfolioBrowser";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Web, mobile, and AI projects built by FabzWorks — browse the full portfolio with live demos and source links.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.portfolioEyebrow}
        title={ui.portfolioPageTitle}
        description={ui.portfolioPageDesc}
      />
      <PortfolioBrowser />
    </>
  );
}
