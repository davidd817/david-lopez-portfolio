import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-sm text-slate-500 md:px-8">
      <p>© {new Date().getFullYear()} {site.name}. Materials characterisation, nanoscale metrology and scientific data analysis.</p>
      <p className="mt-2">Built with Next.js, TypeScript and Tailwind CSS.</p>
    </footer>
  );
}
