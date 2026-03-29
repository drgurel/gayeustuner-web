import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocationBySlug, locations } from "@/data/locations";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.gayeustuner.com/bolge/${slug}`,
    },
  };
}

const services = [
  {
    title: "Erken Dönem Ortodonti",
    description: "Çocuklarda çene ve diş gelişim sorunlarının erken teşhis ve tedavisi.",
    href: "/hizmetler/erken-donem-ortodonti",
  },
  {
    title: "Tel Tedavisi (Braket)",
    description: "Çapraşık dişler ve kapanış bozukluklarının metal veya seramik braketlerle düzeltilmesi.",
    href: "/hizmetler/tel-tedavisi",
  },
  {
    title: "Şeffaf Plaklarla Ortodonti",
    description: "Görünmez plaklar ile estetik ve konforlu diş düzeltme tedavisi.",
    href: "/hizmetler/seffaf-plaklar-ortodonti",
  },
  {
    title: "Genel Anestezi Altında Tedavi",
    description: "Hastane ortamında güvenli, tek seansta kapsamlı diş tedavisi.",
    href: "/hizmetler/genel-anestezi-altinda-tedavi",
  },
  {
    title: "Dijital Anestezi",
    description: "Ağrısız ve korkusuz tedavi deneyimi için bilgisayar kontrollü anestezi.",
    href: "/hizmetler/dijital-anestezi",
  },
  {
    title: "Paslanmaz Çelik Kronlar",
    description: "Süt dişlerinde ileri çürüklerin dayanıklı kron ile restorasyonu.",
    href: "/hizmetler/paslanmaz-celik-kronlar",
  },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
    url: "https://www.gayeustuner.com",
    telephone: "+905472666204",
    medicalSpecialty: "Pediatric Dentistry",
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flora Residence",
      addressLocality: "Ataşehir",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--color-surface-alt)] via-white to-[var(--color-border-light)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                {location.name}, İstanbul · Pedodonti Uzmanı
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                {location.title}
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8">
                {location.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim#randevu"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors text-center"
                >
                  Randevu Oluştur
                </Link>
                <a
                  href="tel:+905472666204"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-center"
                >
                  +90 547 266 62 04
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About + Distance */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold text-[var(--color-secondary)] mb-6">
                  {location.name}&apos;de Çocuk Diş Hekimi
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                  {location.description}
                </p>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  {location.distanceText}
                </p>

                {/* Transport Info */}
                <div className="p-5 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)]">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[var(--color-secondary)] mb-1">Ulaşım Bilgisi</p>
                      <p className="text-sm text-[var(--color-text-light)]">{location.transportInfo}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neighborhoods */}
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)] mb-4">
                  Hizmet Verdiğimiz {location.name} Mahalleleri
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {location.neighborhoods.map((n) => (
                    <div key={n} className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-surface-alt)]">
                      <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--color-text)]">{n}</span>
                    </div>
                  ))}
                </div>

                {/* Maps */}
                <div className="mt-6 rounded-xl overflow-hidden border border-[var(--color-border)]">
                  <iframe
                    src="https://www.google.com/maps?q=Dt.+Gaye+%C3%9Cst%C3%BCner&z=14&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Dt. Gaye Üstüner - ${location.name} Çocuk Diş Hekimi Konumu`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold text-[var(--color-secondary)] mb-4 text-center">
              {location.name} Çocuk Diş Tedavisi Hizmetlerimiz
            </h2>
            <p className="text-[var(--color-text-light)] text-center max-w-2xl mx-auto mb-12">
              {location.name}&apos;den gelen hastalarımıza sunduğumuz tüm pedodonti ve ortodonti hizmetleri.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)]">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              {location.name}&apos;den Randevu Oluşturun
            </h2>
            <p className="text-teal-100 mb-8">
              Çocuğunuzun diş sağlığı için ilk adımı atın. {location.distanceText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim#randevu"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
              >
                Randevu Oluştur
              </Link>
              <a
                href="https://wa.me/905472666204?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
