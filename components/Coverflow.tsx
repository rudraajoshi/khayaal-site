"use client";
import { useEffect, useRef, useState } from "react";
import { Product, src } from "@/lib/products";
import Lightbox from "./Lightbox";
export default function Coverflow({ items }: { items: Product[] }) {
  const n = items.length, loop = n >= 4;
  const [i, setI] = useState(0), [W, setW] = useState(0), [lb, setLb] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null), sx = useRef<number | null>(null);
  useEffect(() => { const el = ref.current!; const ro = new ResizeObserver(() => setW(el.clientWidth)); ro.observe(el); setW(el.clientWidth); return () => ro.disconnect(); }, []);
  const go = (k: number) => setI(loop ? (k + n) % n : Math.max(0, Math.min(n - 1, k)));
  const m = W < 700, sw = m ? W * 0.66 : Math.min(W * 0.24, 340), st = m ? W * 0.66 : sw * 1.12;
  const off = (k: number) => { let o = k - i; if (loop) { if (o > n / 2) o -= n; if (o < -n / 2) o += n; } return o; };
  const up = (e: React.PointerEvent) => {
    if (sx.current === null) return; const dx = e.clientX - sx.current; sx.current = null;
    if (Math.abs(dx) > 45) return go(i + (dx < 0 ? 1 : -1));
    const s = (e.target as HTMLElement).closest("[data-k]") as HTMLElement | null; if (!s) return;
    const k = +s.dataset.k!; off(k) === 0 ? setLb(k) : go(k);
  };
  return (
    <div className="bleed">
      <div ref={ref} className="car" tabIndex={0} style={{ height: sw * 1.25 + 160 }}
        onPointerDown={(e) => { sx.current = e.clientX; }} onPointerUp={up} onPointerLeave={() => { sx.current = null; }}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") go(i - 1); if (e.key === "ArrowRight") go(i + 1); }}>
        {W > 0 && items.map((p, k) => {
          const o = off(k), a = Math.abs(o);
          return (
            <div key={p.id} data-k={k} className={`sl${o === 0 ? " c" : ""}`} style={{ width: sw, zIndex: 10 - a, pointerEvents: a > 3 ? "none" : "auto", opacity: a === 0 ? 1 : a === 1 ? 0.75 : a === 2 && !m ? 0.35 : a === 3 && !m ? 0.12 : 0, transform: `translateX(calc(-50% + ${o * st}px)) scale(${o === 0 ? 1 : 0.84})` }}>
              <div className="im"><img src={src(p.id)} alt={p.name} /></div>
              <div className="tx"><div className="lab">{p.cat}</div><h4>{p.name}</h4><p>{p.desc}</p></div>
            </div>
          );
        })}
      </div>
      <div className="nv">
        <button className="lk" onClick={() => go(i - 1)}>← Prev</button>
        <div className="dots">{items.map((p, k) => <b key={p.id} className={k === i ? "on" : ""} onClick={() => go(k)} />)}</div>
        <button className="lk" onClick={() => go(i + 1)}>Next →</button>
      </div>
      <p className="hint">Tap or click the centre image to view it in full</p>
      {lb !== null && <Lightbox items={items} index={lb} onClose={() => setLb(null)} onChange={setLb} />}
    </div>
  );
}
