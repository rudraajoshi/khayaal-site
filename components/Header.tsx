"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categoryList } from "@/lib/products";
export default function Header() {
  const p = usePathname();
  const [open, setOpen] = useState(false), [dd, setDd] = useState(false), [sm, setSm] = useState(false);
  useEffect(() => { setOpen(false); setDd(false); }, [p]);
  useEffect(() => { const f = () => setSm(scrollY > 20); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const on = (h: string) => (p === h ? "on" : "");
  return (
    <header className={`hd${sm ? " sm" : ""}`}><div className="wrap in">
      <Link href="/" className="logo"><img src="/logo.png" alt="Khayaal" /></Link>
      <button className={`bg${open ? " x" : ""}`} aria-label="Menu" onClick={() => setOpen(!open)}><i /><i /></button>
      <nav className={open ? "open" : ""}>
        <Link href="/" className={on("/")}>Home</Link>
        <div className={`has${dd ? " open" : ""}`}>
          <Link href="/creations" className={p.startsWith("/creations") ? "on" : ""}>Creations</Link>
          <button className="chev" aria-label="Show categories" onClick={() => setDd(!dd)}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l7 7 7-7" /></svg></button>
          <div className="dd">
            <Link href="/creations" className={`all ${on("/creations")}`}>All creations</Link>
            {categoryList.map((c) => <Link key={c.slug} href={`/creations/${c.slug}`} className={on(`/creations/${c.slug}`)}>{c.title}<span>{c.items.length}</span></Link>)}
          </div>
        </div>
        <Link href="/artist" className={on("/artist")}>The Artist</Link>
        <Link href="/contact" className={on("/contact")}>Contact</Link>
      </nav>
    </div></header>
  );
}
