import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-sage text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl tracking-wide">Aesthetics by Michelle</h3>
          <address className="mt-4 not-italic font-sans text-sm leading-relaxed">
            620 N Post St, Suite 202
            <br />
            Post Falls, ID 83854
            <br />
            <a href="tel:+14257654116" className="transition-colors hover:text-clay">
              (425) 765-4116
            </a>
            <br />
            <a
              href="mailto:aestheticsbymichellehoffman@gmail.com"
              className="transition-colors hover:text-clay"
            >
              aestheticsbymichellehoffman@gmail.com
            </a>
          </address>
        </div>

        <div>
          <h4 className="font-serif text-xl">Hours</h4>
          <ul className="mt-4 space-y-1 font-sans text-sm">
            <li>Tuesday: 9 AM – 5 PM</li>
            <li>Thursday: 9 AM – 5 PM</li>
            <li>Friday: 9 AM – 3 PM</li>
            <li>Saturday: 9 AM – 3 PM</li>
          </ul>
          <p className="mt-4 font-sans text-xs italic text-cream/80">
            Appointments required.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl">Connect</h4>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            <li>
              <a
                href="https://www.instagram.com/aestheticsbymichellehoffman"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61559290697737"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://aestheticsbymichellehoffman.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 font-sans text-xs text-cream/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aesthetics by Michelle. All rights reserved.</p>
          <p>
            Licensed Idaho Esthetician · EST-292960 ·{" "}
            <Link href="/contact" className="transition-colors hover:text-clay">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
