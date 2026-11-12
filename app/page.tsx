import Image from "next/image";
import Link from "next/link";
import StudioAddress from "@/components/StudioAddress";
import { webPageGraph } from "@/lib/schema";

const BOOKING_URL = "/contact";

const homePageGraph = webPageGraph({
  path: "/",
  name: "Aesthetics by Michelle — Skincare Studio in Coeur d'Alene, ID",
  description:
    "Solo-practitioner skincare studio in Coeur d'Alene, Idaho. Microneedling, facials, chemical peel, brow & lash, waxing, and reiki body healing.",
});

const services = [
  { title: "Microneedling", href: "/microneedling", image: "/editorial-media/microneedling" },
  { title: "Facials", href: "/facials", image: "/editorial-media/facials" },
  { title: "Chemical Peels", href: "/chemical-peel", image: "/editorial-media/chemical-peels" },
  { title: "Brow & Lash", href: "/brow-lash", image: "/editorial-media/brow-lash" },
  { title: "Waxing", href: "/waxing", image: "/editorial-media/waxing" },
  { title: "Reiki", href: "/reiki", image: "/editorial-media/reiki" },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: EDITORIAL HERO — desktop image reference, mobile accessible layout */}
      <section className="editorial-hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">Skincare, done with intention.</h1>
        <div className="editorial-hero__desktop">
          <Image
            src="/editorial-media/hero"
            alt="Calm skincare still life with serum bottles, stacked stones, white vase and folded towel; the words Skincare, done with intention"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <Link href={BOOKING_URL} className="editorial-hero__button" aria-label="Request an Appointment">
            <span className="sr-only">Request an Appointment</span>
          </Link>
        </div>
        <div className="editorial-hero__mobile">
          <Image src="/editorial-media/facials" alt="Clean white spa towels and a ceramic bowl" fill priority unoptimized sizes="100vw" className="object-cover" />
          <div className="editorial-hero__mobile-shade" />
          <div className="editorial-hero__mobile-content">
            <p className="text-xs uppercase tracking-[0.2em] text-sage">Aesthetics by Michelle · Coeur d&apos;Alene, Idaho</p>
            <p className="mt-5 font-serif text-4xl leading-tight text-charcoal">Skincare, done with intention.</p>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-warmGray">One-on-one treatments and fresh, natural products, built around what your skin actually needs.</p>
            <Link href={BOOKING_URL} className="mt-7 inline-block rounded-full bg-[#3f604a] px-7 py-3 font-sans text-white">Request an Appointment</Link>
            <p className="mt-5 text-xs text-warmGray">Licensed Esthetician · ID License EST-292960</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: IMAGE-FIRST SERVICE CARDS */}
      <section id="services" className="bg-[#f8f5ef] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-10 flex items-center justify-center gap-6 md:mb-14 md:gap-10">
            <span className="h-px flex-1 bg-sage/40" aria-hidden="true" />
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">Services</h2>
            <span className="h-px flex-1 bg-sage/40" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-2xl bg-[#f8f5ef] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
                aria-label={`Explore ${service.title}`}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} treatment imagery`}
                    fill
                    unoptimized
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="px-4 py-5 text-center font-serif text-2xl text-charcoal">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO — MEET MICHELLE */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            About
          </p>
          <h2 className="mt-6 font-serif text-4xl text-charcoal md:text-5xl">
            Skincare, done with intention.
          </h2>
          <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
            Aesthetics by Michelle is a solo-practitioner skincare studio in
            Coeur d&apos;Alene, serving Hayden, Post Falls, and the Spokane
            Valley area. Every appointment is one-on-one — no revolving door of
            staff, no rushed treatments, no generic service menu. Just
            Michelle, her many years of experience, and a treatment plan
            tailored to your skin.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
            Whether you&apos;re new to professional skincare or you&apos;ve been
            around the industry long enough to know the difference, the goal is
            the same: treatments that work, honest recommendations, and visible
            results.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-block font-sans text-charcoal underline underline-offset-4 transition-colors duration-300 hover:text-sage"
          >
            Learn more about Michelle →
          </Link>
        </div>
      </section>

      {/* SECTION 4: WHY AESTHETICS BY MICHELLE */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-sans text-sm uppercase tracking-widest text-gold">
              Why Choose Aesthetics by Michelle
            </p>
            <h2 className="mt-6 font-serif text-4xl text-charcoal md:text-5xl">
              A different kind of skincare studio.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <article>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sage/20">
                <div className="h-4 w-4 rounded-full bg-sage" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                One-on-One Attention
              </h3>
              <p className="mt-4 font-sans leading-relaxed text-warmGray">
                Every appointment is with Michelle directly. No handoffs, no
                rotating staff, no generic service scripts.
              </p>
            </article>

            <article>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                <div className="h-4 w-4 rounded-full bg-gold" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Licensed &amp; Experienced
              </h3>
              <p className="mt-4 font-sans leading-relaxed text-warmGray">
                Many years in the beauty industry. Idaho Esthetician license
                EST-292960. Honest recommendations, every time.
              </p>
            </article>

            <article>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-taupe/30">
                <div className="h-4 w-4 rounded-full bg-taupe" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Tailored Treatments
              </h3>
              <p className="mt-4 font-sans leading-relaxed text-warmGray">
                Your skin is different every season, every year, every stage.
                Treatments are built around where you are right now — not where
                you were last time.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: LOCATION & HOURS */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-12">
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-gold">
              Visit
            </p>
            <h2 className="mt-6 font-serif text-4xl text-charcoal md:text-5xl">
              Visit the studio.
            </h2>
            <address className="mt-8 not-italic font-sans text-lg leading-relaxed text-warmGray">
              <StudioAddress />
              <br />
              <a
                href="tel:+14257654116"
                className="transition-colors duration-300 hover:text-sage"
              >
                (425) 765-4116
              </a>
            </address>

            <h3 className="mt-8 font-serif text-xl text-charcoal">Hours</h3>
            <dl className="mt-4 space-y-2 font-sans text-warmGray">
              <div className="flex justify-between border-b border-taupe/30 py-2">
                <dt>Tuesday</dt>
                <dd>9 AM – 5 PM</dd>
              </div>
              <div className="flex justify-between border-b border-taupe/30 py-2">
                <dt>Thursday</dt>
                <dd>9 AM – 5 PM</dd>
              </div>
              <div className="flex justify-between border-b border-taupe/30 py-2">
                <dt>Friday</dt>
                <dd>9 AM – 3 PM</dd>
              </div>
              <div className="flex justify-between border-b border-taupe/30 py-2">
                <dt>Saturday</dt>
                <dd>9 AM – 3 PM</dd>
              </div>
            </dl>

            <p className="mt-6 font-sans text-sm italic text-warmGray">
              Appointments required. Walk-ins not accepted.
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-sm">
            <Image
              src="/images/michelle-studio.png"
              alt="Michelle Hoffman inside her skincare studio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="bg-sage">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center md:px-12">
          <h2 className="font-serif text-4xl text-cream md:text-5xl">
            Ready to see what your skin is capable of?
          </h2>
          <p className="mt-6 font-sans text-lg text-cream/80">
            Schedule a consultation with Michelle and let&apos;s build the right
            plan for you.
          </p>
          <Link
            href={BOOKING_URL}
            className="mt-10 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Request an Appointment
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageGraph) }}
      />
    </>
  );
}
