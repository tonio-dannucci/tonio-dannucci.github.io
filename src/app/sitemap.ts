import type { MetadataRoute } from "next";
import { books } from "@/lib/books";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 1,
      url: SITE_URL,
    },
    // The PDFs are the actual content: search engines index them on their own.
    ...books.map((book) => ({
      changeFrequency: "yearly" as const,
      lastModified,
      priority: 0.7,
      url: `${SITE_URL}${book.href}`,
    })),
  ];
}
