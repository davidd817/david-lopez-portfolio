import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { CaseStudyPage } from "@/components/work/CaseStudyPage";
import { legacyWorkRedirects, workBySlug, workProjects } from "@/data/work";
import { site } from "@/data/site";

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const canonicalSlug = legacyWorkRedirects[params.slug] ?? params.slug;
  const project = workBySlug.get(canonicalSlug);
  if (!project) return { title: `Selected Work | ${site.name}` };
  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.seo.title, description: project.seo.ogDescription, url: `/work/${project.slug}`, type: "article", images: project.hero ? [{ url: project.hero.src, alt: project.hero.alt }] : undefined }
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const legacyTarget = legacyWorkRedirects[params.slug];
  if (legacyTarget) redirect(`/work/${legacyTarget}`);
  const project = workBySlug.get(params.slug);
  if (!project) notFound();
  return <><Navigation /><CaseStudyPage project={project} /><Footer /></>;
}