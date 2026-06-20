import { profile } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Profile() {
  return (
    <section id="profile" className="bg-slate-950 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={profile.eyebrow} title={profile.title} />
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-10">
            {profile.body.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-pretty text-lg leading-9 text-slate-300 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <aside className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Positioning</p>
            <h3 className="mt-5 text-2xl font-semibold text-white">{profile.bridge.title}</h3>
            <p className="mt-5 text-base leading-8 text-slate-300">{profile.bridge.text}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
