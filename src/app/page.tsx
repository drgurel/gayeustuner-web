import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Erken Dönem Ortodonti",
    description:
      "Çocuklarda çene ve diş gelişimi sorunlarının erken teşhis ve tedavisi ile sağlıklı bir gülüş için doğru zamanda müdahale.",
    href: "/hizmetler/erken-donem-ortodonti",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Genel Anestezi Altında Tedavi",
    description:
      "Kapsamlı tedavi gerektiren veya kooperasyon güçlüğü yaşayan çocuklar için hastane ortamında güvenli genel anestezi uygulaması.",
    href: "/hizmetler/genel-anestezi-altinda-tedavi",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Rubber Dam İzolasyonu",
    description:
      "Tedavi sırasında dişi izole ederek daha hijyenik, güvenli ve konforlu bir tedavi deneyimi sağlayan modern yöntem.",
    href: "/hizmetler/rubber-dam-izolasyonu",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Paslanmaz Çelik Kronlar",
    description:
      "Süt dişlerinde ileri düzey çürüklerin tedavisinde kullanılan, dayanıklı ve uzun ömürlü kron uygulamaları.",
    href: "/hizmetler/paslanmaz-celik-kronlar",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Şeffaf Plaklarla Ortodonti",
    description:
      "Görünmez plaklar ile çocuk ve gençlerde estetik ve konforlu diş düzeltme tedavisi.",
    href: "/hizmetler/seffaf-plaklar-ortodonti",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Dijital Anestezi",
    description:
      "Bilgisayar kontrollü anestezi sistemi ile ağrısız ve korkusuz bir tedavi deneyimi. Çocuklar için ideal çözüm.",
    href: "/hizmetler/dijital-anestezi",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

const experiences = [
  { name: "Yeditepe Üniversitesi Diş Hastanesi", location: "Caddebostan" },
  { name: "Dentistanbul", location: "Kozyatağı" },
  { name: "ASM John Hopkins Medicine", location: "Hastanesi" },
  { name: "Özel Medar Hastanesi", location: "" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-surface-alt)] via-white to-[var(--color-border-light)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  Pedodonti Uzmanı
                </div>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-secondary)] leading-tight mb-6">
                  Çocuğunuzun Gülüşü{" "}
                  <span className="text-[var(--color-primary)]">Güvenli Ellerde</span>
                </h1>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8 max-w-lg">
                  Modern pedodonti yaklaşımıyla çocuğunuzun diş sağlığını koruyoruz.
                  Korkusuz, ağrısız ve eğlenceli bir tedavi deneyimi için yanınızdayız.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/iletisim#randevu"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors text-center"
                  >
                    Randevu Oluştur
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-center"
                  >
                    Hizmetlerimiz
                  </Link>
                </div>
              </div>

              {/* Hero Photo */}
              <div className="relative hidden lg:block">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10">
                    <Image
                      src="/dt-gaye-ustuner.jpg"
                      alt="Dt. Gaye Üstüner - Çocuk Diş Hekimi"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(min-width: 1024px) 400px, 0px"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-3 text-center">
                    <p className="font-[family-name:var(--font-heading)] text-lg text-[var(--color-secondary)] font-semibold">
                      Dt. Gaye Üstüner
                    </p>
                    <p className="text-[var(--color-text-light)] text-sm">Çocuk Diş Hekimi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white py-12 border-y border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { label: "Eğitim", value: "Marmara Üni.", sub: "Diş Hekimliği Fakültesi" },
                { label: "Doktora", value: "Yeditepe Üni.", sub: "Pedodonti (Devam ediyor)" },
                { label: "Uzmanlık", value: "Pedodonti", sub: "Çocuk Diş Hekimliği" },
                { label: "Konum", value: "Ataşehir", sub: "İstanbul" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{item.label}</p>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)]">{item.value}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white" id="hizmetler">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Tedavi Hizmetlerimiz
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-[var(--color-secondary)] mb-4">
                Çocuğunuz İçin En İyi Bakım
              </h2>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                Modern pedodonti teknikleri ve çocuk dostu yaklaşımımızla, her tedaviyi güvenli ve konforlu hale getiriyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group p-6 lg:p-8 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-surface-alt)] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                  Hakkımda
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-[var(--color-secondary)] mb-6">
                  Dt. Gaye Üstüner
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                  Marmara Üniversitesi Diş Hekimliği Fakültesi mezunu olarak,
                  çocuk diş hekimliği alanında uzmanlaşmaya karar verdim. Şu anda
                  Yeditepe Üniversitesi&apos;nde pedodonti alanında doktora çalışmama devam ediyorum.
                </p>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  Doktora tezim, genel anestezi altında tedavi edilen çocuk hastalar üzerinedir.
                  Her çocuğun diş hekimi deneyiminin olumlu ve korkusuz olması için
                  modern teknikler ve empatik bir yaklaşım benimsiyorum.
                </p>

                <div className="space-y-3 mb-8">
                  {experiences.map((exp) => (
                    <div key={exp.name} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                      <span className="text-sm text-[var(--color-text)]">
                        {exp.name} {exp.location && <span className="text-[var(--color-text-light)]">- {exp.location}</span>}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/hakkimda"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                >
                  Daha Fazla Bilgi
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/dt-gaye-ustuner.jpg"
                    alt="Dt. Gaye Üstüner"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-white mb-4">
              Çocuğunuzun Diş Sağlığı İçin İlk Adımı Atın
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Erken dönemde yapılan doğru müdahaleler, çocuğunuzun ömür boyu sağlıklı bir gülüşe
              sahip olmasını sağlar. Hemen randevu oluşturun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim#randevu"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
              >
                Randevu Oluştur
              </Link>
              <a
                href="https://www.instagram.com/drgayeustuner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Instagram&apos;da Takip Et
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
