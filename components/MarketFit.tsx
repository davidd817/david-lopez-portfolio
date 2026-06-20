import { marketPositioning, targetRoles } from "@/data/site";
import { Badge } from "./Badge";
import { SectionHeader } from "./SectionHeader";

export function MarketFit() {
  return (
    <section className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Professional focus"
          title="Focused on R&D roles where measurement, instrumentation and data create technical value."
          description="My strongest contribution is in environments where advanced characterization, scientific metrology and experimental data analysis support technology development, validation and reliable decision-making."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {marketPositioning.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900 p-7 md:p-9">
          <h3 className="text-2xl font-semibold text-white">
            Roles and areas of interest
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}