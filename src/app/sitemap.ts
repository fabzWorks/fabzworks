import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { blogPosts } from "@/data/blog";
import { jobs } from "@/data/careers";
import { caseStudies } from "@/data/case-studies";
import { portfolioProjects } from "@/data/portfolio";

// NOTE: replace with your real production domain before deploying.
const BASE_URL = "https://www.fabzworks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/team",
    "/testimonials",
    "/blog",
    "/careers",
    "/contact",
    "/login",
    "/signup",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes: MetadataRoute.Sitemap = [
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...portfolioProjects.map((p) => ({
      url: `${BASE_URL}/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...caseStudies.map((c) => ({
      url: `${BASE_URL}/case-studies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...team.map((m) => ({
      url: `${BASE_URL}/team/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    ...blogPosts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...jobs.map((j) => ({
      url: `${BASE_URL}/careers/${j.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
