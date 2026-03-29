import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Çocuklarda Tel Tedavisi (Braket Tedavisi)",
  description:
    "Çocuklarda ve gençlerde tel tedavisi (braket tedavisi) ile çapraşık dişler ve kapanış bozukluklarının düzeltilmesi. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
  alternates: {
    canonical: "https://www.gayeustuner.com/hizmetler/tel-tedavisi",
    languages: {
      tr: "https://www.gayeustuner.com/hizmetler/tel-tedavisi",
      en: "https://www.gayeustuner.com/en/services/braces-treatment",
      es: "https://www.gayeustuner.com/es/services/tratamiento-brackets",
    },
  },
};

export default function TelTedavisiPage() {
  return (
    <ServicePageLayout
      title="Çocuklarda Tel Tedavisi (Braket Tedavisi)"
      subtitle="Ortodonti Hizmeti"
      description={[
        "Tel tedavisi (braket tedavisi), çocuklarda ve gençlerde çapraşık dişler, kapanış bozuklukları ve çene uyumsuzluklarının düzeltilmesinde en yaygın kullanılan ortodontik yöntemdir. Metal veya seramik braketler dişlerin üzerine yapıştırılarak, özel teller aracılığıyla dişler yavaşça doğru konumlarına yönlendirilir.",
        "Çocuklarda tel tedavisine genellikle tüm kalıcı dişler çıktıktan sonra, 11-14 yaş aralığında başlanır. Ancak bazı durumlarda erken dönem ortodontik müdahale (Faz 1 tedavisi) ile 7-10 yaş arasında da tel tedavisi uygulanabilir. Erken değerlendirme, tedavi zamanlamasının doğru belirlenmesi açısından kritik önem taşır.",
        "Modern braket sistemleri eski nesil tellere göre çok daha konforlu, estetik ve etkilidir. Seramik (şeffaf) braketler, lingual (iç yüzey) teller ve mini braketler gibi seçenekler ile çocuğunuzun sosyal hayatı olumsuz etkilenmeden tedavi sürdürülebilir.",
        "Tel tedavisi süresi genellikle 12-24 ay arasında değişir. Tedavi süresince düzenli kontrol randevuları ile tellerin ayarlanması ve tedavi sürecinin izlenmesi sağlanır. Tedavi sonrasında pekiştirme (retansiyon) dönemi ile elde edilen sonuçların kalıcılığı güvence altına alınır.",
      ]}
      benefits={[
        "Çapraşık dişlerin düzeltilmesi",
        "Kapanış bozukluklarının giderilmesi",
        "Çene uyumsuzluklarının tedavisi",
        "Estetik ve fonksiyonel iyileşme",
        "Diş temizliğinin kolaylaşması",
        "Özgüvenin artması",
      ]}
      faq={[
        {
          q: "Çocuğuma kaç yaşında tel takılabilir?",
          a: "Genellikle tüm kalıcı dişler çıktıktan sonra, 11-14 yaş aralığında tel tedavisine başlanır. Ancak bazı çene ve kapanış sorunlarında 7-10 yaş arasında erken müdahale gerekebilir. İlk ortodontik değerlendirme 7 yaşında yapılmalıdır.",
        },
        {
          q: "Tel tedavisi ağrılı mıdır?",
          a: "Tel takıldıktan sonra ilk birkaç gün hafif hassasiyet ve rahatsızlık hissedilebilir. Bu durum tamamen normal olup, birkaç gün içinde geçer. Ağrı kesiciler ve yumuşak gıdalarla bu süreç kolayca yönetilebilir.",
        },
        {
          q: "Tel tedavisi ne kadar sürer?",
          a: "Tedavi süresi sorunun ciddiyetine göre 12-24 ay arasında değişir. Düzenli kontrol randevularına gelmek ve hekim önerilerine uymak tedavi süresini kısaltır.",
        },
        {
          q: "Metal tel mi yoksa şeffaf braket mi tercih etmeliyiz?",
          a: "Her iki seçeneğin de avantajları vardır. Metal braketler daha dayanıklı ve uygun fiyatlıdır. Seramik (şeffaf) braketler ise estetik açıdan daha az dikkat çeker. Çocuğunuzun yaşı, ihtiyaçları ve tercihleri doğrultusunda birlikte karar veririz.",
        },
      ]}
    />
  );
}
