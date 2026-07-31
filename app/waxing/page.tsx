import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";

const BOOKING_URL = "/contact";
const SITE_URL = "https://aestheticsbymichelle.com";

export const metadata: Metadata = {
  title: "Waxing in Hayden, ID — Brow, Lip, Face, Underarm",
  description:
    "Precise brow, lip, nostril, facial, and underarm waxing in Hayden, ID. Quick, clean, and over before you know it.",
  alternates: { canonical: "/waxing" },
};

const pricing = [
  { name: "Eyebrow Wax", price: "$30", duration: "15 minutes" },
  { name: "Lip", price: "$15", duration: "15 minutes" },
  { name: "Nostrils", price: "$10", duration: "10 minutes" },
  { name: "Facial Wax", price: "$35", duration: "30 minutes" },
  { name: "Under Arms", price: "$30", duration: "15 minutes" },
];

const faqs = [
  {
    question: "How long does my hair need to be before waxing?",
    answer:
      "About a quarter-inch — roughly the length of a grain of rice. If it's shorter, the wax can't grip properly. If you've been shaving, give it about two weeks of growth before your first appointment.",
  },
  {
    question: "Will my skin be red afterward?",
    answer:
      "A little pink for an hour or two is normal, especially on the upper lip and underarms. Michelle finishes every wax with a soothing post-care product to calm the skin, and the redness usually settles before you've made it to your car.",
  },
  {
    question: "How often should I come in?",
    answer:
      "Every three to four weeks is ideal — that's when the hair cycle is in the sweet spot for clean removal. Consistent waxing on that schedule also tends to make the hair grow back finer and sparser over time.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Waxing Services",
  serviceType: "Waxing",
  description:
    "Clean, precise facial, brow, and underarm waxing using high-quality wax and a gentle, experienced hand. Walk out smoother, neater, and with skin that's prepped and soothed.",
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
  url: `${SITE_URL}/waxing`,
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

export default function WaxingPage() {
  return (
    <>
      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Clean, Precise, Comfortable Waxing — Done Right the First Time
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Waxing should be quick, clean, and over before you&apos;ve thought
              twice about it. Michelle offers precise brow, lip, nostril,
              facial, and underarm waxing using high-quality wax and a gentle,
              experienced hand. No yanked skin, no missed hairs, no awkward
              small talk while you wait for someone to come back.
            </p>
            <p>
              You&apos;ll walk out smoother, neater, and with skin that&apos;s
              prepped and soothed — not red and angry.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Brow shaping and clean-up, lip, nostrils, chin, sides of the
              face, and underarms. Great as a standalone or paired with a
              facial.
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
              Speed and precision come from repetition. With many years of
              experience under her belt, Michelle works fast, places strips
              perfectly, and minimizes the part you don&apos;t love about
              waxing — the part that hurts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to book?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Request an Appointment
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
