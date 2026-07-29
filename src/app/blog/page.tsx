import type { Metadata } from "next";
import PageHero from "@/components/molecules/PageHero";
import BlogBrowser from "@/components/organisms/BlogBrowser";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical notes from inside FabzWorks projects.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from inside our projects"
        description="Short, honest write-ups on ERP rollouts, AI integrations, automation, and everything in between."
      />
      <BlogBrowser />
    </>
  );
}
