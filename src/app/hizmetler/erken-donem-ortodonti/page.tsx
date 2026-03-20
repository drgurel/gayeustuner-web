import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Erken Dönem Ortodontik Tedaviler",
  description:
    "Çocuklarda erken dönem ortodontik tedaviler ile çene ve diş gelişim bozukluklarının zamanında tedavisi. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/erken-donem-ortodonti" },
};

export default function ErkenDonemOrtodontiPage() {
  return (
    <ServicePageLayout
      title="Erken Dönem Ortodontik Tedaviler"
      subtitle="Pedodonti Hizmeti"
      description={[
        "Erken dönem ortodontik tedaviler, çocukların çene ve diş gelişimindeki sorunların büyüme döneminde tespit edilerek müdahale edilmesini sağlar. Bu yaklaşım sayesinde ileride ortaya çıkabilecek ciddi ortodontik problemler daha küçük müdahalelerle çözülebilir.",
        "Amerikan Ortodonti Derneği, her çocuğun 7 yaşına kadar bir ortodontik değerlendirmeden geçmesini önermektedir. Bu yaşta karışık dişlenme dönemi başlamış olup, potansiyel sorunlar erken aşamada tespit edilebilir.",
        "Çapraşık dişler, çapraz kapanış, üst çene darlığı, alt çene ileriliği veya geriliği gibi sorunlar erken dönemde çok daha kolay ve etkili şekilde tedavi edilebilir. Büyüme döneminde yapılan müdahaleler, kemik gelişiminin doğru yönlendirilmesine olanak tanır.",
        "Parmak emme, dudak emme, ağızdan nefes alma gibi kötü alışkanlıklar da diş ve çene yapısını olumsuz etkileyebilir. Bu alışkanlıkların erken dönemde kontrol altına alınması, kalıcı deformitelerin önlenmesi açısından büyük önem taşır.",
      ]}
      benefits={[
        "Ciddi ortodontik sorunların önlenmesi",
        "Daha kısa ve kolay tedavi süreci",
        "Büyüme potansiyelinden yararlanma",
        "Cerrahi müdahale ihtiyacının azalması",
        "Çocuğun özgüveninin artması",
        "Kötü alışkanlıkların düzeltilmesi",
      ]}
      faq={[
        {
          q: "Çocuğumu ortodontik muayeneye kaç yaşında götürmeliyim?",
          a: "7 yaş, ilk ortodontik değerlendirme için ideal yaştır. Bu dönemde karışık dişlenme başlamış olup, potansiyel sorunlar erken tespit edilebilir.",
        },
        {
          q: "Erken dönem ortodonti ne kadar sürer?",
          a: "Tedavi süresi sorunun türüne ve ciddiyetine göre değişmekle birlikte, genellikle 6 ay ile 18 ay arasında sürmektedir.",
        },
        {
          q: "Erken dönem tedavi yapılmazsa ne olur?",
          a: "Tedavi edilmeyen ortodontik sorunlar zamanla ağırlaşabilir ve ileride daha kapsamlı, uzun süreli tedaviler hatta cerrahi müdahale gerektirebilir.",
        },
      ]}
    />
  );
}
