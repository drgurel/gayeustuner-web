import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Dt. Gaye Üstüner ile iletişime geçin. Flora Residence, Ataşehir, İstanbul. Randevu ve bilgi için ulaşın.",
  alternates: { canonical: "https://www.gayeustuner.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                İletişim
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Bize Ulaşın
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Çocuğunuzun diş sağlığı hakkında sorularınız veya randevu talepleriniz için
                bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-8">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-secondary)] mb-1">Adres</h3>
                      <p className="text-[var(--color-text-light)]">Flora Residence, Ataşehir, İstanbul</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-secondary)] mb-1">E-posta</h3>
                      <a
                        href="mailto:gayeustuner@gmail.com"
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        gayeustuner@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-secondary)] mb-1">Instagram</h3>
                      <a
                        href="https://www.instagram.com/drgayeustuner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        @drgayeustuner
                      </a>
                    </div>
                  </div>

                  {/* Google Maps */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-secondary)] mb-1">Google Maps</h3>
                      <p className="text-[var(--color-text-light)] text-sm">
                        Google Maps&apos;te &quot;Dt. Gaye Üstüner&quot; olarak arayabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Appointment Types */}
                <div className="mt-12" id="randevu">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
                    Randevu Türleri
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "İlk Diş Hekimi Muayenesi (0-3 Yaş)",
                        description: "Bebeğinizin ilk dişlerinin değerlendirilmesi ve aile bilgilendirmesi.",
                      },
                      {
                        title: "Kontrol Muayenesi",
                        description: "Düzenli diş sağlığı kontrolü ve koruyucu uygulamalar.",
                      },
                      {
                        title: "Muayene Randevusu",
                        description: "Genel değerlendirme ve tedavi planı oluşturma.",
                      },
                      {
                        title: "Ortodontik Muayene - Tel Tedavisi",
                        description: "Diş ve çene düzensizliklerinin değerlendirilmesi.",
                      },
                    ].map((appointment) => (
                      <div
                        key={appointment.title}
                        className="p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors"
                      >
                        <h3 className="font-semibold text-[var(--color-secondary)] mb-1">
                          {appointment.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-light)]">
                          {appointment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
                    Randevu Formu
                  </h2>
                  <form className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Çocuğunuzun Yaşı
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
                        placeholder="Örn: 5 yaş"
                      />
                    </div>
                    <div>
                      <label htmlFor="appointmentType" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Randevu Türü
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm"
                      >
                        <option value="">Seçiniz</option>
                        <option value="ilk-muayene">İlk Diş Hekimi Muayenesi (0-3 Yaş)</option>
                        <option value="kontrol">Kontrol Muayenesi</option>
                        <option value="muayene">Muayene Randevusu</option>
                        <option value="ortodonti">Ortodontik Muayene</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors text-sm resize-none"
                        placeholder="Tedavi ile ilgili sorularınız veya notlarınız..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
                    >
                      Randevu Talebi Gönder
                    </button>
                    <p className="text-xs text-[var(--color-text-muted)] text-center">
                      Randevu talebiniz bize e-posta olarak iletilecektir. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
