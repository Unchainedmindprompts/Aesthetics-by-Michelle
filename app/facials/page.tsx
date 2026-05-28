import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Customized Facials in Post Falls, Idaho",
  description:
    "Customized facials in Post Falls, ID. Built around your skin today — cleanse, exfoliation, mask, and finishing steps tailored by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/facials" },
};

const faqs = [
  {
    question: "How often should I get a facial?",
    answer:
      "Once every four to six weeks is the sweet spot for most skin types — it matches your skin's natural turnover cycle. If you're targeting a specific concern like congestion or breakouts, Michelle may suggest a tighter schedule for the first few visits, then space them out as your skin stabilizes.",
  },
  {
    question: "Will you push products on me?",
    answer:
      "No. Michelle will tell you honestly what's working in your current routine and what isn't — and if she recommends a product, it's because your skin actually needs it. No commission-driven upsells, no shelves of branded skincare you're expected to leave with.",
  },
  {
    question: "Can I wear makeup afterward?",
    answer:
      "You can, but most clients don't want to. Your skin will be clean, hydrated, and glowing — applying foundation on top usually feels like a waste. If you have plans the same evening, just give your skin an hour or two to settle before makeup.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Customized Facial",
  serviceType: "Facial Treatment",
  description:
    "Customized facial treatments built around what your skin is doing right now. Real conversation, the right cleanse, targeted exfoliation, and finishing steps that leave you glowing.",
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
  url: `${SITE_URL}/facials`,
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

export default function FacialsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Facials Built Around Your Skin Today — Not a Generic Menu
          </h1>
          <p className="mt-8 font-sans text-warmGray">
            <span className="text-xl text-charcoal">$95</span>
            <span className="mx-2">•</span>
            <span>60 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Most facials are a script. Yours shouldn&apos;t be. Every facial
              at Aesthetics by Michelle starts with a real conversation and a
              close look at what your skin is doing right now — because the
              skin you walked in with last spring isn&apos;t the skin you have
              today. Hormones, weather, stress, products, travel — all of it
              shows up on your face.
            </p>
            <p>
              From there, Michelle builds the treatment in real time: the right
              cleanse, the right exfoliation, targeted extractions when needed,
              a mask matched to what your skin is asking for, and finishing
              steps that leave you glowing on the way out the door. Expect
              calm, careful pacing, warm towels, and zero rushing.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Maintenance and prevention, congested or breakout-prone skin,
              dryness and dullness, sensitivity, pre-event glow-ups, and anyone
              who wants a professional eye on their skincare routine.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              No upsells, no rotating staff, no cookie-cutter steps. Just an
              experienced esthetician giving your skin exactly what it needs —
              and telling you the truth about what&apos;s working at home and
              what isn&apos;t.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to book your facial?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book a customized facial
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
