"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { WorkAsset, WorkLink, WorkMatrix, WorkMetric, WorkPublication, WorkSkillGroup } from "@/types/work";
import { Badge } from "@/components/Badge";

export function CaseStudyHero({
  category,
  tier,
  title,
  subheadline,
  opening,
  hero
}: {
  category: string;
  tier: string;
  title: string;
  subheadline: string;
  opening: string[];
  hero?: WorkAsset;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Link href="/#work" className="mb-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">← Back to selected work</Link>
          <div className="mb-5 flex flex-wrap gap-3"><Badge>{category}</Badge><Badge variant="soft">{tier} work</Badge></div>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-9 text-cyan-100">{subheadline}</p>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-9 text-slate-300">{opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        {hero ? <FigureBlock asset={hero} eager /> : null}
      </div>
    </section>
  );
}

export function ProjectSnapshot({ items }: { items: { label: string; value: string }[] }) {
  return <section aria-labelledby="project-snapshot" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"><h2 id="project-snapshot" className="sr-only">Project snapshot</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map((item) => <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.label}</p><p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p></div>)}</div></section>;
}

export function CaseStudyNav({ items }: { items: { id: string; label: string }[] }) {
  return <nav aria-label="On this page" className="sticky top-20 z-20 border-y border-white/10 bg-slate-950/90 px-5 py-3 backdrop-blur md:px-8"><div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-sm"><span className="shrink-0 py-2 font-semibold text-cyan-200">On this page</span>{items.map((item) => <a key={item.id} href={`#${item.id}`} className="shrink-0 rounded-full px-3 py-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{item.label}</a>)}</div></nav>;
}

export function FigureBlock({ asset, eager = false }: { asset: WorkAsset; eager?: boolean }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) { triggerRef.current?.focus(); return; }
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
    <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className={`group relative block w-full overflow-hidden ${asset.aspect === "portrait" ? "aspect-[9/14]" : "aspect-[16/10]"} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300/80`} aria-label={`Enlarge figure: ${asset.alt}`}>
      <Image src={asset.src} alt={asset.alt} fill priority={eager} sizes="(max-width: 1024px) 100vw, 900px" className="object-contain transition duration-300 group-hover:scale-[1.01]" />
      <span className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white">Enlarge</span>
    </button>
    <figcaption className="space-y-2 px-5 py-4 text-sm leading-7 text-slate-300"><p>{asset.caption}</p><p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Provenance: {asset.provenance}</p></figcaption>
    {open ? <div role="dialog" aria-modal="true" aria-label={asset.alt} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 md:p-10" onClick={() => setOpen(false)}><div className="relative h-full w-full max-w-7xl" onClick={(event) => event.stopPropagation()}><Image src={asset.src} alt={asset.alt} fill sizes="100vw" className="object-contain" /><button type="button" onClick={() => setOpen(false)} className="absolute right-0 top-0 rounded-full border border-white/20 bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70">Close</button></div></div> : null}
  </figure>;
}

export function ProcessFlow({ steps }: { steps: string[] }) { return <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{steps.map((step, index) => <li key={step} className="relative rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4"><span className="font-mono text-xs text-cyan-300">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-semibold leading-6 text-slate-100">{step}</p></li>)}</ol>; }

export function MetricGrid({ metrics }: { metrics: WorkMetric[] }) { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => <div key={metric.label} className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5"><p className="text-3xl font-semibold text-emerald-200">{metric.value}</p><p className="mt-3 text-sm font-semibold text-white">{metric.label}</p><p className="mt-2 text-sm leading-6 text-slate-400">{metric.note}</p></div>)}</div>; }

export function EvidenceChain({ steps }: { steps: string[] }) { return <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{steps.map((step, index) => <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><p className="font-mono text-xs text-cyan-300">Evidence {String(index + 1).padStart(2, "0")}</p><p className="mt-2 text-sm leading-7 text-slate-200">{step}</p></div>)}</div>; }

export function SkillCluster({ groups }: { groups: WorkSkillGroup[] }) { return <div className="grid gap-4 md:grid-cols-2">{groups.map((group) => <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"><h3 className="text-lg font-semibold text-white">{group.title}</h3><ul className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <li key={item}><Badge variant="soft">{item}</Badge></li>)}</ul></div>)}</div>; }

export function PortfolioMatrix({ matrix }: { matrix: WorkMatrix }) { return <div className="space-y-3">{matrix.rows.map((row) => <div key={row.join("|")} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 md:grid md:grid-cols-4 md:gap-4">{row.map((value, index) => <div key={`${value}-${index}`} className="border-b border-white/10 py-2 last:border-0 md:border-0 md:py-1"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:hidden">{matrix.columns[index]}</p><p className="text-sm leading-6 text-slate-200">{value}</p></div>)}</div>)}</div>; }

export function PublicationTimeline({ publications }: { publications: WorkPublication[] }) { return <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">{publications.map((publication) => <div key={publication.doi} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4"><p className="font-mono text-sm text-cyan-300">{publication.year}</p><p className="mt-2 text-sm font-semibold leading-6 text-white">{publication.title}</p><p className="mt-2 text-xs leading-5 text-slate-400">{publication.journal}</p></div>)}</div>; }

export function PublicationGrid({ publications }: { publications: WorkPublication[] }) { return <div className="grid gap-4">{publications.map((publication) => <article key={publication.doi} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-start"><div><div className="mb-3 flex flex-wrap gap-2"><Badge>{publication.year}</Badge><Badge variant="soft">{publication.journal}</Badge></div><h3 className="text-lg font-semibold leading-7 text-white">{publication.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{publication.description}</p><p className="mt-2 font-mono text-xs text-slate-500">DOI: {publication.doi}</p></div><a href={publication.url} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">Open DOI</a></div></article>)}</div>; }

export function ScreenshotGallery({ assets }: { assets: WorkAsset[] }) { return <div className="grid snap-x gap-4 overflow-x-auto sm:grid-cols-2 lg:grid-cols-4">{assets.map((asset) => <div key={asset.src} className="min-w-[78vw] snap-start sm:min-w-0"><FigureBlock asset={asset} /></div>)}</div>; }

export function DisclosureNote({ children }: { children: string }) { return <aside className="rounded-3xl border border-amber-200/20 bg-amber-200/[0.05] p-6 text-sm leading-7 text-amber-50"><p className="font-semibold text-amber-200">Research status and public note</p><p className="mt-2">{children}</p></aside>; }

export function ExternalLinkGroup({ links }: { links?: WorkLink[] }) { if (!links?.length) return null; return <div className="flex flex-wrap gap-3">{links.map((link) => link.external ? <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{link.label}</a> : <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{link.label}</Link>)}</div>; }
