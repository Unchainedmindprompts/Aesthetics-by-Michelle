import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "Microneedling in Post Falls, Idaho",
  description:
    "Collagen induction therapy in Post Falls, ID. Micro-needling for acne scarring, rosacea, sun damage, and long-term skin health with Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/microneedling" },
};

export default function MicroneedlingPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Hero Service
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Micro-Needling
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Collagen induction therapy for smoother texture, refined pores, and
            visibly healthier skin.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <article className="border-t-4 border-gold bg-softWhite p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Micro-Needling
              </h2>
              <p className="font-sans text-warmGray">
                <span className="text-xl text-charcoal">$165</span>
                <span className="mx-2">•</span>
                <span>60 minutes</span>
              </p>
            </div>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              One of Michelle&apos;s favorite services for a reason — the
              results speak for themselves. This collagen induction therapy uses
              tiny, precise needles to trigger your skin&apos;s natural healing
              response, building fresh collagen from the inside out. Whether
              you&apos;re dealing with acne scarring, rosacea, sun damage, or
              just want smoother, more resilient skin, micro-needling meets you
              where you are. It&apos;s one of the most effective things you can
              do for long-term skin health — and Michelle will walk you through
              every step of it.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to start with micro-needling?
          </h2>
          <Link
            href={BOOKING_URL}
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
