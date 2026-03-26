import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getBlogPostBySlug, getAllBlogPosts, getBlogPost } from "@/data/blog-posts";
import { blogSlugMapES, blogSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  const posts = getAllBlogPosts("es");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, "es");
  if (!post) return {};

  const trSlug = blogSlugMapES[slug] || slug;
  // Find EN slug from TR slug using reverse lookup
  const enSlug = Object.entries(blogSlugMap).find(([, tr]) => tr === trSlug)?.[0] || slug;

  return {
    title: post.title,
    description: post.intro.substring(0, 160),
    alternates: {
      canonical: `https://www.gayeustuner.com/es/blog/${slug}`,
      languages: {
        tr: `https://www.gayeustuner.com/blog/${trSlug}`,
        en: `https://www.gayeustuner.com/en/blog/${enSlug}`,
        es: `https://www.gayeustuner.com/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.intro.substring(0, 160),
      url: `https://www.gayeustuner.com/es/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPageES({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, "es");
  if (!post) notFound();

  // Resolve related posts
  const relatedPosts = post.relatedSlugs
    .map((id) => {
      // id is a canonical blog post ID
      const related = getBlogPost(id, "es");
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
      locale="es"
    />
  );
}
