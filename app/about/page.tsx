import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "About Michelle Hoffman, Licensed Esthetician",
  description:
    "Meet Michelle Hoffman, Licensed Idaho Esthetician (EST-292960). Solo-practitioner skincare studio in Post Falls focused on long-term skin health — tone, texture, and vitality.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            About
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-6xl">
            Helping you feel confident and beautiful in your own skin.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Skin is the largest organ in your body. Most people don&apos;t
              think about it that way — but Michelle does, every single day.
            </p>
            <p>
              Michelle became a licensed esthetician because she genuinely loves
              helping people feel good in their own skin. Not in a surface-level
              way. In the real way — where you look in the mirror after a
              treatment and actually like what you see. Where you walk out with
              a little more confidence than you walked in with.
            </p>
            <p className="font-serif text-2xl italic text-charcoal md:text-3xl">
              That&apos;s what drives her work.
            </p>
            <p>
              Every client who sits in Michelle&apos;s chair gets her full
              attention. She takes the time to understand your skin — its
              history, its quirks, what&apos;s bothering you, what you&apos;ve
              tried before. Then she builds from there. Because your skin
              isn&apos;t like anyone else&apos;s, and your treatment
              shouldn&apos;t be either.
            </p>
            <p>
              Her focus is on the things that matter most for long-term skin
              health: tone, texture, and overall vitality. Whether you&apos;re
              dealing with sun damage, the early signs of aging, stubborn acne
              scarring, or just skin that&apos;s been running on empty —
              Michelle meets you where you are and helps you get where you want
              to be.
            </p>
            <p>
              No pressure. No overwhelm. Just honest, skilled care from someone
              who truly loves what she does.
            </p>
          </div>

          <div className="mt-16 border-t border-taupe/30 pt-10 text-center">
            <p className="font-serif text-2xl text-charcoal md:text-3xl">
              Michelle Hoffman
            </p>
            <p className="mt-3 font-sans text-sm uppercase tracking-widest text-gold">
              Licensed Idaho Esthetician · EST-292960
            </p>
            <p className="mt-2 font-sans text-warmGray">
              Aesthetics by Michelle · Post Falls, Idaho
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to meet Michelle?
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
