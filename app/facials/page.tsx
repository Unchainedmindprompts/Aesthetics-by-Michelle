import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "Facials in Post Falls, Idaho",
  description:
    "Customized 60-minute facials in Post Falls, ID. Deep cleansing, exfoliation, masking, and targeted treatments tailored to your skin by Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/facials" },
};

export default function FacialsPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Facials
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Customized facial treatments tailored to your skin type, goals, and
            season.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <article className="border-t-4 border-gold bg-softWhite p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Facial
              </h2>
              <p className="font-sans text-warmGray">
                <span className="text-xl text-charcoal">$95</span>
                <span className="mx-2">•</span>
                <span>60 minutes</span>
              </p>
            </div>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Your skin is as unique as you are — and that&apos;s exactly how
              Michelle treats it. Every facial starts with a real conversation
              about what your skin needs right now, then she gets to work: deep
              cleansing, balancing your pH, steaming, exfoliating, masking, and
              finishing with targeted moisturizers, eye serum, SPF, and retinol
              when your skin calls for it. You&apos;ll leave feeling refreshed,
              cared for, and genuinely glowing. This isn&apos;t a cookie-cutter
              treatment — it&apos;s your skin, given the attention it deserves.
            </p>
          </article>
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
            Schedule with Michelle
          </Link>
        </div>
      </section>
    </>
  );
}
