import { clientEnv } from "@/lib/env";

/**
 * Central site configuration. Business details marked [PLACEHOLDER] must be
 * confirmed before launch — see project-vault/15_Open_Questions.md.
 */
export const siteConfig = {
  name: "Sumanglam",
  tagline: "Designed Around Your Home",
  description:
    "Sumanglam is a premium digital showroom for modular kitchens, wardrobes, premium hardware, appliances, and interior solutions.",
  url: clientEnv.NEXT_PUBLIC_SITE_URL,
  contact: {
    // [PLACEHOLDER] Confirm official business details before launch.
    phone: clientEnv.NEXT_PUBLIC_CONTACT_PHONE || "+91 00000 00000",
    email: clientEnv.NEXT_PUBLIC_CONTACT_EMAIL || "hello@sumanglam.co",
    whatsappNumber: clientEnv.NEXT_PUBLIC_WHATSAPP_NUMBER,
    address: "Sumanglam Showroom, [address to be confirmed]",
    hours: "Open daily, 10:00 AM – 8:00 PM",
  },
} as const;

export const navigation = {
  main: [
    { label: "Inspiration", href: "/inspiration" },
    { label: "Kitchens", href: "/kitchens" },
    { label: "Hardware & Appliances", href: "/hardware-appliances" },
    { label: "Brands", href: "/brands" },
    { label: "Showroom", href: "/showroom" },
    { label: "Architects & Designers", href: "/architects-designers" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    explore: [
      { label: "Inspiration", href: "/inspiration" },
      { label: "Kitchens", href: "/kitchens" },
      { label: "Hardware & Appliances", href: "/hardware-appliances" },
      { label: "Brands", href: "/brands" },
      { label: "Showroom Experience", href: "/showroom" },
    ],
    solutions: [
      { label: "Nolte Kitchens", href: "/nolte" },
      { label: "Mrida", href: "/mrida" },
      { label: "Mrida Wardrobes", href: "/wardrobes" },
      { label: "Architects & Designers", href: "/architects-designers" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book Consultation", href: "/book-consultation" },
    ],
  },
} as const;
