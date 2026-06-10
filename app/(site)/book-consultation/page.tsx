import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/layout/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { ConsultationForm } from "@/features/consultations/consultation-form";
import { WhatsAppButton } from "@/features/whatsapp/whatsapp-button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Tell us about your kitchen, wardrobe, or interior project — a Sumanglam designer will set up a consultation that fits your schedule.",
};

const expectations = [
  "A conversation about your space, routine, and budget — not a sales pitch.",
  "Honest guidance on brands, materials, and what things really cost.",
  "A clear next step: a showroom walkthrough, a site visit, or a design sketch.",
];

export default function BookConsultationPage() {
  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Heading
              as="h1"
              eyebrow="Book a Consultation"
              title="Start with a conversation"
              description="Tell us what you&apos;re planning. We&apos;ll listen first, then bring the ideas."
            />
            <ul className="mt-8 space-y-4">
              {expectations.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="font-display text-accent-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-line pt-6">
              <p className="text-sm text-ink-soft">
                Prefer chatting? We&apos;re quick on WhatsApp during showroom hours
                ({siteConfig.contact.hours.toLowerCase()}).
              </p>
              <div className="mt-4">
                <WhatsAppButton sourceType="consultation" variant="outline" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<Skeleton className="h-130 w-full" />}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </Section>
  );
}
