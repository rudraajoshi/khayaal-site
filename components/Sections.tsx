import Link from "next/link";
import Reveal from "./Reveal";
import Lines from "./Lines";
import { Arrow, Starburst } from "./Icons";
export function Inspiration() {
  return (
    <section className="insp"><div className="wrap ig">
      <Reveal><p className="eyebrow">The inspiration</p><h2><Lines lines={[{ t: "A Thought. An Idea." }, { t: "A Khayaal.", e: true }]} /></h2>
        <p>Khayaal was born from a love for turning simple ideas into meaningful handmade creations. Every piece carries Komal&apos;s patience, dedication and the joy she finds in creating.</p></Reveal>
      <Reveal className="wipe"><div className="im"><img src="/products/8.jpg" alt="The Radiant Sun" /></div></Reveal>
    </div></section>
  );
}
export function Quote() {
  return (
    <section className="quote"><Starburst /><Reveal><blockquote>“There should always be room for the things that make our hearts happy.”</blockquote><cite>— Komal Joshi</cite></Reveal></section>
  );
}
export function Cta() {
  return (
    <section className="wrap" style={{ textAlign: "center", padding: "90px 0 10px" }}>
      <h2 className="sec-h" style={{ marginBottom: 28 }}><Lines lines={[{ t: "Loved something?" }, { t: "Let’s make it yours.", e: true }]} /></h2>
      <Reveal><Link href="/contact" className="btn">Begin an enquiry <Arrow /></Link></Reveal></section>
  );
}
