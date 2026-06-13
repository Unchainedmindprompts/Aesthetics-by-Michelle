import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Brow & Lash Services in Post Falls, Idaho",
  description:
    "Brow lamination, lash lift and tint, and expert brow shaping in Post Falls, ID. Low-maintenance results that last six to eight weeks with Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/brow-lash" },
};

const pricing = [
  { name: "Eyelash Lift & Tint", price: "$75", duration: "60 minutes" },
  { name: "Eyebrow Lamination", price: "$50", duration: "45 minutes" },
];

const faqs = [
  {
    question: "How long do brow lamination and lash lifts last?",
    answer:
      "Both last six to eight weeks on average. Lash lifts fade gradually as your natural lashes shed and regrow, and brow lamination softens over time as new brow hairs come in. Most clients rebook every two months.",
  },
  {
    question: "Can I get my lashes wet or wear makeup right after?",
    answer:
      "Keep lashes dry and makeup-free for the first 24 hours after a lift and tint — that's when the curl is setting. After that, you're back to normal: mascara, swimming, workouts, all fine.",
  },
  {
    question: "What if my brows are over-tweezed or really sparse?",
    answer:
      "That's exactly what brow lamination is built for. By restructuring the hairs you do have, Michelle can make sparse brows look noticeably fuller and more even — no microblading or pencil required. During your consultation she'll tell you honestly what's achievable with your brow density.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Brow & Lash Services",
  serviceType: "Beauty Services",
  description:
    "Brow lamination, lash lift and tint, and expert brow shaping designed to enhance what you already have and save you fifteen minutes every morning.",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Aesthetics by Michelle",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Post Falls",
      addressRegion: "ID",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Post Falls" },
    { "@type": "City", name: "Coeur d'Alene" },
    { "@type": "City", name: "Spokane Valley" },
  ],
  url: `${SITE_URL}/brow-lash`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BrowLashPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Lifted Lashes, Shaped Brows, Zero Daily Maintenance
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Wake up looking like you already did your makeup. Michelle offers
              two signature brow and lash services — eyelash lift and tint, and
              eyebrow lamination — designed to enhance what you already have
              and save you fifteen minutes every morning.
            </p>
            <ul className="space-y-4 pl-6">
              <li>
                <span className="font-serif text-xl text-charcoal">
                  Eyelash lift and tint
                </span>{" "}
                curls your natural lashes from the base and deepens their color,
                giving you the wide-eyed look of mascara without the daily
                routine. Lasts six to eight weeks.
              </li>
              <li>
                <span className="font-serif text-xl text-charcoal">
                  Eyebrow lamination
                </span>{" "}
                restructures your brow hairs so they sit fuller, fluffier, and
                stay where you brush them — soft, modern, and natural-looking.
                Results last six to eight weeks.
              </li>
            </ul>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Low-maintenance mornings, sparse or unruly brows, short or
              straight lashes, mascara fatigue, and anyone tired of pencil-and-
              gel routines.
            </p>
          </div>

          <div className="mt-14 bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Services &amp; pricing
            </h2>
            <dl className="mt-6 divide-y divide-taupe/30 font-sans text-warmGray">
              {pricing.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 md:flex-row md:items-baseline md:justify-between"
                >
                  <dt className="font-serif text-xl text-charcoal">
                    {item.name}
                  </dt>
                  <dd>
                    <span className="text-charcoal">{item.price}</span>
                    <span className="mx-2">•</span>
                    <span>{item.duration}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Brows frame your entire face — one millimeter off and the whole
              thing shifts. Michelle&apos;s eye for symmetry and proportion is
              honed from 15+ years of working with every brow shape you can
              think of.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready for low-maintenance mornings?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book brow &amp; lash
          </Link>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <h2 className="text-center font-serif text-3xl text-charcoal md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
