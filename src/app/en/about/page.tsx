import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Dr. Gaye Üstüner - Graduate of Marmara University, PhD student in pedodontics at Yeditepe University. Specialist in pediatric dentistry.",
  alternates: {
    canonical: "https://www.gayeustuner.com/en/about",
    languages: { tr: "https://www.gayeustuner.com/hakkimda", en: "https://www.gayeustuner.com/en/about" },
  },
};

const education = [
  {
    degree: "PhD - Pedodontics",
    school: "Yeditepe University",
    status: "Ongoing",
    detail: "Thesis: Child patients treated under general anesthesia",
  },
  {
    degree: "DDS - Doctor of Dental Surgery",
    school: "Marmara University",
    status: "Graduate",
    detail: "Faculty of Dentistry",
  },
];

const experience = [
  {
    title: "Yeditepe University Dental Hospital",
    location: "Caddebostan, Istanbul",
    description: "Clinical practice and academic studies in the pedodontics department.",
  },
  {
    title: "Dentistanbul",
    location: "Kozyatagi, Istanbul",
    description: "Pediatric dentistry and preventive dental treatments.",
  },
  {
    title: "ASM John Hopkins Medicine Hospital",
    location: "Istanbul",
    description: "Pedodontics practices in a multidisciplinary healthcare environment.",
  },
  {
    title: "Medar Private Hospital",
    location: "Istanbul",
    description: "Treatment of children and young patients.",
  },
];

export default function AboutPageEN() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                  About Me
                </p>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                  Dr. Gaye Üstüner
                </h1>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  After graduating from Marmara University Faculty of Dentistry, I pursued my passion
                  for pediatric dentistry and started the pedodontics PhD program at Yeditepe University.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-4">
                  My doctoral thesis focuses on child patients treated under general anesthesia.
                  My research aims to provide safer and more effective treatment for children
                  with cooperation difficulties and extensive treatment needs.
                </p>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                  My greatest goal is for every child to remember their dental visit as a positive
                  experience. I work to protect the smile of each little patient with modern
                  techniques, an empathetic approach, and patience.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/dt-gaye-ustuner.jpg"
                    alt="Dr. Gaye Üstüner - Pediatric Dentist"
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
                Education
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
                        edu.status === "Ongoing"
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
                Professional Experience
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
                Languages
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { language: "Turkish", level: "Native", flag: "🇹🇷", percent: 100 },
                  { language: "English", level: "B2 – Upper Intermediate", flag: "🇬🇧", percent: 70 },
                  { language: "Spanish", level: "B2 – Upper Intermediate", flag: "🇪🇸", percent: 70 },
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
              Book an Appointment
            </h2>
            <p className="text-teal-100 mb-8">
              Have questions about your child&apos;s dental health? Get in touch today.
            </p>
            <Link
              href="/en/contact#appointment"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
