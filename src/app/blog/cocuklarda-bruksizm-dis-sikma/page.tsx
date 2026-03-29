import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug } from "@/data/blog-posts";

export const metadata: Metadata = {
  title:
    "Çocuklarda Bruksizm (Diş Sıkma): Belirtiler ve Tedavi | Dt. Gaye Üstüner",
  description:
    "Çocuklarda diş sıkma ve gıcırdatma (bruksizm) nedenleri, belirtileri ve tedavi seçenekleri. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
  alternates: {
    canonical:
      "https://www.gayeustuner.com/blog/cocuklarda-bruksizm-dis-sikma",
    languages: {
      tr: "https://www.gayeustuner.com/blog/cocuklarda-bruksizm-dis-sikma",
      en: "https://www.gayeustuner.com/en/blog/childhood-bruxism-teeth-grinding",
      es: "https://www.gayeustuner.com/es/blog/bruxismo-infantil",
    },
  },
  openGraph: {
    title: "Çocuklarda Bruksizm (Diş Sıkma): Belirtiler ve Tedavi",
    description:
      "Çocuklarda diş sıkma ve gıcırdatma (bruksizm) nedenleri, belirtileri ve tedavi seçenekleri. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
    url: "https://www.gayeustuner.com/blog/cocuklarda-bruksizm-dis-sikma",
    type: "article",
  },
};

export default function BruksizmPage() {
  const post = getBlogPostBySlug("cocuklarda-bruksizm-dis-sikma", "tr")!;
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
