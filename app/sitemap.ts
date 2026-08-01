import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

const SITE_URL = "https://aestheticsbymichelle.com";

const routes = [
  "",
  "/about",
  "/services",
  "/microneedling",
  "/facials",
  "/dermaplaning",
  "/chemical-peel",
  "/reiki",
  "/brow-lash",
  "/waxing",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(
      `${article.dateModified ?? article.datePublished}T12:00:00Z`,
    ),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
