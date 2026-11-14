"use client";
import { useEffect, useRef } from "react";
export default function Lines({ lines }: { lines: { t: string; e?: boolean }[] }) {
  const r = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = r.current!;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <span ref={r} className="lns">{lines.map((l, i) => <span key={i} className="ln"><span className={l.e ? "e" : ""} style={{ ["--i" as string]: i }}>{l.t}</span></span>)}</span>;
}
