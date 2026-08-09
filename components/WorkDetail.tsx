import Link from "next/link";
import { selectedWork } from "@/data/site";
import { Badge } from "./Badge";

export function WorkDetail({ slug }: { slug: string }) {
  const work = selectedWork.find((item) => item.slug === slug);

  if (!work) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-4xl">
          <p>Work item not found.</p>
          <Link href="/" className="mt-6 inline-block text-cyan-200">Back home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/#selected-work" className="mb-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100">← Back to selected work</Link>
          <div className="mb-5 flex flex-wrap gap-3">
            <Badge>{work.group}</Badge>
            <Badge variant="soft">{work.priority} work</Badge>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">{work.title}</h1>
          <p className="mt-5 text-xl font-medium leading-9 text-cyan-100">{work.subtitle}</p>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">{work.summary}</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-5">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-7">
              <h2 className="text-2xl font-semibold">My role</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{work.role}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
              <h2 className="text-2xl font-semibold">Tools & techniques</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.tools.map((tool) => <Badge key={tool} variant="soft">{tool}</Badge>)}
              </div>
            </div>
          </aside>
          <div className="space-y-5">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-9">
              <h2 className="text-2xl font-semibold">Context</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{work.context}</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-9">
              <h2 className="text-2xl font-semibold">Methodology</h2>
              <ul className="mt-5 space-y-3 text-base leading-7 text-slate-300">
                {work.methods.map((method) => (
                  <li key={method} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />{method}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.06] p-7 md:p-9">
              <h2 className="text-2xl font-semibold">Impact</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{work.impact}</p>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-9">
              <h2 className="text-2xl font-semibold">What this demonstrates</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{work.demonstrates}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
