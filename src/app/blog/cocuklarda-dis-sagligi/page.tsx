import type { Metadata } from "next";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata: Metadata = {
  title: "Çocuklarda Diş Sağlığı: Önemli Bilgiler | Dt. Gaye Üstüner",
  description:
    "Çocuğunuzun diş sağlığını korumak için bilmeniz gerekenler: ilk diş muayenesi, fırçalama alışkanlıkları, beslenme önerileri ve erken dönem önlemler.",
  alternates: { canonical: "https://www.gayeustuner.com/blog/cocuklarda-dis-sagligi" },
  openGraph: {
    title: "Çocuklarda Diş Sağlığı: Önemli Bilgiler",
    description:
      "Çocuğunuzun diş sağlığını korumak için bilmeniz gerekenler. Dt. Gaye Üstüner'den kapsamlı rehber.",
    url: "https://www.gayeustuner.com/blog/cocuklarda-dis-sagligi",
    type: "article",
  },
};

export default function CocuklarDaSagligiPage() {
  return (
    <BlogPostLayout
      slug="cocuklarda-dis-sagligi"
      title="Çocuklarda Diş Sağlığı: Önemli Bilgiler"
      category="Diş Sağlığı"
      date="29 Aralık 2025"
      readTime="5 dk"
      intro="Çocukluk döneminde oluşturulan diş bakım alışkanlıkları, ağız sağlığını ömür boyu etkiler. İlk dişten itibaren doğru yaklaşım, hem süt dişleri hem de kalıcı dişler için hayati önem taşır."
      sections={[
        {
          heading: "İlk Diş Muayenesi Ne Zaman Yapılmalı?",
          paragraphs: [
            "Amerikan Pedodonti Akademisi'nin önerisine paralel olarak, çocuğunuzun ilk diş hekimi muayenesinin ilk diş çıktıktan hemen sonra veya en geç 1 yaşına kadar yapılması gerekir.",
            "Bu erken dönem ziyaretin amacı tedavi değil, tanışma ve değerlendirmedir. Diş hekimi, ebeveynlere bebek ağız bakımı, emzik kullanımı ve beslenme alışkanlıkları konusunda rehberlik eder. Çocuğun diş hekimiyle erken yaşta tanışması, ilerleyen dönemlerdeki diş korkusunu önemli ölçüde azaltır.",
          ],
        },
        {
          heading: "Süt Dişleri Neden Önemlidir?",
          paragraphs: [
            "Süt dişleri yalnızca geçici dişler değildir. Çiğneme fonksiyonu, konuşma gelişimi ve estetik açıdan kritik rol oynarlar. En önemlisi, kalıcı dişlerin doğru konumda çıkması için yer tutucudurlar.",
            "Erken yaşta kaybedilen süt dişleri, komşu dişlerin bu boşluğa kaymasına yol açar. Bu durum kalıcı dişlerin çapraşık çıkmasına ve ortodontik tedavi ihtiyacına neden olabilir. Bu nedenle süt dişlerindeki çürükler mutlaka tedavi edilmelidir.",
          ],
        },
        {
          heading: "Doğru Fırçalama Yaşa Göre Nasıl Değişir?",
          paragraphs: [
            "0-2 yaş: Islak bir bezle ya da parmak diş fırçasıyla, florürsüz veya çok az florürlü diş macunuyla günde iki kez ağız temizliği yapılmalıdır.",
            "2-6 yaş: Pirinç tanesi büyüklüğünde florürlü diş macunuyla çocuk fırçası kullanılır. Bu dönemde fırçalama mutlaka ebeveyn denetimiyle gerçekleştirilmelidir. Çocuklar henüz ağzı tam olarak çalkalayıp tükürme becerisine sahip değildir.",
            "6 yaş ve üzeri: Nohut büyüklüğünde florürlü macun yeterlidir. Yine de ebeveyn denetimi önerilir. Çocukların el becerisi tam olarak gelişene kadar — genellikle 7-8 yaşına kadar — fırçalamaya yardımcı olunmalıdır.",
          ],
        },
        {
          heading: "Beslenme ve Çürük İlişkisi",
          paragraphs: [
            "Şeker içeren gıda ve içeceklerin tüketim sıklığı, miktarından çok daha belirleyicidir. Gün içinde sık sık tatlı ya da asitli içecek tüketmek, dişlerin sürekli asit saldırısına maruz kalmasına neden olur.",
            "Emzik ve biberon kullanımında özellikle dikkat edilmesi gereken nokta şudur: Çocuğun şekerli sıvılarla (meyve suyu, süt, mama) uyuması, 'biberon çürüğü' adı verilen ve hızla ilerleyen ön diş çürüklerine yol açar. Biberon içeriği mümkünse sadece su olmalıdır.",
            "Peynir, yoğurt, lifli sebze ve meyveler diş dostudur. Bu gıdalar tükürük üretimini artırarak doğal koruma sağlar.",
          ],
        },
        {
          heading: "Diş Fobisi Olan Çocuklara Yaklaşım",
          paragraphs: [
            "Diş hekimi korkusu çocuklarda oldukça yaygındır. Korkuyu besleyen en büyük etken, genellikle ebeveynlerin ya da çevrenin paylaştığı olumsuz deneyimlerdir. Çocuğunuza 'ağrımaz', 'korkma' gibi cümleler yerine sürecin nasıl geçeceğini basit ve somut bir dille anlatin.",
            "Pedodontistler (çocuk diş hekimleri) bu alanda özel eğitim almıştır. Tell-Show-Do yöntemi, nefes egzersizleri, dikkat dağıtma teknikleri ve gerektiğinde sedasyon seçenekleriyle çocuğun konforunu ön planda tutarak tedavi planlanır.",
          ],
        },
      ]}
      keyPoints={[
        "İlk diş muayenesi 1 yaşından önce",
        "Süt dişi çürükleri mutlaka tedavi edilmeli",
        "Fırçalama ebeveyn denetimiyle yapılmalı",
        "Biberon içeriği mümkünse sadece su",
        "Tatlı tüketim sıklığı, miktarından önemli",
        "Diş hekimiyle erken tanışma korkuyu azaltır",
      ]}
      relatedPosts={[
        {
          title: "Pedodonti ve Ortodonti: Doğru Bakımın İpuçları",
          slug: "pedodonti-ortodonti-ipuclari",
          category: "Pedodonti",
        },
      ]}
    />
  );
}
