import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gayeustuner.com";
  const now = new Date();

  const trServices = [
    "erken-donem-ortodonti",
    "genel-anestezi-altinda-tedavi",
    "rubber-dam-izolasyonu",
    "paslanmaz-celik-kronlar",
    "seffaf-plaklar-ortodonti",
    "dijital-anestezi",
  ];

  const enServices = [
    "early-orthodontics",
    "general-anesthesia-treatment",
    "rubber-dam-isolation",
    "stainless-steel-crowns",
    "clear-aligners",
    "digital-anesthesia",
  ];

  const trBlogs = [
    "cocuklarda-dis-sagligi",
    "pedodonti-ortodonti-ipuclari",
    "bebeklerde-dis-cikarma-rehberi",
    "cocugum-disciden-korkuyor",
    "cocuklarda-dis-curugu-tedavisi",
    "genel-anestezi-cocuk-dis-tedavisi",
  ];

  const enBlogs = [
    "childrens-dental-health",
    "pedodontics-orthodontics-tips",
    "baby-teething-guide",
    "child-afraid-of-dentist",
    "childhood-cavity-treatment",
    "general-anesthesia-child-dental",
  ];

  return [
    // Homepage
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { tr: base, en: `${base}/en` } },
    },
    // About
    {
      url: `${base}/hakkimda`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { tr: `${base}/hakkimda`, en: `${base}/en/about` } },
    },
    // Services
    {
      url: `${base}/hizmetler`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { tr: `${base}/hizmetler`, en: `${base}/en/services` } },
    },
    // Service detail pages
    ...trServices.map((slug, i) => ({
      url: `${base}/hizmetler/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${base}/hizmetler/${slug}`,
          en: `${base}/en/services/${enServices[i]}`,
        },
      },
    })),
    // Blog
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { tr: `${base}/blog`, en: `${base}/en/blog` } },
    },
    // Blog posts
    ...trBlogs.map((slug, i) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${base}/blog/${slug}`,
          en: `${base}/en/blog/${enBlogs[i]}`,
        },
      },
    })),
    // Contact
    {
      url: `${base}/iletisim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { tr: `${base}/iletisim`, en: `${base}/en/contact` } },
    },
    // EN pages (standalone entries)
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { tr: base, en: `${base}/en` } },
    },
    {
      url: `${base}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { tr: `${base}/hakkimda`, en: `${base}/en/about` } },
    },
    {
      url: `${base}/en/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { tr: `${base}/hizmetler`, en: `${base}/en/services` } },
    },
    ...enServices.map((slug, i) => ({
      url: `${base}/en/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          tr: `${base}/hizmetler/${trServices[i]}`,
          en: `${base}/en/services/${slug}`,
        },
      },
    })),
    {
      url: `${base}/en/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { tr: `${base}/blog`, en: `${base}/en/blog` } },
    },
    ...enBlogs.map((slug, i) => ({
      url: `${base}/en/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${base}/blog/${trBlogs[i]}`,
          en: `${base}/en/blog/${slug}`,
        },
      },
    })),
    {
      url: `${base}/en/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { tr: `${base}/iletisim`, en: `${base}/en/contact` } },
    },
  ];
}
