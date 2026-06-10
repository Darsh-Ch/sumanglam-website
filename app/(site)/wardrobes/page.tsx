import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { PageHero } from "@/components/shared/page-hero";
import { VisualCard } from "@/components/shared/visual-card";
import { EmptyState } from "@/components/shared/empty-state";
import { PageViewTracker } from "@/components/shared/page-view-tracker";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppButton } from "@/features/whatsapp/whatsapp-button";
import { getSpaceBySlug } from "@/server/spaces";
import { safeQuery } from "@/server/safe";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mrida Wardrobes",
  description:
    "Wardrobes and storage systems by Mrida — walk-in suites, sliding wardrobes, and customized storage designed for Indian homes.",
};

/**
 * Wardrobes are a Mrida solution, never an independent product catalog
 * (project-vault/16_Conflicts.md Conflict 6). This page frames everything
 * through Mrida and leads to inspiration + consultation, not SKUs.
 */
export default async function WardrobesPage() {
  const data = await safeQuery(() => getSpaceBySlug("wardrobe"), null);
  const inspirations = data?.featuredInspirations ?? [];
  const collections = data?.collections ?? [];

  return (
    <>
      <PageViewTracker event="inspiration_viewed" sourceType="wardrobes" />
      <PageHero
        eyebrow="Wardrobes by Mrida"
        title="Storage designed like furniture"
        description="Every wardrobe we build is a Mrida project — measured for your room, planned around what you own, and finished like the rest of your home."
        image={data?.space.heroImage ?? "/images/placeholders/wardrobe-1.svg"}
      >
        <Button href="/book-consultation" variant="accent">
          Book Wardrobe Consultation
        </Button>
        <Button href="/mrida" variant="outline-light">
          About Mrida
        </Button>
      </PageHero>

      {/* Wardrobe inspirations */}
      <Section>
        <Container size="wide">
          <Reveal>
            <Heading
              eyebrow="Wardrobe Inspirations"
              title="Ideas worth opening"
              description="Walk-ins, sliding systems, and storage walls from the Mrida studio."
            />
          </Reveal>
          {inspirations.length > 0 ? (
            <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {inspirations.map((inspiration, index) => (
                <Reveal key={inspiration.id} delay={(index % 3) * 0.08}>
                  <VisualCard
                    href={`/inspiration/${inspiration.slug}`}
                    image={inspiration.primaryImage}
                    title={inspiration.title}
                    description={inspiration.shortDescription}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                title="Wardrobe inspirations coming soon"
                description="The Mrida floor at our showroom has full-scale wardrobes on display in the meantime."
                action={{ label: "Visit Showroom", href: "/showroom" }}
              />
            </div>
          )}
        </Container>
      </Section>

      {/* Collections */}
      {collections.length > 0 ? (
        <Section tone="clay" spacing="compact">
          <Container size="wide">
            <Heading eyebrow="Wardrobe Collections" title="Browse by style" />
            <div className="mt-8 flex flex-wrap gap-3">
              {collections.map((collection) => (
                <Button
                  key={collection.id}
                  href={`/collections/${collection.slug}`}
                  variant="outline"
                  size="sm"
                >
                  {collection.title}
                </Button>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* CTA */}
      <Section tone="ink" spacing="spacious">
        <Container size="narrow" className="text-center">
          <Heading
            align="center"
            eyebrow="Made for Your Room"
            title="A wardrobe that fits — your space and your life"
            description="Bring your room's measurements, or just your ideas. A Mrida designer will plan the rest with you."
            tone="light"
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/book-consultation" variant="accent" size="lg">
              Book Consultation
            </Button>
            <WhatsAppButton sourceType="wardrobes" variant="outline-light" size="lg" />
          </div>
        </Container>
      </Section>
    </>
  );
}
