export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
