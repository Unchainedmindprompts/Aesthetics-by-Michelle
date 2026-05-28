import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Cryo Body Sculpting in Post Falls, Idaho",
  description:
    "Cryo Body Sculpting in Post Falls, ID. Non-invasive cold therapy that targets stubborn fat on the abdomen, flanks, thighs, arms, and back — performed by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/cryo-body-sculpting" },
};

const faqs = [
  {
    question: "How soon will I see results?",
    answer:
      "Some smoothing and tightening is visible within the first week, but the real reduction in the treated fat becomes obvious between weeks four and twelve as your body clears the broken-down cells. Most clients see their full result by the three-month mark.",
  },
  {
    question: "Is it painful?",
    answer:
      "The first few minutes feel intensely cold — like an ice pack pressed firmly to the area. After that, the area numbs and most clients are comfortable enough to read, scroll their phone, or even nap during the session. There's no recovery, no soreness that limits your day.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends on the area and your goals. Many clients see significant change after just one session per area; others benefit from a series of two or three spaced six to eight weeks apart. Michelle will give you a realistic plan during consultation — never a high-pressure package pitch.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cryo Body Sculpting",
  serviceType: "Cryo Body Sculpting",
  description:
    "Cryo Body Sculpting uses controlled cold therapy to target stubborn pockets of fat that don't respond to diet or workouts. The technology cools fat cells to a precise temperature that breaks them down without damaging the surrounding skin, muscle, or tissue.",
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
  url: `${SITE_URL}/cryo-body-sculpting`,
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

export default function CryoBodySculptingPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Cryo Body Sculpting — Targeted Fat Reduction, Smoother Skin, No
            Downtime
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
              Cryo Body Sculpting uses controlled cold therapy to target
              stubborn pockets of fat that don&apos;t respond to diet or
              workouts — the lower belly, love handles, inner thighs, bra
              line, the spots most of us know too well. The technology cools
              fat cells to a precise temperature that breaks them down without
              damaging the surrounding skin, muscle, or tissue. Your body then
              naturally processes and clears those cells over the following
              weeks, leaving the treated area visibly slimmer and smoother.
            </p>
            <p>
              It&apos;s non-invasive, non-surgical, and requires zero recovery
              time. You&apos;ll lie down, relax, and walk out the same day.
              Most clients see measurable change after their first session,
              with continued improvement over the four to twelve weeks that
              follow as the body completes the clearance process. Sessions
              can be repeated for deeper results.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Stubborn fat pockets on the abdomen, flanks, thighs, arms, back,
              or bra line. Body contouring after weight loss. Anyone
              who&apos;s plateaued with diet and exercise on specific problem
              areas and isn&apos;t ready to consider surgery.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Cryo body sculpting is only as good as the practitioner placing
              the applicator and reading your tissue. Michelle takes the time
              to assess each area, map the treatment zones honestly, and tell
              you up front whether you&apos;re a good candidate — or whether
              your goals would be better served by a different approach. No
              pressure, no overpromising.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Curious whether you&apos;re a candidate?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book a cryo body sculpting consultation
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
