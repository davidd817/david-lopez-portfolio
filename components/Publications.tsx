import { publications, site } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function Publications() {
  return (
    <section id="publications" className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected publications"
          title="Selected publications"
          description="10+ selected publications · Complete record available on ORCID / Web of Science"
        />
        <div className="mb-8 flex justify-center md:hidden">
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.08] px-5 py-3 text-center">
            <p className="text-3xl font-semibold text-cyan-200">10+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Selected publications</p>
          </div>
        </div>
        <div className="grid gap-3">
          {publications.map((pub) => (
            <article key={pub.doi} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/30 md:p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge>{pub.year}</Badge>
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-white md:text-lg">{pub.title}</h3>
                  <p className="mt-1 text-sm text-cyan-100">{pub.journal}</p>
                </div>
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100">
                  Open DOI
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={site.links.orcid} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">View ORCID</a>
          <a href={site.links.webOfScience} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50">Web of Science</a>
        </div>
      </div>
    </section>
  );
}
