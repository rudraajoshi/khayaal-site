import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { EMAIL, INSTAGRAM, INSTA_HANDLE, PHONE, PHONE_HREF } from "@/lib/contact";
export const metadata = { title: "Contact — Khayaal" };
export default function Contact() {
  return (
    <main><section className="wrap ct">
      <Reveal>
        <p className="eyebrow">Come say hello</p>
        <h1>Let&apos;s make <em>something meaningful.</em></h1>
        <p className="lead">Whether a particular piece caught your eye, or you simply want to share a thought — Komal would love to hear from you.</p>
        <dl><dt>Call or message</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd><dt>Instagram</dt><dd><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">{INSTA_HANDLE}</a></dd></dl>
      </Reveal>
      <Reveal delay={0.15}><ContactForm /></Reveal>
    </section></main>
  );
}
