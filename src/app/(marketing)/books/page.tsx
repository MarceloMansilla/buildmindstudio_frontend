import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/src/shared/components/marketing/section";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { BookCover } from "@/src/shared/components/marketing/book-cover";
import { CartControls } from "@/src/shared/components/marketing/cart-controls";
import { books } from "@/src/shared/content/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Field notes, essays, and deep dives — printed and bound by BuildMind Press.",
};

export const revalidate = 3600;

export default function BooksPage() {
  const [featured, ...rest] = books;

  return (
    <div className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh]"
      >
        <div className="hero-glow absolute top-[-15%] left-1/2 h-[48vh] w-[80vw] max-w-4xl -translate-x-1/2 rounded-full blur-2xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <Section
        id="books"
        labelledBy="books-title"
        containerClassName="pt-16 pb-16 sm:pt-24 md:pt-28 md:pb-24"
      >
        <div className="hero-reveal" style={{ animationDelay: "0ms" }}>
          <SectionHeader
            as="h1"
            align="center"
            eyebrow="Bookshelf"
            titleId="books-title"
            title="Books from the studio."
            lead="Field notes, essays, and deep dives — printed and bound by BuildMind Press."
          />
        </div>

        {/* Featured — Editor's pick */}
        <div
          className="hero-reveal group/book mt-16 grid grid-cols-1 items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16"
          style={{ animationDelay: "120ms" }}
        >
          <div className="mx-auto w-full max-w-[14rem] sm:max-w-[16rem] lg:mr-0 lg:ml-auto">
            <BookCover
              title={featured.title}
              author={featured.author}
              variantIndex={featured.cover}
              tilt
            />
          </div>

          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>Editor&rsquo;s pick</Eyebrow>
            </div>
            <h2
              className="mt-4 text-balance"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", lineHeight: 1.05 }}
            >
              {featured.title}
            </h2>
            <div className="mt-2 text-sm text-[var(--color-text-soft)]">
              {featured.author} · {featured.category}
            </div>
            <div className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] lg:mx-0">
              {featured.description}
            </div>
            <div className="mt-7 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <span className="font-heading text-2xl text-[var(--color-text)]">
                {featured.price}
              </span>
              <div className="w-full max-w-[16rem] sm:w-auto sm:min-w-[12rem]">
                <CartControls bookId={featured.id} title={featured.title} />
              </div>
              <Link
                href={featured.buyUrl}
                className="text-sm font-medium text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                Buy now →
              </Link>
            </div>
          </div>
        </div>

        {/* The full shelf */}
        <div
          className="hero-reveal mt-20 md:mt-28"
          style={{ animationDelay: "220ms" }}
        >
          <Eyebrow>The full shelf</Eyebrow>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((book) => (
              <li key={book.id} className="group/book flex flex-col">
                <BookCover
                  title={book.title}
                  author={book.author}
                  variantIndex={book.cover}
                />

                <div className="mt-5 flex flex-1 flex-col">
                  <span className="text-xs font-medium tracking-[0.16em] text-[var(--color-accent)] uppercase">
                    {book.category}
                  </span>
                  <h3 className="mt-2 text-lg leading-snug transition-colors group-hover/book:text-[var(--color-accent)]">
                    {book.title}
                  </h3>
                  <div className="mt-1 text-sm text-[var(--color-text-soft)]">
                    {book.author}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {book.description}
                  </div>

                  <div className="mt-auto pt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-heading text-xl text-[var(--color-text)]">
                        {book.price}
                      </span>
                      <Link
                        href={book.buyUrl}
                        className="text-sm font-medium text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        Buy now →
                      </Link>
                    </div>
                    <CartControls bookId={book.id} title={book.title} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
