import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Paslanmaz Çelik Kronlar",
  description:
    "Süt dişlerinde paslanmaz çelik kron uygulaması. İleri düzey çürüklerde dayanıklı ve uzun ömürlü restorasyon. Dt. Gaye Üstüner - Ataşehir, İstanbul.",
  alternates: { canonical: "https://www.gayeustuner.com/hizmetler/paslanmaz-celik-kronlar" },
};

export default function PaslanmazCelikKronlarPage() {
  return (
    <ServicePageLayout
      title="Paslanmaz Çelik Kronlar"
      subtitle="Süt Dişi Restorasyonu"
      description={[
        "Paslanmaz çelik kronlar, süt dişlerinde ileri düzey çürük nedeniyle dolgu ile yeterli restorasyon sağlanamayan dişlerin korunması için kullanılan prefabrik kron uygulamalarıdır.",
        "Süt dişleri, çocuğun çiğneme fonksiyonu, konuşma gelişimi ve kalıcı dişlerin doğru konumda sürmesi için büyük önem taşır. İleri düzey çürüğe sahip süt dişlerinin erken kaybedilmesi yerine, paslanmaz çelik kronlar ile korunması tercih edilir.",
        "Uygulama genellikle tek seansta tamamlanır. Diş uygun şekilde hazırlandıktan sonra, doğru boyuttaki kron seçilerek dişe uyumlanır ve özel siman ile yapıştırılır. Kron, süt dişinin doğal düşme zamanına kadar yerinde kalır.",
        "Paslanmaz çelik kronlar son derece dayanıklıdır ve günlük çiğneme kuvvetlerine rahatlıkla dayanır. Dolguya kıyasla daha uzun ömürlü olmaları ve tekrarlayan tedavi ihtiyacını azaltmaları en önemli avantajlarıdır.",
      ]}
      benefits={[
        "Yüksek dayanıklılık ve uzun ömür",
        "Tek seansta uygulama",
        "Süt dişinin fonksiyonunun korunması",
        "Tekrarlayan tedavi ihtiyacının azalması",
        "Kalıcı diş sürme yolunun korunması",
        "Çiğneme fonksiyonunun sürdürülmesi",
      ]}
      faq={[
        {
          q: "Paslanmaz çelik kron ne kadar kalır?",
          a: "Paslanmaz çelik kron, süt dişinin doğal düşme zamanına kadar yerinde kalır. Bu süre, dişin konumuna göre birkaç yıldan 5-6 yıla kadar değişebilir.",
        },
        {
          q: "Kron uygulaması ağrılı mıdır?",
          a: "Uygulama lokal anestezi altında yapılır ve çocuk işlem sırasında ağrı hissetmez. İşlem sonrası hafif hassasiyet olabilir ancak kısa sürede geçer.",
        },
        {
          q: "Neden dolgu yerine kron tercih edilir?",
          a: "İleri düzey çürüklerde dolgu yeterli dayanıklılığı sağlayamayabilir ve tekrar düşme riski yüksektir. Kron, dişi tamamen sarar ve çok daha uzun ömürlü bir restorasyon sağlar.",
        },
      ]}
    />
  );
}
