export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tag: string;
  readingTime: string;
  body: string[];
};

// Placeholder article body (Lorem ipsum). In production, fetch from a CMS.
const BODY = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
];

// Newest first.
export const posts: Post[] = [
  {
    slug: "getting-started",
    title: "Getting started with BuildMind Studio",
    description: "Everything you need to know to hit the ground running.",
    date: "2026-06-01",
    tag: "Guide",
    readingTime: "5 min read",
    body: BODY,
  },
  {
    slug: "why-nextjs-app-router",
    title: "Why we chose Next.js App Router",
    description: "SSG, ISR, and dynamic rendering, all in one framework.",
    date: "2026-05-20",
    tag: "Architecture",
    readingTime: "8 min read",
    body: BODY,
  },
  {
    slug: "learning-in-public",
    title: "The quiet power of learning in public",
    description: "Why sharing unfinished work compounds faster than chasing perfection.",
    date: "2026-05-04",
    tag: "Essay",
    readingTime: "6 min read",
    body: BODY,
  },
  {
    slug: "designing-for-focus",
    title: "Designing tools that get out of your way",
    description: "A look at the craft behind interfaces that respect your attention.",
    date: "2026-04-18",
    tag: "Craft",
    readingTime: "7 min read",
    body: BODY,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
