import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Dra. Gaye Üstüner - Graduada de la Universidad de Marmara, doctoranda en odontopediatría en la Universidad Yeditepe. Especialista en odontología infantil.",
  alternates: {
    canonical: "https://www.gayeustuner.com/es/about",
    languages: {
      tr: "https://www.gayeustuner.com/hakkimda",
      en: "https://www.gayeustuner.com/en/about",
      es: "https://www.gayeustuner.com/es/about",
    },
  },
};

const education = [
  {
    degree: "Doctorado (PhD) - Odontopediatría",
    school: "Universidad Yeditepe",
    status: "En curso",
    detail: "Tesis: Pacientes infantiles tratados bajo anestesia general",
  },
  {
    degree: "Licenciatura en Odontología",
    school: "Universidad de Marmara",
    status: "Graduada",
    detail: "Facultad de Odontología",
  },
];

const experience = [
  {
    title: "Hospital Dental de la Universidad Yeditepe",
    location: "Caddebostan, Estambul",
    description: "Práctica clínica y estudios académicos en el departamento de odontopediatría.",
  },
  {
    title: "Dentistanbul",
    location: "Kozyatagi, Estambul",
    description: "Odontología infantil y tratamientos dentales preventivos.",
  },
  {
    title: "ASM John Hopkins Medicine Hospital",
    location: "Estambul",
    description: "Prácticas de odontopediatría en un entorno sanitario multidisciplinario.",
  },
  {
    title: "Hospital Privado Medar",
    location: "Estambul",
    description: "Tratamiento de niños y pacientes jóvenes.",
  },
];

export default function AboutPageES() {
  return (
    <>
      <Header locale="es" />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                  Sobre Mí
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                  Dra. Gaye Üstüner
                </h1>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  Tras graduarme de la Facultad de Odontología de la Universidad de Marmara, seguí mi pasión
                  por la odontología infantil y comencé el programa de doctorado en odontopediatría en la Universidad Yeditepe.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  Mi tesis doctoral se centra en pacientes infantiles tratados bajo anestesia general.
                  Mi investigación tiene como objetivo proporcionar un tratamiento más seguro y eficaz para niños
                  con dificultades de cooperación y necesidades de tratamiento extensas.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                  Mi mayor objetivo es que cada niño recuerde su visita al dentista como una experiencia
                  positiva. Trabajo para proteger la sonrisa de cada pequeño paciente con técnicas
                  modernas, un enfoque empático y paciencia.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/dt-gaye-ustuner.jpg"
                    alt="Dra. Gaye Üstüner - Odontóloga Pediatra"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-secondary)] mb-8">
                Formación Académica
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-2xl border border-[var(--color-border)] bg-white"
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)]">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "En curso"
                          ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-[var(--color-primary)] font-medium mb-1">{edu.school}</p>
                    <p className="text-sm text-[var(--color-text-light)]">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-secondary)] mb-8">
                Experiencia Profesional
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] mt-1.5"></div>
                      <div className="w-px flex-1 bg-[var(--color-border)]"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)]">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[var(--color-primary)] mb-1">{exp.location}</p>
                      <p className="text-sm text-[var(--color-text-light)]">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-secondary)] mb-8">
                Idiomas
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { language: "Turco", level: "Lengua Materna", flag: "\u{1F1F9}\u{1F1F7}", percent: 100 },
                  { language: "Inglés", level: "B2 – Intermedio Alto", flag: "\u{1F1EC}\u{1F1E7}", percent: 70 },
                  { language: "Español", level: "B2 – Intermedio Alto", flag: "\u{1F1EA}\u{1F1F8}", percent: 70 },
                ].map((lang) => (
                  <div
                    key={lang.language}
                    className="p-5 rounded-2xl border border-[var(--color-border)] bg-white"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <div>
                        <p className="font-semibold text-[var(--color-secondary)]">{lang.language}</p>
                        <p className="text-xs text-[var(--color-text-light)]">{lang.level}</p>
                      </div>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--color-surface-alt)]">
                      <div
                        className="h-2 rounded-full bg-[var(--color-primary)]"
                        style={{ width: `${lang.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              Pedir una Cita
            </h2>
            <p className="text-teal-100 mb-8">
              ¿Tiene preguntas sobre la salud dental de su hijo? Contáctenos hoy.
            </p>
            <Link
              href="/es/contact#cita"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
            >
              Contáctenos
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  );
}
