import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IDoctorData } from "@/types";

const DoctorCard: React.FC<{ doctor: IDoctorData; layer: boolean }> = ({
  doctor,
  layer = true,
}) => {
  return (
    <Link href={`/doctors/${doctor.id}`}>
      <div className="relative group w-full h-62  md:h-80 rounded-md overflow-hidden cursor-pointe bg-white">
        {/* Doctor Image */}

        <div className="relative w-40 h-40 md:w-60 md:h-60 m-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 shrink-0 bg-white">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black/48 text-white p-3 z-10 md:px-4">
          <h3 className="text-sm font-semibold leading-5 md:text-base">
            {doctor.name}
          </h3>
          <p className="text-sm leading-5 font-normal md:font-medium">
            {doctor.specialty}
          </p>
        </div>

        {/* Hover Layer */}

        {layer && (
          <div
            className="
          absolute inset-0
         bg-primary
          py-4 px-5 flex flex-col justify-between text-white
          translate-x-full opacity-0
          group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-11
          transition-all duration-300 ease-out
        "
          >
            {/* Top */}
            <div>
              <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-[140%] h-55 bg-white/8 rounded-[60%]" />
              <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-[120%] h-45 bg-white/8 rounded-[60%]" />

              <h2 className="text-base leading-6 font-bold md:text-[20px] md:leading-7">
                {doctor.name}
              </h2>
              <p className="text-sm leading-5 font-medium mb-2 md:text-base md:leading-6">
                {doctor.specialty}
              </p>
              <p className="text-xs leading-4 font-medium mb-3 md:leading-5 md:mb-7">
                {doctor.shortDescription}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/8 text-white">
              <div className="text-center">
                <p className="text-sm leading-5 font-semibold md:text-[20px] md:leading-7">
                  {doctor.experience}+
                </p>
                <p className="text-xs leading-4 font-medium md:leading-5 ">
                  İllik Təcrübə
                </p>
              </div>
              <div className="text-center border-l border-r  [border-image-source:linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_50%,rgba(255,255,255,0)_100%)] [border-image-slice:1]">
                <p className="text-sm leading-5 font-semibold md:text-[20px] md:leading-7">
                  {doctor.patients}+
                </p>
                <p className="text-xs leading-4 font-medium  md:leading-5  ">
                  Uğurlu Müalicə
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm leading-5 font-semibold md:text-[20px] md:leading-7">
                  {doctor.rating}
                </p>
                <p className="text-xs leading-4 font-medium  md:leading-5 ">
                  Reytinq Xalı
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default DoctorCard;
