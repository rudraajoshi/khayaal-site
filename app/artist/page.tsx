import Reveal from "@/components/Reveal";
import MiniStrip from "@/components/MiniStrip";
import { Inspiration, Quote, Cta } from "@/components/Sections";
export const metadata = { title: "The Artist — Khayaal" };
export default function Artist() {
  return (
    <main>
      <section className="wrap ap">
        <Reveal><div className="fr"><div className="b"><img src="/komal.jpg" alt="Komal Joshi" /></div></div></Reveal>
        <Reveal delay={0.15}>
          <p className="eyebrow">The artist behind Khayaal</p>
          <h1>Behind every Khayaal, <em>there&apos;s a story.</em></h1>
          <p className="it">Meet Komal Joshi — the heart and creative soul behind Khayaal.</p>
          <p className="b2">Behind this little world of handmade creations is a woman who finds beauty in the smallest details and believes that creativity deserves a place in every stage of life.</p>
          <p className="b2">As a single mother, Komal gracefully balances her professional responsibilities and the demands of everyday life while continuing to nurture her love for art. Amidst her many commitments, she makes time for the one thing that brings her a different kind of happiness — creating something with her own hands.</p>
          <p className="b2">For Komal, art is much more than a pastime. It is a form of self-expression, a space to unwind, experiment and turn little ideas into something beautiful. Every creation gives her the opportunity to explore her imagination and share a part of herself with the world.</p>
        </Reveal>
      </section>
      <Inspiration />
      <section className="wrap" style={{ padding: "90px 0 10px" }}>
        <Reveal><p className="eyebrow">From Komal&apos;s hands</p><h2 className="sec-h" style={{ fontSize: "clamp(29px,3.6vw,52px)", marginBottom: 30 }}>A few little <em>creations</em></h2><MiniStrip /></Reveal>
      </section>
      <Quote /><Cta />
    </main>
  );
}
