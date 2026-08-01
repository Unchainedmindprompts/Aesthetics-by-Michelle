import type { Metadata } from "next";
import { servicePageGraph } from "@/lib/schema";
import Link from "next/link";

const BOOKING_URL = "/contact";


export const metadata: Metadata = {
  title: "Chemical Peel in Hayden, ID",
  description:
    "Chemical peel in Hayden, ID. Targeted exfoliation that lifts away damaged skin for smoother tone and softer texture.",
  alternates: { canonical: "/chemical-peel" },
};


const pageGraph = servicePageGraph({
  path: "/chemical-peel",
  pageName: "Chemical Peel in Hayden, ID",
  pageDescription: "Chemical peel in Hayden, ID. Targeted exfoliation that lifts away damaged skin for smoother tone and softer texture.",
});

export default function ChemicalPeelPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Chemical Peel — Smoother Tone, Softer Texture, Less Damage
          </h1>
          <p className="mt-8 font-sans text-warmGray">
            <span className="text-xl text-charcoal">$110</span>
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-warmGray">
            <p>
              A chemical peel is a precision exfoliation treatment that lifts
              away damaged surface skin to reveal smoother tone and softer
              texture underneath. Michelle selects the right solution and
              strength for your skin during consultation, then applies and
              neutralizes carefully — the whole appointment is calm, focused,
              and well-timed.
            </p>
            <p>
              You&apos;ll feel a mild tingling during the peel and may notice
              light flaking or peeling over the days that follow as your skin
              turns over. The result: brighter, more even tone, refined
              texture, and the kind of clarity that makes your other skincare
              work harder.
            </p>
          </div>

          <div className="mt-14 border-l-4 border-gold bg-softWhite p-8">
            <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
              Best for
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-charcoal">
              Sun damage, uneven tone, dullness, fine lines, rough texture, and
              skin that needs a meaningful refresh — anyone whose at-home
              exfoliation has plateaued.
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              Why book with Michelle
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
              Choosing the right peel for your skin — depth, formulation,
              timing — is the whole game. Michelle reads your skin first, picks
              accordingly, and walks you through aftercare so the result lasts.
              No one-size-fits-all chemistry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-cream md:text-4xl">
            Ready for a fresh layer?
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
