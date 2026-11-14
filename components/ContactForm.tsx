"use client";
import { useState } from "react";
import { ArrowUR } from "./Icons";
import { EMAIL } from "@/lib/contact";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget), g = (k: string) => String(f.get(k) || "");
    const body = `Hello Komal,\n\n${g("message")}\n\nArtwork reference: ${g("art") || "-"}\n\n${g("name")}\n${g("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("A note for Khayaal from " + g("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form className="card" onSubmit={submit}>
      <p className="eyebrow">An open invitation</p><h2>Start a conversation</h2>
      <label>Your name<input name="name" required placeholder="How should Komal address you?" /></label>
      <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
      <label>Artwork reference <small>(optional)</small><input name="art" placeholder="A quiet bloom, perhaps?" /></label>
      <label>Your message<textarea name="message" required placeholder="Tell us a little about your Khayaal..." /></label>
      <button className="btn" type="submit">Send your note <ArrowUR /></button>
      {sent && <p className="thanks">Thank you — your note is ready in your mail app.</p>}
    </form>
  );
}
