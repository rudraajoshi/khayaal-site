"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
type W = Window & { __lenis?: Lenis | null };
export default function SmoothScroll() {
  const p = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    (window as W).__lenis = l;
    let raf = 0;
    const f = (t: number) => { l.raf(t); raf = requestAnimationFrame(f); };
    raf = requestAnimationFrame(f);
    return () => { cancelAnimationFrame(raf); l.destroy(); (window as W).__lenis = null; };
  }, []);
  useEffect(() => { (window as W).__lenis?.scrollTo(0, { immediate: true }); }, [p]);
  return null;
}
