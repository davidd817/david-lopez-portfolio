import { education, experience } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-slate-900 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="R&D experience, scientific instrumentation and technical execution."
          description="Experience supporting multidisciplinary R&D through advanced characterization, nanoscale metrology, instrument operation, technical documentation, quality-aligned workflows and reproducible experimental data analysis."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={item.role} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-base font-medium text-cyan-100">{item.organization}</p>
                <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                <ul className="mt-6 space-y-3 text-base leading-7 text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-7 md:p-9">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div key={item.degree} className="border-l border-cyan-300/40 pl-5">
                    <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                    <p className="mt-2 font-semibold text-white">{item.degree}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 md:p-9">
              <h3 className="text-2xl font-semibold text-white">Professional focus</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                I help R&D teams transform complex measurements into reliable, traceable and actionable insights through advanced characterization, scientific instrumentation and data-driven analysis.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
