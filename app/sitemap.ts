import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-domain.com";
  const urls = [
    "/",
    "/case-studies",
    "/case-studies/melee",
    "/case-studies/duly",
    "/case-studies/memnai",
    "/skills",
    "/contact",
  ];
  const now = new Date();
  return urls.map((u) => ({ url: base + u, lastModified: now }));
}
