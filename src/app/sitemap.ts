import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

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
    "tel-tedavisi",
  ];
  const enServices = [
    "early-orthodontics",
    "general-anesthesia-treatment",
    "rubber-dam-isolation",
    "stainless-steel-crowns",
    "clear-aligners",
    "digital-anesthesia",
    "braces-treatment",
  ];
  const esServices = [
    "ortodoncia-temprana",
    "tratamiento-anestesia-general",
    "aislamiento-dique-goma",
    "coronas-acero-inoxidable",
    "alineadores-transparentes",
    "anestesia-digital",
    "tratamiento-brackets",
  ];

  const trBlogs = [
    "cocuklarda-dis-sagligi",
    "pedodonti-ortodonti-ipuclari",
    "bebeklerde-dis-cikarma-rehberi",
    "cocugum-disciden-korkuyor",
    "cocuklarda-dis-curugu-tedavisi",
    "genel-anestezi-cocuk-dis-tedavisi",
    "cocuklarda-dis-teli-ne-zaman",
    "cocuklarda-bruksizm-dis-sikma",
    "sut-disi-dustu-kalici-dis-cikmiyor",
    "parmak-emme-dis-yapisina-etkileri",
    "invisalign-first-cocuklar-seffaf-plak",
  ];
  const enBlogs = [
    "childrens-dental-health",
    "pedodontics-orthodontics-tips",
    "baby-teething-guide",
    "child-afraid-of-dentist",
    "childhood-cavity-treatment",
    "general-anesthesia-child-dental",
    "when-should-children-get-braces",
    "childhood-bruxism-teeth-grinding",
    "baby-tooth-fell-permanent-not-coming",
    "thumb-sucking-dental-effects",
    "invisalign-first-children-clear-aligners",
  ];
  const esBlogs = [
    "salud-dental-infantil",
    "consejos-odontopediatria-ortodoncia",
    "guia-denticion-bebes",
    "nino-miedo-al-dentista",
    "tratamiento-caries-infantil",
    "anestesia-general-odontologia-infantil",
    "cuando-poner-brackets-ninos",
    "bruxismo-infantil",
    "diente-leche-cayo-permanente-no-sale",
    "succion-pulgar-efectos-dentales",
    "invisalign-first-ninos-alineadores",
  ];

  const langs = (tr: string, en: string, es: string) => ({ tr, en, es });

  return [
    // --- TR pages ---
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: { languages: langs(base, `${base}/en`, `${base}/es`) } },
    { url: `${base}/hakkimda`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: langs(`${base}/hakkimda`, `${base}/en/about`, `${base}/es/about`) } },
    { url: `${base}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: langs(`${base}/hizmetler`, `${base}/en/services`, `${base}/es/services`) } },
    ...trServices.map((slug, i) => ({
      url: `${base}/hizmetler/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
      alternates: { languages: langs(`${base}/hizmetler/${slug}`, `${base}/en/services/${enServices[i]}`, `${base}/es/services/${esServices[i]}`) },
    })),
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8, alternates: { languages: langs(`${base}/blog`, `${base}/en/blog`, `${base}/es/blog`) } },
    ...trBlogs.map((slug, i) => ({
      url: `${base}/blog/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
      alternates: { languages: langs(`${base}/blog/${slug}`, `${base}/en/blog/${enBlogs[i]}`, `${base}/es/blog/${esBlogs[i]}`) },
    })),
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.6, alternates: { languages: langs(`${base}/iletisim`, `${base}/en/contact`, `${base}/es/contact`) } },
    { url: `${base}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: langs(`${base}/sss`, `${base}/en/faq`, `${base}/es/faq`) } },

    // --- Location pages ---
    ...locations.map((loc) => ({
      url: `${base}/bolge/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // --- EN pages ---
    { url: `${base}/en`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: { languages: langs(base, `${base}/en`, `${base}/es`) } },
    { url: `${base}/en/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: langs(`${base}/hakkimda`, `${base}/en/about`, `${base}/es/about`) } },
    { url: `${base}/en/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: langs(`${base}/hizmetler`, `${base}/en/services`, `${base}/es/services`) } },
    ...enServices.map((slug, i) => ({
      url: `${base}/en/services/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
      alternates: { languages: langs(`${base}/hizmetler/${trServices[i]}`, `${base}/en/services/${slug}`, `${base}/es/services/${esServices[i]}`) },
    })),
    { url: `${base}/en/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8, alternates: { languages: langs(`${base}/blog`, `${base}/en/blog`, `${base}/es/blog`) } },
    ...enBlogs.map((slug, i) => ({
      url: `${base}/en/blog/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
      alternates: { languages: langs(`${base}/blog/${trBlogs[i]}`, `${base}/en/blog/${slug}`, `${base}/es/blog/${esBlogs[i]}`) },
    })),
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6, alternates: { languages: langs(`${base}/iletisim`, `${base}/en/contact`, `${base}/es/contact`) } },
    { url: `${base}/en/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: langs(`${base}/sss`, `${base}/en/faq`, `${base}/es/faq`) } },

    // --- ES pages ---
    { url: `${base}/es`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: { languages: langs(base, `${base}/en`, `${base}/es`) } },
    { url: `${base}/es/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: { languages: langs(`${base}/hakkimda`, `${base}/en/about`, `${base}/es/about`) } },
    { url: `${base}/es/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: { languages: langs(`${base}/hizmetler`, `${base}/en/services`, `${base}/es/services`) } },
    ...esServices.map((slug, i) => ({
      url: `${base}/es/services/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8,
      alternates: { languages: langs(`${base}/hizmetler/${trServices[i]}`, `${base}/en/services/${enServices[i]}`, `${base}/es/services/${slug}`) },
    })),
    { url: `${base}/es/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8, alternates: { languages: langs(`${base}/blog`, `${base}/en/blog`, `${base}/es/blog`) } },
    ...esBlogs.map((slug, i) => ({
      url: `${base}/es/blog/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7,
      alternates: { languages: langs(`${base}/blog/${trBlogs[i]}`, `${base}/en/blog/${enBlogs[i]}`, `${base}/es/blog/${slug}`) },
    })),
    { url: `${base}/es/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6, alternates: { languages: langs(`${base}/iletisim`, `${base}/en/contact`, `${base}/es/contact`) } },
    { url: `${base}/es/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7, alternates: { languages: langs(`${base}/sss`, `${base}/en/faq`, `${base}/es/faq`) } },
  ];
}
