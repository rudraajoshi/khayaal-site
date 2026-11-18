"use client";
import { useRef, useState } from "react";
import { Product, src } from "@/lib/products";
import Lightbox from "./Lightbox";
export default function Exhibit({ items, rev }: { items: Product[]; rev?: boolean }) {
  const n = items.length, [i, setI] = useState(0), [lb, setLb] = useState(false), sx = useRef<number | null>(null);
  const go = (d: number) => setI((i + d + n) % n), p = items[i], pad = (v: number) => String(v).padStart(2, "0");
  return (
    <div className={`ex${rev ? " rev" : ""}`}>
      <div className="exi" onPointerDown={(e) => { sx.current = e.clientX; }} onPointerLeave={() => { sx.current = null; }}
        onPointerUp={(e) => { if (sx.current === null) return; const dx = e.clientX - sx.current; sx.current = null; Math.abs(dx) > 45 ? go(dx < 0 ? 1 : -1) : setLb(true); }}>
        <div className="im"><img key={p.id} src={src(p.id)} alt={p.name} /></div>
      </div>
      <div className="ext">
        <div className="num">{pad(i + 1)} / {pad(n)}</div><div className="lab">{p.cat}</div><h3>{p.name}</h3><p>{p.desc}</p>
        <div className="exc"><button className="lk" onClick={() => go(-1)}>← Previous</button><button className="lk" onClick={() => go(1)}>Next →</button><button className="lk" onClick={() => setLb(true)}>View larger</button></div>
        <p className="hint hint-l">Tap or click the image to view it in full</p>
      </div>
      {lb && <Lightbox items={items} index={i} onClose={() => setLb(false)} onChange={setI} />}
    </div>
  );
}
