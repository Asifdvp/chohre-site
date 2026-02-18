"use client";

import React from "react";
import Image from "next/image";
import { IDoctorData } from "@/types";

const DoctorIamge: React.FC<{
  doctor: IDoctorData;
}> = ({ doctor }) => {
  return (
    <div className="relative group w-full aspect-3/4  md:h-100 rounded-md overflow-hidden  bg-white/8">
      {/* Doctor Image */}
      {/* <div className="w-full h-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover "
        /> */}
      <div className="w-full h-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />

        {/* Name Tag */}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black/48 text-white p-3 z-10 md:px-4">
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
    </div>
  );
};

export default DoctorIamge;
