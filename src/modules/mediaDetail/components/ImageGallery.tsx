"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MediaImage } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageGalleryProps {
  images: MediaImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [activeImage, setACtiveImage] = useState<MediaImage | null>(null);

  useEffect(() => {
    const mainImage = images.find((image) => image.isMain);
    if (mainImage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setACtiveImage(mainImage);
    }
  }, [images]);

  return (
    <div className="w-full ">
      <div className="relative w-full aspect-9/5 overflow-hidden  ">
        {activeImage && (
          <Image
            src={activeImage.imageUrl}
            alt="Main image"
            fill
            className=" object-cover  rounded-md"
            sizes="100vw"
            priority
          />
        )}
      </div>
      <div className="pt-2">
        <Carousel
          opts={{
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex  ">
            {images.map((img) => (
              <CarouselItem
                key={img.id}
                className="basis-[30%] md:basis-[25%] cursor-pointer pl-2 md:pl-4"
                // onClick={() => setACtiveImage(i)}
                onClick={() => setACtiveImage(img)}
              >
                <div className="relative  rounded-md aspect-9/7 w-full">
                  <Image
                    src={img.imageUrl}
                    fill
                    alt={`Thumbnail ${img.id}`}
                    sizes="(max-width: 768px) 120px, 160px"
                    className={` rounded-md object-cover h-auto border-2  ${
                      img.id === activeImage?.id
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
