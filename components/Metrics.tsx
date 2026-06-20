import { metrics } from "@/data/site";

export function Metrics() {
  return (
    <section className="border-b border-white/10 bg-slate-950 px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-4xl font-semibold text-cyan-200">{metric.value}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">{metric.label}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
