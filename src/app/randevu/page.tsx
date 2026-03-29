import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Randevu Al | Çocuk Diş Hekimi Ataşehir - Dt. Gaye Üstüner",
  description:
    "Ataşehir'de çocuk diş hekimi randevusu. Dt. Gaye Üstüner ile pedodonti, ortodonti, tel tedavisi, şeffaf plak randevusu oluşturun. +90 547 266 62 04",
  robots: { index: false, follow: false },
};

export default function RandevuLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="bg-white border-b border-[var(--color-border)] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)]">
              Dt. Gaye Üstüner
            </span>
            <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
              Çocuk Diş Hekimi
            </span>
          </Link>
          <a
            href="tel:+905472666204"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Hemen Ara
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-surface-alt)] via-white to-[var(--color-border-light)] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                Ataşehir, İstanbul
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] leading-tight mb-4">
                Çocuğunuzun Gülüşü{" "}
                <span className="text-[var(--color-primary)]">Güvenli Ellerde</span>
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
                Pedodonti uzmanı Dt. Gaye Üstüner ile çocuğunuz için korkusuz,
                ağrısız diş tedavisi. Ücretsiz ilk muayene için hemen randevu oluşturun.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Marmara Üni.", sub: "Diş Hekimliği" },
                  { label: "Yeditepe Üni.", sub: "Doktora" },
                  { label: "Ataşehir", sub: "Flora Residence" },
                ].map((badge) => (
                  <div key={badge.label} className="text-center p-3 rounded-xl bg-white border border-[var(--color-border)]">
                    <p className="font-semibold text-sm text-[var(--color-secondary)]">{badge.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{badge.sub}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905472666204"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +90 547 266 62 04
                </a>
                <a
                  href="https://wa.me/905472666204?text=Merhaba%2C%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="hidden lg:block">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10">
                  <Image
                    src="/dt-gaye-ustuner.jpg"
                    alt="Dt. Gaye Üstüner - Çocuk Diş Hekimi"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(min-width: 1024px) 380px, 0px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6 text-center">
            Tedavi Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Erken Ortodonti", desc: "7+ yaş çene gelişim takibi" },
              { title: "Tel Tedavisi", desc: "Çapraşık diş düzeltme" },
              { title: "Şeffaf Plak", desc: "Invisalign ile estetik tedavi" },
              { title: "Genel Anestezi", desc: "Tek seansta kapsamlı tedavi" },
              { title: "Dijital Anestezi", desc: "Ağrısız tedavi deneyimi" },
              { title: "Çelik Kronlar", desc: "Süt dişi restorasyon" },
              { title: "Rubber Dam", desc: "Güvenli izolasyon" },
              { title: "Koruyucu Tedavi", desc: "Florür ve fissür örtücü" },
            ].map((s) => (
              <div key={s.title} className="p-4 rounded-xl bg-[var(--color-surface-alt)] text-center">
                <p className="font-semibold text-sm text-[var(--color-secondary)]">{s.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-[var(--color-surface-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Kızım dişçiden çok korkuyordu ama Gaye Hanım ile ilk seanstan sonra kendi isteyerek gelmeye başladı.",
                name: "Ayşe K.",
                detail: "6 yaş",
              },
              {
                text: "Oğlumun tel tedavisi sürecinde çok ilgili ve sabırlı davrandı. Sonuçlardan çok memnunuz.",
                name: "Mehmet Y.",
                detail: "12 yaş",
              },
              {
                text: "Genel anestezi tedavisi konusunda çok profesyonelce yönetildi. Tek seansta her şey tamamlandı.",
                name: "Elif S.",
                detail: "3 yaş",
              },
            ].map((r) => (
              <div key={r.name} className="p-5 rounded-2xl bg-white border border-[var(--color-border)]">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm font-semibold text-[var(--color-secondary)]">{r.name} <span className="font-normal text-[var(--color-text-muted)]">· {r.detail}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-white" id="randevu">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-[var(--color-secondary)] text-teal-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>Dt. Gaye Üstüner · Çocuk Diş Hekimi · Flora Residence, Ataşehir, İstanbul</p>
          <p className="mt-1 text-teal-200/60">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
