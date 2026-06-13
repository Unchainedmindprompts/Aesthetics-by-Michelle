import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Reiki Body Healing in Hayden, ID",
  description:
    "Reiki body healing in Hayden, ID. A 45-minute hands-on session to align your body's energy and flow.",
  alternates: { canonical: "/reiki" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reiki Body Healing",
  serviceType: "Reiki Healing",
  description:
    "A 45-minute reiki session focused on aligning the body's energy and flow through gentle hands-on touch.",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Aesthetics by Michelle",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hayden",
      addressRegion: "ID",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Hayden" },
    { "@type": "City", name: "Coeur d'Alene" },
    { "@type": "City", name: "Post Falls" },
    { "@type": "City", name: "Spokane Valley" },
  ],
  url: `${SITE_URL}/reiki`,
};

export default function ReikiPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Reiki Body Healing — Aligning Energy and Flow
          </h1>
          <p className="mt-8 font-sans text-cream/80">
            <span className="text-xl text-cream">$85</span>
            <span className="mx-2">•</span>
            <span>45 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Reiki is a gentle, hands-on practice for aligning your body&apos;s
              energy and flow. The session is quiet, slow, and grounded —
              forty-five minutes of intentional touch designed to help your
              nervous system settle and your body find a more balanced place to
              rest.
            </p>
            <p>
              You&apos;ll be fully clothed, comfortable, and supported. Most
              clients leave feeling lighter, calmer, and noticeably less
              tense — the kind of quiet that&apos;s hard to come by these days.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Stress and held tension, sleep that hasn&apos;t been working,
              recovery weeks, big transitions, or anyone who responds well to
              quiet, mind-body practices.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Michelle brings the same focused, calm presence to a reiki
              session as she does to every other treatment — no rushing, no
              distractions, just attention. If you&apos;d like to combine reiki
              with a facial, ask about the Body Energy Healing &amp; Facial
              option on the facials page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to slow down?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book Today
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
