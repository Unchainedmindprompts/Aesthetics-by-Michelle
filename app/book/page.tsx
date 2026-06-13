import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your appointment with Michelle Hoffman, Licensed Idaho Esthetician, at Aesthetics by Michelle in Hayden, Idaho.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="bg-cream pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Book
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Schedule with Michelle
          </h1>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Pick a service, then a date and time below.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="overflow-hidden rounded-sm bg-softWhite shadow-sm">
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=32894563&ref=embedded_csp"
              title="Schedule Appointment with Aesthetics by Michelle"
              width="100%"
              height="800"
              frameBorder="0"
              allow="payment"
            />
          </div>
          <p className="mt-6 text-center font-sans text-sm text-warmGray">
            Booking is powered by Acuity Scheduling. Your appointment is
            confirmed instantly.
          </p>
        </div>
        <Script
          src="https://embed.acuityscheduling.com/js/embed.js"
          strategy="afterInteractive"
        />
      </section>
    </>
  );
}
