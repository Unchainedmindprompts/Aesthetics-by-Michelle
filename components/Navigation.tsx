"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/microneedling", label: "Microneedling" },
  { href: "/facials", label: "Facials" },
  { href: "/dermaplaning", label: "Dermaplaning" },
  { href: "/brow-lash", label: "Brow & Lash" },
  { href: "/waxing", label: "Waxing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const BOOKING_URL = "https://aestheticsbymichellehoffman.as.me/";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage/20 bg-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-charcoal transition-colors hover:text-sage"
          onClick={() => setOpen(false)}
        >
          Aesthetics by Michelle
        </Link>

        <ul className="hidden items-center gap-6 font-sans text-sm text-charcoal lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-sage"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-sage px-5 py-2 font-sans text-sm text-softWhite transition-colors hover:bg-charcoal lg:inline-block"
        >
          Book Now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sage/20 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 font-sans text-base text-charcoal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 transition-colors hover:text-sage"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-sage px-5 py-2 text-sm text-softWhite transition-colors hover:bg-charcoal"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
