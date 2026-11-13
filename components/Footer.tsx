import Link from "next/link";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      {/* Reused botanical illustration from the Meet Michelle section — no repeated wording. */}
      <div className="editorial-footer__pattern" aria-hidden="true">
        <svg
          className="editorial-footer__botanical editorial-footer__botanical--left"
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
          className="editorial-footer__botanical editorial-footer__botanical--right"
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
      </div>
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
