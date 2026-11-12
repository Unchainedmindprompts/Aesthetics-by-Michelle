import Image from "next/image";
import Link from "next/link";
import StudioAddress from "@/components/StudioAddress";
import SkincareBrandRail from "@/components/SkincareBrandRail";
import { webPageGraph } from "@/lib/schema";

const BOOKING_URL = "/contact";

const homePageGraph = webPageGraph({
  path: "/",
  name: "Aesthetics by Michelle — Skincare Studio in Coeur d'Alene, ID",
  description:
    "Solo-practitioner skincare studio in Coeur d'Alene, Idaho. Microneedling, facials, chemical peel, brow & lash, waxing, and reiki body healing.",
});

const services = [
  { title: "Microneedling", href: "/microneedling", image: "/images/editorial/microneedling.webp" },
  { title: "Facials", href: "/facials", image: "/images/editorial/facials.webp" },
  { title: "Chemical Peels", href: "/chemical-peel", image: "/images/editorial/chemical-peels.webp" },
  { title: "Brow & Lash", href: "/brow-lash", image: "/images/editorial/brow-lash.webp" },
  { title: "Waxing", href: "/waxing", image: "/images/editorial/waxing.webp" },
  { title: "Reiki", href: "/reiki", image: "/images/editorial/reiki.webp" },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: EDITORIAL HERO — desktop image reference, mobile accessible layout */}
      <section className="editorial-hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">Skincare, done with intention.</h1>
        <div className="editorial-hero__desktop">
          <Image
            src="/images/editorial/hero.webp"
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
          <Image src="/images/editorial/facials.webp" alt="Clean white spa towels and a ceramic bowl" fill priority unoptimized sizes="100vw" className="object-cover" />
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

      {/* SECTION 2: EDITORIAL MEET MICHELLE */}
      <section
        id="meet-michelle"
        className="meet-feature"
        aria-labelledby="meet-michelle-heading"
      >
        {/* Original botanical and abstract portrait line art, purely decorative. */}
        <svg
          className="meet-feature__botanical meet-feature__botanical--left"
          viewBox="0 0 560 780"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-15 750C112 612 128 455 216 335S329 125 397-36" />
            <path d="M100 629C44 622 22 582 24 537C88 545 125 572 140 596" />
            <path d="M155 481C83 468 67 417 78 365C146 389 173 420 181 449" />
            <path d="M228 324C165 300 147 244 169 196C228 230 250 269 248 295" />
            <path d="M286 218C343 178 384 189 409 229C358 264 316 259 274 249" />
            <path d="M344 106C305 52 325 8 364-23C404 31 395 69 366 112" />
            <path d="M111 590C158 548 198 550 226 582C183 622 139 622 106 611" />
            <path d="M202 376C251 329 294 329 323 363C276 408 237 408 199 395" />
            <path d="M374 51C423 36 468 56 479 92C434 122 402 109 377 91" />
            <path d="M24 537C61 568 96 586 140 596M78 365C118 406 146 424 181 449M169 196C207 241 232 268 248 295" opacity=".56"/>
          </g>
          <g fill="currentColor" opacity=".42">
            <circle cx="397" cy="22" r="3.1" />
            <circle cx="429" cy="134" r="2" />
            <circle cx="247" cy="154" r="2.3" />
          </g>
        </svg>

        <svg
          className="meet-feature__botanical meet-feature__botanical--right"
          viewBox="0 0 650 820"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* A single abstract facial silhouette rather than stock wellness art. */}
            <path d="M452-34C346 12 309 108 328 184C338 221 369 246 381 277C397 316 382 336 359 351C342 362 339 374 356 389L390 414C403 425 403 437 387 452L373 462C371 480 398 496 396 525C393 569 347 613 261 633C212 643 195 672 195 722" />
            <path d="M361 306C386 297 404 304 426 325" />
            <path d="M366 309C390 328 406 331 426 325" />
            <path d="M380 302L373 284M390 300L389 282M401 305L406 290M413 311L421 300" />
            <path d="M373 462C397 455 413 460 431 470" />
            <path d="M293 634C307 689 341 729 393 766" />
            <path d="M482 90C538 174 549 248 538 309" />
            <path d="M480 609C543 666 583 728 628 793" />
            <path d="M474 614C507 606 526 574 521 542C486 552 473 572 474 614Z" />
            <path d="M521 683C563 675 592 641 588 604C552 613 524 640 521 683Z" />
            <path d="M571 743C602 734 625 714 643 678" />
          </g>
        </svg>

        <div className="meet-feature__glow" aria-hidden="true" />
        <div className="meet-feature__watermark" aria-hidden="true">MICHELLE</div>

        <div className="meet-feature__content">
          <div className="meet-feature__eyebrow">
            <span className="meet-feature__rule" aria-hidden="true" />
            A NOTE FROM MICHELLE
            <span className="meet-feature__rule" aria-hidden="true" />
          </div>

          <h2 id="meet-michelle-heading" className="meet-feature__heading">
            Good skincare starts with
            <span className="meet-feature__heading-accent">being heard.</span>
          </h2>

          <p className="meet-feature__description">
            Every face is different. Every story is different. I believe great
            skincare begins with taking the time to listen, understand your
            goals, and create an experience that&apos;s genuinely yours.
          </p>

          <Link href="/about" className="meet-feature__link">
            Meet Michelle
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true">
              <path d="M5 12h13m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* SECTION 3: IMAGE-FIRST SERVICE CARDS */}
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

      {/* SECTION 4: MICHELLE'S CURATED PRODUCT LINES */}
      <section id="skincare-products" className="product-edit" aria-labelledby="product-edit-heading">
        <div className="product-edit__inner">
          <header className="product-edit__header">
            <p className="product-edit__eyebrow">
              <span aria-hidden="true" />
              MICHELLE&apos;S SKINCARE EDIT
              <span aria-hidden="true" />
            </p>
            <h2 id="product-edit-heading" className="product-edit__heading">
              The care continues <em>at home.</em>
            </h2>
            <p className="product-edit__lead">
              What you use between appointments matters, too. Explore three
              distinctive skincare collections Michelle shares with her clients.
            </p>
          </header>

          <SkincareBrandRail />

          <p className="product-edit__disclaimer">
            Brand product photographs illustrate the collections, not Michelle&apos;s
            current inventory. Please confirm availability with Michelle.
            Prescription skincare requires a separate medical assessment
            through the prescribing provider.
          </p>
        </div>
      </section>

      {/* SECTION 5: LOCATION & HOURS */}
      <section className="visit-studio-palette bg-ivory py-20 md:py-28">
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
