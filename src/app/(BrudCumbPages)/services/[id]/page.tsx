import Container from "@/components/shared/Container";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const serviceData: Record<
  string,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    image: string;
    imageAlt: string;
    description: string;
    benefits: string[];
    faq: { q: string; a: string }[];
    schemaName: string;
  }
> = {
  "1": {
    title: "Üz və bədən estetikası",
    metaTitle: "Üz və Bədən Estetikası Bakı — Çöhrə Estetik Klinikası",
    metaDescription:
      "Bakıda üz və bədən estetikası prosedurları. Kontur plastikası, dəri gəncləşdirmə, Fotona 4D lazer kabinetlər. Pulsuz konsultasiya — 070 708 61 61",
    h1: "Üz və Bədən Estetikası",
    image: "/images/mainSection.webp",
    imageAlt: "Üz estetikası proseduru — Çöhrə Estetik Klinikası Bakı",
    description:
      "Çöhrə Estetik Klinikasında üz və bədən estetikası prosedurları qabaqcıl tibbi texnologiyalar və sertifikatlı mütəxəssislər tərəfindən həyata keçirilir. Hər pasiyent üçün fərdi müalicə planı hazırlanır.",
    benefits: [
      "Kontur plastikası (filler ilə üz cizgilərinin düzəldilməsi)",
      "Fotona 4D lazer ilə cavan görünüş",
      "Dəri tonunun bərabərləşdirilməsi",
      "Morfeus8 ilə dərinin möhkəmləndirilməsi",
      "Plazmoterapiya (PRP) ilə cavanlaşma",
    ],
    faq: [
      {
        q: "Üz estetikası prosedurları ağrılıdırmı?",
        a: "Əksər prosedurlar lokal anesteziya ilə aparılır, ona görə ağrı minimaldır.",
      },
      {
        q: "Nəticə nə qədər davam edir?",
        a: "Prosedurun növündən asılı olaraq 6 aydan 2 ilə qədər davam edə bilər.",
      },
    ],
    schemaName: "Üz və Bədən Estetikası",
  },
  "2": {
    title: "Dəri problemlərinin müalicəsi",
    metaTitle:
      "Dəri Problemlərinin Müalicəsi Bakı — Akne, Piqmentasiya, Çapıq",
    metaDescription:
      "Bakıda akne, piqmentasiya, melazma, çapıq müalicəsi. Peşəkar dermatoloqlar. Lazer, kimyəvi pilinq, mezoterapiya. Pulsuz konsultasiya — 070 708 61 61",
    h1: "Dəri Problemlərinin Müalicəsi",
    image: "/images/mainSection.webp",
    imageAlt:
      "Dəri müalicəsi proseduru — Çöhrə Estetik Klinikası Bakı dermatoloq",
    description:
      "Çöhrə Estetik Klinikasının mütəxəssis dermatoloqları akne, piqmentasiya, melazma, çapıq, rozasea və digər dəri problemlərinin müalicəsini beynəlxalq protokollara uyğun həyata keçirir.",
    benefits: [
      "Akne (sızanaq) və akne izlərinin müalicəsi",
      "Piqment ləkələri və melazmının korreksiyası",
      "Çapıq korreksiyası (postakne, yanıq, əməliyyat)",
      "Rozasea və damar problemlərinin müalicəsi",
      "Dəri büzüşməsi (atrofik) müalicəsi",
    ],
    faq: [
      {
        q: "Akne müalicəsi neçə seans tələb edir?",
        a: "Dərinin vəziyyətindən asılı olaraq adətən 4–8 seans tələb olunur.",
      },
      {
        q: "Piqment ləkələri tamamilə yox olurmu?",
        a: "Müalicə ilə əhəmiyyətli açılma əldə edilir; epidermal tipdə tam keçmə mümkündür.",
      },
    ],
    schemaName: "Dəri Problemlərinin Müalicəsi",
  },
  "3": {
    title: "İnyeksiyon prosedurlar",
    metaTitle: "Botoks və Filler Bakı — İnyeksiyon Prosedurlar | Çöhrə Estetik",
    metaDescription:
      "Bakıda botoks, dolğu (filler), mezoterapiya, plazmoterapiya. Sertifikatlı həkimlər, təhlükəsiz protokollar. Pulsuz konsultasiya — 070 708 61 61",
    h1: "İnyeksiyon Prosedurlar — Botoks, Filler, Mezoterapiya",
    image: "/images/mainSection.webp",
    imageAlt:
      "Botoks inyeksiyonu proseduru — Çöhrə Estetik Klinikası Bakı həkim",
    description:
      "Çöhrə Estetik Klinikasında inyeksiyon prosedurlar — botoks, hialuron turşusu dolğuları (filler), mezoterapiya və plazmoterapiya (PRP) — yalnız sertifikatlı həkimlər tərəfindən, beynəlxalq protokollara uyğun icra edilir.",
    benefits: [
      "Botoks (botulinoterapiya) ilə qırış azaldılması",
      "Hialuron dolğuları (filler) ilə kontur korreksiyası",
      "Mezoterapiya ilə dərinin dərinliyindən qidalandırılması",
      "Plazmoterapiya (PRP) ilə bioloji cavanlaşma",
      "Hiperhidrozun (artıq tərləmənin) botoks ilə müalicəsi",
    ],
    faq: [
      {
        q: "Botoks nə qədər davam edir?",
        a: "Adətən 4–6 ay davam edir, sonra təkrar inyeksiya tələb olunur.",
      },
      {
        q: "Filler inyeksiyası ağrılıdırmı?",
        a: "Məhsullarda anesteziya mövcuddur; prosedur zamanı yüngül narahatlıq hiss edilə bilər.",
      },
    ],
    schemaName: "Botoks və Filler İnyeksiyon Prosedurları",
  },
  "4": {
    title: "Aparat kosmetologiyası",
    metaTitle:
      "Aparat Kosmetologiyası Bakı — Lazer, Fotona, Lumecca | Çöhrə Estetik",
    metaDescription:
      "Bakıda aparat kosmetologiyası: lazer epilyasiya, Fotona 4D, Lumecca IPL, Morpheus8, EndyMed. Müasir avadanlıq, peşəkar həkimlər. ☎ 070 708 61 61",
    h1: "Aparat Kosmetologiyası — Lazer və Cihaz Müalicələri",
    image: "/images/mainSection.webp",
    imageAlt:
      "Aparat kosmetologiyası lazer proseduru — Çöhrə Estetik Klinikası Bakı",
    description:
      "Çöhrə Estetik Klinikasında dünya standartlarına cavab verən müasir aparat və lazer texnologiyaları tətbiq edilir. Fotona, Lumecca IPL, Morpheus8, diode lazer kimi qabaqcıl sistemlər ilə əla nəticələr əldə edilir.",
    benefits: [
      "Lazer epilyasiya (diode lazer ilə qalıcı həll)",
      "Fotona 4D lazer ilə üzün gəncləşdirilməsi",
      "Lumecca IPL ilə piqment və damar müalicəsi",
      "Morpheus8 ilə dərinin möhkəmləndirilməsi",
      "Fraksional lazer ilə akne izi korreksiyası",
    ],
    faq: [
      {
        q: "Lazer epilyasiya neçə seans tələb edir?",
        a: "Tüklü sahəyə görə 6–8 seans tövsiyə olunur; seanslar arası fasilə 4–6 həftədir.",
      },
      {
        q: "Aparat prosedurlardan sonra bərpa müddəti nə qədərdir?",
        a: "Əksər prosedurlar minimal bərpa tələb edir; günlər ərzində adi həyata dönmək mümkündür.",
      },
    ],
    schemaName: "Aparat Kosmetologiyası",
  },
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const service = serviceData[id];

  if (!service) {
    return {
      title: "Xidmət — Çöhrə Estetik Klinikası",
      description: "Çöhrə Estetik Klinikasının xidmətləri.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://cohre.az/services/${id}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://cohre.az/services/${id}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
  };
};

const ServiceDetail = async ({ params }: Props) => {
  const { id } = await params;
  const service = serviceData[id];

  if (!service) {
    notFound();
  }

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.schemaName,
    description: service.description,
    procedureType: "Noninvasive",
    bodyLocation: "Dəri",
    followup: "Həkim məsləhəti",
    preparation: "Pulsuz ilkin konsultasiya",
    performedBy: {
      "@type": "MedicalClinic",
      name: "Çöhrə Estetik Klinikası",
      url: "https://cohre.az",
      telephone: "+994707086161",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://cohre.az/services/${id}`,
      },
    ],
  };

  return (
    <Container>
      <Script
        id="service-procedure-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalProcedureSchema),
        }}
      />
      <Script
        id="service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-1 relative aspect-4/3 md:aspect-auto md:min-h-[calc(100vh-25rem)]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="md:col-span-2 rounded-lg px-4 border border-primary/12 p-3 md:px-5 text-text font-sm font-normal leading-5">
            <h1 className="font-bold text-lg leading-7 md:text-2xl md:leading-8 mb-3 text-black/80">
              {service.h1}
            </h1>
            <div>
              <h2 className="font-semibold font-base leading-6 mb-1 text-black/80">
                Xidmət haqqında
              </h2>
              <p className="mb-3">{service.description}</p>
            </div>
            <div className="mt-3">
              <h2 className="font-semibold font-base leading-6 mb-1 text-black/80">
                Prosedurun əhatə etdiyi sahələr
              </h2>
              <ul>
                {service.benefits.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold font-base leading-6 mb-2 text-black/80">
                Tez-tez verilən suallar
              </h2>
              <div className="space-y-2">
                {service.faq.map((item, i) => (
                  <div key={i}>
                    <p className="font-medium text-black/80">{item.q}</p>
                    <p className="text-black/60">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="font-medium text-black/70">
                Pulsuz konsultasiya üçün zəng edin:{" "}
                <a
                  href="tel:+994707086161"
                  className="text-primary hover:underline"
                >
                  070 708 61 61
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetail;
