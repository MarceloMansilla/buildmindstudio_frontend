import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { PostMeta } from "@/src/shared/components/marketing/post-meta";
import { posts, getPost } from "@/src/shared/content/posts";

export const revalidate = 3600; // ISR: revalidate every hour

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <article className="relative isolate overflow-hidden">
      {/* Subtle atmosphere behind the header */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[45vh]"
      >
        <div className="hero-glow absolute top-[-20%] left-1/2 h-[40vh] w-[75vw] max-w-3xl -translate-x-1/2 rounded-full blur-2xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-12 pb-20 sm:pt-16 md:pt-20">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft
            aria-hidden
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          Back to the journal
        </Link>

        <header className="mt-8">
          <PostMeta
            tag={post.tag}
            date={post.date}
            readingTime={post.readingTime}
          />
          <h1
            className="mt-4 text-balance"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.05 }}
          >
            {post.title}
          </h1>
          <div className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            {post.description}
          </div>
        </header>

        <div className="mt-10 border-t border-[var(--color-border)] pt-10">
          {post.body.map((paragraph, i) => (
            <p key={i} className={cn("mt-6 first:mt-0", i === 0 && "article-lead")}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft
              aria-hidden
              className="size-4 transition-transform group-hover:-translate-x-0.5"
            />
            All writing
          </Link>
        </div>
      </div>
    </article>
  );
}
