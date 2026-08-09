import { site } from "@/data/site";
import { Badge } from "./Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#08111f_45%,#0f172a_100%)]">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <div className="mb-7 flex flex-wrap gap-3">
            <Badge>Madrid · Open to national & international opportunities</Badge>
            <Badge variant="soft">Materials Physics</Badge>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">{site.name}</p>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {site.role}
          </h1>
          <p className="mt-5 text-xl font-medium text-cyan-100 md:text-2xl">{site.subtitle}</p>
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-9 text-slate-300 md:text-xl">{site.description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#selected-work" className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200">
              View selected work
            </a>
            <a href={site.cv} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/10">
              Download CV
            </a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/40">
              Contact
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a className="hover:text-cyan-200" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-cyan-200" href={site.links.orcid} target="_blank" rel="noreferrer">ORCID</a>
            <a className="hover:text-cyan-200" href={site.links.webOfScience} target="_blank" rel="noreferrer">Web of Science</a>
            <a className="hover:text-cyan-200" href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Scientific interface</p>
                  <p className="mt-2 text-lg font-semibold text-white">Instrumentation → Data → Insight</p>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-emerald-300/30 bg-emerald-300/10" />
              </div>
              <div className="grid gap-4">
                {[
                  ["Advanced measurement","Characterization · metrology · experimental validation"],
                  ["Scientific instrumentation", "AFM · SEM-EDX · TEM · XRD · Raman · FTIR · XPS · FIB· Litography"],
                  ["Data-driven R&D", "Python · reproducible workflows · reporting automation"],
                  ["Deep-tech applications", "Advanced materials · semiconductors · biosensors · nanotechnology"]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden rounded-3xl border border-cyan-300/20 bg-slate-900/90 px-5 py-4 shadow-glow backdrop-blur md:block">
            <p className="text-3xl font-semibold text-cyan-200">10+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Publications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
