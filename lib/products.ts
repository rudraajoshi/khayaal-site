export type Product = { id: number; name: string; desc: string; cat: string };
export const products: Product[] = [
  { id: 3, name: "The Royal Elephant", desc: "A circular canvas where an ornately patterned elephant stands before a tree.", cat: "Paintings" },
  { id: 6, name: "Birds of the Blossom Vine", desc: "Two red birds among flowering branches, drawn in fine, patient detail.", cat: "Paintings" },
  { id: 7, name: "Tree of Life", desc: "A framed tree alive with birds, edged in a delicate blue border.", cat: "Paintings" },
  { id: 5, name: "Mother and Calf", desc: "A gentle study of an elephant and her young, in soft blue tones.", cat: "Paintings" },
  { id: 19, name: "The Peacock’s Fan", desc: "A framed peacock with a fan of finely dotted colour.", cat: "Paintings" },
  { id: 9, name: "The Turtle and the Fishes", desc: "A bold turtle circled by fish within a vivid patterned border.", cat: "Paintings" },
  { id: 0, name: "Golden Sails", desc: "Boats gathered on a sunset sea, painted in glowing amber.", cat: "Paintings" },
  { id: 1, name: "The Lady and the Deer", desc: "A graceful figure reaching toward a fawn, in earthy, muted tones.", cat: "Paintings" },
  { id: 2, name: "Harvest Bearers", desc: "Two women carrying baskets, in bold patterned colour.", cat: "Paintings" },
  { id: 4, name: "The Peacock Triptych", desc: "Three framed panels of a peacock and flowering trees.", cat: "Paintings" },
  { id: 8, name: "The Radiant Sun", desc: "A smiling sun at the centre of an intricate, colourful border.", cat: "Paintings" },
  { id: 17, name: "Elephants Beneath the Tree", desc: "Two striped elephants meeting under a leafy, golden tree.", cat: "Paintings" },
  { id: 18, name: "The Gathering of Deer", desc: "A herd of colourful deer beneath bright branches.", cat: "Paintings" },
  { id: 20, name: "The Bird Tree", desc: "A tree full of leaves, berries and birds, signed by the artist.", cat: "Paintings" },
  { id: 15, name: "Painted Wall Hanging: The Lady", desc: "A long, richly bordered hanging with a portrait at its heart.", cat: "Wall Hangings" },
  { id: 16, name: "Painted Wall Hanging: The Gentleman", desc: "A companion hanging with a portrait framed in a green circle.", cat: "Wall Hangings" },
  { id: 14, name: "The Sun Tote", desc: "A hand-painted sun face glowing on a natural cotton tote.", cat: "Bags" },
  { id: 10, name: "Four Painted Sling Bags", desc: "Four hand-painted cotton bags, each with its own motif.", cat: "Bags" },
  { id: 11, name: "The Lovebirds Tote", desc: "Two bright birds perched together on a cream cotton tote.", cat: "Bags" },
  { id: 12, name: "The Lotus Garden Tote", desc: "Rows of lotus blooms above pink flowers on tall stems.", cat: "Bags" },
  { id: 13, name: "The Diya and Mandala Tote", desc: "Little painted diyas scattered between two vivid mandala corners.", cat: "Bags" },
  { id: 22, name: "Little Crochet Pouches", desc: "Tiny, cheerful crochet pouches finished with beads and buttons.", cat: "Crochet" },
  { id: 21, name: "White Blossom Crochet Garlands", desc: "Soft crocheted blossoms on green stems, made by hand.", cat: "Crochet" },
  { id: 23, name: "The Pearl and Brass Pouch", desc: "Burlap and cotton, with brass bars, pearls and wooden beads.", cat: "Pouches" },
  { id: 24, name: "The Mirror and Gold Pouch", desc: "Little mirrors and gold sequins above a band of burlap and wooden beads.", cat: "Pouches" },
  { id: 25, name: "The Cowrie Pouch", desc: "A single cowrie shell between two brass bars, with mirrors above.", cat: "Pouches" },
  { id: 26, name: "The Sunburst Pouch", desc: "Cowrie shells, mother-of-pearl discs and bright yellow beads in a sunburst pattern.", cat: "Pouches" },
  { id: 27, name: "The Black Band Pouch", desc: "Cowries and wooden beads on a black band, finished with white lace.", cat: "Pouches" },
  { id: 28, name: "The Black Lace Pouch", desc: "Black floral lace over cream cotton, with buttons and a jute fringe.", cat: "Pouches" },
];
export const src = (id: number) => `/products/${id}.jpg`;
export const categoryList = [
  { slug: "paintings", title: "Paintings", cover: 7, blurb: "Colour, pattern and little stories, painted by hand." },
  { slug: "wall-hangings", title: "Wall Hangings", cover: 15, blurb: "Long, richly bordered pieces made to bring a wall to life." },
  { slug: "bags", title: "Bags", cover: 12, blurb: "Cotton totes and sling bags, each hand-painted with its own motif." },
  { slug: "pouches", title: "Pouches", cover: 26, blurb: "Zip pouches in cotton and jute, trimmed with lace, shells and beads." },
  { slug: "crochet", title: "Crochet", cover: 22, blurb: "Small, soft treasures, crocheted by hand." },
].map((c) => ({ ...c, items: products.filter((p) => p.cat === c.title) }));
export const getCategory = (slug: string) => categoryList.find((c) => c.slug === slug);
export const featured = [3, 6, 7, 5, 14, 22, 19, 9, 15].map((id) => products.find((p) => p.id === id)!);
