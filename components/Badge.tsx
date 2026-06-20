import type { ReactNode } from "react";

export function Badge({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "soft" | "dark" }) {
  const styles = {
    default: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    soft: "border-slate-300/20 bg-white/5 text-slate-200",
    dark: "border-slate-800 bg-slate-100 text-slate-800"
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${styles[variant]}`}>
      {children}
    </span>
  );
}
