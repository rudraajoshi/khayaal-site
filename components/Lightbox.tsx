"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Product, src } from "@/lib/products";
export default function Lightbox({ items, index, onClose, onChange }: { items: Product[]; index: number; onClose: () => void; onChange: (i: number) => void }) {
  const n = items.length, x = items[index];
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") onChange((index - 1 + n) % n); if (e.key === "ArrowRight") onChange((index + 1) % n); };
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, [index, n, onClose, onChange]);
  useEffect(() => { document.documentElement.classList.add("lb-open"); return () => document.documentElement.classList.remove("lb-open"); }, []);
  return createPortal(
    <div data-lenis-prevent className="lb" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button className="x" aria-label="Close" onClick={onClose}>✕</button>
      <button className="p" aria-label="Previous" onClick={() => onChange((index - 1 + n) % n)}>←</button>
      <img src={src(x.id)} alt={x.name} /><h4>{x.name}</h4><p>{x.desc}</p>
      <button className="n" aria-label="Next" onClick={() => onChange((index + 1) % n)}>→</button>
    </div>,
    document.body
  );
}
