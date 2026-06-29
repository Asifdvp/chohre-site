import Container from "@/components/shared/Container";
import GoogleMapComponent from "./Map";
import ContactForm from "./Form";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Əlaqə — Çöhrə Estetik Klinikası Bakı",
  description:
    "Çöhrə Estetik Klinikası ilə əlaqə saxlayın. Ünvan: Kövkab Səfərəliyeva 2, Bakı. Tel: 070 708 61 61. İş saatları: Bazar.-Şənbə 09:00–18:00.",
  alternates: {
    canonical: "https://cohre.az/contact",
  },
  openGraph: {
    title: "Əlaqə — Çöhrə Estetik Klinikası",
    description:
      "Kövkab Səfərəliyeva 2, Bakı. Tel: 070 708 61 61. Bazar.-Şənbə 09:00–18:00.",
    url: "https://cohre.az/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana səhifə", item: "https://cohre.az" },
    { "@type": "ListItem", position: 2, name: "Əlaqə", item: "https://cohre.az/contact" },
  ],
};

const Contact = () => {
  return (
    <Container>
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-1 relative aspect-4/3 md:aspect-auto md:h-full">
            <GoogleMapComponent />
          </div>
          <div className="md:col-span-2 rounded-lg px-4 border border-primary/12 p-3 md:px-5 text-text font-sm font-normal leading-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
