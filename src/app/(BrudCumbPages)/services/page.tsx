import Container from "@/components/shared/Container";
import DepartmentCard from "@/modules/home/components/DepartmentCard";
import Radiologiya from "@/assets/icons/departments/radiologiya.svg";
import Urolog from "@/assets/icons/departments/urolog.svg";
import Lab from "@/assets/icons/departments/lab.svg";
import FirstHelp from "@/assets/icons/departments/firstHelp.svg";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Xidmətlər — Çöhrə Estetik Klinikası Bakı",
  description:
    "Çöhrə Estetik Klinikasının xidmətləri: botoks, filler, mezoterapiya, lazer epilyasiya, akne müalicəsi, saç əkimi FUE, aparat kosmetologiyası. Bakıda peşəkar dermatoloqlar.",
  alternates: {
    canonical: "https://cohre.az/services",
  },
  openGraph: {
    title: "Xidmətlər — Çöhrə Estetik Klinikası",
    description:
      "Botoks, filler, mezoterapiya, lazer, akne müalicəsi, saç əkimi FUE, aparat kosmetologiyası. Bakıda peşəkar dermatoloqlar.",
    url: "https://cohre.az/services",
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
      name: "Xidmətlər",
      item: "https://cohre.az/services",
    },
  ],
};

const Services = async () => {
  return (
    <div className="pb-8 md:pb-12">
      <Script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partners?.map((partner, index) => (
            <DepartmentCard
              img={partner.img}
              key={index}
              name={partner.name}
              text={partner.text}
              link={partner.link}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

const partners = [
  {
    id: 1,
    name: "Üz və bədən estetikası",
    img: <Radiologiya />,
    text: "Üz və bədən estetikası",
    link: "/services/1",
  },
  {
    id: 2,
    name: "Dəri problemlərinin müalicəsi",
    img: <Urolog />,
    text: "Akne, pigmentasiya, çapıq və s.",
    link: "/services/2",
  },
  {
    id: 3,
    name: "İnyeksiyon prosedurlar",
    img: <FirstHelp />,
    text: "Botoks, dolğu və s.",
    link: "/services/3",
  },
  {
    id: 4,
    name: "Aparat kosmetologiyası",
    img: <Lab />,
    text: "Aparat kosmetologiyası",
    link: "/services/4",
  },
];
