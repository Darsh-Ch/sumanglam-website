import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { PageHero } from "@/components/shared/page-hero";
import { BrandCard } from "@/components/shared/brand-card";
import { EmptyState } from "@/components/shared/empty-state";
import { PageViewTracker } from "@/components/shared/page-view-tracker";
import { Reveal } from "@/components/motion/reveal";
import { getBrands } from "@/server/brands";
import { safeQuery } from "@/server/safe";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "The brand ecosystem behind Sumanglam — Nolte and Mrida solutions, plus product brands like Bosch, Siemens, Hettich, Häfele, Blum, and Yale.",
};

export default async function BrandsPage() {
  const { solutionBrands, productBrands } = await safeQuery(getBrands, {
    solutionBrands: [],
    productBrands: [],
  });

  return (
    <>
      <PageViewTracker event="brand_viewed" sourceType="brand-listing" />
      <PageHero
        eyebrow="Our Brand Ecosystem"
        title="Every brand here earned its place"
        description="Solution brands design complete spaces. Product brands perfect the details. Together they're why our showroom feels different."
      />

      {/* Solution brands */}
      <Section>
        <Container size="wide">
          <Reveal>
            <Heading
              eyebrow="Solution Brands"
              title="Complete spaces, designed end to end"
              description="Nolte and Mrida don't sell components — they design entire kitchens, wardrobes, and interiors."
            />
          </Reveal>
          {solutionBrands.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {solutionBrands.map((brand, index) => (
                <Reveal key={brand.id} delay={index * 0.08}>
                  <BrandCard
                    href={brand.slug === "nolte" ? "/nolte" : brand.slug === "mrida" ? "/mrida" : `/brands/${brand.slug}`}
                    name={brand.name}
                    description={brand.description}
                    heroImage={brand.heroImage}
                    brandType="SOLUTION"
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState title="Solution brands coming soon" />
            </div>
          )}
        </Container>
      </Section>

      {/* Product brands */}
      <Section tone="clay">
        <Container size="wide">
          <Reveal>
            <Heading
              eyebrow="Product Brands"
              title="The specialists behind the details"
              description="Hardware and appliance brands chosen for engineering, longevity, and how they perform in real homes."
            />
          </Reveal>
          {productBrands.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productBrands.map((brand, index) => (
                <Reveal key={brand.id} delay={(index % 3) * 0.08}>
                  <BrandCard
                    href={`/brands/${brand.slug}`}
                    name={brand.name}
                    description={brand.description}
                    heroImage={brand.heroImage}
                    parentBrandName={brand.parentBrand?.name}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState title="Product brands coming soon" />
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
