import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/src/shared/components/ui/badge";

export const revalidate = 3600; // ISR: revalidate every hour

type Params = { params: Promise<{ slug: string }> };

// In production, fetch slug list from CMS.
const slugs = ["getting-started", "why-nextjs-app-router"];

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!SLUG_RE.test(slug)) notFound();
  // In production, fetch the post title from CMS here.
  return { title: slug.replaceAll("-", " ") };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;

  if (!slugs.includes(slug)) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Badge variant="secondary" className="mb-4">
        Guide
      </Badge>
      <h1 className="text-3xl font-bold tracking-tight capitalize">
        {slug.replaceAll("-", " ")}
      </h1>
      <p className="mt-6 text-muted-foreground">
        Post body goes here. Replace this with content from your CMS.
      </p>
    </article>
  );
}
