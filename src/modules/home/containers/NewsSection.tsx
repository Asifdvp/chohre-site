import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import NewsScard from "../components/NewsScard";
import LinkButton from "@/components/shared/LinkButton";
import news  from "@/data/news.json";

const NewsSection = () => {
  return (
    <div className="bg-background w-full pb-8 pt-7 md:py-12">
      <Container>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-black/80 text-[20px] leading-7 md:text-[32px] md:leading-8 font-bold">
            Xəbərlər{" "}
          </h2>
          <LinkButton text="Hamısı" href="/media" />
        </div>
        <Carousel
          opts={{
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
            dragFree: true,
          }}
          autoPlay
          delay={3000}
          className="w-full max-w-[83vw]"
        >
          <CarouselContent>
            {news?.length &&
              news.slice(0, 3).map((card) => (
                <CarouselItem
                  className="lg:basis-1/3 md:basis-1/3 basis-1/1 xs:basis-1/2"
                  key={card.id}
                  //  className="shrink-0  max-w-80 md:"
                >
                  <NewsScard card={card} />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default NewsSection;
