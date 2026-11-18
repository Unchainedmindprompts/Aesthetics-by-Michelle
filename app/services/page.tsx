import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import styles from "./services.module.css";
import type { Metadata } from "next";
import Link from "next/link";

const BOOKING_URL = "/contact";
const accentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", display: "swap" });

export const metadata: Metadata = {
  title: "All Services & Pricing",
  description:
    "Browse all treatments — microneedling, facials, chemical peel, brow & lash, waxing, and reiki body healing.",
  alternates: { canonical: "/services" },
};

const categories = [
  {
    label: "Skin",
    photo: "facials",
    items: [
      { name: "Microneedling", href: "/microneedling" },
      { name: "Mini Facial", href: "/facials" },
      { name: "Facial", href: "/facials#facial" },
      { name: "Anti-Aging Facial", href: "/facials#anti-aging-facial" },
      { name: "Acne Facial", href: "/facials#acne-facial" },
      { name: "Reiki Facial", href: "/facials#reiki-facial" },
      { name: "Dermaplaning", href: "/dermaplaning" },
      { name: "Chemical Peel", href: "/chemical-peel" },
    ],
  },
  {
    label: "Brow & Lash",
    photo: "brow-lash",
    items: [
      { name: "Eyelash Lift & Tint", href: "/brow-lash" },
      { name: "Eyebrow Lamination", href: "/brow-lash" },
    ],
  },
  {
    label: "Waxing",
    photo: "waxing",
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
    photo: "reiki",
    items: [{ name: "Reiki Body Healing", href: "/reiki" }],
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="services-heading">
        <div className={styles.photo}>
          <Image
            src="/images/interior/treatment-room-editorial.webp"
            alt="Soft daylight falls across the linen treatment bed and oak cabinets in Michelle’s studio."
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Services</p>
          <h1 id="services-heading" className={styles.title}>
            Treatments{" "}<br />built around{" "}
            <em className={accentSerif.className}>your skin.</em>
          </h1>
          <p className={styles.intro}>
            Personalized skin, brow &amp; lash, waxing, and healing services — every
            appointment one-on-one with Michelle.
          </p>
          <a className={styles.explore} href="#treatment-menu">
            Explore treatments <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="treatment-menu" aria-labelledby="menu-title" tabIndex={-1} className={styles.menu}>
        <div className={styles.menuInner}>
          <h2 id="menu-title" className={styles.menuTitle}>
            Treatment <em className={accentSerif.className}>menu</em>
          </h2>
          <div className={styles.spread}>
            {categories.map((category) => {
              const featured = category.label === "Skin";
              return (
                <section
                  key={category.label}
                  aria-labelledby={`category-${category.photo}`}
                  className={featured ? styles.featured : styles.category}
                >
                  <div className={styles.categoryPhoto}>
                    <Image
                      src={`/images/interior/${category.photo}.jpg`}
                      alt=""
                      fill
                      sizes={featured ? "(min-width: 960px) 45vw, 90vw" : "(min-width: 960px) 12vw, 27vw"}
                    />
                  </div>
                  <h3 className={styles.categoryTitle} id={`category-${category.photo}`}>
                    {category.label}
                  </h3>
                  <ul className={`${styles.treatments} ${category.items.length > 3 ? styles.columns : ""}`}>
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-12">
          <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-6 font-sans text-lg text-warmGray">
            Request a consultation and Michelle will recommend the right
            treatment for what your skin actually needs.
          </p>
          <Link
            href={BOOKING_URL}
            className="mt-10 inline-block bg-charcoal px-10 py-4 font-sans text-cream transition-colors duration-300 hover:bg-warmGray"
          >
            Request an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
