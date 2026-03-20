import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Şeffaf Plaklarla Ortodonti (Invisalign)",
  description:
    "Çocuk ve gençlerde şeffaf plak (Invisalign) ile estetik ve konforlu ortodontik tedavi. Görünmez diş düzeltme. Dt. Gaye Üstüner.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/seffaf-plaklar-ortodonti" },
};

export default function SeffafPlaklarPage() {
  return (
    <ServicePageLayout
      title="Şeffaf Plaklarla Ortodonti"
      subtitle="Invisalign Tedavisi"
      description={[
        "Şeffaf plak tedavisi (Invisalign), geleneksel metal tel tedavisine modern ve estetik bir alternatif sunar. Özel olarak üretilen şeffaf ve çıkarılabilir plaklar sayesinde, dişler kademeli olarak istenen konuma getirilir.",
        "Çocuklar ve gençler için tasarlanan Invisalign First ve Invisalign Teen sistemleri, büyüme dönemindeki hastalara özel çözümler sunar. Plaklar neredeyse görünmez olduğu için sosyal ortamlarda ve okul hayatında rahatlıkla kullanılabilir.",
        "Tedavi sürecinde belirli aralıklarla yeni plak setleri kullanılır ve her plak, dişleri bir sonraki konuma doğru nazikçe hareket ettirir. Dijital planlama sayesinde tedavinin başlangıcından sonuçlarına kadar tüm süreç önceden görülebilir.",
        "Plaklar çıkarılabilir olduğu için diş fırçalama ve beslenme alışkanlıkları olumsuz etkilenmez. Bu durum, özellikle ağız hijyeni açısından geleneksel tel tedavisine göre büyük avantaj sağlar.",
      ]}
      benefits={[
        "Estetik ve neredeyse görünmez",
        "Çıkarılabilir plaklar",
        "Kolay ağız hijyeni",
        "Konforlu kullanım",
        "Dijital tedavi planlaması",
        "Daha az klinik ziyareti",
      ]}
      faq={[
        {
          q: "Çocuğum için şeffaf plak tedavisi uygun mu?",
          a: "Şeffaf plak tedavisi, belirli yaş ve diş gelişim kriterlerini karşılayan çocuklar için uygun olabilir. Muayene sonrası çocuğunuz için en uygun tedavi yöntemi belirlenecektir.",
        },
        {
          q: "Plaklar günde kaç saat takılmalıdır?",
          a: "En iyi sonuçlar için plakların günde 20-22 saat takılması önerilir. Sadece yemek yerken ve diş fırçalarken çıkarılmalıdır.",
        },
        {
          q: "Tedavi süresi ne kadardır?",
          a: "Tedavi süresi vakaya göre değişmekle birlikte, genellikle 6 ay ile 24 ay arasındadır. Tedavi planlaması sırasında tahmini süre hakkında bilgi verilecektir.",
        },
      ]}
    />
  );
}
