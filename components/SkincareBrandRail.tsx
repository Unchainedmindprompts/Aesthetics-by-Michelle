"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const brands = [
  {
    id: "ringana",
    name: "RINGANA",
    eyebrow: "FRESH BY DESIGN",
    heading: "Skincare, freshly made.",
    copy: "Freshly produced, vegan skincare with plant-based ingredients, from everyday cleansers to nourishing face and body care.",
    image: "/images/editorial/ringana-collection.webp",
    imageAlt: "A collection of RINGANA Fresh bottles in soft mint, peach and amber tones",
    href: "https://5058049.ringana.us/",
    linkText: "Explore RINGANA",
  },
  {
    id: "ellie",
    name: "EllieMD",
    eyebrow: "SCIENCE-LED CARE",
    heading: "A little more science.",
    copy: "Meet EllieVate Skin+, a targeted skincare serum featuring prescription tretinoin. Medical evaluation and prescribing are handled through EllieMD's healthcare providers, not Michelle.",
    image: "/images/editorial/elliemd-serum.webp",
    imageAlt: "EllieMD's matte pink skincare serum container on a teal and coral studio backdrop",
    href: "https://elliemd.com/product/skincare",
    linkText: "Explore EllieMD skincare",
  },
  {
    id: "zo",
    name: "ZO Skin Health",
    eyebrow: "PROFESSIONAL SKINCARE",
    heading: "Skin health, thoughtfully.",
    copy: "Explore the advanced cleansers, serums and targeted skin treatments from dermatologist-founded ZO Skin Health. Ask Michelle which products she currently carries.",
    image: "/images/editorial/zo-skincare-collection.webp",
    imageAlt: "ZO Skin Health's white and cobalt-blue cleanser tubes, bottles and skincare jars",
    href: "https://zoskinhealth.com/",
    linkText: "Explore ZO Skin Health",
  },
] as const;

export default function SkincareBrandRail() {
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);

  const navigate = (index: number) => {
    const next = (index + brands.length) % brands.length;
    setActive(next);
    const panel = rail.current?.children.item(next);
    if (panel instanceof HTMLElement) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (window.matchMedia("(max-width: 1023px)").matches) {
        rail.current?.scrollTo({
          left: panel.offsetLeft - (rail.current?.offsetLeft ?? 0),
          behavior: reduceMotion ? "instant" : "smooth",
        });
      }
    }
  };

  return (
    <div className="product-rail">
      <div className="product-rail__track" ref={rail} aria-label="Explore Michelle's skincare product brands">
        {brands.map((brand, index) => (
          <article
            key={brand.id}
            className={`product-rail__panel product-rail__panel--${brand.id} ${active === index ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <Image
              className="product-rail__image"
              src={brand.image}
              alt={brand.imageAlt}
              fill
              sizes="(min-width: 1024px) 56vw, (min-width: 700px) 46vw, 86vw"
            />
            <div className="product-rail__shade" aria-hidden="true" />
            <span className="product-rail__index">0{index + 1} / 03</span>
            <span className="product-rail__vertical" aria-hidden="true">{brand.name}</span>
            <button
              type="button"
              className="product-rail__trigger"
              onClick={() => navigate(index)}
              aria-label={`Show ${brand.name} skincare collection`}
              aria-expanded={active === index}
            />
            <div className="product-rail__caption">
              <span className="product-rail__eyebrow">{brand.eyebrow}</span>
              <h3>{brand.name}</h3>
              <p className="product-rail__heading">{brand.heading}</p>
              <p className="product-rail__copy">{brand.copy}</p>
              <a href={brand.href} target="_blank" rel="noopener noreferrer" className="product-rail__link">
                {brand.linkText}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="product-rail__navigation">
        <span>THREE BRANDS · THREE APPROACHES TO SKINCARE</span>
        <div className="product-rail__arrows">
          <button type="button" aria-label="Previous skincare brand" onClick={() => navigate(active - 1)}>←</button>
          <span className="product-rail__count">0{active + 1} / 03</span>
          <button type="button" aria-label="Next skincare brand" onClick={() => navigate(active + 1)}>→</button>
        </div>
      </div>
    </div>
  );
}
