import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WorkDetail } from "@/components/WorkDetail";
import { selectedWork, site } from "@/data/site";

export function generateStaticParams() {
  return selectedWork.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const work = selectedWork.find((item) => item.slug === params.slug);
  if (!work) {
    return { title: `Selected Work | ${site.name}` };
  }
  return {
    title: `${work.title} | ${site.name}`,
    description: work.summary,
    alternates: { canonical: `/work/${work.slug}` },
    openGraph: {
      title: `${work.title} | ${site.name}`,
      description: work.summary,
      type: "article"
    }
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navigation />
      <WorkDetail slug={params.slug} />
      <Footer />
    </>
  );
}
