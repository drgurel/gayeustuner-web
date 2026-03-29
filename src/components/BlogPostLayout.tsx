import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllServices } from "@/data/services";

interface BlogSection {
  heading: string;
  paragraphs: string[];
}

interface BlogPostLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  keyPoints?: string[];
  relatedPosts?: { title: string; slug: string; category: string }[];
  slug: string;
  locale?: "tr" | "en" | "es";
}

const blogTexts = {
  tr: {
    allPosts: "Tüm Yazılar",
    readingTime: "okuma",
    writtenBy: "Yazan",
    authorDesc: "Pedodonti Uzmanı · Yeditepe Üniversitesi Doktora Araştırmacısı",
    keyPoints: "Önemli Noktalar",
    bookAppointment: "Randevu Alın",
    bookAppointmentDesc: "Çocuğunuzun diş sağlığı için değerlendirme randevusu oluşturun.",
    getInTouch: "İletişime Geç",
    relatedPosts: "İlgili Yazılar",
    relatedServices: "Hizmetlerimiz",
    authorJobTitle: "Çocuk Diş Hekimi (Pedodontist)",
  },
  en: {
    allPosts: "All Posts",
    readingTime: "read",
    writtenBy: "Written by",
    authorDesc: "Pediatric Dentistry Specialist · PhD Researcher at Yeditepe University",
    keyPoints: "Key Points",
    bookAppointment: "Book an Appointment",
    bookAppointmentDesc: "Schedule an evaluation appointment for your child's dental health.",
    getInTouch: "Get in Touch",
    relatedPosts: "Related Posts",
    relatedServices: "Our Services",
    authorJobTitle: "Pediatric Dentist (Pedodontist)",
  },
  es: {
    allPosts: "Todos los Artículos",
    readingTime: "lectura",
    writtenBy: "Escrito por",
    authorDesc: "Especialista en Odontopediatría · Investigadora de Doctorado en la Universidad de Yeditepe",
    keyPoints: "Puntos Clave",
    bookAppointment: "Reservar una Cita",
    bookAppointmentDesc: "Programe una cita de evaluación para la salud dental de su hijo.",
    getInTouch: "Contáctenos",
    relatedPosts: "Artículos Relacionados",
    relatedServices: "Nuestros Servicios",
    authorJobTitle: "Odontóloga Pediatra (Odontopediatra)",
  },
} as const;

const trMonths: Record<string, string> = {
  Ocak: "01",
  Şubat: "02",
  Mart: "03",
  Nisan: "04",
  Mayıs: "05",
  Haziran: "06",
  Temmuz: "07",
  Ağustos: "08",
  Eylül: "09",
  Ekim: "10",
  Kasım: "11",
  Aralık: "12",
};

const enMonths: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

const esMonths: Record<string, string> = {
  enero: "01",
  febrero: "02",
  marzo: "03",
  abril: "04",
  mayo: "05",
  junio: "06",
  julio: "07",
  agosto: "08",
  septiembre: "09",
  octubre: "10",
  noviembre: "11",
  diciembre: "12",
};

function BlogPostJsonLd({
  title,
  intro,
  date,
  slug,
  locale = "tr",
}: {
  title: string;
  intro: string;
  date: string;
  slug: string;
  locale?: "tr" | "en" | "es";
}) {
  const t = blogTexts[locale];
  const months =
    locale === "en" ? enMonths : locale === "es" ? esMonths : trMonths;

  let isoDate: string;
  try {
    let replaced = date;
    for (const [name, num] of Object.entries(months)) {
      replaced = replaced.replace(name, num);
    }
    isoDate = new Date(replaced.split(" ").reverse().join("-")).toISOString();
  } catch {
    isoDate = new Date().toISOString();
  }

  const blogBase =
    locale === "en" ? "/en/blog" : locale === "es" ? "/es/blog" : "/blog";
  const aboutUrl =
    locale === "en"
      ? "https://www.gayeustuner.com/en/about"
      : locale === "es"
        ? "https://www.gayeustuner.com/es/about"
        : "https://www.gayeustuner.com/hakkimda";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    author: {
      "@type": "Person",
      name: "Dt. Gaye Üstüner",
      jobTitle: t.authorJobTitle,
      url: aboutUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Dt. Gaye Üstüner",
      url: "https://www.gayeustuner.com",
    },
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: `https://www.gayeustuner.com${blogBase}/${slug}`,
    image: "https://www.gayeustuner.com/og-image.png",
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPostLayout({
  title,
  category,
  date,
  readTime,
  intro,
  sections,
  keyPoints,
  relatedPosts,
  slug,
  locale = "tr",
}: BlogPostLayoutProps) {
  const t = blogTexts[locale];
  const blogBase =
    locale === "en" ? "/en/blog" : locale === "es" ? "/es/blog" : "/blog";
  const ctaHref =
    locale === "en"
      ? "/en/contact#appointment"
      : locale === "es"
        ? "/es/contact#cita"
        : "/iletisim#randevu";

  return (
    <>
      <BlogPostJsonLd title={title} intro={intro} date={date} slug={slug} locale={locale} />
      <Header locale={locale} />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href={blogBase}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t.allPosts}
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">
                  {category}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{readTime} {t.readingTime}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{date}</span>
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                {intro}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article */}
              <article className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {sections.map((section, i) => (
                    <div key={i} className="mb-10">
                      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-4">
                        {section.heading}
                      </h2>
                      {section.paragraphs.map((para, j) => (
                        <p key={j} className="text-[var(--color-text-light)] leading-relaxed mb-4">
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Author Card */}
                <div className="mt-12 p-6 rounded-2xl bg-[var(--color-surface-alt)] border border-[var(--color-border)] flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">{t.writtenBy}</p>
                    <p className="font-semibold text-[var(--color-secondary)]">Dt. Gaye Üstüner</p>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">
                      {t.authorDesc}
                    </p>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside>
                <div className="sticky top-24 space-y-6">
                  {/* Key Points */}
                  {keyPoints && keyPoints.length > 0 && (
                    <div className="p-6 rounded-2xl bg-[var(--color-surface-alt)]">
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-secondary)] mb-4">
                        {t.keyPoints}
                      </h3>
                      <ul className="space-y-3">
                        {keyPoints.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-[var(--color-text)]">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="p-6 rounded-2xl bg-[var(--color-primary)] text-white">
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold mb-2">
                      {t.bookAppointment}
                    </h3>
                    <p className="text-teal-100 text-sm mb-4">
                      {t.bookAppointmentDesc}
                    </p>
                    <Link
                      href={ctaHref}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors text-sm"
                    >
                      {t.getInTouch}
                    </Link>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts && relatedPosts.length > 0 && (
                    <div className="p-6 rounded-2xl border border-[var(--color-border)]">
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-secondary)] mb-4">
                        {t.relatedPosts}
                      </h3>
                      <ul className="space-y-3">
                        {relatedPosts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`${blogBase}/${post.slug}`}
                              className="block group"
                            >
                              <span className="text-xs text-[var(--color-primary)] font-medium">{post.category}</span>
                              <p className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mt-0.5 leading-snug">
                                {post.title}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related Services */}
                  <div className="p-6 rounded-2xl border border-[var(--color-border)]">
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-secondary)] mb-4">
                      {t.relatedServices}
                    </h3>
                    <ul className="space-y-3">
                      {getAllServices(locale).slice(0, 4).map((service) => {
                        const servicesPath = locale === "en" ? "/en/services" : locale === "es" ? "/es/services" : "/hizmetler";
                        return (
                          <li key={service.slug}>
                            <Link
                              href={`${servicesPath}/${service.slug}`}
                              className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                            >
                              <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {service.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
