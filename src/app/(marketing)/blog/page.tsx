import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/shared/components/ui/card";
import { Badge } from "@/src/shared/components/ui/badge";

export const metadata: Metadata = { title: "Blog" };

export const revalidate = 3600; // ISR: revalidate every hour

// In production, replace with a CMS or database fetch.
const posts = [
  {
    slug: "getting-started",
    title: "Getting started with BuildMind Studio",
    description: "Everything you need to know to hit the ground running.",
    date: "2026-06-01",
    tag: "Guide",
  },
  {
    slug: "why-nextjs-app-router",
    title: "Why we chose Next.js App Router",
    description: "SSG, ISR, and dynamic rendering in one framework.",
    date: "2026-05-20",
    tag: "Architecture",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mb-10 text-muted-foreground">
        Thoughts on building, learning, and shipping.
      </p>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{post.tag}</Badge>
                    <time className="text-xs text-muted-foreground">{post.date}</time>
                  </div>
                  <CardTitle className="mt-1">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
