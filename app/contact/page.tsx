import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Studio Hours",
  description:
    "Contact Aesthetics by Michelle in Hayden, ID. Studio hours, location, phone, and email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-serif text-5xl text-charcoal">Contact</h1>
    </main>
  );
}
