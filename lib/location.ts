/** Keep the visible address, structured data, and directions in sync. */
export const STUDIO_ADDRESS = {
  street: "1107 W Ironwood Dr",
  suite: "Suite C #1",
  city: "Coeur d'Alene",
  region: "ID",
  postalCode: "83814",
  country: "US",
} as const;

export const STUDIO_CITY_LINE = `${STUDIO_ADDRESS.city}, ${STUDIO_ADDRESS.region} ${STUDIO_ADDRESS.postalCode}`;
export const STUDIO_FULL_ADDRESS = `${STUDIO_ADDRESS.street}, ${STUDIO_ADDRESS.suite}, ${STUDIO_CITY_LINE}`;

// Use the full address rather than a business-name pin that may still show the old studio.
export const STUDIO_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_FULL_ADDRESS)}`;
