interface JsonLdProps {
  locale?: "tr" | "en" | "es";
}

const localBusinessTexts = {
  tr: {
    name: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
    description:
      "İstanbul Ataşehir'de çocuk diş hekimliği (pedodonti) hizmeti. Erken dönem ortodonti, genel anestezi altında diş tedavisi, dijital anestezi.",
    services: [
      {
        name: "Erken Dönem Ortodontik Tedaviler",
        description: "Çocuklarda çene ve diş gelişim bozukluklarının erken dönemde tedavisi.",
      },
      {
        name: "Genel Anestezi Altında Diş Tedavisi",
        description: "Kapsamlı tedavi gerektiren çocuklar için hastane ortamında güvenli tedavi.",
      },
      {
        name: "Dijital Anestezi",
        description: "Bilgisayar kontrollü ağrısız anestezi uygulaması.",
      },
      {
        name: "Rubber Dam İzolasyonu",
        description: "Güvenli ve hijyenik tedavi için diş izolasyon yöntemi.",
      },
      {
        name: "Paslanmaz Çelik Kronlar",
        description: "Süt dişlerinde dayanıklı kron uygulaması.",
      },
      {
        name: "Şeffaf Plaklarla Ortodonti (Invisalign)",
        description: "Görünmez plaklar ile estetik diş düzeltme tedavisi.",
      },
    ],
  },
  en: {
    name: "Dr. Gaye Üstüner - Pediatric Dentist",
    description:
      "Pediatric dentistry (pedodontics) services in Ataşehir, Istanbul. Early orthodontics, dental treatment under general anesthesia, digital anesthesia.",
    services: [
      {
        name: "Early Orthodontic Treatments",
        description: "Early treatment of jaw and dental development disorders in children.",
      },
      {
        name: "Dental Treatment Under General Anesthesia",
        description: "Safe treatment in a hospital setting for children requiring comprehensive care.",
      },
      {
        name: "Digital Anesthesia",
        description: "Computer-controlled painless anesthesia application.",
      },
      {
        name: "Rubber Dam Isolation",
        description: "Tooth isolation method for safe and hygienic treatment.",
      },
      {
        name: "Stainless Steel Crowns",
        description: "Durable crown application for primary teeth.",
      },
      {
        name: "Clear Aligners (Invisalign)",
        description: "Aesthetic teeth straightening treatment with invisible aligners.",
      },
    ],
  },
  es: {
    name: "Dra. Gaye Üstüner - Odontóloga Pediatra",
    description:
      "Servicios de odontología pediátrica (odontopediatría) en Ataşehir, Estambul. Ortodoncia temprana, tratamiento dental con anestesia general, anestesia digital.",
    services: [
      {
        name: "Tratamientos de Ortodoncia Temprana",
        description: "Tratamiento temprano de trastornos del desarrollo maxilar y dental en niños.",
      },
      {
        name: "Tratamiento Dental con Anestesia General",
        description: "Tratamiento seguro en entorno hospitalario para niños que requieren atención integral.",
      },
      {
        name: "Anestesia Digital",
        description: "Aplicación de anestesia indolora controlada por computadora.",
      },
      {
        name: "Aislamiento con Dique de Goma",
        description: "Método de aislamiento dental para un tratamiento seguro e higiénico.",
      },
      {
        name: "Coronas de Acero Inoxidable",
        description: "Aplicación de coronas duraderas para dientes de leche.",
      },
      {
        name: "Alineadores Transparentes (Invisalign)",
        description: "Tratamiento estético de alineación dental con alineadores invisibles.",
      },
    ],
  },
} as const;

const personTexts = {
  tr: {
    jobTitle: "Çocuk Diş Hekimi (Pedodontist)",
    description:
      "Marmara Üniversitesi Diş Hekimliği mezunu, Yeditepe Üniversitesi Pedodonti doktora öğrencisi.",
    worksForName: "Dt. Gaye Üstüner - Çocuk Diş Hekimi",
  },
  en: {
    jobTitle: "Pediatric Dentist (Pedodontist)",
    description:
      "Graduate of Marmara University Faculty of Dentistry, PhD student in Pedodontics at Yeditepe University.",
    worksForName: "Dr. Gaye Üstüner - Pediatric Dentist",
  },
  es: {
    jobTitle: "Odontóloga Pediatra",
    description:
      "Graduada de la Facultad de Odontología de la Universidad de Mármara, estudiante de doctorado en Odontopediatría en la Universidad de Yeditepe.",
    worksForName: "Dra. Gaye Üstüner - Odontóloga Pediatra",
  },
} as const;

export function LocalBusinessJsonLd({ locale = "tr" }: JsonLdProps) {
  const t = localBusinessTexts[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: t.name,
    description: t.description,
    url: "https://www.gayeustuner.com",
    telephone: "+905472666204",
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
    availableService: t.services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      description: s.description,
    })),
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

export function PersonJsonLd({ locale = "tr" }: JsonLdProps) {
  const t = personTexts[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dt. Gaye Üstüner",
    jobTitle: t.jobTitle,
    description: t.description,
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
      name: t.worksForName,
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
