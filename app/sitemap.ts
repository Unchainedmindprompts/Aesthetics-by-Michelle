import type { MetadataRoute } from "next";

const SITE_URL = "https://aestheticsbymichelle.com";

const routes = [
  "",
  "/about",
  "/services",
  "/microneedling",
  "/facials",
  "/chemical-peel",
  "/reiki",
  "/brow-lash",
  "/waxing",
  "/contact",
  "/blog",
  "/book",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
