"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { PointerEvent } from "react";

type SkincareSlide = {
  id: string;
  name: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  heading?: string;
  copy?: string;
  href?: string;
  linkText?: string;
};

const brands: readonly SkincareSlide[] = [
  {
    id: "ringana",
    name: "RINGANA",
    eyebrow: "FRESH BY DESIGN",
    heading: "Skincare, freshly made.",
    copy: "Freshly produced, vegan skincare with plant-based ingredients, from everyday cleansers to nourishing face and body care.",
    image: "/images/editorial/ringana-collection-4k.webp",
    imageAlt: "A collection of RINGANA Fresh bottles in soft mint, peach and amber tones",
    href: "https://5058049.ringana.us/",
    linkText: "Explore RINGANA",
  },
  {
    id: "nature",
    name: "Nature",
    copy: "Thoughtfully chosen ingredients. Care that respects your skin.",
  },
  {
    id: "ellie",
    name: "EllieMD",
    eyebrow: "SCIENCE-LED CARE",
    heading: "A little more science.",
    copy: "Meet EllieVate Skin+, a targeted skincare serum featuring prescription tretinoin. Medical evaluation and prescribing are handled through EllieMD's healthcare providers, not Michelle.",
    image: "/images/editorial/elliemd-serum-4k.webp",
    imageAlt: "EllieMD's matte pink skincare serum container on a teal and coral studio backdrop",
    href: "https://elliemd.com/product/skincare",
    linkText: "Explore EllieMD skincare",
  },
  {
    id: "ritual",
    name: "Ritual",
    copy: "A few intentional moments, repeated daily. Care becomes a ritual.",
  },
  {
    id: "zo",
    name: "ZO Skin Health",
    eyebrow: "PROFESSIONAL SKINCARE",
    heading: "Skin health, thoughtfully.",
    copy: "Explore the advanced cleansers, serums and targeted skin treatments from dermatologist-founded ZO Skin Health. Ask Michelle which products she currently carries.",
    image: "/images/editorial/zo-skincare-collection-4k.webp",
    imageAlt: "ZO Skin Health's white and cobalt-blue cleanser tubes, bottles and skincare jars",
    href: "https://zoskinhealth.com/",
    linkText: "Explore ZO Skin Health",
  },
  {
    id: "radiance",
    name: "Radiance",
    copy: "Healthy-looking skin, cared for over time. A glow that’s yours.",
  },
];

export default function SkincareBrandRail() {
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);

  const resetGlass = (event: PointerEvent<HTMLElement>) => {
    const style = event.currentTarget.style;
    ["--glass-rx", "--glass-ry", "--glass-x", "--glass-y"].forEach((name) => style.removeProperty(name));
  };

  const moveGlass = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" ||
        !window.matchMedia("(min-width: 1024px) and (hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const panel = event.currentTarget;
    const rect = panel.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    panel.style.setProperty("--glass-rx", `${(0.5 - y) * 4}deg`);
    panel.style.setProperty("--glass-ry", `${(x - 0.5) * 4}deg`);
    panel.style.setProperty("--glass-x", `${x * 100}%`);
    panel.style.setProperty("--glass-y", `${y * 100}%`);
  };

  const navigate = (index: number) => {
    const next = (index + brands.length) % brands.length;
    setActive(next);
    const panel = rail.current?.children.item(next);
    if (panel instanceof HTMLElement) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (window.matchMedia("(max-width: 1023px)").matches) {
        rail.current?.scrollTo({
          left: panel.offsetLeft,
          behavior: reduceMotion ? "instant" : "smooth",
        });
      }
    }
  };

  const trackMobileScroll = () => {
    const track = rail.current;
    if (!track || window.matchMedia("(min-width: 1024px)").matches) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((node, index) => {
      const distance = Math.abs((node as HTMLElement).offsetLeft - track.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActive((current) => current === closestIndex ? current : closestIndex);
  };

  return (
    <div className="product-rail">
      <div className="product-rail__track" ref={rail} onScroll={trackMobileScroll} aria-label="Explore Michelle's skincare edit">
        {brands.map((brand, index) => (
          <article
            key={brand.id}
            className={`product-rail__panel product-rail__panel--${brand.id} ${!brand.image ? "product-rail__panel--word" : ""} ${active === index ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onPointerMove={!brand.image && active === index ? moveGlass : undefined}
            onPointerLeave={!brand.image ? resetGlass : undefined}
            onPointerCancel={!brand.image ? resetGlass : undefined}
          >
            {brand.image && <Image
              className="product-rail__image"
              src={brand.image}
              alt={brand.imageAlt ?? brand.name}
              fill
              sizes="(min-width: 1024px) 50vw, (min-width: 701px) 66vw, 86vw"
            />}
            {brand.image && <div className="product-rail__shade" aria-hidden="true" />}
            {!brand.image && <div className="product-rail__glass" aria-hidden="true" />}
            <span className="product-rail__index">0{index + 1} / 0{brands.length}</span>
            {brand.image ? <span className="product-rail__vertical" aria-hidden="true">{brand.name}</span> : <div className="product-rail__word-content">
              <h3 className="product-rail__word">{brand.name}</h3>
              <p className="product-rail__word-copy">{brand.copy}</p>
            </div>}
            <button
              type="button"
              className="product-rail__trigger"
              onClick={() => navigate(index)}
              aria-label={`Show ${brand.name}${brand.href ? " skincare collection" : ""}`}
              aria-expanded={active === index}
            />
            {brand.image && <div className="product-rail__caption">
              {brand.eyebrow && <span className="product-rail__eyebrow">{brand.eyebrow}</span>}
              <h3>{brand.name}</h3>
              {brand.heading && <p className="product-rail__heading">{brand.heading}</p>}
              {brand.copy && <p className="product-rail__copy">{brand.copy}</p>}
              {brand.href && <a href={brand.href} target="_blank" rel="noopener noreferrer" className="product-rail__link">
                {brand.linkText}
                <span aria-hidden="true">↗</span>
              </a>}
            </div>}
          </article>
        ))}
      </div>

      <div className="product-rail__navigation">
        <span>NATURE · RITUAL · RADIANCE</span>
        <div className="product-rail__arrows">
          <button type="button" aria-label="Previous skincare slide" onClick={() => navigate(active - 1)}>←</button>
          <span className="product-rail__count">0{active + 1} / 0{brands.length}</span>
          <button type="button" aria-label="Next skincare slide" onClick={() => navigate(active + 1)}>→</button>
        </div>
      </div>
    </div>
  );
}
