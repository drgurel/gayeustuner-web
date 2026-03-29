export interface LocationData {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  heroText: string;
  distanceText: string;
  neighborhoods: string[];
  transportInfo: string;
}

export const locations: LocationData[] = [
  {
    slug: "atasehir",
    name: "Ataşehir",
    title: "Ataşehir Çocuk Diş Hekimi",
    description:
      "Ataşehir'de çocuk diş hekimi arıyorsanız doğru yerdesiniz. Dt. Gaye Üstüner, Flora Residence'ta bulunan muayenehanesinde Ataşehirli ailelere pedodonti, ortodonti ve çocuk diş tedavisi hizmetleri sunmaktadır.",
    metaDescription:
      "Ataşehir çocuk diş hekimi Dt. Gaye Üstüner. Pedodonti uzmanı, erken ortodonti, şeffaf plak, tel tedavisi, genel anestezi altında tedavi. Flora Residence, Ataşehir.",
    heroText:
      "Ataşehir'de güvenilir çocuk diş hekimliği hizmeti. Modern tedavi yöntemleri ve çocuk dostu yaklaşımla çocuğunuzun gülüşü güvenli ellerde.",
    distanceText: "Muayenehanemiz Ataşehir Flora Residence'ta yer almaktadır.",
    neighborhoods: ["Küçükbakkalköy", "Barbaros", "Atatürk", "Yeni Çamlıca", "Ferhatpaşa", "İçerenköy", "Kayışdağı"],
    transportInfo:
      "Flora Residence, Ataşehir'in merkezinde kolay ulaşılabilir konumdadır. Toplu taşıma, özel araç veya taksi ile rahatlıkla ulaşabilirsiniz.",
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    title: "Kadıköy Çocuk Diş Hekimi",
    description:
      "Kadıköy'de çocuk diş hekimi arayan aileler için Ataşehir'deki muayenehanemiz sadece 10-15 dakika uzaklıktadır. Dt. Gaye Üstüner, Kadıköylü çocuklar için pedodonti, ortodonti ve koruyucu diş tedavileri sunmaktadır.",
    metaDescription:
      "Kadıköy çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir'e 10-15 dk mesafede. Pedodonti, tel tedavisi, şeffaf plak, dijital anestezi.",
    heroText:
      "Kadıköy'e yakın, uzman çocuk diş hekimliği. Ataşehir Flora Residence'taki muayenehanemize Kadıköy'den kolayca ulaşabilirsiniz.",
    distanceText: "Kadıköy'den muayenehanemize araçla yaklaşık 10-15 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Caferağa", "Moda", "Fenerbahçe", "Kozyatağı", "Bostancı", "Caddebostan", "Suadiye", "Göztepe"],
    transportInfo:
      "Kadıköy'den E-5 veya Bağdat Caddesi üzerinden Ataşehir'e kolay ulaşım sağlanır. Kozyatağı ve Bostancı'dan otobüs hatlarıyla da ulaşılabilir.",
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    title: "Maltepe Çocuk Diş Hekimi",
    description:
      "Maltepe'de çocuk diş hekimi arıyorsanız, Ataşehir sınırındaki muayenehanemiz size çok yakın. Dt. Gaye Üstüner, Maltepeli aileler için erken ortodonti, tel tedavisi, şeffaf plak ve pedodonti hizmetleri sunmaktadır.",
    metaDescription:
      "Maltepe çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir sınırında, 10 dk mesafede. Pedodonti, ortodonti, genel anestezi tedavisi.",
    heroText:
      "Maltepe'ye komşu, uzman çocuk diş hekimliği hizmeti. Ataşehir Flora Residence'taki muayenehanemize Maltepe'den sadece 10 dakikada ulaşın.",
    distanceText: "Maltepe'den muayenehanemize araçla yaklaşık 10 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Cevizli", "Altıntepe", "Küçükyalı", "Başıbüyük", "Zümrütevler", "Fındıklı", "Girne"],
    transportInfo:
      "Maltepe'den E-5 üzerinden veya Marmaray Cevizli durağından toplu taşıma ile Ataşehir'e hızlıca ulaşılabilir.",
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    title: "Ümraniye Çocuk Diş Hekimi",
    description:
      "Ümraniye'de çocuk diş hekimi arayanlar için Ataşehir sınırındaki muayenehanemiz ideal bir seçenektir. Dt. Gaye Üstüner, Ümraniyeli çocuklar için pedodonti, ortodonti ve modern diş tedavileri sunmaktadır.",
    metaDescription:
      "Ümraniye çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir'e 10-15 dk mesafede. Tel tedavisi, şeffaf plak, pedodonti uzmanı.",
    heroText:
      "Ümraniye'ye yakın, uzman çocuk diş hekimliği. Ataşehir Flora Residence'taki muayenehanemize Ümraniye'den kolayca ulaşabilirsiniz.",
    distanceText: "Ümraniye'den muayenehanemize araçla yaklaşık 10-15 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Çakmak", "Atatürk", "Alemdağ", "Hekimbaşı", "Tantavi", "Şerifali", "Site"],
    transportInfo:
      "Ümraniye'den metro (Çakmak-Ataşehir hattı) veya otobüs hatlarıyla Ataşehir'e ulaşılabilir. Araçla TEM veya bağlantı yolları kullanılabilir.",
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    title: "Üsküdar Çocuk Diş Hekimi",
    description:
      "Üsküdar'da çocuk diş hekimi arıyorsanız, Ataşehir'deki muayenehanemiz 15-20 dakika mesafededir. Dt. Gaye Üstüner, Üsküdarlı aileler için pedodonti, erken ortodonti ve çocuk diş tedavisi hizmetleri sunmaktadır.",
    metaDescription:
      "Üsküdar çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir'e 15-20 dk mesafede. Pedodonti uzmanı, ortodonti, şeffaf plak tedavisi.",
    heroText:
      "Üsküdar'a yakın, uzman çocuk diş hekimliği hizmeti. Ataşehir Flora Residence'taki muayenehanemize Üsküdar'dan kolayca ulaşın.",
    distanceText: "Üsküdar'dan muayenehanemize araçla yaklaşık 15-20 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Acıbadem", "Altunizade", "Kısıklı", "Bulgurlu", "Çengelköy", "Beylerbeyi", "Ünalan"],
    transportInfo:
      "Üsküdar'dan Marmaray veya 15 numaralı metrobüs hattı ile Ataşehir'e ulaşılabilir. Altunizade ve Acıbadem'den doğrudan bağlantı mevcuttur.",
  },
  {
    slug: "kartal",
    name: "Kartal",
    title: "Kartal Çocuk Diş Hekimi",
    description:
      "Kartal'da çocuk diş hekimi arayan aileler için Ataşehir'deki muayenehanemiz 15-20 dakika uzaklıktadır. Dt. Gaye Üstüner, Kartallı çocuklar için pedodonti, ortodonti ve genel anestezi altında tedavi hizmetleri sunmaktadır.",
    metaDescription:
      "Kartal çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir'e 15-20 dk mesafede. Pedodonti, tel tedavisi, genel anestezi tedavisi.",
    heroText:
      "Kartal'a yakın, uzman çocuk diş hekimliği. Ataşehir Flora Residence'taki muayenehanemize Kartal'dan kolayca ulaşabilirsiniz.",
    distanceText: "Kartal'dan muayenehanemize araçla yaklaşık 15-20 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Kordonboyu", "Yukarı", "Soğanlık", "Yakacık", "Uğur Mumcu", "Atalar"],
    transportInfo:
      "Kartal'dan E-5 üzerinden veya Marmaray ile Ataşehir'e ulaşılabilir. Soğanlık bölgesinden doğrudan bağlantı mevcuttur.",
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    title: "Sancaktepe Çocuk Diş Hekimi",
    description:
      "Sancaktepe'de çocuk diş hekimi arıyorsanız, Ataşehir'deki muayenehanemiz 15-20 dakika mesafededir. Dt. Gaye Üstüner, Sancaktepeli aileler için pedodonti ve ortodonti hizmetleri sunmaktadır.",
    metaDescription:
      "Sancaktepe çocuk diş hekimi arayanlar için Dt. Gaye Üstüner. Ataşehir'e 15-20 dk mesafede. Pedodonti uzmanı, tel tedavisi, şeffaf plak.",
    heroText:
      "Sancaktepe'ye yakın, uzman çocuk diş hekimliği hizmeti. Ataşehir Flora Residence'taki muayenehanemize Sancaktepe'den kolayca ulaşın.",
    distanceText: "Sancaktepe'den muayenehanemize araçla yaklaşık 15-20 dakikada ulaşabilirsiniz.",
    neighborhoods: ["Sarıgazi", "Samandıra", "Yenidoğan", "Abdurrahman Gazi", "Osmangazi", "Fatih"],
    transportInfo:
      "Sancaktepe'den TEM bağlantı yolları veya Samandıra metro hattı ile Ataşehir'e ulaşılabilir.",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
