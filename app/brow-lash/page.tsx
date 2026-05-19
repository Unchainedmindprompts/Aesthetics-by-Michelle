import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "Brow & Lash Services in Post Falls, Idaho",
  description:
    "Eyebrow lamination, eyelash lift and tint, and expert brow shaping in Post Falls, ID. Low-maintenance results that last up to 5 weeks with Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/brow-lash" },
};

const services = [
  {
    name: "Eyebrow Lamination",
    price: "$30",
    duration: "45 minutes",
    description:
      "If your brows have a mind of their own, this one's for you. Brow lamination uses a gentle perm-like solution to relax and redirect your brow hairs into place — smooth, full, and shaped exactly the way you want them. No more coaxing them into submission every morning. Results last up to 5 weeks, and you'll wonder why you waited this long.",
  },
  {
    name: "Eyelash Lift & Tint",
    price: "$75",
    duration: "60 minutes",
    description:
      "Wake up looking like you already have mascara on — because in a way, you do. Michelle lifts and curls your natural lashes from the root, then adds a tint for depth and definition that lasts up to 5 weeks. No extensions, no maintenance, no fuss. Just open your eyes and go. It's one of those small changes that makes a surprisingly big difference in how put-together you feel every single day.",
  },
  {
    name: "Eyebrow Wax & Shape",
    price: "$35",
    duration: "60 minutes",
    description:
      "A well-shaped brow changes your whole face — and Michelle has the eye for it. She takes the time to find your best shape, cleans up the strays, and leaves you with brows that frame everything else beautifully. Results last up to 4 weeks. It's a small appointment with a big payoff.",
  },
];

export default function BrowLashPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Brow &amp; Lash Services
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Brow lamination, eyelash lift and tint, and expert brow shaping —
            low-maintenance results that last.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-6 md:px-12">
          {services.map((service) => (
            <article
              key={service.name}
              className="border-t-4 border-gold bg-softWhite p-8 shadow-sm md:p-12"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                  {service.name}
                </h2>
                <p className="font-sans text-warmGray">
                  <span className="text-xl text-charcoal">{service.price}</span>
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
            Schedule with Michelle
          </Link>
        </div>
      </section>
    </>
  );
}
