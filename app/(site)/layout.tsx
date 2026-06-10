import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { FloatingWhatsApp } from "@/features/whatsapp/floating-whatsapp";
import { siteConfig } from "@/lib/site";

// LocalBusiness structured data. Address/phone are placeholders until the
// business confirms official details (project-vault/15_Open_Questions.md).
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}
