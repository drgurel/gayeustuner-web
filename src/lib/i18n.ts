export const locales = ["tr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const routeMap = {
  tr: {
    home: "/",
    about: "/hakkimda",
    services: "/hizmetler",
    blog: "/blog",
    contact: "/iletisim",
  },
  en: {
    home: "/en",
    about: "/en/about",
    services: "/en/services",
    blog: "/en/blog",
    contact: "/en/contact",
  },
  es: {
    home: "/es",
    about: "/es/about",
    services: "/es/services",
    blog: "/es/blog",
    contact: "/es/contact",
  },
} as const;

// EN slug -> TR slug
export const serviceSlugMap: Record<string, string> = {
  "early-orthodontics": "erken-donem-ortodonti",
  "general-anesthesia-treatment": "genel-anestezi-altinda-tedavi",
  "rubber-dam-isolation": "rubber-dam-izolasyonu",
  "stainless-steel-crowns": "paslanmaz-celik-kronlar",
  "clear-aligners": "seffaf-plaklar-ortodonti",
  "digital-anesthesia": "dijital-anestezi",
};

// ES slug -> TR slug
export const serviceSlugMapES: Record<string, string> = {
  "ortodoncia-temprana": "erken-donem-ortodonti",
  "tratamiento-anestesia-general": "genel-anestezi-altinda-tedavi",
  "aislamiento-dique-goma": "rubber-dam-izolasyonu",
  "coronas-acero-inoxidable": "paslanmaz-celik-kronlar",
  "alineadores-transparentes": "seffaf-plaklar-ortodonti",
  "anestesia-digital": "dijital-anestezi",
};

// TR slug -> EN slug (reverse)
export const serviceSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([en, tr]) => [tr, en])
);

// TR slug -> ES slug (reverse)
export const serviceSlugMapESReverse: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMapES).map(([es, tr]) => [tr, es])
);

// EN slug -> TR slug
export const blogSlugMap: Record<string, string> = {
  "childrens-dental-health": "cocuklarda-dis-sagligi",
  "pedodontics-orthodontics-tips": "pedodonti-ortodonti-ipuclari",
  "baby-teething-guide": "bebeklerde-dis-cikarma-rehberi",
  "child-afraid-of-dentist": "cocugum-disciden-korkuyor",
  "childhood-cavity-treatment": "cocuklarda-dis-curugu-tedavisi",
  "general-anesthesia-child-dental": "genel-anestezi-cocuk-dis-tedavisi",
};

// ES slug -> TR slug
export const blogSlugMapES: Record<string, string> = {
  "salud-dental-infantil": "cocuklarda-dis-sagligi",
  "consejos-odontopediatria-ortodoncia": "pedodonti-ortodonti-ipuclari",
  "guia-denticion-bebes": "bebeklerde-dis-cikarma-rehberi",
  "nino-miedo-al-dentista": "cocugum-disciden-korkuyor",
  "tratamiento-caries-infantil": "cocuklarda-dis-curugu-tedavisi",
  "anestesia-general-odontologia-infantil": "genel-anestezi-cocuk-dis-tedavisi",
};

export const blogSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugMap).map(([en, tr]) => [tr, en])
);

export const blogSlugMapESReverse: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugMapES).map(([es, tr]) => [tr, es])
);

export function getAlternateUrl(locale: Locale, path: string): string {
  const base = "https://www.gayeustuner.com";
  if (locale === "en") return `${base}/en${path}`;
  if (locale === "es") return `${base}/es${path}`;
  return `${base}${path}`;
}

export function getPathForLocale(
  locale: Locale,
  section: keyof typeof routeMap.tr
): string {
  return routeMap[locale][section];
}

export async function getDictionary(locale: Locale) {
  if (locale === "en") {
    return import("@/dictionaries/en.json").then((m) => m.default);
  }
  if (locale === "es") {
    return import("@/dictionaries/es.json").then((m) => m.default);
  }
  return import("@/dictionaries/tr.json").then((m) => m.default);
}
