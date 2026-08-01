/**
 * Article registry — the single source of truth for blog article facts.
 *
 * Every surface derives from one entry here: route metadata, Open Graph,
 * Twitter, the WebPage/BlogPosting schema, the blog index card, and the
 * sitemap. Adding an article means adding one entry plus a body component.
 */

export type ArticleCitation = {
  /** Title as it should appear in schema. */
  name: string;
  url: string;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleDefinition = {
  slug: string;
  title: string;
  /** Canonical description. Drives metadata, OG, Twitter, schema and card. */
  description: string;
  /** ISO date. */
  datePublished: string;
  /** Only set when a genuine revision has occurred. */
  dateModified?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  articleSection: string;
  keywords: string[];
  /** Path of the canonical Service this article is centrally about. */
  primaryServicePath: string;
  /** Paths of canonical Services meaningfully discussed but not central. */
  mentionServicePaths: string[];
  citations: ArticleCitation[];
  /** Only populate when the article renders a visible FAQ section. */
  faqs?: ArticleFaq[];
};

export const ARTICLES: ArticleDefinition[] = [
  {
    slug: "how-far-before-your-wedding-should-you-get-a-facial",
    title: "How Far Before Your Wedding Should You Get a Facial?",
    description:
      "Your last full facial belongs 10–14 days out. A gentle facial you've had before can sit closer. Anything deeper, or anything new, needs a month or more.",
    datePublished: "2026-08-01",
    image: {
      src: "/images/blog/wedding-facial-timeline.png",
      width: 1672,
      height: 941,
      alt: "A bride receiving a facial treatment in a bright studio, with a wedding dress and white florals behind her",
    },
    articleSection: "Bridal Skincare",
    keywords: [
      "wedding facial timeline",
      "pre-wedding skincare",
      "bridal facial",
      "mini facial",
      "when to get a facial before a wedding",
      "spray tan order",
      "bridal party facials",
    ],
    primaryServicePath: "/facials",
    mentionServicePaths: [
      "/dermaplaning",
      "/chemical-peel",
      "/microneedling",
      "/brow-lash",
      "/waxing",
    ],
    citations: [
      {
        name: "Chemical peels: FAQs — American Academy of Dermatology",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs",
      },
      {
        name: "Microneedling can fade scars — American Academy of Dermatology",
        url: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling-fade-scars",
      },
      {
        name: "How to test skin care products — American Academy of Dermatology",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products",
      },
      {
        name: "Pimple popping: Why only a dermatologist should do it — American Academy of Dermatology",
        url: "https://www.aad.org/public/diseases/acne-and-rosacea/pimple-popping-why-only-a-dermatologist-should-do-it",
      },
      {
        name: "How to apply self-tanner — American Academy of Dermatology",
        url: "https://www.aad.org/public/everyday-care/skin-care-secrets/routine/apply-self-tanner",
      },
      {
        name: "Microneedling — Cleveland Clinic",
        url: "https://my.clevelandclinic.org/health/treatments/23113-microneedling",
      },
      {
        name: "Beauty sleep: experimental study on the perceived health and attractiveness of sleep deprived people — BMJ",
        url: "https://www.bmj.com/content/341/bmj.c6614",
      },
      {
        name: "Dietary water affects human skin hydration and biomechanics",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4529263/",
      },
      {
        name: "The Effect of Water Intake and Moisturizer on Skin Hydration — Annals of Dermatology",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11148315/",
      },
      {
        name: "Postinflammatory Hyperpigmentation — StatPearls, NCBI Bookshelf",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK559150/",
      },
      {
        name: "Ultimate Wedding Countdown: How to Prep by the Week — Leslie Baumann, MD",
        url: "https://www.lesliebaumannmd.com/ultimate-wedding-countdown-how-to-prep-by-the-week",
      },
      {
        name: "The Ultimate Wedding Skin Prep Timeline for Brides — Golden State Dermatology",
        url: "https://www.goldenstatedermatology.com/blog/the-ultimate-wedding-skin-prep-timeline-for-brides/",
      },
    ],
  },
];

export function articleBySlug(slug: string): ArticleDefinition | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Newest first, for the blog index. */
export function articlesNewestFirst(): ArticleDefinition[] {
  return [...ARTICLES].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
}

export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
