import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/book";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Customized Facials in Hayden, ID",
  description:
    "Six customized facials in Hayden, ID — including the 30-minute Mini Facial for weddings, bachelorette parties, and special occasions.",
  alternates: { canonical: "/facials" },
};

const pricing = [
  { name: "Mini Facial", price: "$50", duration: "30 minutes" },
  { name: "Classic Facial", price: "$95", duration: "60 minutes" },
  { name: "Anti-Aging Facial", price: "$98", duration: "60 minutes" },
  { name: "Facial with Dermaplaning", price: "$110", duration: "60 minutes" },
  { name: "Microdermabrasion Facial", price: "$130", duration: "60 minutes" },
  {
    name: "Body Energy Healing & Facial",
    price: "$98",
    duration: "60 minutes",
  },
];

const addOns = [
  { name: "Microdermabrasion add-on", price: "$20" },
  { name: "Dermaplaning add-on", price: "$25" },
];

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
  name: "Customized Facials",
  serviceType: "Facial Treatment",
  description:
    "Five customized facial options built around what your skin is doing right now — classic, anti-aging, with dermaplaning, microdermabrasion, or paired with reiki body energy healing. All include cleanse, exfoliation, red light therapy, mask, and moisturizer.",
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
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Facials Built Around Your Skin Today — Not a Generic Menu
          </h1>
          <p className="mt-8 font-sans text-cream/80">
            <span>Starting at </span>
            <span className="text-xl text-cream">$50</span>
            <span className="mx-2">•</span>
            <span>30 minutes</span>
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
            <p>
              Every facial includes cleanse, exfoliation, red light therapy,
              mask, and moisturizer. Choose the option that matches what your
              skin is asking for — Michelle will help you pick if you&apos;re
              not sure.
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

          <div className="mt-14 border-t-4 border-gold bg-softWhite p-8 md:p-10 shadow-sm">
            <p className="font-sans text-sm uppercase tracking-widest text-gold">
              Featured
            </p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">
              Mini Facial — For the Pre-Event Glow
            </h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-warmGray">
              The one to book before a wedding, bachelorette weekend, first
              date, engagement photos, or any night you want your skin to look
              its absolute best. A focused thirty-minute treatment that hits
              the essentials — cleanse, gentle exfoliation, mask, and a
              finishing glow — no time off your day required. Great solo, and
              even better with a friend or a bridal party.
            </p>
            <p className="mt-6 font-sans text-warmGray">
              <span className="text-xl text-charcoal">$50</span>
              <span className="mx-2">•</span>
              <span>30 minutes</span>
            </p>
          </div>

          <div className="mt-14 bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Facials &amp; pricing
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

          <div className="mt-8 bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Add-ons
            </h2>
            <dl className="mt-6 divide-y divide-taupe/30 font-sans text-warmGray">
              {addOns.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 md:flex-row md:items-baseline md:justify-between"
                >
                  <dt className="font-serif text-xl text-charcoal">
                    {item.name}
                  </dt>
                  <dd>
                    <span className="text-charcoal">{item.price}</span>
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
            Book Today
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
