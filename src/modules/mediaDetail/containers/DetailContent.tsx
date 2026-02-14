// import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import ImageGallery from "../components/ImageGallery";
// import { getMedia } from "../data";

interface DetailContentProps {
  code: string;
}

const DetailContent = async ({ code }: DetailContentProps) => {
  // const media = await getMedia(code);

  return (
    <div className="pb-8 md:pb-12 ">
      <div className=" flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-1/3 ">
          {media?.images?.length ? <ImageGallery images={media?.images} /> : ""}
        </div>

        <div className="rounded-lg  px-4  border border-primary/12 w-full md:w-2/3 p-3  md:px-5 ">
          <div className="font-medium text-black/60 leading-4 text-xs mb-1 flex items-center ">
            5 fevral, 2026{" "}
            <span className="block mx-1.5 w-1 h-1 rounded-full bg-[#666666]/12"></span>{" "}
            272 baxış
          </div>
          <h2 className="  text-base leading-5  md:text-[18px] md:leading-6 font-medium text-black/80 mb-1">
            {media?.title}
          </h2>

          
            {media?.description && (
              <ShowHTMLContent content={media?.description} />
            )}
        
        </div>
      </div>
    </div>
  );
};

export default DetailContent;

const media = {
  id: 1,
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  description: "<p className='font-sm leading-5 text-text font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.  </p>",
  images: [
    { id: 1, isMain: true, imageUrl: "/images/tech1.jpg" },
    { id: 2, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 3, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 4, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 5, isMain: false, imageUrl: "/images/tech1.jpg" },
  ],
};
