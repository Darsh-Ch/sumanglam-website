"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const primaryLinks = navigation.main.slice(0, 5);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-ink-soft transition-colors hover:text-ink",
                pathname.startsWith(item.href) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Critical CTA stays visible on every viewport (vault hard rule). */}
          <Button href="/book-consultation" size="sm">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Consultation</span>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center text-ink transition-colors hover:bg-clay"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-[45] overflow-y-auto bg-background">
          <nav
            aria-label="Full menu"
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-8 sm:px-8"
          >
            {navigation.main.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-line/60 py-4 font-display text-2xl text-ink transition-colors hover:text-accent-deep sm:text-3xl",
                  pathname.startsWith(item.href) && "text-accent-deep",
                )}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-consultation" size="lg">
                Book Consultation
              </Button>
              <Button href="/showroom" variant="outline" size="lg">
                Visit Showroom
              </Button>
            </div>
            <p className="mt-8 text-sm text-ink-soft">
              {siteConfig.contact.hours} · {siteConfig.contact.phone}
            </p>
          </nav>
        </div>
      ) : null}
    </>
  );
}
