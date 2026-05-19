import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "Waxing Services in Post Falls, Idaho",
  description:
    "Clean, precise face and underarm waxing in Post Falls, ID. Smooth results that last up to 4 weeks with Michelle Hoffman, Licensed Esthetician.",
  alternates: { canonical: "/waxing" },
};

const services = [
  {
    name: "Face Wax",
    price: "$40",
    duration: "60 minutes",
    description:
      "Clean, precise, and done right. Michelle removes unwanted hair from the chin, brows, and lips with a gentle waxing technique that keeps your skin smooth for up to 4 weeks. Quick, effective, and way better than doing it yourself at home.",
  },
  {
    name: "Under Arm Wax",
    price: "$25",
    duration: "15 minutes",
    description:
      "Fast, clean, and smooth for up to 4 weeks. Michelle makes it as comfortable as possible — in and out in 15 minutes with results that outlast your razor by a long shot.",
  },
];

export default function WaxingPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Waxing Services
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Clean, precise waxing for face and underarms.
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
