import Link from "next/link";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-footer__inner">
        <div className="editorial-footer__main">
          <div className="editorial-footer__brand">
            <Link href="/" className="editorial-footer__brand-name">
              Aesthetics by Michelle
            </Link>
            <p>ONE-ON-ONE SKINCARE · COEUR D&apos;ALENE, IDAHO</p>
          </div>

          <nav className="editorial-footer__links" aria-label="Footer navigation">
            <p>EXPLORE</p>
            <Link href="/about">Meet Michelle</Link>
            <Link href="/services">Treatments</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="editorial-footer__links">
            <p>STAY IN TOUCH</p>
            <a href="mailto:aestheticsbymichellehoffman@gmail.com">Email Michelle</a>
            <a
              href="https://www.instagram.com/aestheticsbymichellehoffman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61559290697737"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="editorial-footer__base">
          <p>© {new Date().getFullYear()} Aesthetics by Michelle</p>
          <p>Licensed Idaho Esthetician · EST-292960</p>
        </div>
      </div>
    </footer>
  );
}
