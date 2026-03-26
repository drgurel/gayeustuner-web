import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dra. Gaye Üstüner | Odontóloga Pediatra - Estambul",
    template: "%s | Dra. Gaye Üstüner",
  },
  description:
    "Dra. Gaye Üstüner - Odontopediatría en Ataşehir, Estambul. Ortodoncia temprana, tratamiento dental bajo anestesia general, anestesia digital y más.",
  openGraph: {
    locale: "es_ES",
    siteName: "Dra. Gaye Üstüner - Odontóloga Pediatra",
  },
  alternates: {
    canonical: "https://www.gayeustuner.com/es",
    languages: {
      tr: "https://www.gayeustuner.com",
      en: "https://www.gayeustuner.com/en",
      es: "https://www.gayeustuner.com/es",
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
