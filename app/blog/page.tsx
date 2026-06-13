import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes — Skincare from Michelle Hoffman",
  description:
    "Skincare notes, results, and what's working for clients of Aesthetics by Michelle in Hayden, ID.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-serif text-5xl text-charcoal">Blog</h1>
    </main>
  );
}
