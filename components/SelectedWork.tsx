import Link from "next/link";
import { workProjects } from "@/data/work";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function SelectedWork() {
  return (
    <section id="work" className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Research, metrology and software translated into reproducible evidence."
          description="Six case studies spanning AFM biophysics, published biosensors, thermoelectric materials, cross-technique characterisation, polymer membranes and scientific software."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {workProjects.map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: (typeof workProjects)[number] }) {
  const layout = work.order === 1 || work.order === 4 ? "lg:col-span-2" : "";
  const tone = work.tier === "Secondary" ? "border-amber-200/20 bg-amber-200/[0.04] hover:border-amber-200/45" : "border-white/10 bg-white/[0.035] hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]";
  return <Link href={`/work/${work.slug}`} className={`group block rounded-[2rem] border p-7 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300/80 motion-reduce:transform-none ${layout} ${tone}`}>
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><Badge>{work.category}</Badge><span className="text-sm font-semibold text-cyan-200 transition group-hover:translate-x-1">{work.cta} →</span></div>
    <h3 className="max-w-4xl text-2xl font-semibold text-white md:text-3xl">{work.title}</h3>
    <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">{work.cardDescription}</p>
    <ul className="mt-6 grid gap-2 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4">{work.proofPoints.map((point) => <li key={point} className="flex gap-2"><span className="text-cyan-300">·</span>{point}</li>)}</ul>
    <div className="mt-6 flex flex-wrap gap-2">{work.technologies.slice(0, 6).map((tool) => <Badge key={tool} variant="soft">{tool}</Badge>)}</div>
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{work.status}</p>
  </Link>;
}