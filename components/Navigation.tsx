"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const BOOKING_URL = "/contact";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-sage">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-2xl tracking-wide text-charcoal transition-colors hover:text-cream md:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={512}
            height={518}
            priority
            className="h-7 w-auto md:h-9"
          />
          Aesthetics by Michelle
        </Link>

        <ul className="hidden items-center gap-6 font-sans text-sm text-charcoal lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={BOOKING_URL}
          className="hidden rounded-full bg-cream px-5 py-2 font-sans text-sm text-charcoal transition-colors hover:bg-ivory lg:inline-block"
        >
          Request an Appointment
        </Link>

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
        <div className="border-t border-charcoal/10 bg-sage lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 font-sans text-base text-charcoal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href={BOOKING_URL}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-cream px-5 py-2 text-sm text-charcoal transition-colors hover:bg-ivory"
              >
                Request an Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
