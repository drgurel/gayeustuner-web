import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug } from "@/data/blog-posts";

export const metadata: Metadata = {
  title:
    "Süt Dişi Düştü Ama Kalıcı Diş Çıkmıyor: Ne Yapmalı? | Dt. Gaye Üstüner",
  description:
    "Çocuğunuzun süt dişi düştü ama kalıcı diş çıkmıyor mu? Gecikme nedenleri, ne zaman endişelenmeli ve tedavi seçenekleri.",
  alternates: {
    canonical:
      "https://www.gayeustuner.com/blog/sut-disi-dustu-kalici-dis-cikmiyor",
    languages: {
      tr: "https://www.gayeustuner.com/blog/sut-disi-dustu-kalici-dis-cikmiyor",
      en: "https://www.gayeustuner.com/en/blog/baby-tooth-fell-permanent-not-coming",
      es: "https://www.gayeustuner.com/es/blog/diente-leche-cayo-permanente-no-sale",
    },
  },
  openGraph: {
    title: "Süt Dişi Düştü Ama Kalıcı Diş Çıkmıyor: Ne Yapmalı?",
    description:
      "Çocuğunuzun süt dişi düştü ama kalıcı diş çıkmıyor mu? Gecikme nedenleri, ne zaman endişelenmeli ve tedavi seçenekleri.",
    url: "https://www.gayeustuner.com/blog/sut-disi-dustu-kalici-dis-cikmiyor",
    type: "article",
  },
};

export default function SutDisiDustuPage() {
  const post = getBlogPostBySlug("sut-disi-dustu-kalici-dis-cikmiyor", "tr")!;
  const relatedPosts = post.relatedSlugs
    .map((s) => {
      const p = getBlogPostBySlug(s, "tr");
      return p ? { title: p.title, slug: p.slug, category: p.category } : null;
    })
    .filter(Boolean) as { title: string; slug: string; category: string }[];

  return (
    <BlogPostLayout
      slug={post.slug}
      title={post.title}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      intro={post.intro}
      sections={post.sections}
      keyPoints={post.keyPoints}
      relatedPosts={relatedPosts}
    />
  );
}
