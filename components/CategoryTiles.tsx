import Link from "next/link";
import Reveal from "./Reveal";
import { categoryList, src } from "@/lib/products";
export default function CategoryTiles({ exclude }: { exclude?: string }) {
  const list = categoryList.filter((c) => c.slug !== exclude);
  return (
    <div className="tiles">
      {list.map((c, k) => (
        <Reveal key={c.slug} delay={k * 0.12} className="rz">
          <Link href={`/creations/${c.slug}`} className="tile">
            <div className="im"><img src={src(c.cover)} alt={c.title} /></div>
            <div className="cap"><span className="n">{String(categoryList.indexOf(c) + 1).padStart(2, "0")}</span><h3>{c.title}</h3><span className="c">{c.items.length} {c.items.length === 1 ? "piece" : "pieces"} →</span></div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
