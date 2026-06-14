export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: string;
  buyUrl: string; // Placeholder buy link — swap for a real store URL.
  cover: number; // BookCover gradient variant index
};

export const books: Book[] = [
  {
    id: "build-mind",
    title: "The Build Mind",
    author: "M. Vinterm",
    category: "Focus",
    description:
      "A field guide to thinking clearly while you ship — habits, heuristics, and the craft of staying focused.",
    price: "$34",
    buyUrl: "#",
    cover: 0,
  },
  {
    id: "patterns-of-focus",
    title: "Patterns of Focus",
    author: "A. Rowe",
    category: "Focus",
    description:
      "Small, repeatable structures for deep work in a world built to interrupt you.",
    price: "$28",
    buyUrl: "#",
    cover: 1,
  },
  {
    id: "shipping-calmly",
    title: "Shipping Calmly",
    author: "J. Okafor",
    category: "Delivery",
    description:
      "How calm teams move faster — a practical look at sustainable delivery.",
    price: "$31",
    buyUrl: "#",
    cover: 2,
  },
  {
    id: "quiet-architecture",
    title: "The Quiet Architecture",
    author: "L. Marsh",
    category: "Systems",
    description:
      "Designing systems that stay simple as they grow, told through real-world studies.",
    price: "$39",
    buyUrl: "#",
    cover: 3,
  },
  {
    id: "learning-in-public",
    title: "Learning in Public",
    author: "S. Kestrel",
    category: "Growth",
    description:
      "Why sharing unfinished work is the fastest way to get better at anything.",
    price: "$26",
    buyUrl: "#",
    cover: 4,
  },
  {
    id: "craft-and-cadence",
    title: "Craft & Cadence",
    author: "R. Vale",
    category: "Craft",
    description:
      "On rhythm, repetition, and the long game of mastering a discipline.",
    price: "$33",
    buyUrl: "#",
    cover: 5,
  },
];
