import Link from "next/link";
import Reveal from "@/components/Reveal";
import Lines from "@/components/Lines";
import Parallax from "@/components/Parallax";
import Marquee from "@/components/Marquee";
import Coverflow from "@/components/Coverflow";
import CategoryTiles from "@/components/CategoryTiles";
import { Inspiration, Quote, Customise } from "@/components/Sections";
import { Arrow, Starburst } from "@/components/Icons";
import { featured } from "@/lib/products";
export default function Home() {
  return (
    <main>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">A handmade art studio · Mumbai, India</p>
          <h1><span className="ln"><span>Little thoughts,</span></span><span className="ln"><em>beautifully made.</em></span></h1>
          <p className="lead">Khayaal is a growing collection of handmade creations by Komal Joshi — made slowly, with curiosity, colour and heart.</p>
          <Link href="/creations" className="btn">Explore the creations <Arrow /></Link>
        </div>
        <Parallax speed={0.06} className="hi"><div className="circ" /><div className="frm" /><svg className="hs" viewBox="-50 -50 100 100" fill="none" stroke="#B05A3A" strokeWidth="1.2" strokeLinecap="round">{Array.from({ length: 24 }, (_, k) => <line key={k} y1="-14" y2={k % 2 ? -34 : -46} transform={`rotate(${k * 15})`} />)}</svg><div className="flt"><img src="/products/3.jpg" alt="The Royal Elephant" /></div><p className="scr">one little idea at a time</p></Parallax>
      </section>
      <Marquee />
      <section className="wrap" style={{ paddingBlock: "70px 20px" }}>
        <Reveal><p className="eyebrow">Featured creations</p></Reveal>
        <h2 className="sec-h"><Lines lines={[{ t: "A Gallery of" }, { t: "Little Khayaals", e: true }]} /></h2>
        <Reveal><p style={{ font: "italic 400 clamp(18px,1.8vw,23px)/1.4 var(--serif)", color: "var(--muted)", margin: "16px 0 10px", maxWidth: "36ch" }}>Every piece has its own story, every detail carries a little imagination.</p></Reveal>
        <Reveal><Coverflow items={featured} /></Reveal>
      </section>
      <section className="wrap" style={{ paddingBlock: "70px 30px" }}>
        <Reveal><p className="eyebrow">Explore by category</p></Reveal>
        <h2 className="sec-h" style={{ marginBottom: 34 }}><Lines lines={[{ t: "Find your" }, { t: "little Khayaal.", e: true }]} /></h2>
        <CategoryTiles />
      </section>
      <Customise />
      <section className="artist" style={{ marginTop: 60 }}><Starburst /><div className="wrap ag">
        <Reveal className="rl"><p className="eyebrow">The artist behind Khayaal</p><h2><Lines lines={[{ t: "Behind every Khayaal," }, { t: "there’s a story.", e: true }]} /></h2>
          <p className="lead">Meet Komal — the heart and creative soul behind this little world of handmade art. A space where ideas become colour, texture and something you can hold.</p>
          <Link href="/artist" className="tl">Meet Komal <Arrow /></Link></Reveal>
        <Reveal className="wipe pt"><img src="/komal.jpg" alt="Komal Joshi" /></Reveal>
      </div></section>
      <Inspiration /><Quote />
    </main>
  );
}
