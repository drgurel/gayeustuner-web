"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler/erken-donem-ortodonti", label: "Erken Dönem Ortodonti" },
      { href: "/hizmetler/genel-anestezi-altinda-tedavi", label: "Genel Anestezi Altında Tedavi" },
      { href: "/hizmetler/rubber-dam-izolasyonu", label: "Rubber Dam İzolasyonu" },
      { href: "/hizmetler/paslanmaz-celik-kronlar", label: "Paslanmaz Çelik Kronlar" },
      { href: "/hizmetler/seffaf-plaklar-ortodonti", label: "Şeffaf Plaklarla Ortodonti" },
      { href: "/hizmetler/dijital-anestezi", label: "Dijital Anestezi" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold text-[var(--color-secondary)]">
              Dt. Gaye Üstüner
            </span>
            <span className="text-xs text-[var(--color-text-light)] tracking-wider uppercase">
              Çocuk Diş Hekimi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-[var(--color-border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/iletisim#randevu"
              className="ml-4 px-6 py-2.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Randevu Al
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[var(--color-text)]"
            aria-label="Menüyü aç"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[var(--color-text)] rounded-lg hover:bg-[var(--color-surface-alt)]"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                          className="block px-3 py-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] rounded-lg"
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
                  className="block px-3 py-2.5 text-sm font-medium text-[var(--color-text)] rounded-lg hover:bg-[var(--color-surface-alt)]"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/iletisim#randevu"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center mt-3 px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full"
            >
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
