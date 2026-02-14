import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsScard = () => {
  return (
      <Link href={`/media/${5}`}>
    <div className="rounded-md border border-primary/12  overflow-hidden bg-white">
      <div className="relative w-full h-63">
        <Image
          src={"/images/test.jpg"}
          fill
          className="object-cover"
          alt="sdfsdf"
        />
      </div>
      <div className="p-3">
        <div className="font-medium text-[12px] leading-4  text-black/60 mb-1">
          5 fevral, 2026
        </div>
        <div className="text-black/80font-semibold text-sm leading-5">
          COVID Linked to Long-Term Risk of Digestive Diseases: Study
        </div>
      </div>
    </div>
    </Link>
  );
};

export default NewsScard;
