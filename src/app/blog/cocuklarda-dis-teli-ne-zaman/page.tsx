import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Çocuklarda Diş Teli Ne Zaman Takılmalı? | Dt. Gaye Üstüner",
  description:
    "Çocuklarda tel tedavisi ne zaman başlamalı? İdeal yaş, belirtiler, Faz 1-Faz 2 ortodonti ve tedavi süreci hakkında uzman bilgisi.",
  alternates: {
    canonical: "https://www.gayeustuner.com/blog/cocuklarda-dis-teli-ne-zaman",
    languages: {
      tr: "https://www.gayeustuner.com/blog/cocuklarda-dis-teli-ne-zaman",
      en: "https://www.gayeustuner.com/en/blog/when-should-children-get-braces",
      es: "https://www.gayeustuner.com/es/blog/cuando-poner-brackets-ninos",
    },
  },
  openGraph: {
    title: "Çocuklarda Diş Teli Ne Zaman Takılmalı?",
    description:
      "Çocuklarda tel tedavisi ne zaman başlamalı? İdeal yaş, belirtiler, Faz 1-Faz 2 ortodonti ve tedavi süreci hakkında uzman bilgisi.",
    url: "https://www.gayeustuner.com/blog/cocuklarda-dis-teli-ne-zaman",
    type: "article",
  },
};

export default function CocuklardaDisTeliPage() {
  const post = getBlogPostBySlug("cocuklarda-dis-teli-ne-zaman", "tr")!;
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
