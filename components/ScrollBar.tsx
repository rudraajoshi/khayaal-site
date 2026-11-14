"use client";
import { useEffect, useRef } from "react";
export default function ScrollBar() {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = () => { const h = document.documentElement.scrollHeight - innerHeight; if (r.current) r.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; };
    f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f);
    return () => { removeEventListener("scroll", f); removeEventListener("resize", f); };
  }, []);
  return <div className="prog" ref={r} />;
}
