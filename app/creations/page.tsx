import Gallery from "@/components/Gallery";
import CategoryTiles from "@/components/CategoryTiles";
import Reveal from "@/components/Reveal";
import { Cta } from "@/components/Sections";
export const metadata = { title: "Creations — Khayaal" };
export default function Creations() {
  return (
    <main>
      <section className="wrap ch">
        <div className="l"><p className="eyebrow">The collection · 2026</p><p>A visual diary of Komal&apos;s creative practice — painted, stitched, shaped and imagined into being.</p></div>
        <h1><span className="ln"><span>Made by Hand.</span></span><span className="ln"><em>Inspired by Heart.</em></span></h1>
      </section>
      <section className="wrap"><Reveal><p className="eyebrow">Browse by category</p></Reveal><CategoryTiles /></section>
      <Gallery /><Cta />
    </main>
  );
}
