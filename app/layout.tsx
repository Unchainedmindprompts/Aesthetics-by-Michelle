import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://aestheticsbymichelle.com";
const SITE_NAME = "Aesthetics by Michelle";
const HOME_TITLE = "Aesthetics by Michelle — Skincare Studio in Hayden, ID";
const SITE_DESCRIPTION =
  "Solo-practitioner skincare studio in Hayden, Idaho. Microneedling, facials, chemical peel, brow & lash, waxing, and reiki body healing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "2151 W Hayden Ave",
  addressLocality: "Hayden",
  addressRegion: "ID",
  postalCode: "83835",
  addressCountry: "US",
};

const socialProfiles = [
  "https://www.instagram.com/aestheticsbymichellehoffman",
  "https://www.facebook.com/profile.php?id=61559290697737",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      sameAs: socialProfiles,
    },
    {
      "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      founder: { "@id": `${SITE_URL}/#person` },
      address: postalAddress,
      telephone: "+14257654116",
      email: "aestheticsbymichellehoffman@gmail.com",
      url: SITE_URL,
      priceRange: "$$",
      areaServed: ["Hayden", "Coeur d'Alene", "Post Falls", "Spokane Valley"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "15:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "15:00",
        },
      ],
      sameAs: socialProfiles,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Michelle Hoffman",
      jobTitle: "Licensed Esthetician",
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Idaho Esthetician License",
        identifier: "EST-292960",
        recognizedBy: {
          "@type": "Organization",
          name: "Idaho Barber and Cosmetology Services Licensing Board",
        },
      },
      knowsAbout: [
        "Microneedling",
        "Facials",
        "Chemical Peel",
        "Brow Lamination",
        "Eyelash Lift and Tint",
        "Waxing Services",
        "Reiki Healing",
        "Skincare",
      ],
      sameAs: ["https://www.instagram.com/aestheticsbymichellehoffman"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}/#place`,
      name: "Aesthetics by Michelle Studio",
      address: postalAddress,
      telephone: "+14257654116",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-cream font-sans text-charcoal antialiased">
        <Navigation />
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
