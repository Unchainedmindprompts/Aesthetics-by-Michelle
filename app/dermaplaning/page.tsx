import type { Metadata } from "next";
import { servicePageGraph } from "@/lib/schema";
import Link from "next/link";

const BOOKING_URL = "/contact";


export const metadata: Metadata = {
  title: "Dermaplaning in Hayden, ID",
  description:
    "Dermaplaning in Hayden, ID. A 30-minute treatment that gently removes dead skin and peach fuzz for an immediately smoother, brighter complexion.",
  alternates: { canonical: "/dermaplaning" },
};


const pageGraph = servicePageGraph({
  path: "/dermaplaning",
  pageName: "Dermaplaning in Hayden, ID",
  pageDescription: "Dermaplaning in Hayden, ID. A 30-minute treatment that gently removes dead skin and peach fuzz for an immediately smoother, brighter complexion.",
});

export default function DermaplaningPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Dermaplaning — Smoother Skin and a Brighter Glow in 30 Minutes
          </h1>
          <p className="mt-8 font-sans text-warmGray">
            <span className="text-xl text-charcoal">$40</span>
            <span className="mx-2">•</span>
            <span>30 minutes</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              Dermaplaning is a gentle, deeply satisfying treatment that uses
              a sterile surgical blade to remove the top layer of dead skin
              cells and the fine vellus hair (peach fuzz) on your face. The
              result is immediate: skin feels remarkably soft, makeup glides
              on cleanly, and every serum and moisturizer you apply
              afterward absorbs significantly better.
            </p>
            <p>
              There&apos;s no downtime, no redness, no peeling — just a
              polished, lit-from-within finish you can see the second you sit
              up. Great as a standalone thirty-minute refresh, or ask about
              adding it to a facial for an even deeper result.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Dull or flaky skin, makeup that looks cakey, peach fuzz
              you&apos;d rather not see, special events, and anyone whose
              products feel like they&apos;re sitting on top of the skin.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Dermaplaning is all about hand pressure, blade angle, and
              knowing exactly when to stop. Michelle delivers a flawless
              finish — safely, comfortably, and without irritating your skin
              barrier.
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
            Request an Appointment
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph) }}
      />
    </>
  );
}
