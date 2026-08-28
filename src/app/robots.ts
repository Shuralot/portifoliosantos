import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://portifoliosantos.vercel.app";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/static/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
