import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Cryo Facial in Post Falls, Idaho",
  description:
    "Cryo Facial in Post Falls, ID. Cold therapy that tightens pores, calms redness, reduces puffiness, and brightens skin — performed by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/cryo-facial" },
};

const faqs = [
  {
    question: "Is a Cryo Facial uncomfortable?",
    answer:
      "It's cold — that's the whole point — but it's not painful. The cooling is moved continuously across the skin, so no single area gets overexposed. Most clients describe it as refreshing and a little invigorating, similar to splashing cold water on your face for ten minutes straight.",
  },
  {
    question: "How long do the results last?",
    answer:
      "The tightening and de-puffing effect is visible immediately and typically lasts five to seven days. With monthly sessions, the cumulative effect on skin tone, redness, and pore size builds noticeably over time.",
  },
  {
    question: "Can I combine a Cryo Facial with other treatments?",
    answer:
      "Yes — and many clients do. Cryo pairs beautifully after a dermaplaning or customized facial for an extra dose of tightening. Michelle will recommend the right sequence based on what your skin is working on at the moment.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cryo Facial",
  serviceType: "Cryo Facial",
  description:
    "A Cryo Facial uses precisely controlled cold therapy — vaporized cooling delivered across your face, neck, and décolleté — to shock the skin in the best possible way. The cold constricts blood vessels on contact, then triggers a rush of fresh, oxygen-rich blood as your skin rewarms.",
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
  url: `${SITE_URL}/cryo-facial`,
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

export default function CryoFacialPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Cryo Facial — Cold Therapy for Tighter, Brighter, Calmer Skin
          </h1>
          <p className="mt-8 font-sans text-cream/80">
            <span className="text-xl text-cream">$100</span>
            <span className="mx-2">•</span>
            <span>60 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              A Cryo Facial uses precisely controlled cold therapy — vaporized
              cooling delivered across your face, neck, and décolleté — to
              shock the skin in the best possible way. The cold constricts
              blood vessels on contact, then triggers a rush of fresh,
              oxygen-rich blood as your skin rewarms. That single cycle does a
              lot at once: it tightens pores, calms inflammation, reduces
              puffiness, brightens dull skin, and gives you an immediate,
              lit-from-within glow that lasts for days.
            </p>
            <p>
              It&apos;s the kind of treatment you&apos;ll feel working in real
              time. The cold is bracing but not uncomfortable, there&apos;s
              zero downtime, and you walk out looking like you slept ten hours
              and drank a gallon of water. Many clients book a Cryo Facial
              before weddings, photoshoots, big events — or as a regular
              monthly upgrade alongside their other treatments.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Puffiness and morning swelling, redness and sensitivity, dull or
              tired-looking skin, enlarged pores, post-workout flushing, jet
              lag, and anyone wanting an instant glow without needles or
              peels.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Cold therapy is about technique — how close, how long, how to
              move. Done wrong, it&apos;s a gimmick. Done right, it&apos;s one
              of the most effective non-invasive tightening and brightening
              treatments available. Michelle pairs 15+ years of esthetic
              experience with proper cryo protocol to deliver the result you
              came in for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready for the cryo glow?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book a cryo facial
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
