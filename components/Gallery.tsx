import Link from "next/link";
import Coverflow from "./Coverflow";
import Exhibit from "./Exhibit";
import Reveal from "./Reveal";
import { categoryList, featured } from "@/lib/products";
const sets = [{ title: "Featured Creations", slug: "", items: featured }, ...categoryList];
const roman = ["i", "ii", "iii", "iv", "v"];
export default function Gallery() {
  return (
    <div className="wrap">
      {sets.map((c, k) => (
        <section key={c.title} className="cat" id={c.slug || "featured"}>
          <Reveal><div className="cth"><span>{roman[k]}.</span><h3>{c.title}</h3><i />{c.slug ? <Link href={`/creations/${c.slug}`}>View all →</Link> : <span>{c.items.length}</span>}</div></Reveal>
          <Reveal>{c.items.length >= 4 && k === 0 ? <Coverflow items={c.items} /> : <Exhibit items={c.items} rev={k % 2 === 0} />}</Reveal>
        </section>
      ))}
    </div>
  );
}
