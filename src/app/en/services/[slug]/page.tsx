import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug, getAllServices } from "@/data/services";
import { serviceSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  const services = getAllServices("en");
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "en");
  if (!service) return {};

  const trSlug = serviceSlugMap[slug] || slug;

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://www.gayeustuner.com/en/services/${slug}`,
      languages: {
        tr: `https://www.gayeustuner.com/hizmetler/${trSlug}`,
        en: `https://www.gayeustuner.com/en/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPageEN({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "en");
  if (!service) notFound();

  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      benefits={service.benefits}
      faq={service.faq.map((f) => ({ q: f.question, a: f.answer }))}
      canonicalSlug={`en/services/${slug}`}
      locale="en"
    />
  );
}
