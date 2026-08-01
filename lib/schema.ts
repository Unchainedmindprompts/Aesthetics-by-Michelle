/**
 * Single source of truth for the site's structured data.
 *
 * Canonical entities:
 *   #business  - the primary business entity (HealthAndBeautyBusiness/LocalBusiness)
 *   #person    - Michelle Hoffman, founder and practitioner
 *   #website   - the website, published by #business
 *   {path}#webpage - one WebPage per route
 *   {path}#service - one persistent Service per service route
 */

export const SITE_URL = "https://aestheticsbymichelle.com";
export const SITE_NAME = "Aesthetics by Michelle";

export const ID = {
  business: `${SITE_URL}/#business`,
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  serviceCatalog: `${SITE_URL}/#service-catalog`,
  appointmentRequest: `${SITE_URL}/#appointment-request`,
  webPage: (path: string) => `${SITE_URL}${path}#webpage`,
  service: (path: string) => `${SITE_URL}${path}#service`,
} as const;

const TELEPHONE = "+14257654116";
const EMAIL = "aestheticsbymichellehoffman@gmail.com";

const socialProfiles = [
  "https://www.instagram.com/aestheticsbymichellehoffman",
  "https://www.facebook.com/profile.php?id=61559290697737",
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "2151 W Hayden Ave",
  addressLocality: "Hayden",
  addressRegion: "ID",
  postalCode: "83835",
  addressCountry: "US",
} as const;

/**
 * Cities the business serves. The studio itself is in Hayden only; the
 * remaining entries describe reach, not additional locations.
 */
const areaServed = [
  { "@type": "City", name: "Hayden", addressRegion: "ID" },
  { "@type": "City", name: "Coeur d'Alene", addressRegion: "ID" },
  { "@type": "City", name: "Post Falls", addressRegion: "ID" },
  { "@type": "City", name: "Spokane Valley", addressRegion: "WA" },
];

const openingHoursSpecification = [
  { day: "Tuesday", opens: "09:00", closes: "17:00" },
  { day: "Thursday", opens: "09:00", closes: "17:00" },
  { day: "Friday", opens: "09:00", closes: "15:00" },
  { day: "Saturday", opens: "09:00", closes: "15:00" },
].map(({ day, opens, closes }) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: day,
  opens,
  closes,
}));

export type ServiceDefinition = {
  path: string;
  name: string;
  serviceType: string;
  description: string;
};

/**
 * One entry per service route. These descriptions are carried over verbatim
 * from each page's existing schema so the canonical Service facts do not
 * change as part of the architecture cleanup.
 */
export const SERVICES: ServiceDefinition[] = [
  {
    path: "/microneedling",
    name: "Microneedling",
    serviceType: "Microneedling",
    description:
      "Microneedling is the closest thing skincare has to a reset button. Using a precision pen of ultra-fine needles, Michelle creates microscopic channels in the skin that signal your body to flood the area with collagen and elastin.",
  },
  {
    path: "/facials",
    name: "Customized Facials",
    serviceType: "Facial Treatment",
    description:
      "Five customized facial options built around what your skin is doing right now — classic, anti-aging, with dermaplaning, microdermabrasion, or paired with reiki body energy healing. All include cleanse, exfoliation, red light therapy, mask, and moisturizer.",
  },
  {
    path: "/dermaplaning",
    name: "Dermaplaning",
    serviceType: "Dermaplaning",
    description:
      "A gentle exfoliation treatment that uses a sterile blade to remove the top layer of dead skin cells and fine vellus hair, revealing softer, brighter skin.",
  },
  {
    path: "/chemical-peel",
    name: "Chemical Peel",
    serviceType: "Chemical Peel",
    description:
      "A chemical exfoliation treatment that lifts away damaged surface skin, revealing smoother tone and softer texture underneath.",
  },
  {
    path: "/brow-lash",
    name: "Brow & Lash Services",
    serviceType: "Beauty Services",
    description:
      "Brow lamination, lash lift and tint, and expert brow shaping designed to enhance what you already have and save you fifteen minutes every morning.",
  },
  {
    path: "/waxing",
    name: "Waxing Services",
    serviceType: "Waxing",
    description:
      "Clean, precise facial, brow, and underarm waxing using high-quality wax and a gentle, experienced hand. Walk out smoother, neater, and with skin that's prepped and soothed.",
  },
  {
    path: "/reiki",
    name: "Reiki Body Healing",
    serviceType: "Reiki Healing",
    description:
      "A 45-minute reiki session focused on aligning the body's energy and flow through gentle hands-on touch.",
  },
];

export function serviceByPath(path: string): ServiceDefinition {
  const found = SERVICES.find((s) => s.path === path);
  if (!found) throw new Error(`No service definition registered for ${path}`);
  return found;
}

/** The canonical Service node for a route. */
export function serviceNode(service: ServiceDefinition) {
  return {
    "@type": "Service",
    "@id": ID.service(service.path),
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: { "@id": ID.business },
    areaServed,
  };
}

/**
 * Requesting an appointment is a communication, not a confirmed booking.
 * BookAction/ReserveAction would imply instant confirmation the site
 * does not provide.
 */
const appointmentRequestAction = {
  "@type": "CommunicateAction",
  "@id": ID.appointmentRequest,
  name: "Request an Appointment",
  description:
    "Call or email to request an appointment. Michelle follows up with availability; submitting a request does not confirm a booking.",
  target: {
    "@type": "EntryPoint",
    urlTemplate: `${SITE_URL}/contact`,
    actionPlatform: [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform",
    ],
  },
};

function businessNode() {
  return {
    "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": ID.business,
    name: SITE_NAME,
    url: SITE_URL,
    address: postalAddress,
    telephone: TELEPHONE,
    email: EMAIL,
    priceRange: "$$",
    founder: { "@id": ID.person },
    areaServed,
    openingHoursSpecification,
    sameAs: socialProfiles,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": ID.serviceCatalog,
      name: `${SITE_NAME} Services`,
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": ID.service(service.path) },
      })),
    },
    potentialAction: appointmentRequestAction,
  };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": ID.person,
    name: "Michelle Hoffman",
    jobTitle: "Licensed Esthetician",
    worksFor: { "@id": ID.business },
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
  };
}

function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ID.business },
  };
}

/**
 * Site-wide identity graph. Emitted once from the root layout; repeating the
 * same @ids across routes is a merge, not a duplicate.
 */
export function identityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [businessNode(), personNode(), webSiteNode()],
  };
}

type WebPageOptions = {
  path: string;
  name: string;
  description: string;
  /** Canonical @id of the entity this page is primarily about. */
  aboutId?: string;
};

export function webPageGraph({
  path,
  name,
  description,
  aboutId,
}: WebPageOptions) {
  const subject = aboutId ?? ID.business;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": ID.webPage(path),
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": ID.website },
    about: { "@id": subject },
    mainEntity: { "@id": subject },
  };
}

/**
 * A service route's graph: the canonical Service plus the WebPage that
 * presents it. The Service @id is stable and reused wherever referenced.
 */
export function servicePageGraph({
  path,
  pageName,
  pageDescription,
}: {
  path: string;
  pageName: string;
  pageDescription: string;
}) {
  const service = serviceByPath(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode(service),
      {
        "@type": "WebPage",
        "@id": ID.webPage(path),
        url: `${SITE_URL}${path}`,
        name: pageName,
        description: pageDescription,
        isPartOf: { "@id": ID.website },
        about: { "@id": ID.service(path) },
        mainEntity: { "@id": ID.service(path) },
      },
    ],
  };
}
