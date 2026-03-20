import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Genel Anestezi Altında Diş Tedavisi",
  description:
    "Çocuklarda genel anestezi altında güvenli diş tedavisi. Kapsamlı tedavi gerektiren veya kooperasyon güçlüğü yaşayan çocuklar için. Dt. Gaye Üstüner.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/genel-anestezi-altinda-tedavi" },
};

export default function GenelAnesteziPage() {
  return (
    <ServicePageLayout
      title="Genel Anestezi Altında Diş Tedavileri"
      subtitle="Özel Uzmanlık Alanı"
      description={[
        "Genel anestezi altında diş tedavisi, kapsamlı tedavi gerektiren, çok küçük yaşta olan veya kooperasyon güçlüğü yaşayan çocuklar için hastane ortamında güvenle gerçekleştirilen bir uygulamadır. Bu alanda doktora tez çalışmam devam etmektedir.",
        "Bazı çocuklar yaşları, korku düzeyleri veya özel sağlık durumları nedeniyle klinik ortamında tedavi olmakta zorlanabilirler. Bu durumda, anestezi uzmanı eşliğinde hastane şartlarında tüm tedaviler tek seansta tamamlanır.",
        "Genel anestezi uygulaması, deneyimli bir anesteziyoloji uzmanı tarafından yönetilir. Tedavi öncesi detaylı bir değerlendirme yapılır ve çocuğun genel sağlık durumu kontrol edilir. İşlem sırasında tüm yaşamsal fonksiyonlar sürekli olarak izlenir.",
        "Bu yöntem sayesinde çocuk, tedavi sürecinde hiçbir ağrı veya rahatsızlık hissetmez. Tüm diş tedavileri (dolgu, çekim, kanal tedavisi, kron uygulaması) tek seansta tamamlanarak, çocuğun tekrar tekrar tedavi koltuğuna oturma stresinden kurtulması sağlanır.",
      ]}
      benefits={[
        "Hastane ortamında tam güvenlik",
        "Anestezi uzmanı eşliğinde uygulama",
        "Tek seansta tüm tedavilerin tamamlanması",
        "Ağrısız ve stressiz deneyim",
        "Kooperasyon güçlüğüne çözüm",
        "Kapsamlı tedavi imkanı",
        "Sürekli yaşamsal fonksiyon izlemi",
      ]}
      faq={[
        {
          q: "Genel anestezi çocuklar için güvenli midir?",
          a: "Evet, modern anestezi teknikleri ve deneyimli anestezi uzmanları eşliğinde yapılan uygulamalar oldukça güvenlidir. Tedavi öncesi detaylı sağlık değerlendirmesi yapılır.",
        },
        {
          q: "Hangi durumlarda genel anestezi tercih edilir?",
          a: "Çok küçük yaştaki çocuklarda, kapsamlı tedavi gerektiğinde, kooperasyon güçlüğü yaşayan çocuklarda ve özel sağlık durumu olan hastalarda genel anestezi tercih edilebilir.",
        },
        {
          q: "Tedavi sonrası çocuğum ne zaman normal yaşamına dönebilir?",
          a: "Çoğu çocuk aynı gün taburcu edilir ve genellikle ertesi gün normal aktivitelerine dönebilir. Anestezi sonrası kısa süreli uyuşukluk ve hafif bulantı normal kabul edilir.",
        },
        {
          q: "Tedavi öncesi ne gibi hazırlıklar gerekir?",
          a: "İşlem öncesi belirli bir süre aç kalınması gerekir. Ayrıca kan testleri ve genel sağlık değerlendirmesi yapılır. Detaylı bilgi muayene sırasında verilecektir.",
        },
      ]}
    />
  );
}
