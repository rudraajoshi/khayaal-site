import Link from "next/link";
import { categoryList } from "@/lib/products";
import { EMAIL, INSTAGRAM, INSTA_HANDLE, PHONE, PHONE_HREF } from "@/lib/contact";
import { InstaIcon, MailIcon, PhoneIcon } from "./Icons";
export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-top">
        <div className="ft-brand">
          <div className="badge"><img src="/logo.png" alt="Khayaal" /></div>
          <p className="ft-tag">Handmade thoughts, made visible.</p>
          <p className="ft-sm">Hand-painted art, painted pieces and crochet treasures by Komal Joshi.</p>
        </div>
        <div className="ft-col"><h4>Explore</h4><Link href="/">Home</Link><Link href="/artist">The Artist</Link><Link href="/contact">Contact</Link></div>
        <div className="ft-col"><h4>Creations</h4>{categoryList.map((c) => <Link key={c.slug} href={`/creations/${c.slug}`}>{c.title}</Link>)}</div>
        <div className="ft-col"><h4>Get in touch</h4>
          <a href={PHONE_HREF}><PhoneIcon />{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="em"><MailIcon />{EMAIL}</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstaIcon />{INSTA_HANDLE}</a>
        </div>
      </div>
      <div className="wrap ft-bar"><span>© 2026 Khayaal. All rights reserved.</span><em>Every creation holds a khayaal.</em></div>
    </footer>
  );
}
