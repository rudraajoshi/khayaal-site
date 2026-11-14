"use client";
import { useRef, useState } from "react";
import { products, src } from "@/lib/products";
import Lightbox from "./Lightbox";
export default function MiniStrip() {
  const r = useRef<HTMLDivElement>(null), [lb, setLb] = useState<number | null>(null);
  return (
    <div>
      <div className="nv" style={{ justifyContent: "flex-end", margin: "0 0 10px" }}>
        <button className="lk" onClick={() => r.current?.scrollBy({ left: -420, behavior: "smooth" })}>← Prev</button>
        <button className="lk" onClick={() => r.current?.scrollBy({ left: 420, behavior: "smooth" })}>Next →</button>
      </div>
      <div className="mini" ref={r}>{products.map((p, k) => <figure key={p.id} onClick={() => setLb(k)}><div className="im"><img src={src(p.id)} alt={p.name} loading="lazy" /></div><figcaption>{p.name}</figcaption></figure>)}</div>
      {lb !== null && <Lightbox items={products} index={lb} onClose={() => setLb(null)} onChange={setLb} />}
    </div>
  );
}
