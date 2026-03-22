import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
}: BlogPostLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tüm Yazılar
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">
                  {category}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">{readTime} okuma</span>
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
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Yazan</p>
                    <p className="font-semibold text-[var(--color-secondary)]">Dt. Gaye Üstüner</p>
                    <p className="text-sm text-[var(--color-text-light)] mt-1">
                      Pedodonti Uzmanı · Yeditepe Üniversitesi Doktora Araştırmacısı
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
                        Önemli Noktalar
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
                      Randevu Alın
                    </h3>
                    <p className="text-teal-100 text-sm mb-4">
                      Çocuğunuzun diş sağlığı için değerlendirme randevusu oluşturun.
                    </p>
                    <Link
                      href="/iletisim#randevu"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors text-sm"
                    >
                      İletişime Geç
                    </Link>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts && relatedPosts.length > 0 && (
                    <div className="p-6 rounded-2xl border border-[var(--color-border)]">
                      <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-[var(--color-secondary)] mb-4">
                        İlgili Yazılar
                      </h3>
                      <ul className="space-y-3">
                        {relatedPosts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`/blog/${post.slug}`}
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
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
