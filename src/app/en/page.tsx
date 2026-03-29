import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Early Orthodontics",
    description:
      "Early diagnosis and treatment of jaw and dental development problems in children for a healthy smile at the right time.",
    href: "/en/services/early-orthodontics",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "General Anesthesia Treatment",
    description:
      "Safe general anesthesia in a hospital setting for children requiring extensive treatment or experiencing cooperation difficulties.",
    href: "/en/services/general-anesthesia-treatment",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Rubber Dam Isolation",
    description:
      "A modern method that isolates the tooth during treatment, providing a more hygienic, safe, and comfortable experience.",
    href: "/en/services/rubber-dam-isolation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Stainless Steel Crowns",
    description:
      "Durable and long-lasting crown applications used for treating advanced decay in primary teeth.",
    href: "/en/services/stainless-steel-crowns",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Clear Aligners",
    description:
      "Aesthetic and comfortable teeth straightening treatment for children and teens with invisible aligners.",
    href: "/en/services/clear-aligners",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Braces Treatment",
    description:
      "Correction of crooked teeth and bite disorders in children and adolescents with metal or ceramic brackets.",
    href: "/en/services/braces-treatment",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Digital Anesthesia",
    description:
      "Computer-controlled anesthesia system for a painless and fearless treatment experience. The ideal solution for children.",
    href: "/en/services/digital-anesthesia",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

const experiences = [
  { name: "Yeditepe University Dental Hospital", location: "Caddebostan" },
  { name: "Dentistanbul", location: "Kozyatagi" },
  { name: "ASM John Hopkins Medicine", location: "Hospital" },
  { name: "Medar Private Hospital", location: "" },
];

export default function HomeEN() {
  return (
    <>
      <Header locale="en" />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-surface-alt)] via-white to-[var(--color-border-light)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  Ataşehir, Istanbul · Pediatric Dentist
                </div>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-secondary)] leading-tight mb-6">
                  Ataşehir Pediatric Dentist{" "}
                  <span className="text-[var(--color-primary)]">In Safe Hands</span>
                </h1>
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-8 max-w-lg">
                  We protect your child&apos;s dental health with a modern pediatric dentistry approach.
                  We are here for a fearless, painless, and fun treatment experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/en/contact#appointment"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors text-center"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/en/services"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-center"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              {/* Hero Photo */}
              <div className="relative hidden lg:block">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--color-primary)]/10">
                    <Image
                      src="/dt-gaye-ustuner.jpg"
                      alt="Dr. Gaye Üstüner - Pediatric Dentist"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(min-width: 1024px) 400px, 0px"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-3 text-center">
                    <p className="font-[family-name:var(--font-heading)] text-lg text-[var(--color-secondary)] font-semibold">
                      Dr. Gaye Üstüner
                    </p>
                    <p className="text-[var(--color-text-light)] text-sm">Pediatric Dentist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white py-12 border-y border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { label: "Education", value: "Marmara Uni.", sub: "Faculty of Dentistry" },
                { label: "PhD", value: "Yeditepe Uni.", sub: "Pedodontics (Ongoing)" },
                { label: "Specialty", value: "Pedodontics", sub: "Pediatric Dentistry" },
                { label: "Location", value: "Ataşehir", sub: "Istanbul" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{item.label}</p>
                  <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-secondary)]">{item.value}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Our Treatment Services
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-[var(--color-secondary)] mb-4">
                The Best Care for Your Child
              </h2>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                With modern pediatric dentistry techniques and our child-friendly approach, we make every treatment safe and comfortable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group p-6 lg:p-8 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-surface-alt)] text-[var(--color-primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-secondary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                  About Me
                </p>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-[var(--color-secondary)] mb-6">
                  Dr. Gaye Üstüner
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                  As a graduate of Marmara University Faculty of Dentistry, I decided to specialize in
                  pediatric dentistry. I am currently pursuing my PhD in pedodontics at Yeditepe University.
                </p>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  My doctoral thesis focuses on child patients treated under general anesthesia.
                  I adopt modern techniques and an empathetic approach to ensure every child&apos;s
                  dental experience is positive and fearless.
                </p>

                <div className="space-y-3 mb-8">
                  {experiences.map((exp) => (
                    <div key={exp.name} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                      <span className="text-sm text-[var(--color-text)]">
                        {exp.name} {exp.location && <span className="text-[var(--color-text-light)]">- {exp.location}</span>}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/en/about"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/dt-gaye-ustuner.jpg"
                    alt="Dr. Gaye Üstüner"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--color-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-white mb-4">
              Take the First Step for Your Child&apos;s Dental Health
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Early interventions ensure your child has a healthy smile for life.
              Book an appointment now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact#appointment"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href="https://www.instagram.com/drgayeustuner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
