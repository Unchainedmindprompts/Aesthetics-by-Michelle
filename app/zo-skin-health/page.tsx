import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STUDIO_ADDRESS, STUDIO_CITY_LINE } from "@/lib/location";
import { webPageGraph } from "@/lib/schema";
import styles from "./zo.module.css";

const path = "/zo-skin-health";
const title = "ZO Skin Health in Coeur d’Alene | Aesthetics by Michelle";
const description =
  "Explore ZO Skin Health skincare for texture, tone and hydration. Ask Michelle about products available for purchase at her Coeur d’Alene studio by appointment.";
const collectionImage = "/images/editorial/zo-skincare-collection-4k.webp";
const contact = "/contact#contact-options";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", title, description, url: path, images: [collectionImage] },
  twitter: { card: "summary_large_image", title, description, images: [collectionImage] },
};

const benefits = [
  {
    title: "Smoother texture",
    copy: "Exfoliating products help lift away surface buildup, leaving rough-feeling areas softer and smoother.",
  },
  {
    title: "More even-looking tone",
    copy: "Targeted serums can help soften the look of uneven pigmentation and brighten a dull-looking complexion.",
  },
  {
    title: "Hydration and comfort",
    copy: "Moisturizing formulas replenish hydration and help dry skin feel more comfortable throughout the day.",
  },
];

export default function ZoSkinHealthPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="zo-heading">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>In-studio skincare</p>
          <h1 id="zo-heading" className={styles.heading}>ZO<sup>®</sup><br />{" "}Skin Health</h1>
          <p className={styles.lead}>
            From daily cleansers to targeted serums, Michelle can help you choose
            ZO products that fit your skin and your routine. She sells the line
            in person at her Coeur d’Alene studio.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={contact}>Ask about availability</Link>
            <a className={styles.textLink} href="#skin-benefits">Explore the benefits <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.collection}>
          <Image src={collectionImage} alt="ZO Skin Health cleansers, serums and creams in white, cobalt and silver packaging."
            fill priority sizes="(min-width: 761px) 53vw, 100vw" />
        </div>
      </section>

      <section id="skin-benefits" className={styles.benefits} aria-labelledby="benefits-heading">
        <div className={styles.texture}>
          <Image src="/images/editorial/zo-skincare-textures.webp" alt="" fill
            sizes="(min-width: 761px) 44vw, 100vw" />
        </div>
        <div className={styles.benefitCopy}>
          <h2 id="benefits-heading">What would you like to improve?</h2>
          <dl className={styles.concerns}>
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <dt>{benefit.title}</dt>
                <dd>{benefit.copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.studio} aria-labelledby="studio-heading">
        <div className={styles.studioCopy}>
          <h2 id="studio-heading">Find your routine<br />with Michelle.</h2>
          <p>Bring your current routine and your questions. Michelle can talk through
            what you already use, what you might add, and which ZO products she has on hand.</p>
          <Link className={styles.lightButton} href={contact}>Contact Michelle</Link>
        </div>
        <div className={styles.visit}>
          <h3>In-office purchases</h3>
          <p>Visits are by appointment. Contact Michelle before coming in to confirm availability.</p>
          <address>{STUDIO_ADDRESS.street}, {STUDIO_ADDRESS.suite}<br />{STUDIO_CITY_LINE}</address>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageGraph({ path, name: title, description })),
      }} />
    </main>
  );
}
