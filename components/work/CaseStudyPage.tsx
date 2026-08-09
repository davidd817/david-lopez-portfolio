import Link from "next/link";
import type { WorkProject, WorkSection } from "@/types/work";
import { workProjects } from "@/data/work";
import { CaseStudyHero, CaseStudyNav, DisclosureNote, ExternalLinkGroup, FigureBlock, MetricGrid, PortfolioMatrix, ProcessFlow, ProjectSnapshot, PublicationTimeline, ScreenshotGallery, SkillCluster } from "./WorkPrimitives";
import { RouteScrollTop } from "./RouteScrollTop";

function RichTextSection({ section }: { section: WorkSection }) {
  return <section id={section.id} className="scroll-mt-28 space-y-6 md:scroll-mt-32">
    <div><h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{section.title}</h2>{section.intro ? <p className="mt-4 max-w-[78ch] text-lg leading-8 text-cyan-100">{section.intro}</p> : null}</div>
    {section.paragraphs?.map((paragraph) => <p key={paragraph} className="max-w-[78ch] text-base leading-8 text-slate-300">{paragraph}</p>)}
    {section.bullets?.length ? <ul className="max-w-[78ch] space-y-3 text-base leading-7 text-slate-300">{section.bullets.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul> : null}
    {section.subsections?.map((subsection) => <div key={subsection.title} className="max-w-[78ch] space-y-3"><h3 className="text-xl font-semibold text-white">{subsection.title}</h3>{subsection.paragraphs?.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-300">{paragraph}</p>)}{subsection.bullets?.length ? <ul className="space-y-3 text-base leading-7 text-slate-300">{subsection.bullets.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />{item}</li>)}</ul> : null}{subsection.callout ? <p className="border-l-2 border-cyan-300 pl-5 text-base font-medium leading-8 text-cyan-100">{subsection.callout}</p> : null}</div>)}
    {section.callout ? <div className="max-w-[78ch] rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.06] p-6 text-base font-medium leading-8 text-cyan-50">{section.callout}</div> : null}
    {section.process ? <ProcessFlow steps={section.process} /> : null}
    {section.metrics ? <MetricGrid metrics={section.metrics} /> : null}
    {section.matrix ? <PortfolioMatrix matrix={section.matrix} /> : null}
    {section.skills ? <SkillCluster groups={section.skills} /> : null}
    {section.figures?.length ? <div className="grid gap-6 lg:grid-cols-2">{section.figures.map((figure) => <FigureBlock key={figure.src} asset={figure} />)}</div> : null}
    {section.gallery?.length ? <ScreenshotGallery assets={section.gallery} /> : null}
    {section.publications ? <PublicationTimeline publications={section.publications} /> : null}
    {section.disclosure ? <DisclosureNote>{section.disclosure}</DisclosureNote> : null}
    {section.links ? <ExternalLinkGroup links={section.links} /> : null}
  </section>;
}

export function CaseStudyPage({ project }: { project: WorkProject }) {
  return <main className="min-h-screen bg-slate-950 text-white">
    <RouteScrollTop />
    <CaseStudyHero category={project.category} tier={project.tier} title={project.title} subheadline={project.subheadline} opening={project.opening} hero={project.hero} actions={project.heroLinks} />
    <ProjectSnapshot items={project.snapshot} />
    <CaseStudyNav items={project.nav} />
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-14 md:px-8 md:py-20"><div className="space-y-20">{project.sections.map((section) => <RichTextSection key={section.id} section={section} />)}</div>
      {project.profileLinks?.length ? <aside className="mt-20 rounded-3xl border border-white/10 bg-white/[0.035] p-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">External profile</p><p className="mt-3 max-w-[60ch] text-sm leading-7 text-slate-300">Project code and related technical work.</p><div className="mt-5"><ExternalLinkGroup links={project.profileLinks} /></div></aside> : null}
      <ProjectFooterNav project={project} />
    </div>
  </main>;
}

function ProjectFooterNav({ project }: { project: WorkProject }) {
  const currentIndex = workProjects.findIndex((item) => item.slug === project.slug);
  const previous = currentIndex > 0 ? workProjects[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 && currentIndex < workProjects.length - 1 ? workProjects[currentIndex + 1] : undefined;
  return <nav aria-label="Project navigation" className="mt-20 border-t border-white/10 pt-10">
    <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">Project navigation</p>
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {previous ? <Link href={`/work/${previous.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"><span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Previous project</span><span className="mt-2 block text-sm font-semibold leading-6 text-white">{previous.title}</span></Link> : <span className="hidden sm:block" aria-hidden="true" />}
      <Link href="/#selected-work" className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.08] p-4 text-center transition hover:border-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"><span className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Back to Selected Work</span><span className="mt-2 block text-sm font-semibold leading-6 text-white">View all six case studies</span></Link>
      {next ? <Link href={`/work/${next.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-right transition hover:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"><span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Next project</span><span className="mt-2 block text-sm font-semibold leading-6 text-white">{next.title}</span></Link> : <span className="hidden sm:block" aria-hidden="true" />}
    </div>
  </nav>;
}
