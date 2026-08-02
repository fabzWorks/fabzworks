import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import BlogBrowser from "@/components/organisms/BlogBrowser";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes from inside FabzWorks projects.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow={ui.blogEyebrow}
        title={ui.blogPageTitle}
        description={ui.blogPageDesc}
      />
      <BlogBrowser />
    </>
  );
}
