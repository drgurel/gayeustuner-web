import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
  canonicalSlug?: string;
  locale?: "tr" | "en";
}

const serviceTexts = {
  tr: {
    allServices: "Tüm Hizmetler",
    advantages: "Avantajlar",
    faq: "Sıkça Sorulan Sorular",
    bookAppointment: "Randevu Alın",
    ctaDescription: "Bu tedavi hakkında daha fazla bilgi almak veya randevu oluşturmak için iletişime geçin.",
    getInTouch: "İletişime Geç",
    breadcrumbHome: "Ana Sayfa",
    breadcrumbServices: "Hizmetler",
  },
  en: {
    allServices: "All Services",
    advantages: "Advantages",
    faq: "Frequently Asked Questions",
    bookAppointment: "Book an Appointment",
    ctaDescription: "Contact us to learn more about this treatment or to schedule an appointment.",
    getInTouch: "Get in Touch",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
  },
} as const;

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  benefits,
  faq,
  canonicalSlug,
  locale = "tr",
}: ServicePageLayoutProps) {
  const t = serviceTexts[locale];
  const servicesHref = locale === "en" ? "/en/services" : "/hizmetler";
  const ctaHref = locale === "en" ? "/en/contact#appointment" : "/iletisim#randevu";

  const baseUrl = "https://www.gayeustuner.com";
  const servicesPath = locale === "en" ? "/en/services" : "/hizmetler";
  const homePath = locale === "en" ? "/en" : "";

  const faqSchema = faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${baseUrl}${homePath}` },
      { "@type": "ListItem", position: 2, name: t.breadcrumbServices, item: `${baseUrl}${servicesPath}` },
      { "@type": "ListItem", position: 3, name: title, item: `${baseUrl}${servicesPath}/${canonicalSlug ?? ""}` },
    ],
  };

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header locale={locale} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href={servicesHref}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t.allServices}
              </Link>
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                {subtitle}
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                {title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {description.map((paragraph, i) => (
                    <p key={i} className="text-[var(--color-text-light)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* FAQ */}
                {faq.length > 0 && (
                  <div className="mt-12">
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
                      {t.faq}
                    </h2>
                    <div className="space-y-4">
                      {faq.map((item) => (
                        <div
                          key={item.q}
                          className="p-5 rounded-xl border border-[var(--color-border)]"
                        >
                          <h3 className="font-semibold text-[var(--color-secondary)] mb-2">
                            {item.q}
                          </h3>
                          <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-24">
                  {/* Benefits */}
                  <div className="p-6 rounded-2xl bg-[var(--color-surface-alt)] mb-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)] mb-4">
                      {t.advantages}
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--color-text)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Card */}
                  <div className="p-6 rounded-2xl bg-[var(--color-primary)] text-white">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">
                      {t.bookAppointment}
                    </h3>
                    <p className="text-teal-100 text-sm mb-4">
                      {t.ctaDescription}
                    </p>
                    <Link
                      href={ctaHref}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors text-sm"
                    >
                      {t.getInTouch}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
