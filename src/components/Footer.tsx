import Link from "next/link";
import { routeMap } from "@/lib/i18n";

const footerTexts = {
  tr: {
    subtitle: "Çocuk Diş Hekimi (Pedodonti)",
    tagline: "Çocuğunuzun diş sağlığı ve gülüşü için güvenilir, modern ve konforlu tedavi yaklaşımı.",
    quickLinks: "Hızlı Bağlantılar",
    services: "Hizmetler",
    contact: "İletişim",
    copyright: "Tüm hakları saklıdır.",
  },
  en: {
    subtitle: "Pediatric Dentist (Pedodontics)",
    tagline: "Reliable, modern, and comfortable treatment approach for your child's dental health and smile.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    copyright: "All rights reserved.",
  },
  es: {
    subtitle: "Odontóloga Pediatra (Odontopediatría)",
    tagline: "Enfoque de tratamiento confiable, moderno y cómodo para la salud dental y la sonrisa de su hijo.",
    quickLinks: "ENLACES RÁPIDOS",
    services: "SERVICIOS",
    contact: "CONTACTO",
    copyright: "Todos los derechos reservados.",
  },
} as const;

const quickLinksMap = {
  tr: [
    { key: "about" as const, label: "Hakkımda" },
    { key: "services" as const, label: "Hizmetler" },
    { key: "blog" as const, label: "Blog" },
    { key: "contact" as const, label: "İletişim" },
  ],
  en: [
    { key: "about" as const, label: "About" },
    { key: "services" as const, label: "Services" },
    { key: "blog" as const, label: "Blog" },
    { key: "contact" as const, label: "Contact" },
  ],
  es: [
    { key: "about" as const, label: "Sobre Mí" },
    { key: "services" as const, label: "Servicios" },
    { key: "blog" as const, label: "Blog" },
    { key: "contact" as const, label: "Contacto" },
  ],
} as const;

const serviceLinksMap = {
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
    { href: "/en/services/clear-aligners", label: "Clear Aligners (Invisalign)" },
    { href: "/en/services/digital-anesthesia", label: "Digital Anesthesia" },
  ],
  es: [
    { href: "/es/services/ortodoncia-temprana", label: "Ortodoncia Temprana" },
    { href: "/es/services/tratamiento-anestesia-general", label: "Tratamiento con Anestesia General" },
    { href: "/es/services/aislamiento-dique-goma", label: "Aislamiento con Dique de Goma" },
    { href: "/es/services/coronas-acero-inoxidable", label: "Coronas de Acero Inoxidable" },
    { href: "/es/services/alineadores-transparentes", label: "Alineadores Transparentes" },
    { href: "/es/services/anestesia-digital", label: "Anestesia Digital" },
  ],
} as const;

interface FooterProps {
  locale?: "tr" | "en" | "es";
}

export default function Footer({ locale = "tr" }: FooterProps) {
  const t = footerTexts[locale];
  const routes = routeMap[locale];
  const quickLinks = quickLinksMap[locale];
  const serviceLinks = serviceLinksMap[locale];

  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
              Dt. Gaye Üstüner
            </h3>
            <p className="text-teal-200 text-sm mb-4">{t.subtitle}</p>
            <p className="text-teal-100/80 text-sm leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-200">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={routes[link.key]}
                    className="text-teal-100/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-200">
              {t.services}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-100/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-200">
              {t.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-teal-100/80 text-sm">Flora Residence, Ataşehir, İstanbul</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a
                  href="tel:+905472666204"
                  className="text-teal-100/80 hover:text-white text-sm transition-colors"
                >
                  +90 547 266 62 04
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:gayeustuner@gmail.com"
                  className="text-teal-100/80 hover:text-white text-sm transition-colors"
                >
                  gayeustuner@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/drgayeustuner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-teal-800/50 flex items-center justify-center hover:bg-teal-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-800/50 text-center">
          <p className="text-teal-100/60 text-sm">
            &copy; {new Date().getFullYear()} Dt. Gaye Üstüner. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
