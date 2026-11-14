"use client";
import { useEffect, useRef, type ReactNode } from "react";
export default function Parallax({ children, speed = 0.08, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const f = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const el = r.current; if (!el) return; const b = el.getBoundingClientRect(); el.style.transform = `translateY(${(b.top + b.height / 2 - innerHeight / 2) * -speed}px)`; }); };
    f(); addEventListener("scroll", f, { passive: true });
    return () => { removeEventListener("scroll", f); cancelAnimationFrame(raf); };
  }, [speed]);
  return <div ref={r} className={className} style={{ willChange: "transform" }}>{children}</div>;
}
