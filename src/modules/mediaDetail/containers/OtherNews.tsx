import NewsCard from "@/components/shared/NewsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getMedias } from "@/modules/media/data";

interface OtherNewsProps {
  code: string;
}

const OtherNews = async ({ code }: OtherNewsProps) => {
  const otherNews = await getMedias({
    excludeCode: code,
    pageIndex: 1,
    pageCount: 6,
  });

  return (
    <div>
      <h2 className="text-2xl leading-9 font-medium text-black mb-4 md:mb-6">
        Digər xəbərlər
      </h2>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
        }}
        delay={3000}
        className="w-full"
      >
        <CarouselContent className="flex">
          {otherNews?.items.length
            ? otherNews?.items.map((news) => {
                return (
                  <CarouselItem
                    key={news.id}
                    className="basis-full md:basis-1/3 "
                  >
                    <NewsCard
                      title={news.title}
                      description={news.description}
                      href={`/${news.code}`}
                      imageUrl={news.imageUrl}
                    />
                  </CarouselItem>
                );
              })
            : ""}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OtherNews;
