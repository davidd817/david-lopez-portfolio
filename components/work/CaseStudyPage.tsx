import Link from "next/link";
import type { WorkProject, WorkSection } from "@/types/work";
import { CaseStudyHero, CaseStudyNav, DisclosureNote, EvidenceChain, ExternalLinkGroup, FigureBlock, MetricGrid, PortfolioMatrix, ProcessFlow, ProjectSnapshot, PublicationGrid, PublicationTimeline, ScreenshotGallery, SkillCluster } from "./WorkPrimitives";

function RichTextSection({ section }: { section: WorkSection }) {
  return <section id={section.id} className="scroll-mt-36 space-y-6">
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
    {section.publications ? <><PublicationTimeline publications={section.publications} /><PublicationGrid publications={section.publications} /></> : null}
    {section.disclosure ? <DisclosureNote>{section.disclosure}</DisclosureNote> : null}
    {section.links ? <ExternalLinkGroup links={section.links} /> : null}
  </section>;
}

export function CaseStudyPage({ project }: { project: WorkProject }) {
  return <main className="min-h-screen bg-slate-950 text-white">
    <CaseStudyHero category={project.category} tier={project.tier} title={project.title} subheadline={project.subheadline} opening={project.opening} hero={project.hero} />
    <ProjectSnapshot items={project.snapshot} />
    <CaseStudyNav items={project.nav} />
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"><div className="space-y-20">{project.sections.map((section) => <RichTextSection key={section.id} section={section} />)}</div>
      <div className="mt-20 border-t border-white/10 pt-10"><div className="flex flex-wrap gap-3"><ExternalLinkGroup links={project.links} /></div></div>
      <RelatedProjects project={project} />
    </div>
  </main>;
}

function RelatedProjects({ project }: { project: WorkProject }) {
  const related = project.sections.flatMap((section) => section.related ?? []);
  if (!related.length) return null;
  return <aside className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Continue exploring</p><div className="mt-4 flex flex-wrap gap-3">{related.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{link.label}</Link>)}</div></aside>;
}
