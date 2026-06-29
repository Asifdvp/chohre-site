import Link from "next/link";
import React from "react";
import ArrowRIght from "@/assets/icons/right-arrow.svg";

const LinkButton = ({
  text = "",
  href = "/",
  className = "",
  color = "primary",
}: {
  text: string;
  href: string;
  className?: string;
  color?: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 text-[14px] leading-5 md:text-base text-${color} items-center justify-end  [&_svg_path]:fill-${color} md:leading-6 font-medium ${className}`}
    >
      {text} <ArrowRIght aria-hidden="true" />
    </Link>
  );
};

export default LinkButton;
