import { certifications, skills } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="border-y border-white/10 bg-slate-900 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Technical skills" title="Organized for scientific and R&D credibility." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7">
              <h3 className="text-xl font-semibold text-white">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="soft">{item}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-7 md:p-9">
          <h3 className="text-2xl font-semibold text-white">Complementary training</h3>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-slate-300 md:grid-cols-2">
            {certifications.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
