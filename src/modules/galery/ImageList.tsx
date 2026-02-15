"use client";
import Container from "@/components/shared/Container";
import NewsScard from "@/modules/home/components/NewsScard";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@/assets/icons/close.svg";

const ImageList = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const medias = {
    items: [
      { id: 1, imageUrl: "/images/tech1.jpg" },
      { id: 2, imageUrl: "/images/tech1.jpg" },
      { id: 3, imageUrl: "/images/tech1.jpg" },
      { id: 4, imageUrl: "/images/tech1.jpg" },
      { id: 5, imageUrl: "/images/tech1.jpg" },
      { id: 6, imageUrl: "/images/tech1.jpg" },
    ],
    haveNext: false,
  };
  // const medias = await getMedias({ pageCount: 9, pageIndex: page });
  return (
    <Container>
      <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {medias.items.map((card) => (
          <div
            key={card.id}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(card.imageUrl)}
          >
            <Image
              src={card.imageUrl}
              alt={`media-${card.id}`}
              width={400}
              height={300}
              className="object-cover w-full h-60 hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] max-w-[90vw]"
            />
            <div
              className="cursor-pointer absolute -top-3 -right-3 "
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ImageList;
