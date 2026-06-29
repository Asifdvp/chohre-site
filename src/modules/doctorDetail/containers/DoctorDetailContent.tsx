import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import DoctorIamge from "../components/DoctorImage";
import doctors from "@/data/doctors.json";
import { IDoctorData } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  id: string;
};

const DoctorDetailContent = async ({ id }: Props) => {
  const doctorId = parseInt(id, 10);
  if (isNaN(doctorId)) notFound();
  const doctor = doctors.find((d) => d.id === doctorId);
  if (!doctor) notFound();
  return (
    <div className="pb-8 md:pb-12 ">
      <div className=" flex flex-col-reverse md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-1/3 ">
          <DoctorIamge doctor={doctor as unknown as IDoctorData} />
        </div>

        <div className="rounded-lg  px-4  border border-primary/12 w-full md:w-2/3 p-3  md:px-5 ">
          {/* <h2 className="  text-base leading-5  md:text-[18px] md:leading-6 font-medium text-black/80 mb-1">
            {doctor.name}
          </h2> */}

          {doctor?.description && (
            <ShowHTMLContent content={doctor?.description} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailContent;
