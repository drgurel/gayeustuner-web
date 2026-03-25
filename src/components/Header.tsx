"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { routeMap } from "@/lib/i18n";

const navLabels = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    services: "Hizmetler",
    blog: "Blog",
    contact: "İletişim",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
  },
} as const;

const serviceChildren = {
  tr: [
    { href: "/hizmetler/erken-donem-ortodonti", label: "Erken Dönem Ortodonti" },
    { href: "/hizmetler/genel-anestezi-altinda-tedavi", label: "Genel Anestezi Altında Tedavi" },
    { href: "/hizmetler/rubber-dam-izolasyonu", label: "Rubber Dam İzolasyonu" },
    { href: "/hizmetler/paslanmaz-celik-kronlar", label: "Paslanmaz Çelik Kronlar" },
    { href: "/hizmetler/seffaf-plaklar-ortodonti", label: "Şeffaf Plaklarla Ortodonti" },
    { href: "/hizmetler/dijital-anestezi", label: "Dijital Anestezi" },
  ],
  en: [
    { href: "/en/services/early-orthodontics", label: "Early Orthodontics" },
    { href: "/en/services/general-anesthesia-treatment", label: "General Anesthesia Treatment" },
    { href: "/en/services/rubber-dam-isolation", label: "Rubber Dam Isolation" },
    { href: "/en/services/stainless-steel-crowns", label: "Stainless Steel Crowns" },
    { href: "/en/services/clear-aligners", label: "Clear Aligners" },
    { href: "/en/services/digital-anesthesia", label: "Digital Anesthesia" },
  ],
} as const;

const headerTexts = {
  tr: {
    cta: "Randevu Al",
    allServices: "Tüm Hizmetler",
    skipToContent: "Ana içeriğe geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    subtitle: "Çocuk Diş Hekimi",
    mainNav: "Ana menü",
    mobileNav: "Mobil menü",
  },
  en: {
    cta: "Book Now",
    allServices: "All Services",
    skipToContent: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    subtitle: "Pediatric Dentist",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
  },
} as const;

interface HeaderProps {
  locale?: "tr" | "en";
}

export default function Header({ locale = "tr" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const routes = routeMap[locale];
  const labels = navLabels[locale];
  const children = serviceChildren[locale];
  const t = headerTexts[locale];

  const navLinks = [
    { href: routes.home, label: labels.home },
    { href: routes.about, label: labels.about },
    {
      href: routes.services,
      label: labels.services,
      children: [...children],
    },
    { href: routes.blog, label: labels.blog },
    { href: routes.contact, label: labels.contact },
  ];

  const ctaHref = locale === "en" ? "/en/contact#appointment" : "/iletisim#randevu";
  const otherLocale = locale === "tr" ? "en" : "tr";
  const langSwitchLabel = locale === "tr" ? "EN" : "TR";

  // Compute the language switch href based on current path
  function getLangSwitchHref(): string {
    if (locale === "tr") {
      // Switch to EN: prepend /en
      if (pathname === "/") return "/en";
      return `/en${pathname}`;
    }
    // Switch to TR: remove /en prefix
    if (pathname === "/en" || pathname === "/en/") return "/";
    return pathname.replace(/^\/en/, "");
  }

  // Dropdown dışına tıklanınca kapat
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape tuşu ile kapat
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function isActive(href: string) {
    if (href === "/" || href === "/en") return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        {t.skipToContent}
      </a>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={routes.home} className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold text-[var(--color-secondary)]">
                Dt. Gaye Üstüner
              </span>
              <span className="text-xs text-[var(--color-text-light)] tracking-wider uppercase">
                {t.subtitle}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label={t.mainNav}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                      aria-expanded={desktopDropdownOpen}
                      aria-haspopup="true"
                      className={`px-4 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                        isActive(link.href)
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {desktopDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-2"
                        role="menu"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] transition-colors"
                        >
                          {t.allServices}
                        </Link>
                        <div className="border-t border-[var(--color-border)] my-1" />
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDesktopDropdownOpen(false)}
                            role="menuitem"
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(child.href)
                                ? "text-[var(--color-primary)] bg-[var(--color-surface-alt)]"
                                : "text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Language Switcher */}
              <Link
                href={getLangSwitchHref()}
                className="px-3 py-1.5 text-xs font-bold border border-[var(--color-border)] rounded-md text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                {langSwitchLabel}
              </Link>

              <Link
                href={ctaHref}
                className="ml-4 px-6 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                {t.cta}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[var(--color-text)]"
              aria-label={mobileOpen ? t.closeMenu : t.openMenu}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
            <nav className="px-4 py-4 space-y-1" aria-label={t.mobileNav}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[var(--color-text)] rounded-lg hover:bg-[var(--color-surface-alt)]"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-3 py-2 text-sm rounded-lg ${
                              isActive(child.href)
                                ? "text-[var(--color-primary)] bg-[var(--color-surface-alt)]"
                                : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                      isActive(link.href)
                        ? "text-[var(--color-primary)] bg-[var(--color-surface-alt)]"
                        : "text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile Language Switcher */}
              <Link
                href={getLangSwitchHref()}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] rounded-lg"
              >
                {langSwitchLabel}
              </Link>

              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center mt-3 px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full"
              >
                {t.cta}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
