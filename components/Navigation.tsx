import Link from "next/link";
import { navigation, site } from "@/data/site";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
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
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={site.cv}
          className="hidden whitespace-nowrap rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 sm:inline-flex"
        >
          Download CV
        </a>
      </nav>

      <nav className="border-t border-white/10 lg:hidden" aria-label="Mobile navigation">
        <div
          className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-3 md:px-8"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
