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
export function Customise() {
  const steps = [
    { n: "01", t: "Share your idea", d: "A colour, a memory, a name, a motif, anything that feels like you." },
    { n: "02", t: "Komal curates it", d: "She talks it through with you and shapes it into a design." },
    { n: "03", t: "Made by hand, for you", d: "Painted or crocheted slowly, then sent to your door." },
  ];
  return (
    <section className="wrap cust">
      <Reveal><p className="eyebrow">Made just for you</p></Reveal>
      <h2 className="sec-h"><Lines lines={[{ t: "Have an idea?" }, { t: "Customise yours.", e: true }]} /></h2>
      <Reveal><p className="cust-lead">Every Khayaal begins as a thought. Tell us yours, and we&apos;ll turn it into a one-of-a-kind painting, bag, pouch or crochet piece.</p></Reveal>
      <div className="cust-steps">
        {steps.map((s) => (
          <Reveal key={s.n}><div className="cust-step"><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></div></Reveal>
        ))}
      </div>
      <Reveal><Link href="/contact" className="btn">Share your idea <Arrow /></Link></Reveal>
    </section>
  );
}
