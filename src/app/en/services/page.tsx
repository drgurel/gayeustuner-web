import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our pediatric dentistry services: Early orthodontics, treatment under general anesthesia, rubber dam isolation, stainless steel crowns, clear aligners, digital anesthesia.",
  alternates: {
    canonical: "https://www.gayeustuner.com/en/services",
    languages: { tr: "https://www.gayeustuner.com/hizmetler", en: "https://www.gayeustuner.com/en/services" },
  },
};

export default function ServicesPageEN() {
  const services = getAllServices("en");

  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Our Treatment Services
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Modern Dental Treatments for Your Child
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                With current scientific approaches and child-friendly techniques, we transform every treatment
                into a safe, comfortable, and as fearless an experience as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-bold text-[var(--color-secondary)] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.benefits.slice(0, 4).map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-[var(--color-text)]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/en/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-surface-alt)] border border-[var(--color-border)] flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-sm text-[var(--color-text-muted)]">Image placeholder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-4">
              Which Treatment Is Right for Your Child?
            </h2>
            <p className="text-teal-100 mb-8">
              Schedule an examination to determine the most suitable treatment plan for your child together.
            </p>
            <Link
              href="/en/contact#appointment"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
