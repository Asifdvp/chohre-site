import MediaList from "@/modules/media/containers/MediaList";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Xəbərlər və Tibbi Bloq — Çöhrə Estetik Klinikası Bakı",
  description:
    "Çöhrə Estetik Klinikasının peşəkar dermatoloqları tərəfindən yazılmış tibbi məqalələr: akne, melazma, lazer, saç əkimi, botoks və daha çox mövzular.",
  alternates: {
    canonical: "https://cohre.az/media",
  },
  openGraph: {
    title: "Xəbərlər və Tibbi Bloq — Çöhrə Estetik Klinikası",
    description:
      "Peşəkar dermatoloqların tibbi məqalələri: akne, melazma, lazer, saç əkimi, botoks.",
    url: "https://cohre.az/media",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana səhifə",
      item: "https://cohre.az",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Xəbərlər",
      item: "https://cohre.az/media",
    },
  ],
};

const Media = async () => {
  return (
    <div className="pb-8 md:pb-12">
      <Script
        id="media-list-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MediaList />
    </div>
  );
};

export default Media;
