import { publications, site } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function Publications() {
  return (
    <section id="publications" className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Publications"
          title="Scientific publications in nanomaterials, biosensing and advanced materials research."
          description="Peer-reviewed contributions across nanoscience, DNA-based biosensors, 2D materials, diagnostic platforms and applied characterization, reflecting sustained research activity in multidisciplinary R&D environments."
        />
        <div className="grid gap-4">
          {publications.map((pub) => (
            <article key={pub.doi} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/30">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge>{pub.year}</Badge>
                    <Badge variant="soft">{pub.theme}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-white">{pub.title}</h3>
                  <p className="mt-2 text-base text-cyan-100">{pub.journal}</p>
                  <p className="mt-2 text-sm text-slate-400">DOI: {pub.doi}</p>
                </div>
                <a href={pub.url} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100">
                  Open DOI
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.links.orcid} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">View ORCID</a>
          <a href={site.links.webOfScience} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50">Web of Science</a>
        </div>
      </div>
    </section>
  );
}
