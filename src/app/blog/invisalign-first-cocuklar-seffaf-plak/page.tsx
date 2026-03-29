import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug } from "@/data/blog-posts";

export const metadata: Metadata = {
  title:
    "Invisalign First: Çocuklar İçin Şeffaf Plak Tedavisi | Dt. Gaye Üstüner",
  description:
    "Invisalign First ile 6-10 yaş arası çocuklarda şeffaf plak tedavisi. Avantajları, tedavi süreci ve geleneksel telle karşılaştırma.",
  alternates: {
    canonical:
      "https://www.gayeustuner.com/blog/invisalign-first-cocuklar-seffaf-plak",
    languages: {
      tr: "https://www.gayeustuner.com/blog/invisalign-first-cocuklar-seffaf-plak",
      en: "https://www.gayeustuner.com/en/blog/invisalign-first-children-clear-aligners",
      es: "https://www.gayeustuner.com/es/blog/invisalign-first-ninos-alineadores",
    },
  },
  openGraph: {
    title: "Invisalign First: Çocuklar İçin Şeffaf Plak Tedavisi",
    description:
      "Invisalign First ile 6-10 yaş arası çocuklarda şeffaf plak tedavisi. Avantajları, tedavi süreci ve geleneksel telle karşılaştırma.",
    url: "https://www.gayeustuner.com/blog/invisalign-first-cocuklar-seffaf-plak",
    type: "article",
  },
};

export default function InvisalignFirstPage() {
  const post = getBlogPostBySlug(
    "invisalign-first-cocuklar-seffaf-plak",
    "tr"
  )!;
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
