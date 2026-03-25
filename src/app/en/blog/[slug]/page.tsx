import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug, getAllBlogPosts, getBlogPost, blogPostIds } from "@/data/blog-posts";
import { blogSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  const posts = getAllBlogPosts("en");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, "en");
  if (!post) return {};

  const trSlug = blogSlugMap[slug] || slug;

  return {
    title: post.title,
    description: post.intro.substring(0, 160),
    alternates: {
      canonical: `https://www.gayeustuner.com/en/blog/${slug}`,
      languages: {
        tr: `https://www.gayeustuner.com/blog/${trSlug}`,
        en: `https://www.gayeustuner.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.intro.substring(0, 160),
      url: `https://www.gayeustuner.com/en/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, "en");
  if (!post) notFound();

  // Resolve related posts
  const relatedPosts = post.relatedSlugs
    .map((id) => {
      // id is a canonical blog post ID
      const related = getBlogPost(id, "en");
      if (!related) return null;
      return {
        title: related.title,
        slug: related.slug,
        category: related.category,
      };
    })
    .filter((p): p is { title: string; slug: string; category: string } => p !== null);

  return (
    <BlogPostLayout
      slug={slug}
      title={post.title}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      intro={post.intro}
      sections={post.sections}
      keyPoints={post.keyPoints}
      relatedPosts={relatedPosts}
      locale="en"
    />
  );
}
