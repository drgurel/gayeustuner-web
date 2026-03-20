import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dijital Anestezi",
  description:
    "Bilgisayar kontrollü dijital anestezi sistemi ile ağrısız çocuk diş tedavisi. İğne korkusu olan çocuklar için ideal çözüm. Dt. Gaye Üstüner.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/dijital-anestezi" },
};

export default function DijitalAnesteziPage() {
  return (
    <ServicePageLayout
      title="Dijital Anestezi"
      subtitle="Ağrısız Tedavi Teknolojisi"
      description={[
        "Dijital anestezi (WAND/STA sistemi), bilgisayar kontrollü lokal anestezi uygulamasıdır. Geleneksel enjektöre kıyasla çok daha hassas, kontrollü ve ağrısız bir anestezi deneyimi sunar.",
        "Sistem, anestezik maddenin verilme hızını ve basıncını bilgisayar aracılığıyla kontrol eder. Bu sayede doku hasarı minimuma indirilir ve anestezi uygulaması neredeyse hissedilmez hale gelir. İğne korkusu olan çocuklar için ideal bir çözümdür.",
        "Geleneksel enjeksiyonlarda ağrının en büyük nedeni, anestezik maddenin kontrolsüz hız ve basınçla dokuya verilmesidir. Dijital anestezi sisteminde bu sorun tamamen ortadan kalkar; madde çok yavaş ve sabit bir basınçla uygulanır.",
        "Dijital anestezi cihazı, görünüm olarak da geleneksel enjektörden farklıdır. Kalem şeklindeki tasarımı çocukları daha az korkutur ve tedaviye olan uyumu artırır. Bu sayede çocuğunuzun diş hekimi deneyimi çok daha olumlu hale gelir.",
      ]}
      benefits={[
        "Neredeyse ağrısız uygulama",
        "Bilgisayar kontrollü hassas dozaj",
        "İğne korkusuna etkili çözüm",
        "Minimal doku hasarı",
        "Çocuk dostu cihaz tasarımı",
        "Daha hızlı etki başlangıcı",
      ]}
      faq={[
        {
          q: "Dijital anestezi gerçekten ağrısız mıdır?",
          a: "Tamamen ağrısız demek mümkün olmasa da, geleneksel enjeksiyona kıyasla çok daha az ağrılıdır. Çoğu çocuk hasta, anestezi yapıldığını fark etmez bile.",
        },
        {
          q: "Her tedavide dijital anestezi kullanılabilir mi?",
          a: "Evet, lokal anestezi gerektiren hemen her tedavide dijital anestezi sistemi kullanılabilir. Dolgu, kanal tedavisi ve çekim gibi işlemlerde rahatlıkla uygulanır.",
        },
        {
          q: "Dijital anestezinin yan etkileri var mıdır?",
          a: "Dijital anestezi, geleneksel anestezi ile aynı ilaçları kullanır; fark sadece uygulama yöntemindedir. Bu nedenle ek bir yan etkisi bulunmamaktadır.",
        },
      ]}
    />
  );
}
