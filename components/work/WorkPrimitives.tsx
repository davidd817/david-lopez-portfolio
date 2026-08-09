"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { WorkAsset, WorkLink, WorkMatrix, WorkMetric, WorkProcessStep, WorkPublication, WorkSkillGroup } from "@/types/work";
import { Badge } from "@/components/Badge";

export function CaseStudyHero({
  category,
  tier,
  title,
  subheadline,
  opening,
  hero,
  actions
}: {
  category: string;
  tier: string;
  title: string;
  subheadline: string;
  opening: string[];
  hero?: WorkAsset;
  actions?: WorkLink[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Link href="/#selected-work" className="mb-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">← Back to selected work</Link>
          <div className="mb-5 flex flex-wrap gap-3"><Badge>{category}</Badge><Badge variant="soft">{tier} work</Badge></div>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-9 text-cyan-100">{subheadline}</p>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-9 text-slate-300">{opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          {actions?.length ? <div className="mt-8"><ExternalLinkGroup links={actions} /></div> : null}
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMobileOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); };
  }, [mobileOpen]);

  return <>
    <nav aria-label="On this page" className="sticky top-20 z-20 hidden border-y border-white/10 bg-slate-950/95 px-5 py-3 backdrop-blur lg:block lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center gap-5">
        <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">On this page</span>
        <div className="flex min-w-0 flex-wrap gap-x-5 gap-y-1 text-sm">{items.map((item) => <a key={item.id} href={`#${item.id}`} className="py-1 text-slate-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{item.label}</a>)}</div>
      </div>
    </nav>
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-project-sections" onClick={() => setMobileOpen(true)} className="flex w-full items-center justify-between rounded-full border border-cyan-300/40 bg-slate-900 px-5 py-3 text-sm font-bold text-cyan-100 shadow-2xl shadow-slate-950/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/80"><span>Sections</span><span aria-hidden="true" className="text-cyan-300">↑</span></button>
    </div>
    {mobileOpen ? <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <button type="button" aria-label="Close sections" onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-slate-950/80" />
      <section id="mobile-project-sections" role="dialog" aria-modal="true" aria-labelledby="mobile-project-sections-title" className="absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto rounded-t-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">On this project</p><h2 id="mobile-project-sections-title" className="mt-2 text-2xl font-semibold text-white">Sections</h2></div><button type="button" onClick={() => setMobileOpen(false)} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">Close</button></div>
        <div className="mt-5 grid gap-2">{items.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{item.label}</a>)}</div>
      </section>
    </div> : null}
  </>;
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

const workflowDescriptions: Record<string, string> = {
  "Research question": "Define the scientific question and the evidence required to answer it.",
  "Bacterial culture": "Prepare the biological material while preserving the relevant physiological state.",
  "Direct deposition on SiO₂": "Place the sample on a stable substrate for controlled measurements.",
  "Cantilever and piezo calibration": "Verify the instrument response before collecting quantitative data.",
  "Controlled-humidity AFM": "Measure the system under defined environmental conditions.",
  "Topography and force spectroscopy": "Collect complementary morphology and mechanical evidence.",
  "Python processing": "Apply reproducible processing and flag uncertain measurements for review.",
  "Statistical analysis": "Separate biological variability from technical replication and measurement noise.",
  "Physical interpretation": "Connect the measured response with structure and environmental context.",
  "Manuscript preparation": "Translate the evidence, limitations and conclusions into scientific reporting.",
  "Material fabrication": "Produce the material system whose structure and performance will be evaluated.",
  "Structure and composition": "Check morphology and composition before interpreting functional behaviour.",
  "Sample and contact preparation": "Adapt geometry, contacts and mounting to the real sample.",
  "Electrical transport": "Measure charge transport and verify consistency across configurations.",
  "Thermoelectric response": "Quantify voltage generated by a controlled temperature difference.",
  "Thermal transport": "Evaluate heat propagation with attention to layers, interfaces and models.",
  "Mechanical or device integration": "Test whether the material remains measurable after integration.",
  "Data validation": "Check physical consistency, reproducibility and fabrication-related differences.",
  "Feedback to material development": "Return interpretable evidence to guide processing or device decisions.",
  "Biosensor concept": "Define the target, recognition strategy, interface and measurable signal.",
  "Material selection": "Choose a nanomaterial whose properties support the sensing question.",
  "Dispersion and deposition": "Create a controlled material interface on the transducer.",
  "Surface characterisation": "Verify interface construction with complementary evidence.",
  "Protocol optimisation": "Tune the analytical procedure for stable and selective response.",
  "Biorecognition-layer integration": "Add the DNA or aptamer element that supplies molecular specificity.",
  "Analytical testing": "Measure performance under controlled target and interference conditions.",
  "Real-sample evaluation": "Assess the platform in complex samples and relevant matrices.",
  "Publication": "Document the platform, evidence and limitations for peer-reviewed communication.",
  "Material identity and morphology": "Confirm the material composition and morphology before attributing a signal to the sensing interface.",
  "Interface construction": "Verify that the active material forms a reproducible interface with the transducer.",
  "DNA or aptamer recognition": "Confirm that the recognition element provides the intended molecular specificity.",
  "Signal generation": "Relate target binding or reaction conditions to the measured analytical signal.",
  "Selectivity and sensitivity": "Quantify response, selectivity and detection behaviour against defined comparators.",
  "Stability and reproducibility": "Test whether the response remains consistent across time, replicates and preparation batches.",
  "Scientific question": "Translate the scientific objective into measurable observables, controls and decision criteria.",
  "Sample and geometry assessment": "Match sample geometry and constraints to a method that can produce interpretable evidence.",
  "Method selection": "Choose complementary techniques that address the question and expose relevant limitations.",
  "Calibration and reference controls": "Establish instrument response and reference measurements before interpreting unknown samples.",
  "Acquisition": "Collect measurements with documented settings, replicates and quality checks.",
  "Data processing": "Convert raw measurements into traceable parameters while retaining quality-control information.",
  "Cross-technique interpretation": "Compare independent measurements to distinguish consistent structure-property relationships from artefacts.",
  "Technical decision or report": "Summarise the evidence, limitations and recommended next action in a usable technical output.",
  "PPN porosity": "Establish the porous filler structure that may affect gas transport.",
  "Particle dispersion": "Control filler distribution before the membrane is formed.",
  "Polymer–filler interface": "Evaluate compatibility, adhesion and possible interfacial voids.",
  "Membrane structure": "Connect formulation and processing with the final film morphology.",
  "Thermal and mechanical stability": "Check whether the membrane remains intact for operation.",
  "Gas permeability and selectivity": "Measure transport rate and discrimination across gas pairs.",
  "Flexible-sample preparation": "Adapt a functional film and its contacts for repeatable testing.",
  "Custom fixtures": "Provide a defined physical reference for bending geometry.",
  "Robotic bending": "Apply repeatable movement, curvature and cycle conditions.",
  "Electrical response during load": "Measure transport while the sample is mechanically deformed.",
  "Post-unloading monitoring": "Track time-dependent recovery after the load is removed.",
  "Multimodal validation": "Compare electrical, structural, thermal and morphological evidence.",
  "Exploratory notebooks": "Use small analyses to test questions and learn the data domain.",
  "Structured analytical workflows": "Organise data preparation, analysis and reporting into repeatable steps.",
  "Reproducible scientific pipelines": "Automate repetitive processing while preserving traceability.",
  "Interactive software prototypes": "Connect data entry, calculations, visualisation and user-facing output."
};

function normaliseProcessStep(step: string | WorkProcessStep): WorkProcessStep {
  if (typeof step !== "string") return step;
  return { title: step, description: workflowDescriptions[step] ?? "Record the completed evidence and use it to guide the next interpretation or validation step." };
}

export function ProcessFlow({ steps }: { steps: (string | WorkProcessStep)[] }) {
  return <ol className="space-y-3 border-l border-cyan-300/30 pl-5 md:grid md:space-y-0 md:border-l-0 md:pl-0 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
    {steps.map((rawStep, index) => { const step = normaliseProcessStep(rawStep); return <li key={step.title} className="relative rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4 md:min-h-[150px]">
      <span className="absolute -left-[2.05rem] top-4 grid h-6 w-6 place-items-center rounded-full border border-cyan-300/40 bg-slate-950 font-mono text-[10px] text-cyan-300 md:static md:mb-3">{String(index + 1).padStart(2, "0")}</span>
      <p className="text-sm font-semibold leading-6 text-slate-100">{step.title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
      {step.evidence ? <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-300">{step.evidence}</p> : null}
    </li>; })}
  </ol>;
}

export function MetricGrid({ metrics }: { metrics: WorkMetric[] }) { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map((metric) => <div key={metric.label} className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5"><p className="text-3xl font-semibold text-emerald-200">{metric.value}</p><p className="mt-3 text-sm font-semibold text-white">{metric.label}</p><p className="mt-2 text-sm leading-6 text-slate-400">{metric.note}</p></div>)}</div>; }

export function EvidenceChain({ steps }: { steps: string[] }) { return <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{steps.map((step, index) => <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><p className="font-mono text-xs text-cyan-300">Evidence {String(index + 1).padStart(2, "0")}</p><p className="mt-2 text-sm leading-7 text-slate-200">{step}</p></div>)}</div>; }

export function SkillCluster({ groups }: { groups: WorkSkillGroup[] }) { return <div className="grid gap-4 md:grid-cols-2">{groups.map((group) => <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"><h3 className="text-lg font-semibold text-white">{group.title}</h3><ul className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <li key={item}><Badge variant="soft">{item}</Badge></li>)}</ul></div>)}</div>; }

export function PortfolioMatrix({ matrix }: { matrix: WorkMatrix }) {
  return <div className="space-y-3">
    <div className="hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 md:grid md:grid-cols-4 md:gap-4">{matrix.columns.map((column) => <p key={column} className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{column}</p>)}</div>
    {matrix.rows.map((row) => <div key={row.join("|")} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 md:grid md:grid-cols-4 md:gap-4">{row.map((value, index) => <div key={`${value}-${index}`} className="border-b border-white/10 py-2 last:border-0 md:border-0 md:py-1"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 md:hidden">{matrix.columns[index]}</p><p className="text-sm leading-6 text-slate-200">{value}</p></div>)}</div>)}
  </div>;
}

export function PublicationTimeline({ publications }: { publications: WorkPublication[] }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{publications.map((publication) => <article key={publication.doi} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/30">
    <div className="flex items-center justify-between gap-3"><Badge>{publication.year}</Badge><span className="text-xs text-slate-500">{publication.journal}</span></div>
    <h3 className="mt-4 text-base font-semibold leading-7 text-white">{publication.title}</h3>
    <div className="mt-auto pt-5"><a href={publication.url} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">Open DOI</a></div>
  </article>)}</div>;
}

export function ScreenshotGallery({ assets }: { assets: WorkAsset[] }) { return <div className="grid snap-x gap-4 overflow-x-auto sm:grid-cols-2 lg:grid-cols-4">{assets.map((asset) => <div key={asset.src} className="min-w-[78vw] snap-start sm:min-w-0"><FigureBlock asset={asset} /></div>)}</div>; }

export function DisclosureNote({ children }: { children: string }) { return <aside className="rounded-3xl border border-amber-200/20 bg-amber-200/[0.05] p-6 text-sm leading-7 text-amber-50"><p className="font-semibold text-amber-200">Research status and public note</p><p className="mt-2">{children}</p></aside>; }

export function ExternalLinkGroup({ links }: { links?: WorkLink[] }) { if (!links?.length) return null; return <div className="flex flex-wrap gap-3">{links.map((link) => link.external ? <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{link.label}</a> : <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/70">{link.label}</Link>)}</div>; }
