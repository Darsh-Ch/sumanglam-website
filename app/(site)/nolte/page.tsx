import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionBrandPage } from "@/features/brands/solution-brand-page";
import { getBrandBySlug } from "@/server/brands";
import { safeQuery } from "@/server/safe";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nolte — Premium German Kitchens",
  description:
    "Nolte at Sumanglam: premium German kitchen design systems — precision engineering, complete solutions, and luxury living spaces.",
};

// Nolte is kitchens only (project-vault/13_Rules_And_Constraints/Global Rules.md).
const pillars = [
  {
    title: "German Design Systems",
    copy: "Not cabinets assembled together — one engineered system where every module, hinge, and panel belongs.",
  },
  {
    title: "Precision Engineering",
    copy: "Tolerances measured in millimeters, hardware rated in decades. Built once, enjoyed daily.",
  },
  {
    title: "Luxury Living Spaces",
    copy: "Kitchens designed to anchor the home — materials and finishes that feel as considered as they look.",
  },
];

export default async function NoltePage() {
  const data = await safeQuery(() => getBrandBySlug("nolte"), null);
  if (!data) notFound();

  return (
    <SolutionBrandPage
      data={data}
      eyebrow="Premium German Kitchen Solutions"
      pillars={pillars}
      ctaTitle="Experience a Nolte kitchen in person"
      ctaDescription="The Nolte floor at our showroom has complete kitchens on display. Walk through them, then talk to a designer about yours."
    />
  );
}
