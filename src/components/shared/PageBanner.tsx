"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Link from "next/link";

const PageBanner = () => {
  const pathname = usePathname();
  const splitPath = pathname.split("/");
  return (
    <div>
      <Container>
        <p className="text-sm text-black/80 leading-5 md:text-base md:leading-6 font-normal mb-1 md:mb-2">
          <Link
            href="/"
            className="hover:text-black transition-colors ease-in-out duration-300"
          >
            {" "}
            <span>Ana səhifə</span>{" "}
          </Link>
          <span> / </span>

          {/* Əgər child yoxdursa title aktivdir */}
          <Link
            href={`/${splitPath[1]}`}
            className={
              !splitPath[2]
                ? "text-black "
                : "hover:text-black transition-colors ease-in-out duration-300"
            }
          >
            {bannerData[splitPath[1]]?.title}
          </Link>

          {splitPath[2] && (
            <>
              <span> / </span>
              <span className="text-black">
                {bannerData[splitPath[1]]?.child}
              </span>
            </>
          )}
        </p>
        {/* {crumbs} */}
        {bannerData[splitPath[1]]?.isVisible && (
          <h1 className="text-[20px] text-black/80  leading-7 font-bold md:text-[32px] md:leading-10 mb-3 md:mb-4">
            {bannerData[splitPath[1]] &&
              !splitPath[2] &&
              bannerData[splitPath[1]]?.title}
          </h1>
        )}
      </Container>
    </div>
  );
};

export default PageBanner;

const bannerData: {
  [key: string]: { title: string; child?: string; isVisible?: boolean };
} = {
  media: {
    title: "Xəbərlər",
    child: "Xəbər",
    isVisible: true,
  },
  doctors: {
    title: "Həkimlər",
    child: "Həkim",
    isVisible: true,
  },
  services: {
    title: "Xidmətlər",
    child: "Xidmət",
    isVisible: true,
  },
  about: {
    title: "Haqqımızda",
    isVisible: true,
  },
  galery: {
    title: "Qalereya",
    isVisible: false,
  },
};
