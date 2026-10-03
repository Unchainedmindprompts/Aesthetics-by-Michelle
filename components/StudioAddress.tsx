import { STUDIO_ADDRESS, STUDIO_CITY_LINE, STUDIO_MAP_URL } from "@/lib/location";

export default function StudioAddress() {
  return (
    <a
      href={STUDIO_MAP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View directions to ${STUDIO_ADDRESS.street}, ${STUDIO_ADDRESS.suite}, ${STUDIO_CITY_LINE} on Google Maps`}
      className="transition-opacity hover:opacity-80"
    >
      {STUDIO_ADDRESS.street}
      <br />
      {STUDIO_ADDRESS.suite}
      <br />
      {STUDIO_CITY_LINE}
    </a>
  );
}
