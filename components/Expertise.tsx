import { strengths } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function Expertise() {
  return (
    <section id="expertise" className="border-y border-white/10 bg-slate-900 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Core expertise"
          title="Scientific and technical strengths aligned with R&D environments."
          description="Advanced characterisation, metrology, instrumentation, scientific data analysis and technical documentation."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {strengths.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.keywords.map((keyword) => (
                  <Badge key={keyword} variant="soft">{keyword}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
