import Link from "next/link";
import React from "react";
import ArrowIcon from "@/assets/icons/right-arrow.svg";
interface IProps {
  img: React.ReactNode;
  name: string;
  text: string;
  link: string;
}

const DepartmentCard = ({ img, name, text, link }: IProps) => {
  return (
    <div className="bg-white py-5 px-4 md:px-6 rounded-lg h-full border border-primary/12">
      <div className="p-4.5 w-18 h-18 rounded-[36px]  flex justify-center items-center bg-background">
        <div>{img}</div>
      </div>
      <div className="mb-7 mt-3">
        <h3 className="text-base leading-6 font-medium text-black mb-1 md:text-[20px] md:leading-7">
          {name}
        </h3>
        <p className="text-sm leading-5 font-normal text-text">{text}</p>
      </div>
      <div className="w-8 h-8 rounded-4xl flex justify-center items-center bg-primary">
        <Link
          href={link}
          className="[&_svg_path]:fill-white"
          aria-label={`${name} haqqında ətraflı`}
        >
          <ArrowIcon aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;
