import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Studio Hours",
  description:
    "Contact Aesthetics by Michelle in Hayden, ID. Call or email to request an appointment. Studio hours, location, phone, and email.",
  alternates: { canonical: "/contact" },
};

const hours = [
  { day: "Tuesday", time: "9 AM – 5 PM" },
  { day: "Thursday", time: "9 AM – 5 PM" },
  { day: "Friday", time: "9 AM – 3 PM" },
  { day: "Saturday", time: "9 AM – 3 PM" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Contact
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Request an Appointment
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Call or send a note and Michelle will get back to you with
            availability. Every appointment is one-on-one, so there is always a
            real conversation before your first visit.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <a
              href="tel:+14257654116"
              className="block border-t-4 border-gold bg-softWhite p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:col-span-5 md:p-8"
            >
              <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
                Call or text
              </h2>
              <p className="mt-4 font-serif text-2xl text-charcoal md:text-3xl">
                (425) 765-4116
              </p>
              <p className="mt-3 font-sans text-warmGray">
                Fastest way to reach Michelle directly.
              </p>
            </a>

            <a
              href="mailto:aestheticsbymichellehoffman@gmail.com"
              className="block border-t-4 border-gold bg-softWhite p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:col-span-7 md:p-8"
            >
              <h2 className="font-sans text-sm uppercase tracking-widest text-gold">
                Email
              </h2>
              <p className="mt-4 font-serif text-sm text-charcoal sm:text-base lg:text-xl">
                aestheticsbymichellehoffman@gmail.com
              </p>
              <p className="mt-3 font-sans text-warmGray">
                Include the service you are interested in and a few times that
                work for you.
              </p>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Visit the studio
              </h2>
              <address className="mt-6 font-sans text-lg not-italic leading-relaxed text-warmGray">
                2151 W Hayden Ave
                <br />
                Hayden, ID 83835
              </address>
              <p className="mt-6 font-sans text-warmGray">
                Serving Hayden, Coeur d&apos;Alene, Post Falls, and the Spokane
                Valley area.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
                Hours
              </h2>
              <dl className="mt-6 divide-y divide-taupe/30 font-sans text-warmGray">
                {hours.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex justify-between py-3 first:pt-0"
                  >
                    <dt>{entry.day}</dt>
                    <dd className="text-charcoal">{entry.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-sans text-sm italic text-warmGray">
                Appointments required. Walk-ins are not accepted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
