import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dr. Gaye Üstüner | Pediatric Dentist - Istanbul",
    template: "%s | Dr. Gaye Üstüner",
  },
  description:
    "Dr. Gaye Üstüner - Pediatric dentistry (pedodontics) in Ataşehir, Istanbul. Early orthodontics, dental treatment under general anesthesia, digital anesthesia, and more.",
  openGraph: {
    locale: "en_US",
    siteName: "Dr. Gaye Üstüner - Pediatric Dentist",
  },
  alternates: {
    canonical: "https://www.gayeustuner.com/en",
    languages: {
      tr: "https://www.gayeustuner.com",
      en: "https://www.gayeustuner.com/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
