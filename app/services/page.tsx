import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BOOKING_URL = "/book";

export const metadata: Metadata = {
  title: "All Services & Pricing",
  description:
    "Browse all treatments — microneedling, facials, chemical peel, brow & lash, waxing, and reiki body healing.",
  alternates: { canonical: "/services" },
};

const categories = [
  {
    label: "Skin",
    items: [
      { name: "Microneedling", href: "/microneedling" },
      { name: "Mini Facial", href: "/facials" },
      { name: "Customized Facials", href: "/facials" },
      { name: "Dermaplaning", href: "/dermaplaning" },
      { name: "Chemical Peel", href: "/chemical-peel" },
    ],
  },
  {
    label: "Brow & Lash",
    items: [
      { name: "Eyelash Lift & Tint", href: "/brow-lash" },
      { name: "Eyebrow Lamination", href: "/brow-lash" },
    ],
  },
  {
    label: "Waxing",
    items: [
      { name: "Eyebrow Wax", href: "/waxing" },
      { name: "Lip", href: "/waxing" },
      { name: "Nostrils", href: "/waxing" },
      { name: "Facial Wax", href: "/waxing" },
      { name: "Under Arms", href: "/waxing" },
    ],
  },
  {
    label: "Healing",
    items: [{ name: "Reiki Body Healing", href: "/reiki" }],
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-cream pb-14 pt-20 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="font-sans text-sm uppercase tracking-widest text-gold">
            Services
          </p>
          <h1 className="mt-6 font-serif text-5xl text-charcoal md:text-6xl">
            Treatments built around your skin.
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-6 md:mt-16 md:px-12">
          <div className="relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm md:aspect-[16/9]">
              <Image
                src="/images/michelle-facial-treatment.png"
                alt="Michelle Hoffman applying a facial treatment to a client in her Hayden studio"
                fill
                priority
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="md:absolute md:inset-y-0 md:left-0 md:flex md:w-[46%] md:items-center md:p-10 lg:p-14">
              <p className="mt-6 font-sans text-base leading-relaxed text-warmGray md:mt-0 md:text-xl md:text-charcoal">
                Personalized skin, brow &amp; lash, waxing, and healing
                services — every appointment one-on-one with Michelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.label}>
                <p className="font-sans text-sm uppercase tracking-widest text-cream/80">
                  {category.label}
                </p>
                <ul className="mt-6 space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block font-serif text-3xl leading-tight text-cream transition-colors duration-300 hover:text-gold md:text-4xl"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-6 font-sans text-lg text-warmGray">
            Book a consultation and Michelle will recommend the right treatment
            for what your skin actually needs.
          </p>
          <Link
            href={BOOKING_URL}
            className="mt-10 inline-block bg-charcoal px-10 py-4 font-sans text-cream transition-colors duration-300 hover:bg-warmGray"
          >
            Book Today
          </Link>
        </div>
      </section>
    </>
  );
}
