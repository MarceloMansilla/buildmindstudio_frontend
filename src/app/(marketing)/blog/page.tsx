import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/src/shared/components/marketing/section";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { PostMeta } from "@/src/shared/components/marketing/post-meta";
import { posts } from "@/src/shared/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building, learning, and shipping from the BuildMind Studio team.",
};

export const revalidate = 3600; // ISR: revalidate every hour

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <Section
      id="blog"
      labelledBy="blog-title"
      containerClassName="pt-16 pb-16 sm:pt-24 md:pt-28 md:pb-24"
    >
      <SectionHeader
        as="h1"
        align="center"
        eyebrow="The Journal"
        titleId="blog-title"
        title="Writing from the studio."
        lead="Notes on building, learning, and shipping — straight from the people behind BuildMind."
      />

      {/* Featured (latest) post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-14 block rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-accent)] sm:p-10 md:p-12"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-xs font-medium tracking-wide text-[var(--color-surface)]">
            Featured
          </span>
          <PostMeta
            tag={featured.tag}
            date={featured.date}
            readingTime={featured.readingTime}
          />
        </div>
        <h2
          className="mt-5 text-balance transition-colors group-hover:text-[var(--color-accent)]"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1 }}
        >
          {featured.title}
        </h2>
        <p className="mt-4 max-w-2xl">{featured.description}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
          Read the article
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </Link>

      {/* The rest */}
      <div className="mx-auto mt-16 max-w-3xl">
        <Eyebrow>More writing</Eyebrow>
        <ul className="mt-6">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block border-t border-[var(--color-border)] py-7"
              >
                <PostMeta
                  tag={post.tag}
                  date={post.date}
                  readingTime={post.readingTime}
                />
                <h3 className="mt-3 text-xl transition-colors group-hover:text-[var(--color-accent)]">
                  {post.title}
                </h3>
                <p className="mt-2">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
