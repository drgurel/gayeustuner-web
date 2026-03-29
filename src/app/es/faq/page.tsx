import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ)",
  description:
    "Preguntas frecuentes sobre odontología pediátrica, odontopediatría, ortodoncia y procesos de tratamiento. Dra. Gaye Üstüner - Ataşehir, Estambul.",
  alternates: {
    canonical: "https://www.gayeustuner.com/es/faq",
    languages: {
      tr: "https://www.gayeustuner.com/sss",
      en: "https://www.gayeustuner.com/en/faq",
      es: "https://www.gayeustuner.com/es/faq",
    },
  },
};

const faqCategories = [
  {
    title: "Preguntas Generales",
    questions: [
      {
        q: "¿A qué edad debo llevar a mi hijo a su primera visita dental?",
        a: "La primera visita dental debe realizarse dentro de los seis meses posteriores a la aparición del primer diente de leche o como máximo al cumplir 1 año. Esta visita temprana es para evaluación y orientación familiar, no para tratamiento.",
      },
      {
        q: "¿Qué es la odontopediatría?",
        a: "La odontopediatría es una especialidad dental enfocada en proteger, tratar y monitorear la salud oral y dental de niños de 0 a 14 años. Los odontopediatras aplican tratamientos con enfoques apropiados para la psicología infantil.",
      },
      {
        q: "¿Con qué frecuencia se deben programar las visitas dentales?",
        a: "Se recomiendan controles dentales regulares cada 6 meses para los niños. Estos controles permiten la detección temprana de posibles problemas y la aplicación de tratamientos preventivos.",
      },
    ],
  },
  {
    title: "Tratamientos y Precios",
    questions: [
      {
        q: "¿Cuánto cuesta el tratamiento dental pediátrico?",
        a: "Los costos del tratamiento varían según el tipo y alcance del procedimiento y la edad del niño. Se proporciona un plan de tratamiento detallado e información de precios después del examen.",
      },
      {
        q: "¿Se deben tratar las caries en los dientes de leche?",
        a: "Sí, absolutamente. Los dientes de leche sirven como mantenedores de espacio para que los dientes permanentes salgan correctamente. Las caries no tratadas pueden provocar dolor, abscesos y apiñamiento de los dientes permanentes.",
      },
      {
        q: "¿Es seguro el tratamiento dental bajo anestesia general?",
        a: "Sí, la anestesia general administrada en un entorno hospitalario bajo la supervisión de un anestesiólogo es extremadamente segura. Es el método más adecuado para niños que requieren tratamiento integral. Todos los procedimientos se completan en una sola sesión.",
      },
    ],
  },
  {
    title: "Ortodoncia y Brackets",
    questions: [
      {
        q: "¿A qué edad puede mi hijo ponerse brackets?",
        a: "La primera evaluación ortodóntica debe realizarse a los 7 años. El tratamiento con brackets generalmente comienza después de que han erupcionado todos los dientes permanentes (entre 11-14 años).",
      },
      {
        q: "¿Debemos elegir brackets o alineadores transparentes?",
        a: "Ambos métodos tienen ventajas. Los brackets son más efectivos para problemas complejos. Los alineadores transparentes (Invisalign) ofrecen ventajas estéticas y de comodidad. Determinaremos el método más adecuado juntos.",
      },
      {
        q: "¿Cuánto dura el tratamiento con brackets?",
        a: "La duración del tratamiento varía de 12 a 24 meses según la gravedad del problema. Asistir a las citas de control regulares y seguir las recomendaciones del dentista acorta el período de tratamiento.",
      },
    ],
  },
  {
    title: "Citas y Contacto",
    questions: [
      {
        q: "¿Cómo puedo programar una cita?",
        a: "Puede llamarnos al +90 547 266 62 04, enviar un mensaje de WhatsApp o usar el formulario de contacto en nuestro sitio web para programar una cita.",
      },
      {
        q: "¿Dónde se encuentra la clínica?",
        a: "Atendemos en Flora Residence, Ataşehir, Estambul. Puede encontrarnos fácilmente buscando 'Dra. Gaye Üstüner' en Google Maps.",
      },
    ],
  },
];

export default function FAQPageES() {
  const allQuestions = faqCategories.flatMap((cat) => cat.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header locale="es" />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                FAQ
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Preguntas comunes sobre odontología pediátrica, tratamientos y procesos de citas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="mb-12">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-secondary)] mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <div
                      key={item.q}
                      className="p-5 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors"
                    >
                      <h3 className="font-semibold text-[var(--color-secondary)] mb-2">
                        {item.q}
                      </h3>
                      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 p-8 rounded-2xl bg-[var(--color-primary)] text-white text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">
                ¿No encontró su pregunta?
              </h2>
              <p className="text-teal-100 mb-6">
                Contáctenos para cualquier pregunta que pueda tener.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/es/contact#cita"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
                >
                  Reservar Cita
                </Link>
                <a
                  href="tel:+905472666204"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  +90 547 266 62 04
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  );
}
