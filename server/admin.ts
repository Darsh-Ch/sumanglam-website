import { db } from "@/lib/db";
import { ContentStatus, LeadStatus, type Prisma } from "@prisma/client";

export const leadStatusOptions = [
  LeadStatus.NEW,
  LeadStatus.CONTACTED,
  LeadStatus.QUALIFIED,
  LeadStatus.CONVERTED,
  LeadStatus.CLOSED,
] as const;

export const leadStatusLabels: Record<LeadStatus, string> = {
  [LeadStatus.NEW]: "New",
  [LeadStatus.CONTACTED]: "Contacted",
  [LeadStatus.QUALIFIED]: "Qualified",
  [LeadStatus.CONVERTED]: "Converted",
  [LeadStatus.CLOSED]: "Closed",
};

export async function getAdminOverview() {
  const [
    spaces,
    collections,
    inspirations,
    brands,
    products,
    showroomSections,
    leads,
    consultations,
    recentLeads,
    recentConsultations,
  ] = await Promise.all([
    db.space.count(),
    db.collection.count({ where: { status: ContentStatus.PUBLISHED } }),
    db.inspiration.count({ where: { status: ContentStatus.PUBLISHED } }),
    db.brand.count({ where: { status: ContentStatus.PUBLISHED } }),
    db.product.count({ where: { status: ContentStatus.PUBLISHED } }),
    db.showroomSection.count(),
    db.lead.count(),
    db.consultation.count(),
    db.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    db.consultation.findMany({
      include: { lead: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return {
    counts: {
      spaces,
      collections,
      inspirations,
      brands,
      products,
      showroomSections,
      leads,
      consultations,
    },
    recentLeads,
    recentConsultations,
  };
}

export async function getAdminLeads(options?: {
  status?: LeadStatus;
  page?: number;
  limit?: number;
}) {
  const page = Math.max(1, options?.page ?? 1);
  const limit = Math.min(50, Math.max(1, options?.limit ?? 25));
  const where: Prisma.LeadWhereInput = options?.status
    ? { leadStatus: options.status }
    : {};

  const [items, total] = await Promise.all([
    db.lead.findMany({
      where,
      include: {
        consultations: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.lead.count({ where }),
  ]);

  return { items, total, page, limit };
}

export async function getAdminLead(id: string) {
  return db.lead.findUnique({
    where: { id },
    include: {
      consultations: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  return db.lead.update({
    where: { id },
    data: { leadStatus: status },
  });
}

export async function getAdminConsultations(options?: { page?: number; limit?: number }) {
  const page = Math.max(1, options?.page ?? 1);
  const limit = Math.min(50, Math.max(1, options?.limit ?? 25));

  const [items, total] = await Promise.all([
    db.consultation.findMany({
      include: { lead: true },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.consultation.count(),
  ]);

  return { items, total, page, limit };
}

export async function getAdminConsultation(id: string) {
  return db.consultation.findUnique({
    where: { id },
    include: { lead: true },
  });
}

// ---------------------------------------------------------------------------
// Content management (admin content page + status/featured controls)
// ---------------------------------------------------------------------------

export const contentStatusOptions = [
  ContentStatus.DRAFT,
  ContentStatus.PUBLISHED,
  ContentStatus.ARCHIVED,
] as const;

export const contentStatusLabels: Record<ContentStatus, string> = {
  [ContentStatus.DRAFT]: "Draft",
  [ContentStatus.PUBLISHED]: "Published",
  [ContentStatus.ARCHIVED]: "Archived",
};

export const featuredContentTypes = ["inspiration", "brand", "product"] as const;
export type FeaturedContentType = (typeof featuredContentTypes)[number];

export const statusContentTypes = [
  "inspiration",
  "brand",
  "product",
  "collection",
] as const;
export type StatusContentType = (typeof statusContentTypes)[number];

const contentListLimit = 50;

export async function getAdminContentLists() {
  const [inspirations, brands, products, collections, showroomSections] =
    await Promise.all([
      db.inspiration.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          status: true,
          isFeatured: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: "desc" },
        take: contentListLimit,
      }),
      db.brand.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
          isFeatured: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: "desc" },
        take: contentListLimit,
      }),
      db.product.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          status: true,
          isFeatured: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: "desc" },
        take: contentListLimit,
      }),
      db.collection.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          status: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: "desc" },
        take: contentListLimit,
      }),
      db.showroomSection.findMany({
        select: {
          id: true,
          name: true,
          floorNumber: true,
          updatedAt: true,
        },
        orderBy: { updatedAt: "desc" },
        take: contentListLimit,
      }),
    ]);

  return { inspirations, brands, products, collections, showroomSections };
}

export async function setContentStatus(
  type: StatusContentType,
  id: string,
  status: ContentStatus,
) {
  switch (type) {
    case "inspiration":
      return db.inspiration.update({ where: { id }, data: { status } });
    case "brand":
      return db.brand.update({ where: { id }, data: { status } });
    case "product":
      return db.product.update({ where: { id }, data: { status } });
    case "collection":
      return db.collection.update({ where: { id }, data: { status } });
  }
}

export async function setContentFeatured(
  type: FeaturedContentType,
  id: string,
  isFeatured: boolean,
) {
  switch (type) {
    case "inspiration":
      return db.inspiration.update({ where: { id }, data: { isFeatured } });
    case "brand":
      return db.brand.update({ where: { id }, data: { isFeatured } });
    case "product":
      return db.product.update({ where: { id }, data: { isFeatured } });
  }
}
