"use client";
import { useState } from "react";
import { ArrowUR } from "./Icons";
import { EMAIL, WEB3FORMS_KEY } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form), g = (k: string) => String(f.get(k) || "");
    if (g("botcheck")) return; // spam trap

    // Fallback: if no key is set yet, open the visitor's mail app like before
    if (!WEB3FORMS_KEY) {
      const body = `Hello Komal,\n\n${g("message")}\n\nArtwork reference: ${g("art") || "-"}\n\n${g("name")}\n${g("email")}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("A note for Khayaal from " + g("name"))}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `A note for Khayaal from ${g("name")}`,
          from_name: "Khayaal Website",
          name: g("name"),
          email: g("email"),
          replyto: g("email"),
          "Artwork reference": g("art") || "-",
          message: g("message"),
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="card" onSubmit={submit}>
      <p className="eyebrow">An open invitation</p><h2>Start a conversation</h2>
      <label>Your name<input name="name" required placeholder="How should Komal address you?" /></label>
      <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
      <label>Artwork reference <small>(optional)</small><input name="art" placeholder="A quiet bloom, perhaps?" /></label>
      <label>Your message<textarea name="message" required placeholder="Tell us a little about your Khayaal..." /></label>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send your note"} <ArrowUR />
      </button>
      {status === "sent" && <p className="thanks">Thank you — your note has reached Komal. She will reply to you soon.</p>}
      {status === "error" && <p className="thanks err">Sorry, something went wrong. Please try again, or write to {EMAIL}.</p>}
    </form>
  );
}
