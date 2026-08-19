import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#0f172a_0%,#020617_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">Let’s connect.</h2>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-9 text-slate-300">
          Open to R&D and technology opportunities where scientific expertise, advanced measurement and data-driven analysis help transform complex ideas into reliable results.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`mailto:${site.email}`} className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-200">
            Email David
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50">
            LinkedIn
          </a>
          <a href={site.cv} className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50">
            Download CV
          </a>
        </div>
        <p className="mt-8 text-sm text-slate-400">{site.email} · {site.location}</p>
      </div>
    </section>
  );
}
