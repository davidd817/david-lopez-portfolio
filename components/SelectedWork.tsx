import Link from "next/link";
import { selectedWork } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function SelectedWork() {
  const primary = selectedWork.filter((work) => work.priority === "Primary");
  const secondary = selectedWork.filter((work) => work.priority === "Secondary");

  return (
    <section id="work" className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Selected R&D, characterization and scientific data work."
          description="A curated view of projects and research experience."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {primary.map((work) => (
            <Link key={work.slug} href={`/work/${work.slug}`} className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <Badge>{work.group}</Badge>
                <span className="text-sm font-semibold text-cyan-200 transition group-hover:translate-x-1">Read case snapshot →</span>
              </div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">{work.title}</h3>
              <p className="mt-3 text-base font-medium text-cyan-100">{work.subtitle}</p>
              <p className="mt-5 text-base leading-8 text-slate-300">{work.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {work.tools.slice(0, 6).map((tool) => (
                  <Badge key={tool} variant="soft">{tool}</Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {secondary.map((work) => (
          <Link key={work.slug} href={`/work/${work.slug}`} className="mt-6 block rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.05] p-7 transition hover:-translate-y-1 hover:border-amber-200/40">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge variant="soft">{work.group}</Badge>
              <span className="text-sm font-semibold text-amber-100">View complementary projects →</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{work.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-300">{work.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
