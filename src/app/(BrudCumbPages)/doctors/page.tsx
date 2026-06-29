import DoctorList from "@/modules/doctors/DoctorList";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Həkimlər — Çöhrə Estetik Klinikası Bakı",
  description:
    "Çöhrə Estetik Klinikasının peşəkar dermatoloq və kosmetoloq heyəti. 20+ illik beynəlxalq təcrübəyə malik, sertifikatlı həkimlərlə tanış olun.",
  alternates: {
    canonical: "https://cohre.az/doctors",
  },
  openGraph: {
    title: "Həkimlər — Çöhrə Estetik Klinikası",
    description:
      "Peşəkar dermatoloq və kosmetoloq heyəti. Beynəlxalq təcrübəyə malik, sertifikatlı həkimlər.",
    url: "https://cohre.az/doctors",
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
      name: "Həkimlər",
      item: "https://cohre.az/doctors",
    },
  ],
};

const Doctors = async () => {
  return (
    <div className="pb-8 md:pb-12">
      <Script
        id="doctors-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DoctorList />
    </div>
  );
};

export default Doctors;
