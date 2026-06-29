import CountSection from "@/modules/home/containers/CountSection";
import DepartmentSection from "@/modules/home/containers/DepartmentSection";
import DoctorSection from "@/modules/home/containers/DoctorsSection";
import MainSection from "@/modules/home/containers/MainSection";
import NewsSection from "@/modules/home/containers/NewsSection";
import TechnicalThings from "@/modules/home/containers/TechnicalThings";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Çöhrə Estetik Klinikası Bakı — Dermatoloq, Botoks, Lazer, Saç Əkimi",
  description:
    "Bakıda peşəkar estetik klinika. Botoks, dolğu (filler), mezoterapiya, lazer epilyasiya, akne müalicəsi, saç əkimi FUE. 20+ illik təcrübəli dermatoloqlar. Pulsuz konsultasiya — 070 708 61 61",
  alternates: {
    canonical: "https://cohre.az",
  },
};

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://cohre.az/#clinic",
  name: "Çöhrə Estetik Klinikası",
  alternateName: "Cohre Estetik",
  url: "https://cohre.az",
  logo: "https://cohre.az/favicon.ico",
  image: "https://cohre.az/images/mainSection.webp",
  description:
    "Bakıda estetik dermatologiya və kosmetologiya klinikası. Botoks, filler, mezoterapiya, lazer, akne müalicəsi, saç əkimi FUE.",
  telephone: "+994707086161",
  email: "chohreestetic@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "65 Xocalı prospekti",
    addressLocality: "Bakı",
    addressRegion: "Bakı",
    addressCountry: "AZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.38327836982031",
    longitude: "49.87860672902113",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/chohreestetic",
    "https://www.facebook.com/share/175BwgZKWr/",
    "https://www.youtube.com/channel/UC1-IViTGbYfEWolkdmuweDg",
  ],
  medicalSpecialty: [
    "Dermatology",
    "Cosmetology",
    "Aesthetic Medicine",
  ],
  priceRange: "$$",
  currenciesAccepted: "AZN",
  paymentAccepted: "Cash, Credit Card",
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
  ],
};

const Home = () => {
  return (
    <>
      <Script
        id="medical-clinic-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MainSection />
      <CountSection />
      <DepartmentSection />
      <DoctorSection />
      <NewsSection />
      <TechnicalThings />
    </>
  );
};

export default Home;
