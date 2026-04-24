import Image from "next/image";
import Link from "next/link";

const BOOKING_URL = "https://aestheticsbymichellehoffman.as.me/";

const services = [
  {
    title: "Facials",
    description:
      "Customized facial treatments tailored to your skin type, goals, and season.",
    href: "/facials",
  },
  {
    title: "Dermaplaning",
    description:
      "Gentle exfoliation that removes dead skin and peach fuzz for a smoother, brighter complexion.",
    href: "/dermaplaning",
  },
  {
    title: "Brow & Lash Services",
    description:
      "Brow lamination, eyelash lift and tint, and expert brow shaping — low-maintenance results that last.",
    href: "/brow-lash",
  },
  {
    title: "Waxing Services",
    description: "Clean, precise waxing for face, brows, and underarms.",
    href: "/waxing",
  },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">
          <div className="order-2 md:order-1">
            <p className="font-sans text-sm uppercase tracking-widest text-gold">
              Licensed Esthetician • Post Falls, Idaho
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-charcoal md:text-6xl">
              Microneedling + Advanced Skincare in Post Falls
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray md:text-xl">
              Licensed skincare and aesthetics in Post Falls — personal,
              attentive, and built around what your skin actually needs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-none bg-charcoal px-8 py-4 font-sans text-cream transition-colors duration-300 hover:bg-warmGray"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="inline-block rounded-none border border-charcoal bg-transparent px-8 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-cream"
              >
                Explore Services
              </a>
            </div>
            <p className="mt-8 font-sans text-sm text-warmGray">
              Idaho Esthetician License EST-292960 • 15+ years of experience
            </p>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/images/michelle-hero.png"
              alt="Michelle Hoffman, licensed esthetician, in her Post Falls skincare studio"
              width={1600}
              height={900}
              priority
              className="h-auto w-full rounded-sm object-cover"
            />
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
            Post Falls, serving the Coeur d&apos;Alene and Spokane Valley area.
            Every appointment is one-on-one — no revolving door of staff, no
            rushed treatments, no generic service menu. Just Michelle, her 15+
            years of experience, and a treatment plan tailored to your skin.
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

      {/* SECTION 3: SERVICES OVERVIEW */}
      <section id="services" className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-sans text-sm uppercase tracking-widest text-gold">
              Services
            </p>
            <h2 className="mt-6 font-serif text-4xl text-charcoal md:text-5xl">
              Treatments built around your skin.
            </h2>
            <p className="mt-8 font-sans text-lg leading-relaxed text-warmGray">
              Every treatment at Aesthetics by Michelle starts with listening —
              to your goals, your concerns, and what your skin is telling us.
              Then we build the right plan from there.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="border-t-4 border-gold bg-softWhite p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <p className="font-sans text-xs uppercase tracking-widest text-gold">
                Hero Service
              </p>
              <h3 className="mt-4 font-serif text-2xl text-charcoal">
                Microneedling
              </h3>
              <p className="mt-4 font-sans text-warmGray">
                Collagen induction therapy for smoother texture, refined pores,
                and visibly healthier skin.
              </p>
              <Link
                href="/microneedling"
                className="mt-6 inline-block font-sans text-charcoal transition-colors duration-300 hover:text-sage"
              >
                Learn more →
              </Link>
            </article>

            {services.map((service) => (
              <article
                key={service.href}
                className="bg-softWhite p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-serif text-2xl text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-4 font-sans text-warmGray">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-block font-sans text-charcoal transition-colors duration-300 hover:text-sage"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
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
                15+ years in the skincare industry. Idaho Esthetician license
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
              620 N Post St, Suite 202
              <br />
              Post Falls, ID 83854
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

          <div className="flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-sm bg-sage/20">
            <Image
              src="/images/michelle-studio.png"
              alt="Michelle Hoffman, licensed esthetician, at her Post Falls studio"
              width={1200}
              height={1500}
              className="h-full w-auto object-contain"
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
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-cream px-10 py-4 font-sans text-charcoal transition-colors duration-300 hover:bg-ivory"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </>
  );
}
