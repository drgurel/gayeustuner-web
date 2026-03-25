import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Çocuk diş hekimliği hizmetlerimiz: Erken dönem ortodonti, genel anestezi altında tedavi, rubber dam izolasyonu, paslanmaz çelik kronlar, şeffaf plaklar, dijital anestezi.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler" },
};

const services = [
  {
    title: "Erken Dönem Ortodontik Tedaviler",
    description:
      "Çocuklarda çene ve diş gelişim bozukluklarının erken dönemde tespit edilmesi ve tedavisi. Büyüme döneminde yapılan müdahaleler, ileride oluşabilecek ciddi ortodontik sorunların önlenmesine yardımcı olur. Çapraşık dişler, çapraz kapanış, üst çene darlığı gibi problemler erken dönemde çok daha kolay ve etkili şekilde tedavi edilebilir.",
    href: "/hizmetler/erken-donem-ortodonti",
    features: ["Çene gelişim takibi", "Yer tutucu uygulamaları", "Fonksiyonel aparey tedavisi", "Kötü alışkanlık kontrolü"],
  },
  {
    title: "Genel Anestezi Altında Diş Tedavileri",
    description:
      "Kapsamlı diş tedavisi gerektiren, çok küçük yaşta olan veya kooperasyon güçlüğü yaşayan çocuklar için hastane ortamında, anestezi uzmanı eşliğinde güvenle gerçekleştirilen tedaviler. Tüm işlemler tek seansta tamamlanarak çocuğun tekrar tekrar tedavi koltuğuna oturma stresinden kurtulması sağlanır.",
    href: "/hizmetler/genel-anestezi-altinda-tedavi",
    features: ["Hastane ortamında güvenli uygulama", "Anestezi uzmanı eşliğinde", "Tek seansta kapsamlı tedavi", "Kooperasyon güçlüğü çözümü"],
  },
  {
    title: "Rubber Dam İzolasyonu",
    description:
      "Tedavi edilecek dişin özel bir lastik örtü ile izole edilmesi yöntemidir. Bu sayede tedavi bölgesi kuru kalır, tükürük ve bakterilerin tedavi alanına ulaşması engellenir. Aynı zamanda küçük aletlerin yutulma veya solunma riski ortadan kalkar.",
    href: "/hizmetler/rubber-dam-izolasyonu",
    features: ["Hijyenik tedavi ortamı", "Yutma riski önleme", "Daha kaliteli dolgu", "Çocuk güvenliği"],
  },
  {
    title: "Paslanmaz Çelik Kronlar",
    description:
      "Süt dişlerinde ileri düzey çürük nedeniyle dolgu ile restore edilemeyecek dişlerin korunması için kullanılan prefabrik kron uygulamasıdır. Dayanıklı yapısıyla süt dişinin düşme zamanına kadar fonksiyonunu sürdürmesini sağlar.",
    href: "/hizmetler/paslanmaz-celik-kronlar",
    features: ["İleri çürük tedavisi", "Uzun ömürlü restorasyon", "Süt dişi koruma", "Tek seans uygulama"],
  },
  {
    title: "Şeffaf Plaklarla Ortodonti (Invisalign)",
    description:
      "Geleneksel tel tedavisine alternatif olarak, şeffaf ve çıkarılabilir plaklar ile diş düzeltme tedavisi. Estetik görünümü ve konforlu kullanımı sayesinde çocuklar ve gençler tarafından kolayca benimsenir.",
    href: "/hizmetler/seffaf-plaklar-ortodonti",
    features: ["Görünmez tedavi", "Çıkarılabilir plaklar", "Konforlu kullanım", "Estetik görünüm"],
  },
  {
    title: "Dijital Anestezi",
    description:
      "Bilgisayar kontrollü lokal anestezi sistemi ile geleneksel enjeksiyona göre çok daha az ağrılı ve korkutucu bir deneyim sunar. İğne korkusu olan çocuklar için ideal çözümdür. Kontrollü basınç ve hız sayesinde anestezi uygulaması neredeyse hissedilmez.",
    href: "/hizmetler/dijital-anestezi",
    features: ["Ağrısız uygulama", "İğne korkusuna çözüm", "Bilgisayar kontrollü", "Hassas dozaj"],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Tedavi Hizmetlerimiz
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Çocuğunuz İçin Modern Diş Tedavileri
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Güncel bilimsel yaklaşımlar ve çocuk dostu tekniklerle, her tedaviyi güvenli,
                konforlu ve mümkün olduğunca korkusuz bir deneyime dönüştürüyoruz.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.href}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold text-[var(--color-secondary)] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--color-text)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                    >
                      Detaylı Bilgi
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-surface-alt)] border border-[var(--color-border)] flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-sm text-[var(--color-text-muted)]">Görsel eklenecek</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              Hangi Tedavi Çocuğunuz İçin Uygun?
            </h2>
            <p className="text-teal-100 mb-8">
              Muayene randevusu oluşturarak çocuğunuz için en uygun tedavi planını birlikte belirleyelim.
            </p>
            <Link
              href="/iletisim#randevu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
            >
              Randevu Oluştur
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
