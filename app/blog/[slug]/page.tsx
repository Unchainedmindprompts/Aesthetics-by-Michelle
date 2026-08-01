import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import WeddingFacialTimeline from "@/components/articles/WeddingFacialTimeline";
import {
  ARTICLES,
  articleBySlug,
  formatArticleDate,
} from "@/lib/articles";
import { SITE_URL, articlePageGraph } from "@/lib/schema";

/** Body component per slug. Adding an article means adding one entry here. */
const BODIES: Record<string, ComponentType> = {
  "how-far-before-your-wedding-should-you-get-a-facial": WeddingFacialTimeline,
};

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articleBySlug(params.slug);
  if (!article) return {};

  const url = `${SITE_URL}/blog/${article.slug}`;
  const image = {
    url: article.image.src,
    width: article.image.width,
    height: article.image.height,
    alt: article.image.alt,
  };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articleBySlug(params.slug);
  const Body = BODIES[params.slug];
  if (!article || !Body) notFound();

  const graph = articlePageGraph(article);

  return (
    <>
      <article>
        <header className="bg-cream pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-sans text-sm text-warmGray">
                <li>
                  <Link href="/" className="transition-colors hover:text-sage">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-sage"
                  >
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>

            <p className="mt-8 font-sans text-sm uppercase tracking-widest text-gold">
              {article.articleSection}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 font-sans text-warmGray">
              <span>By Michelle Hoffman</span>
              <span className="mx-2">•</span>
              <time dateTime={article.datePublished}>
                {formatArticleDate(article.datePublished)}
              </time>
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl px-6 md:px-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="bg-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <Body />
          </div>
        </div>
      </article>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Planning around a date?
          </h2>
          <p className="mt-6 font-sans text-lg text-cream/80">
            Tell Michelle when it is and she will help you work backward from
            it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Request an Appointment
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
