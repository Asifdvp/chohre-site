// import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import DoctorIamge from "../components/DoctorImage";
// import { getMedia } from "../data";

interface DoctorDetailContentProps {
  code: string;
}

const DoctorDetailContent = async ({ code }: DoctorDetailContentProps) => {
  // const media = await getMedia(code);
  const doctor = {
    id: 1,
    name: "Zahid Abbasov",
    specialty: "Ümumi Rekonstruktiv Carrah",
    image: "/images/zahid.jfif",
    experience: 10,
    patients: 200,
    rating: 4.9,
    description:
      "Dr. Zahid Abbasov dünyada nadir rast gəlinən bir həkimdir: həm ənənəvi tibbdə, həm də gələcəyin texnologiyaları ilə müalicədə ustadır. Onun kabineti təkcə bir klinika deyil, eyni zamanda tibbi laboratoriya və virtual reallıq simulyasiya mərkəzidir.",
  };
  return (
    <div className="pb-8 md:pb-12 ">
      <div className=" flex flex-col-reverse md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-1/3 ">
          {doctor ? <DoctorIamge doctor={doctor} /> : ""}
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

export default DoctorDetailContent;

const media = {
  id: 1,
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.",
  description:
    "<p className='font-sm leading-5 text-text font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat.  </p>",
  images: [
    { id: 1, isMain: true, imageUrl: "/images/tech1.jpg" },
    { id: 2, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 3, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 4, isMain: false, imageUrl: "/images/tech1.jpg" },
    { id: 5, isMain: false, imageUrl: "/images/tech1.jpg" },
  ],
};
