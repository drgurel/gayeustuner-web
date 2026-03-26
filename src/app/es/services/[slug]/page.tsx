import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug, getAllServices } from "@/data/services";
import { serviceSlugMapES, serviceSlugMap } from "@/lib/i18n";

export function generateStaticParams() {
  const services = getAllServices("es");
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "es");
  if (!service) return {};

  const trSlug = serviceSlugMapES[slug] || slug;
  // Find EN slug from TR slug using reverse lookup
  const enSlug = Object.entries(serviceSlugMap).find(([, tr]) => tr === trSlug)?.[0] || slug;

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `https://www.gayeustuner.com/es/services/${slug}`,
      languages: {
        tr: `https://www.gayeustuner.com/hizmetler/${trSlug}`,
        en: `https://www.gayeustuner.com/en/services/${enSlug}`,
        es: `https://www.gayeustuner.com/es/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPageES({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "es");
  if (!service) notFound();

  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      benefits={service.benefits}
      faq={service.faq.map((f) => ({ q: f.question, a: f.answer }))}
      canonicalSlug={`es/services/${slug}`}
      locale="es"
    />
  );
}
