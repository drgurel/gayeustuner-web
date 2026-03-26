import type { Metadata } from "next";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LocalBusinessJsonLd, PersonJsonLd } from "@/components/JsonLd";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dt. Gaye Üstüner | Çocuk Diş Hekimi - Pedodonti Uzmanı İstanbul",
    template: "%s | Dt. Gaye Üstüner",
  },
  description:
    "Dt. Gaye Üstüner - İstanbul Ataşehir'de çocuk diş hekimliği (pedodonti). Erken dönem ortodonti, genel anestezi altında diş tedavisi, dijital anestezi ve daha fazlası.",
  keywords: [
    "çocuk diş hekimi",
    "pedodonti",
    "istanbul",
    "ataşehir",
    "pediatric dentist",
    "pedodontics",
    "children dental care",
  ],
  authors: [{ name: "Dt. Gaye Üstüner" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.gayeustuner.com",
    siteName: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
    title: "Dt. Gaye Üstüner | Çocuk Diş Hekimi - Pedodonti Uzmanı",
    description:
      "İstanbul Ataşehir'de uzman çocuk diş hekimliği. Çocuğunuzun gülüşü güvenli ellerde.",
    images: [
      {
        url: "https://www.gayeustuner.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dt. Gaye Üstüner - Çocuk Diş Hekimi | Pedodonti Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Gaye Üstüner | Çocuk Diş Hekimi - Pedodonti Uzmanı",
    description: "İstanbul Ataşehir'de uzman çocuk diş hekimliği. Erken dönem ortodonti, genel anestezi altında diş tedavisi.",
    site: "@drgayeustuner",
    images: ["https://www.gayeustuner.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.gayeustuner.com",
    languages: {
      "tr": "https://www.gayeustuner.com",
      "en": "https://www.gayeustuner.com/en",
      "es": "https://www.gayeustuner.com/es",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/es") ? "es" : "tr";

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd locale={locale} />
        <PersonJsonLd locale={locale} />
        {children}
        <MobileStickyCTA locale={locale} />
      </body>
      <GoogleAnalytics gaId="G-GJVR9D42GD" />
    </html>
  );
}
