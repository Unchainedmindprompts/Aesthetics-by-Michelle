import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Cryo Treatments in Post Falls, Idaho",
  description:
    "Cryo body sculpting and cryo facials in Post Falls, ID. Sub-zero cold therapy for sculpting, tightening, and reduced puffiness, performed by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/cryo" },
};

const services = [
  {
    id: "cryo-body-sculpting",
    name: "Cryo Body Sculpting",
    price: "$165",
    duration: "60 minutes",
    description:
      "Controlled thermal shock applied to targeted areas naturally reduces the presence of adipose fat cells — without damaging the surrounding tissue. Non-invasive, no needles, no downtime. A focused session for the spots you'd like to tighten and sculpt.",
  },
  {
    id: "cryo-facial",
    name: "Cryo Facial",
    price: "$100",
    duration: "60 minutes",
    description:
      "Sub-zero temperatures rapidly stimulate blood flow and oxygenation in the face. The result is a non-invasive treatment that reduces puffiness, tightens pores, and leaves your skin looking visibly refreshed. Great as a standalone or before a special event.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cryo Treatments",
  serviceType: "Cryotherapy",
  description:
    "Cryo body sculpting and cryo facials using precisely controlled sub-zero temperatures to sculpt, tighten, and refresh — non-invasive with no downtime.",
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
  url: `${SITE_URL}/cryo`,
};

export default function CryoPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Sub-Zero Cryo for Sculpting, Tightening, and a Reset You Can Feel
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Two cryo treatments — one for body, one for face — that use
            precisely controlled cold to trigger your body&apos;s own
            responses. Non-invasive, no needles, no downtime.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-10">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="border-t-4 border-gold bg-softWhite p-8 shadow-sm md:p-12"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                    {service.name}
                  </h2>
                  <p className="font-sans text-warmGray">
                    <span className="text-xl text-charcoal">
                      {service.price}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{service.duration}</span>
                  </p>
                </div>
                <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Stubborn pockets of fat on the body, puffiness around the eyes
              and jawline, dull skin that needs a wake-up, and pre-event
              tightening you can see the same day.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Cryo only works when the temperature, duration, and placement are
              right. Michelle will walk you through what to expect, dial the
              treatment to your goals, and tell you honestly whether cryo or
              another service is the better fit for what you&apos;re trying to
              do.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Curious whether cryo is right for you?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Book a cryo consultation
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
