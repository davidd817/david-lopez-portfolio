import Link from "next/link";
import { navigation, site } from "@/data/site";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="David López Diego home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-glow">
            DL
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-white">{site.name}</span>
            <span className="block text-xs text-slate-400">Materials · Metrology · Data</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={site.cv}
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
