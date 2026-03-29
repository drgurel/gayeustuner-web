import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug } from "@/data/blog-posts";

export const metadata: Metadata = {
  title:
    "Çocuklarda Parmak Emme ve Diş Yapısına Etkileri | Dt. Gaye Üstüner",
  description:
    "Parmak emme alışkanlığının diş ve çene yapısına etkileri, bıraktırma yöntemleri ve ortodontik müdahale zamanlaması.",
  alternates: {
    canonical:
      "https://www.gayeustuner.com/blog/parmak-emme-dis-yapisina-etkileri",
    languages: {
      tr: "https://www.gayeustuner.com/blog/parmak-emme-dis-yapisina-etkileri",
      en: "https://www.gayeustuner.com/en/blog/thumb-sucking-dental-effects",
      es: "https://www.gayeustuner.com/es/blog/succion-pulgar-efectos-dentales",
    },
  },
  openGraph: {
    title: "Çocuklarda Parmak Emme ve Diş Yapısına Etkileri",
    description:
      "Parmak emme alışkanlığının diş ve çene yapısına etkileri, bıraktırma yöntemleri ve ortodontik müdahale zamanlaması.",
    url: "https://www.gayeustuner.com/blog/parmak-emme-dis-yapisina-etkileri",
    type: "article",
  },
};

export default function ParmakEmmePage() {
  const post = getBlogPostBySlug("parmak-emme-dis-yapisina-etkileri", "tr")!;
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
