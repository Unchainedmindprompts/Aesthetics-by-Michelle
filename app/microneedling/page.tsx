import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Microneedling in Post Falls, Idaho",
  description:
    "Collagen-building microneedling in Post Falls, ID. Firmer, smoother skin with refined pores and softer fine lines, performed by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/microneedling" },
};

const faqs = [
  {
    question: "Does microneedling hurt?",
    answer:
      "Most clients describe it as a light prickling or vibration — not painful. Michelle applies a topical numbing cream before your session, so by the time treatment starts, the skin is fully prepped. The areas around the forehead and jawline can feel slightly more sensitive, but the whole thing is very tolerable.",
  },
  {
    question: "How many sessions will I need to see results?",
    answer:
      "You'll see a glow within a few days of your first appointment, but real structural change — firmness, scar improvement, smoother texture — builds across a series of three to four sessions spaced four to six weeks apart. Michelle will recommend a realistic plan based on what your skin actually needs, not a package upsell.",
  },
  {
    question: "What's the downtime?",
    answer:
      "Plan on looking a little pink and warm for 24 hours, similar to a mild sunburn. By day two or three, you'll see some light flaking as the skin turns over. Most clients are back in makeup and out the door within 48 hours.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microneedling",
  serviceType: "Microneedling",
  description:
    "Microneedling is the closest thing skincare has to a reset button. Using a precision pen of ultra-fine needles, Michelle creates microscopic channels in the skin that signal your body to flood the area with collagen and elastin.",
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
  url: `${SITE_URL}/microneedling`,
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

export default function MicroneedlingPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Hero Service
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Collagen-Building Microneedling for Skin That Looks Like You, Just
            Better
          </h1>
          <p className="mt-8 font-sans text-cream/80">
            <span className="text-xl text-cream">$165</span>
            <span className="mx-2">•</span>
            <span>60 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Microneedling is the closest thing skincare has to a reset button.
              Using a precision pen of ultra-fine needles, Michelle creates
              microscopic channels in the skin that signal your body to flood
              the area with collagen and elastin — the two things your skin
              loses as it ages. The result is firmer, smoother skin with refined
              pores, softer fine lines, and a healthy glow that builds over the
              weeks following your treatment.
            </p>
            <p>
              This isn&apos;t a quick fix or a one-and-done facial. It&apos;s a
              clinically-backed treatment that improves the actual structure of
              your skin over time. Most clients see noticeable change after
              their first session and significant transformation across a
              series of three to four.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Fine lines, acne scarring, uneven texture, enlarged pores, sun
              damage, and dull skin that doesn&apos;t respond to topicals
              anymore.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Microneedling depth and technique matter enormously — too shallow
              and you waste your money, too aggressive and you damage the
              barrier. With 15+ years of hands-on experience and an Idaho
              esthetician license, Michelle dials in every pass to your skin,
              your goals, and the day you&apos;re sitting in her chair.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to start with microneedling?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book your microneedling consultation
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
