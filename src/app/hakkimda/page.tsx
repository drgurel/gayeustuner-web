import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Dt. Gaye Üstüner - Marmara Üniversitesi mezunu, Yeditepe Üniversitesi'nde pedodonti doktora öğrencisi. Çocuk diş hekimliği alanında uzman.",
  alternates: { canonical: "https://www.gayeustuner.com/hakkimda" },
};

const education = [
  {
    degree: "Doktora (PhD) - Pedodonti",
    school: "Yeditepe Üniversitesi",
    status: "Devam ediyor",
    detail: "Tez konusu: Genel anestezi altında tedavi edilen çocuk hastalar",
  },
  {
    degree: "Diş Hekimliği Lisans",
    school: "Marmara Üniversitesi",
    status: "Mezun",
    detail: "Diş Hekimliği Fakültesi",
  },
];

const experience = [
  {
    title: "Yeditepe Üniversitesi Diş Hastanesi",
    location: "Caddebostan, İstanbul",
    description: "Pedodonti kliniğinde klinik uygulama ve akademik çalışmalar.",
  },
  {
    title: "Dentistanbul",
    location: "Kozyatağı, İstanbul",
    description: "Çocuk diş hekimliği ve koruyucu diş tedavileri.",
  },
  {
    title: "ASM John Hopkins Medicine Hastanesi",
    location: "İstanbul",
    description: "Multidisipliner sağlık ortamında pedodonti uygulamaları.",
  },
  {
    title: "Özel Medar Hastanesi",
    location: "İstanbul",
    description: "Çocuk ve genç hasta tedavileri.",
  },
];

export default function HakkimdaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                  Hakkımda
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                  Dt. Gaye Üstüner
                </h1>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  Marmara Üniversitesi Diş Hekimliği Fakültesi&apos;nden mezun olduktan sonra,
                  çocuk diş hekimliği alanına olan tutkumla Yeditepe Üniversitesi&apos;nde
                  pedodonti doktora programına başladım.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  Doktora tezim, genel anestezi altında tedavi edilen çocuk hastalar üzerinedir.
                  Bu alandaki araştırmalarım, özellikle kooperasyon güçlüğü yaşayan ve kapsamlı
                  tedavi ihtiyacı olan çocuklara daha güvenli ve etkili tedavi sunmayı amaçlamaktadır.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                  Her çocuğun diş hekimi ziyaretini olumlu bir deneyim olarak hatırlaması
                  en büyük hedefim. Modern teknikler, empatik yaklaşım ve sabırla her küçük
                  hastamın gülümsemesini korumak için çalışıyorum.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary-light)]/5 border border-[var(--color-border-light)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">Doktor fotoğrafı eklenecek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-secondary)] mb-8">
                Eğitim
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-2xl border border-[var(--color-border)] bg-white"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)]">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Devam ediyor"
                          ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-[var(--color-primary)] font-medium mb-1">{edu.school}</p>
                    <p className="text-sm text-[var(--color-text-light)]">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-secondary)] mb-8">
                Mesleki Deneyim
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.title}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] mt-1.5"></div>
                      <div className="w-px flex-1 bg-[var(--color-border)]"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)]">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[var(--color-primary)] mb-1">{exp.location}</p>
                      <p className="text-sm text-[var(--color-text-light)]">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              Randevu Oluşturun
            </h2>
            <p className="text-teal-100 mb-8">
              Çocuğunuzun diş sağlığı hakkında sorularınız mı var? Hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim#randevu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
