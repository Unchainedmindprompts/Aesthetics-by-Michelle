import Link from "next/link";
import type { ReactNode } from "react";

/** Shared long-form typography primitives for blog articles. */

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 font-sans text-lg leading-relaxed text-warmGray">
      {children}
    </p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-16 font-serif text-3xl leading-tight text-charcoal md:text-4xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-12 font-serif text-2xl leading-tight text-charcoal md:text-3xl">
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-6 list-disc space-y-4 pl-6 font-sans text-lg leading-relaxed text-warmGray">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-6 list-decimal space-y-3 pl-6 font-sans text-lg leading-relaxed text-warmGray">
      {children}
    </ol>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-charcoal">{children}</strong>;
}

export function Rule() {
  return <hr className="mt-16 border-t border-taupe/40" />;
}

/** External citation link. */
export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-taupe underline-offset-4 transition-colors hover:text-sage"
    >
      {children}
    </a>
  );
}

/** Internal link to a canonical route. */
export function Int({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="underline decoration-gold underline-offset-4 transition-colors hover:text-sage"
    >
      {children}
    </Link>
  );
}

/** Horizontally scrollable wrapper so wide tables never break the page. */
export function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-left font-sans text-base text-warmGray">
        {children}
      </table>
    </div>
  );
}

export function TH({ children }: { children: ReactNode }) {
  return (
    <th className="border-b border-taupe/50 py-3 pr-6 font-sans text-sm font-semibold uppercase tracking-widest text-gold">
      {children}
    </th>
  );
}

export function TD({ children }: { children: ReactNode }) {
  return (
    <td className="border-b border-taupe/25 py-3 pr-6 align-top leading-relaxed">
      {children}
    </td>
  );
}
