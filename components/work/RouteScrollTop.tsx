"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 80);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return null;
}