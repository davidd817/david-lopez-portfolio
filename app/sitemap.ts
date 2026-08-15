import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { workProjects } from "@/data/work";

const baseUrl = `https://${site.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...workProjects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}