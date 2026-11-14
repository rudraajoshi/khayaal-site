export default function Marquee() {
  const w = ["Hand-painted", "Handmade", "Crocheted with care", "Little thoughts", "Colour & pattern", "Every creation holds a khayaal"];
  const row = w.map((t) => <span key={t}>{t}</span>);
  return <div className="mq" aria-hidden><div>{row}{row}{row}{row}</div></div>;
}
