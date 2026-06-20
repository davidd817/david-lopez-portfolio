import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { publications, site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "David López Diego | Materials Characterization & Scientific Data Analysis";
const description = "Materials Characterization & Metrology Scientist in Madrid. Nanomaterials, AFM, nanoscale metrology, scientific instrumentation, Python workflows, biosensors and PhD Candidate in Materials Physics, Nanoscience and Biophysics.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title,
  description,
  keywords: [
    "David López Diego",
    "Materials Characterization Scientist",
    "Metrology Scientist",
    "Nanomaterials Scientist",
    "Scientific Data Analysis",
    "AFM",
    "Nanoscale Metrology",
    "Biosensors",
    "PhD Candidate Materials Physics",
    "Scientific Computing",
    "Research Scientist Madrid"
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "Spain" },
    url: `https://${site.domain}`,
    sameAs: [site.links.linkedin, site.links.orcid, site.links.webOfScience, site.links.github],
    knowsAbout: [
      "Materials characterization",
      "Nanoscale metrology",
      "Atomic force microscopy",
      "Nanomaterials",
      "Biosensors",
      "Scientific data analysis",
      "Python workflows",
      "Experimental data analysis"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} Portfolio`,
    url: `https://${site.domain}`,
    description
  };

  const scholarly = publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    datePublished: pub.year,
    isPartOf: { "@type": "Periodical", name: pub.journal },
    identifier: pub.doi,
    url: pub.url,
    author: { "@type": "Person", name: site.name }
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarly) }} />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
