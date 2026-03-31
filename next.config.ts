import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Eski Wix URL'leri → Yeni Next.js URL'leri (301 permanent)
      { source: "/hakk%C4%B1nda", destination: "/hakkimda", permanent: true },
      { source: "/hakkinda", destination: "/hakkimda", permanent: true },
      { source: "/rubber-dam-i%CC%87zolasyonu", destination: "/hizmetler/rubber-dam-izolasyonu", permanent: true },
      { source: "/rubber-dam-izolasyonu", destination: "/hizmetler/rubber-dam-izolasyonu", permanent: true },
      { source: "/dijital-anestezi", destination: "/hizmetler/dijital-anestezi", permanent: true },
      { source: "/online-randevu-olu%C5%9Fturun", destination: "/iletisim", permanent: true },
      { source: "/online-randevu-olusturun", destination: "/iletisim", permanent: true },
      { source: "/event-list", destination: "/hizmetler", permanent: true },
      { source: "/event-details/:path*", destination: "/hizmetler", permanent: true },
      { source: "/post/:path*", destination: "/blog", permanent: true },
      // Eski hizmet URL'leri (Wix düz yapı → Next.js hizmetler altı)
      { source: "/erken-donem-ortodonti", destination: "/hizmetler/erken-donem-ortodonti", permanent: true },
      { source: "/genel-anestezi-altinda-tedavi", destination: "/hizmetler/genel-anestezi-altinda-tedavi", permanent: true },
      { source: "/paslanmaz-celik-kronlar", destination: "/hizmetler/paslanmaz-celik-kronlar", permanent: true },
      { source: "/seffaf-plaklar-ortodonti", destination: "/hizmetler/seffaf-plaklar-ortodonti", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
