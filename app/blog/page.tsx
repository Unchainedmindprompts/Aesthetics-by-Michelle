import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articlesNewestFirst, formatArticleDate } from "@/lib/articles";
import { blogIndexGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Notes — Skincare from Michelle Hoffman",
  description:
    "Skincare notes, results, and what's working for clients of Aesthetics by Michelle in Hayden, ID.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const articles = articlesNewestFirst();

  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Notes
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Skincare, written down.
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            What&apos;s working, what isn&apos;t, and the timing questions
            clients ask most.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col overflow-hidden bg-softWhite shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative aspect-[16/9] w-full overflow-hidden"
                >
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-8">
                  <p className="font-sans text-xs uppercase tracking-widest text-gold">
                    {article.articleSection}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-charcoal">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="transition-colors hover:text-sage"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-4 font-sans text-warmGray">
                    {article.description}
                  </p>
                  <p className="mt-4 font-sans text-sm text-warmGray">
                    <time dateTime={article.datePublished}>
                      {formatArticleDate(article.datePublished)}
                    </time>
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-auto pt-6 font-sans text-charcoal transition-colors duration-300 hover:text-sage"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexGraph()) }}
      />
    </>
  );
}
