import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Frequently asked questions about pediatric dentistry, pedodontics, orthodontics, and treatment processes. Dr. Gaye Üstüner - Ataşehir, Istanbul.",
  alternates: {
    canonical: "https://www.gayeustuner.com/en/faq",
    languages: {
      tr: "https://www.gayeustuner.com/sss",
      en: "https://www.gayeustuner.com/en/faq",
      es: "https://www.gayeustuner.com/es/faq",
    },
  },
};

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        q: "At what age should I take my child for their first dental visit?",
        a: "The first dental visit should be within six months after the first baby tooth appears or by age 1 at the latest. This early visit is for evaluation and family guidance, not treatment.",
      },
      {
        q: "What is pedodontics (pediatric dentistry)?",
        a: "Pedodontics is a dental specialty focused on protecting, treating, and monitoring the oral and dental health of children aged 0-14. Pedodontists apply treatments with approaches appropriate to children's psychology.",
      },
      {
        q: "How often should dental visits be scheduled?",
        a: "Regular dental check-ups every 6 months are recommended for children. These check-ups enable early detection of potential issues and application of preventive treatments.",
      },
      {
        q: "My child is afraid of the dentist. What can I do?",
        a: "Dental anxiety is common in children. Our clinic minimizes fear through child-friendly environments, painless methods like digital anesthesia, and play-based approaches. An introductory session is recommended for the first visit.",
      },
    ],
  },
  {
    title: "Treatments and Pricing",
    questions: [
      {
        q: "How much does pediatric dental treatment cost?",
        a: "Treatment costs vary depending on the type and scope of the procedure and the child's age. A detailed treatment plan and pricing information is provided after examination. Please schedule an appointment for current pricing.",
      },
      {
        q: "Should cavities in baby teeth be treated?",
        a: "Yes, absolutely. Baby teeth serve as space holders for permanent teeth to come in correctly. Untreated cavities can lead to pain, abscesses, and crowding of permanent teeth.",
      },
      {
        q: "Is dental treatment under general anesthesia safe?",
        a: "Yes, general anesthesia administered in a hospital setting under the supervision of an anesthesiologist is extremely safe. It is the most suitable method for children requiring comprehensive treatment or experiencing cooperation difficulties. All procedures are completed in a single session.",
      },
    ],
  },
  {
    title: "Orthodontics and Braces",
    questions: [
      {
        q: "At what age can my child get braces?",
        a: "The first orthodontic evaluation should be done at age 7. Braces treatment typically begins after all permanent teeth have erupted (ages 11-14). Early intervention between ages 7-10 may be needed in some cases.",
      },
      {
        q: "Should we choose braces or clear aligners?",
        a: "Both methods have advantages. Braces are more effective for complex issues. Clear aligners (Invisalign) offer aesthetic and comfort advantages. We will determine the most suitable method together based on your child's condition.",
      },
      {
        q: "Can clear aligners (Invisalign) be used for children?",
        a: "Yes, the Invisalign First system is specifically designed for children ages 6-10. It is used to guide jaw development and ensure teeth erupt in the correct position.",
      },
      {
        q: "How long does braces treatment take?",
        a: "Treatment duration varies from 12-24 months depending on the severity of the issue. Attending regular check-up appointments and following the dentist's recommendations shortens the treatment period.",
      },
    ],
  },
  {
    title: "Appointment and Contact",
    questions: [
      {
        q: "How can I schedule an appointment?",
        a: "You can call us at +90 547 266 62 04, send a WhatsApp message, or use the contact form on our website to schedule an appointment.",
      },
      {
        q: "Where is the clinic located?",
        a: "We serve at Flora Residence, Ataşehir, Istanbul. You can easily find us by searching 'Dr. Gaye Üstüner' on Google Maps.",
      },
    ],
  },
];

export default function FAQPageEN() {
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
      <Header locale="en" />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                FAQ
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Common questions about pediatric dentistry, treatments, and appointment processes.
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
                Didn&apos;t find your question?
              </h2>
              <p className="text-teal-100 mb-6">
                Contact us for any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/en/contact#appointment"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
                >
                  Book Appointment
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
      <Footer locale="en" />
    </>
  );
}
