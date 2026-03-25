export const locales = ["tr", "en"] as const;
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
} as const;

export const serviceSlugMap: Record<string, string> = {
  // EN slug -> TR slug
  "early-orthodontics": "erken-donem-ortodonti",
  "general-anesthesia-treatment": "genel-anestezi-altinda-tedavi",
  "rubber-dam-isolation": "rubber-dam-izolasyonu",
  "stainless-steel-crowns": "paslanmaz-celik-kronlar",
  "clear-aligners": "seffaf-plaklar-ortodonti",
  "digital-anesthesia": "dijital-anestezi",
};

// TR slug -> EN slug (reverse)
export const serviceSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(serviceSlugMap).map(([en, tr]) => [tr, en])
);

export const blogSlugMap: Record<string, string> = {
  // EN slug -> TR slug
  "childrens-dental-health": "cocuklarda-dis-sagligi",
  "pedodontics-orthodontics-tips": "pedodonti-ortodonti-ipuclari",
  "baby-teething-guide": "bebeklerde-dis-cikarma-rehberi",
  "child-afraid-of-dentist": "cocugum-disciden-korkuyor",
  "childhood-cavity-treatment": "cocuklarda-dis-curugu-tedavisi",
  "general-anesthesia-child-dental": "genel-anestezi-cocuk-dis-tedavisi",
};

export const blogSlugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugMap).map(([en, tr]) => [tr, en])
);

export function getAlternateUrl(locale: Locale, path: string): string {
  const base = "https://www.gayeustuner.com";
  if (locale === "en") return `${base}/en${path}`;
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
  return import("@/dictionaries/tr.json").then((m) => m.default);
}
