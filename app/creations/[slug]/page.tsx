import { notFound } from "next/navigation";
import Link from "next/link";
import Coverflow from "@/components/Coverflow";
import Exhibit from "@/components/Exhibit";
import Reveal from "@/components/Reveal";
import Lines from "@/components/Lines";
import CategoryTiles from "@/components/CategoryTiles";
import { Cta } from "@/components/Sections";
import { categoryList, getCategory } from "@/lib/products";
export function generateStaticParams() { return categoryList.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCategory((await params).slug); return { title: c ? `${c.title} — Khayaal` : "Khayaal" };
}
export default async function Category({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCategory((await params).slug);
  if (!c) notFound();
  return (
    <main>
      <section className="wrap cp">
        <Reveal><p className="eyebrow"><Link href="/creations">Creations</Link> · {c.items.length} {c.items.length === 1 ? "piece" : "pieces"}</p></Reveal>
        <h1><Lines lines={[{ t: c.title, e: true }]} /></h1>
        <Reveal><p className="s">{c.blurb}</p></Reveal>
      </section>
      <section className="wrap" style={{ paddingBottom: 20 }}>
        <Reveal>{c.items.length >= 4 ? <Coverflow items={c.items} /> : <Exhibit items={c.items} />}</Reveal>
      </section>
      <section className="wrap" style={{ paddingTop: 70 }}>
        <Reveal><p className="eyebrow">Explore more</p></Reveal><CategoryTiles exclude={c.slug} />
      </section>
      <Cta />
    </main>
  );
}
