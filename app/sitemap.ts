import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { siteConfig } from "@/lib/site";
import { safeQuery } from "@/server/safe";
import { ContentStatus } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/inspiration",
    "/kitchens",
    "/nolte",
    "/mrida",
    "/wardrobes",
    "/hardware-appliances",
    "/products",
    "/brands",
    "/showroom",
    "/architects-designers",
    "/about",
    "/contact",
    "/book-consultation",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const [inspirations, collections, brands, products] = await Promise.all([
    safeQuery(
      () =>
        db.inspiration.findMany({
          where: { status: ContentStatus.PUBLISHED },
          select: { slug: true, updatedAt: true },
        }),
      [],
    ),
    safeQuery(
      () =>
        db.collection.findMany({
          where: { status: ContentStatus.PUBLISHED },
          select: { slug: true, updatedAt: true },
        }),
      [],
    ),
    safeQuery(
      () =>
        db.brand.findMany({
          where: { status: ContentStatus.PUBLISHED },
          select: { slug: true, updatedAt: true },
        }),
      [],
    ),
    safeQuery(
      () =>
        db.product.findMany({
          where: { status: ContentStatus.PUBLISHED },
          select: { slug: true, updatedAt: true },
        }),
      [],
    ),
  ]);

  return [
    ...staticRoutes,
    ...inspirations.map((item) => ({
      url: `${base}/inspiration/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...collections.map((item) => ({
      url: `${base}/collections/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...brands
      .filter((item) => item.slug !== "nolte" && item.slug !== "mrida")
      .map((item) => ({
        url: `${base}/brands/${item.slug}`,
        lastModified: item.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ...products.map((item) => ({
      url: `${base}/products/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
