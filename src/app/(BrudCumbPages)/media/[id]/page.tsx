import Container from "@/components/shared/Container";
import DetailContent from "@/modules/mediaDetail/containers/DetailContent";
import type { Metadata } from "next";
import Script from "next/script";
import newsData from "@/data/news.json";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const article = newsData.find((n) => n.id === Number(id));

  if (!article) {
    return {
      title: "Xəbər — Çöhrə Estetik Klinikası",
      description: "Çöhrə Estetik Klinikasının tibbi bloq məqaləsi.",
    };
  }

  const mainImage = article.images.find((img) => img.isMain);
  const plainDesc = article.title + " — Çöhrə Estetik Klinikasının tibbi bloq məqaləsi. Peşəkar dermatoloqlar tərəfindən yazılmış faydalı məlumat.";

  return {
    title: article.title,
    description: plainDesc.slice(0, 155),
    alternates: {
      canonical: `https://cohre.az/media/${id}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: plainDesc.slice(0, 155),
      url: `https://cohre.az/media/${id}`,
      siteName: "Çöhrə Estetik Klinikası",
      publishedTime: article.date,
      images: mainImage
        ? [
            {
              url: mainImage.imageUrl,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
  };
};

const NewsDetail = async ({ params }: Props) => {
  const { id } = await params;
  const article = newsData.find((n) => n.id === Number(id));
  const mainImage = article?.images.find((img) => img.isMain);

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          "@type": "Organization",
          name: "Çöhrə Estetik Klinikası",
          url: "https://cohre.az",
        },
        publisher: {
          "@type": "Organization",
          name: "Çöhrə Estetik Klinikası",
          logo: {
            "@type": "ImageObject",
            url: "https://cohre.az/favicon.ico",
          },
        },
        image: mainImage ? `https://cohre.az${mainImage.imageUrl}` : undefined,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://cohre.az/media/${id}`,
        },
        description:
          article.title +
          " — Çöhrə Estetik Klinikasının tibbi bloq məqaləsi.",
      }
    : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: article?.title ?? "Xəbər",
        item: `https://cohre.az/media/${id}`,
      },
    ],
  };

  return (
    <Container>
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <Script
        id="media-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DetailContent id={id} />
    </Container>
  );
};

export default NewsDetail;
