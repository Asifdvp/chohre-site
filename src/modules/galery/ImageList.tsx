"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoGalery from "@/app/(BrudCumbPages)/galery/photoGlaery/PhotoGalery";

const ImageList = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const medias = [
    { src: "/images/galery/image0.jpeg" },
    { src: "/images/galery/image1.jpeg" },
    { src: "/images/galery/image2.jpeg" },
    { src: "/images/galery/image3.jpeg" },
    { src: "/images/galery/image4.jpeg" },
    { src: "/images/galery/image5.jpeg" },
  
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [open]);

  return (
    <Container>
      <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {medias.map((card, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={card.src}
              alt={`media-${i}`}
              width={400}
              height={300}
              className="object-cover object-center w-full  hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
      {/* Modal */}
      <PhotoGalery
        open={open}
        setOpen={setOpen}
        index={index}
        slides={medias}
      />
    </Container>
  );
};

export default ImageList;
