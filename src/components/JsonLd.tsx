export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
    description:
      "İstanbul Ataşehir'de çocuk diş hekimliği (pedodonti) hizmeti. Erken dönem ortodonti, genel anestezi altında diş tedavisi, dijital anestezi.",
    url: "https://www.gayeustuner.com",
    email: "gayeustuner@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flora Residence",
      addressLocality: "Ataşehir",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.9923",
      longitude: "29.1244",
    },
    medicalSpecialty: "Pediatric Dentistry",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Erken Dönem Ortodontik Tedaviler",
        description: "Çocuklarda çene ve diş gelişim bozukluklarının erken dönemde tedavisi.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Genel Anestezi Altında Diş Tedavisi",
        description: "Kapsamlı tedavi gerektiren çocuklar için hastane ortamında güvenli tedavi.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dijital Anestezi",
        description: "Bilgisayar kontrollü ağrısız anestezi uygulaması.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Rubber Dam İzolasyonu",
        description: "Güvenli ve hijyenik tedavi için diş izolasyon yöntemi.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Paslanmaz Çelik Kronlar",
        description: "Süt dişlerinde dayanıklı kron uygulaması.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Şeffaf Plaklarla Ortodonti (Invisalign)",
        description: "Görünmez plaklar ile estetik diş düzeltme tedavisi.",
      },
    ],
    sameAs: ["https://www.instagram.com/drgayeustuner"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dt. Gaye Üstüner",
    jobTitle: "Çocuk Diş Hekimi (Pedodontist)",
    description:
      "Marmara Üniversitesi Diş Hekimliği mezunu, Yeditepe Üniversitesi Pedodonti doktora öğrencisi.",
    url: "https://www.gayeustuner.com",
    email: "gayeustuner@gmail.com",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Marmara Üniversitesi",
      },
      {
        "@type": "EducationalOrganization",
        name: "Yeditepe Üniversitesi",
      },
    ],
    sameAs: ["https://www.instagram.com/drgayeustuner"],
    worksFor: {
      "@type": "Dentist",
      name: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Flora Residence",
        addressLocality: "Ataşehir",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
