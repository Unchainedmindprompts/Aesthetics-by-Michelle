import type { Metadata } from "next";

const BOOKING_URL = "https://aestheticsbymichellehoffman.as.me/";

export const metadata: Metadata = {
  title: "Dermaplaning in Post Falls, Idaho",
  description:
    "Gentle dermaplaning in Post Falls, ID. Removes dead skin and peach fuzz for a smoother, brighter complexion. 60 minutes with Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/dermaplaning" },
};

export default function DermaplaningPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Dermaplaning
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Gentle exfoliation that removes dead skin and peach fuzz for a
            smoother, brighter complexion.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <article className="border-t-4 border-gold bg-softWhite p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Dermaplaning
              </h2>
              <p className="font-sans text-warmGray">
                <span className="text-xl text-charcoal">$40</span>
                <span className="mx-2">•</span>
                <span>60 minutes</span>
              </p>
            </div>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Think of this as a fresh start for your face. Michelle gently
              removes the outermost layer of dead skin cells and that fine
              vellus hair (peach fuzz) that quietly dulls your complexion.
              What&apos;s left is skin that&apos;s noticeably smoother, softer,
              and brighter — and a surface that actually lets your skincare
              products absorb the way they&apos;re supposed to. It&apos;s a
              surprisingly relaxing treatment with results you&apos;ll see the
              moment you look in the mirror.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready to book your dermaplaning?
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Schedule with Michelle
          </a>
        </div>
      </section>
    </>
  );
}
