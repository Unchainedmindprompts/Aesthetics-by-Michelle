import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Dermaplaning in Post Falls, Idaho",
  description:
    "Dermaplaning in Post Falls, ID. Smoother skin, brighter glow, and better product absorption — performed by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/dermaplaning" },
};

const faqs = [
  {
    question: "Will my peach fuzz grow back darker or thicker?",
    answer:
      "No — this is the most common dermaplaning myth. The vellus hair on your face is genetically programmed to grow back exactly as it was. Cutting it at the surface doesn't change the follicle, the color, or the thickness.",
  },
  {
    question: "How long do the results last?",
    answer:
      "The smoothness and glow last about three to four weeks. Most clients book dermaplaning monthly, or right before a wedding, photo session, or event where they want their makeup to sit flawlessly.",
  },
  {
    question: "Is dermaplaning safe for sensitive skin?",
    answer:
      "For most sensitive skin, yes — it's actually gentler than many chemical exfoliants because there's no acid or active ingredient involved. Michelle will assess your skin during consultation and skip dermaplaning if you have active acne, cold sores, or certain skin conditions where it isn't appropriate.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dermaplaning",
  serviceType: "Dermaplaning",
  description:
    "Dermaplaning is a gentle treatment that uses a sterile surgical blade to remove dead skin cells and fine vellus hair, leaving skin remarkably soft with a polished, lit-from-within finish.",
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
  url: `${SITE_URL}/dermaplaning`,
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

export default function DermaplaningPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Smoother Skin, Brighter Glow, Better Product Absorption — In Under
            an Hour
          </h1>
          <p className="mt-8 font-sans text-warmGray">
            <span className="text-xl text-charcoal">$40</span>
            <span className="mx-2">•</span>
            <span>60 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Dermaplaning is a gentle, deeply satisfying treatment that uses a
              sterile surgical blade to remove the top layer of dead skin cells
              and the fine vellus hair (peach fuzz) on your face. The result is
              immediate: skin feels remarkably soft, makeup glides on like
              it&apos;s airbrushed, and every serum and moisturizer you use
              afterward absorbs significantly better.
            </p>
            <p>
              There&apos;s no downtime, no redness, no peeling — just a
              polished, lit-from-within finish you can see the second you sit
              up. Many clients add dermaplaning before a facial or microneedling
              session for an even deeper result.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Dull or flaky skin, makeup that looks cakey, peach fuzz you&apos;d
              rather not see, special events, and anyone whose products feel
              like they&apos;re &ldquo;sitting on top&rdquo; of their skin.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Dermaplaning is all about hand pressure, blade angle, and knowing
              exactly when to stop. With 15+ years behind the treatment chair,
              Michelle delivers a flawless finish — safely, comfortably, and
              without irritating your barrier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready for that fresh-start glow?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book a dermaplaning session
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
