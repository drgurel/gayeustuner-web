import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS)",
  description:
    "Çocuk diş hekimliği, pedodonti, ortodonti ve tedavi süreçleri hakkında sıkça sorulan sorular ve yanıtları. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
  alternates: {
    canonical: "https://www.gayeustuner.com/sss",
    languages: {
      tr: "https://www.gayeustuner.com/sss",
      en: "https://www.gayeustuner.com/en/faq",
      es: "https://www.gayeustuner.com/es/faq",
    },
  },
};

const faqCategories = [
  {
    title: "Genel Sorular",
    questions: [
      {
        q: "Çocuğumu ilk diş hekimi muayenesine kaç yaşında götürmeliyim?",
        a: "İlk diş hekimi ziyareti, ilk süt dişi çıktıktan sonra veya en geç 1 yaşına kadar yapılmalıdır. Bu erken ziyaret tedavi amaçlı değil, değerlendirme ve aile bilgilendirmesi içindir.",
      },
      {
        q: "Pedodonti (çocuk diş hekimliği) nedir?",
        a: "Pedodonti, 0-14 yaş arası çocukların ağız ve diş sağlığını korumaya, tedavi etmeye ve takip etmeye yönelik diş hekimliği uzmanlık dalıdır. Pedodontistler, çocukların psikolojisine uygun yaklaşımlarla tedavi uygular.",
      },
      {
        q: "Diş hekimi ziyareti ne sıklıkla yapılmalıdır?",
        a: "Çocuklarda 6 ayda bir düzenli diş kontrolü önerilir. Bu kontroller sayesinde olası sorunlar erken tespit edilir ve koruyucu tedaviler uygulanabilir.",
      },
      {
        q: "Çocuğum dişçiden korkuyor, ne yapabilirim?",
        a: "Diş hekimi korkusu çocuklarda yaygındır. Kliniğimizde çocuk dostu ortam, dijital anestezi gibi ağrısız yöntemler ve oyun temelli yaklaşımlarla korku minimuma indirilir. İlk ziyarette tanışma seansı yapılması önerilir.",
      },
      {
        q: "Muayenehane çalışma saatleri nedir?",
        a: "Pazartesi'den Cuma'ya 09:00-18:00 saatleri arasında hizmet vermekteyiz. Randevu için telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.",
      },
    ],
  },
  {
    title: "Tedaviler ve Fiyatlar",
    questions: [
      {
        q: "Çocuk diş tedavisi fiyatları ne kadar?",
        a: "Tedavi fiyatları yapılacak işlemin türüne, kapsamına ve çocuğun yaşına göre değişiklik gösterir. Muayene sonrasında detaylı bir tedavi planı ve fiyat bilgisi sunulmaktadır. Güncel fiyat bilgisi için randevu oluşturabilirsiniz.",
      },
      {
        q: "Süt dişlerindeki çürükler tedavi edilmeli mi?",
        a: "Evet, kesinlikle tedavi edilmelidir. Süt dişleri kalıcı dişlerin doğru konumda çıkması için yer tutucudur. Tedavi edilmeyen çürükler ağrı, apse ve kalıcı dişlerde çapraşıklık gibi sorunlara yol açabilir.",
      },
      {
        q: "Genel anestezi altında tedavi güvenli midir?",
        a: "Evet, hastane ortamında anestezi uzmanı eşliğinde uygulanan genel anestezi son derece güvenlidir. Kapsamlı tedavi gerektiren veya kooperasyon güçlüğü yaşayan çocuklar için en uygun yöntemdir. Tüm işlemler tek seansta tamamlanır.",
      },
      {
        q: "Dijital anestezi nedir? Gerçekten ağrısız mıdır?",
        a: "Dijital anestezi, bilgisayar kontrollü bir anestezi sistemidir. Geleneksel enjeksiyona göre çok daha az ağrılı ve korkutucudur. Kontrollü basınç ve hız sayesinde anestezi uygulaması neredeyse hissedilmez. İğne korkusu olan çocuklar için ideal çözümdür.",
      },
    ],
  },
  {
    title: "Ortodonti ve Tel Tedavisi",
    questions: [
      {
        q: "Çocuğuma kaç yaşında tel takılabilir?",
        a: "İlk ortodontik değerlendirme 7 yaşında yapılmalıdır. Tel tedavisine genellikle tüm kalıcı dişler çıktıktan sonra (11-14 yaş) başlanır. Bazı vakalarda 7-10 yaş arası erken müdahale gerekebilir.",
      },
      {
        q: "Tel tedavisi mi yoksa şeffaf plak mı tercih etmeliyiz?",
        a: "Her iki yöntemin de avantajları vardır. Tel tedavisi (braket) daha geniş kapsamlı sorunlarda etkilidir. Şeffaf plaklar (Invisalign) estetik ve konfor avantajı sunar. Çocuğunuzun durumuna göre en uygun yöntemi birlikte belirleriz.",
      },
      {
        q: "Şeffaf plak (Invisalign) çocuklara uygulanabilir mi?",
        a: "Evet, Invisalign First sistemi 6-10 yaş arası çocuklar için özel olarak tasarlanmıştır. Çene gelişimini yönlendirme ve dişlerin doğru konumda çıkmasını sağlama amacıyla kullanılır.",
      },
      {
        q: "Tel tedavisi ne kadar sürer?",
        a: "Tedavi süresi sorunun ciddiyetine göre 12-24 ay arasında değişir. Düzenli kontrol randevularına gelmek ve hekim önerilerine uymak tedavi süresini kısaltır.",
      },
      {
        q: "Erken dönem ortodonti neden önemlidir?",
        a: "7-10 yaş arası yapılan erken müdahaleler, çene gelişiminin doğru yönlendirilmesine olanak tanır. Bu sayede ileride daha kapsamlı ve uzun süreli tedavi ihtiyacı azalır, cerrahi müdahale riski düşer.",
      },
    ],
  },
  {
    title: "Koruyucu Tedaviler",
    questions: [
      {
        q: "Florür uygulaması güvenli midir?",
        a: "Evet, diş hekimi tarafından uygulanan profesyonel florür son derece güvenlidir ve diş çürüklerini önlemede çok etkilidir. Çocuğun yaşına ve risk durumuna göre 6 ayda bir uygulanması önerilir.",
      },
      {
        q: "Fissür örtücü (diş aşısı) nedir?",
        a: "Fissür örtücü, kalıcı azı dişlerinin çiğneme yüzeyindeki olukların ince bir tabaka ile kapatılmasıdır. Bu sayede bakterilerin gıda artıklarının buralara yerleşmesi engellenir ve çürük riski önemli ölçüde azalır.",
      },
      {
        q: "Rubber dam izolasyonu nedir?",
        a: "Rubber dam, tedavi edilecek dişin özel bir lastik örtü ile izole edilmesi yöntemidir. Bu sayede tedavi bölgesi kuru kalır, tükürük ve bakterilerin tedavi alanına ulaşması engellenir ve küçük aletlerin yutulma riski ortadan kalkar.",
      },
    ],
  },
  {
    title: "Randevu ve İletişim",
    questions: [
      {
        q: "Nasıl randevu alabilirim?",
        a: "Randevu için +90 547 266 62 04 numaralı telefonumuzdan arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz. Ayrıca web sitemizdeki iletişim formunu da kullanabilirsiniz.",
      },
      {
        q: "Muayenehane nerede?",
        a: "Flora Residence, Ataşehir, İstanbul adresinde hizmet vermekteyiz. Google Maps'te 'Dt. Gaye Üstüner' aratarak kolayca ulaşabilirsiniz.",
      },
      {
        q: "Hangi yaş grubundaki çocukları tedavi ediyorsunuz?",
        a: "0-14 yaş arası tüm çocuklara pedodonti (çocuk diş hekimliği) hizmeti sunmaktayız. Bebeğinizin ilk dişinden itibaren yanınızdayız.",
      },
    ],
  },
];

export default function SSSPage() {
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
      <Header />
      <main id="main-content">
        <section className="bg-[var(--color-surface-alt)] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider mb-2">
                SSS
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
                Sıkça Sorulan Sorular
              </h1>
              <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                Çocuk diş hekimliği, tedaviler ve randevu süreçleri hakkında merak ettikleriniz.
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

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[var(--color-primary)] text-white text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-3">
                Sorunuzu bulamadınız mı?
              </h2>
              <p className="text-teal-100 mb-6">
                Merak ettiğiniz her konuda bize ulaşabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim#randevu"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-teal-50 transition-colors"
                >
                  Randevu Oluştur
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
      <Footer />
    </>
  );
}
