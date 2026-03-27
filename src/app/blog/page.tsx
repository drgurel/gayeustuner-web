import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Çocuk diş sağlığı, pedodonti ve ortodonti hakkında faydalı bilgiler. Dt. Gaye Üstüner'in blog yazıları.",
  alternates: { canonical: "https://www.gayeustuner.com/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts("tr");
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Blog
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Bilgilendirici Yazılar
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Çocuk diş sağlığı, pedodonti ve ortodonti hakkında ailelere yönelik faydalı bilgiler.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300 block"
                >
                  {/* Placeholder image */}
                  <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-surface-alt)] flex items-center justify-center">
                    <p className="text-sm text-[var(--color-text-muted)]">Blog görseli</p>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">{post.readTime} okuma süresi</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">
                      {post.intro.substring(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-[var(--color-text-muted)]">{post.date}</time>
                      <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)]">
                        Devamını Oku
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
