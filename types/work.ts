export type WorkTier = "Flagship" | "Primary" | "Supporting" | "Secondary";

export type WorkAsset = {
  src: string;
  alt: string;
  caption: string;
  provenance: "conceptual" | "experimental" | "conceptual+data" | "screenshot";
  aspect?: "wide" | "portrait";
};

export type WorkLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type WorkMetric = {
  value: string;
  label: string;
  note: string;
};

export type WorkPublication = {
  title: string;
  journal: string;
  year: string;
  description: string;
  doi: string;
  url: string;
};

export type WorkSkillGroup = {
  title: string;
  items: string[];
};

export type WorkMatrix = {
  columns: string[];
  rows: string[][];
};

export type WorkSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

export type WorkSection = {
  id: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: WorkSubsection[];
  callout?: string;
  process?: string[];
  figures?: WorkAsset[];
  metrics?: WorkMetric[];
  skills?: WorkSkillGroup[];
  matrix?: WorkMatrix;
  publications?: WorkPublication[];
  gallery?: WorkAsset[];
  links?: WorkLink[];
  disclosure?: string;
  related?: WorkLink[];
};

export type WorkProject = {
  slug: string;
  order: number;
  tier: WorkTier;
  category: string;
  title: string;
  cardDescription: string;
  proofPoints: string[];
  technologies: string[];
  status: string;
  cta: string;
  subheadline: string;
  opening: string[];
  snapshot: { label: string; value: string }[];
  nav: { id: string; label: string }[];
  hero?: WorkAsset;
  sections: WorkSection[];
  links?: WorkLink[];
  seo: { title: string; description: string; ogDescription: string };
};
