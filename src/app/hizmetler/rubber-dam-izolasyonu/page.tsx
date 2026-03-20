import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Rubber Dam İzolasyonu",
  description:
    "Rubber dam izolasyonu ile güvenli ve hijyenik çocuk diş tedavisi. Tedavi kalitesini artıran modern izolasyon yöntemi. Dt. Gaye Üstüner.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/rubber-dam-izolasyonu" },
};

export default function RubberDamPage() {
  return (
    <ServicePageLayout
      title="Rubber Dam İzolasyonu"
      subtitle="Güvenli Tedavi Yöntemi"
      description={[
        "Rubber dam (kofferdam), tedavi edilecek dişin özel bir lastik örtü ile ağız boşluğundan izole edilmesi yöntemidir. Bu sayede tedavi bölgesi kuru ve temiz kalır, tükürük ve bakterilerin tedavi alanına ulaşması engellenir.",
        "Çocuk diş hekimliğinde rubber dam kullanımı büyük önem taşır. Özellikle dolgu ve kanal tedavisi gibi işlemlerde, tedavi edilen dişin tükürükten izole edilmesi, tedavinin kalitesini ve ömrünü doğrudan etkiler.",
        "Rubber dam aynı zamanda güvenlik açısından da kritik bir uygulamadır. Tedavi sırasında kullanılan küçük aletlerin, kimyasal maddelerin veya tedavi materyallerinin çocuğun ağzına kaçması, yutulması veya solunması riski ortadan kalkar.",
        "Çocuklar genellikle rubber dam uygulamasına çok kolay adapte olurlar. Ağızlarında sadece tedavi edilen dişin görünür olması, hem çocuğun dikkatini dağıtır hem de tedavi sürecini daha rahat hale getirir.",
      ]}
      benefits={[
        "Tedavi bölgesinin tamamen izole edilmesi",
        "Yutma ve solunma riskinin önlenmesi",
        "Daha kaliteli ve uzun ömürlü dolgular",
        "Hijyenik tedavi ortamı",
        "Çocuğun güvenliğinin artması",
        "Tedavi süresinin kısalması",
      ]}
      faq={[
        {
          q: "Rubber dam çocuklar için rahatsız edici midir?",
          a: "Hayır, çoğu çocuk rubber dam uygulamasına kolayca adapte olur. Başlangıçta hafif bir rahatsızlık hissedilse de, tedavi boyunca ağzın açık tutulma zorunluluğunu azalttığı için aslında daha konforlu bir deneyim sunar.",
        },
        {
          q: "Her tedavide rubber dam kullanılır mı?",
          a: "Dolgu, kanal tedavisi ve fissür örtücü uygulamaları gibi tedavilerde rubber dam kullanımı altın standarttır. Ancak her durumda kullanılması gerekmeyebilir; doktorunuz uygun tedavi yöntemini belirleyecektir.",
        },
        {
          q: "Rubber dam alerjisi olabilir mi?",
          a: "Nadir durumlarda lateks alerjisi olan hastalarda reaksiyon görülebilir. Bu durumda lateks içermeyen alternatif rubber dam materyalleri kullanılmaktadır.",
        },
      ]}
    />
  );
}
