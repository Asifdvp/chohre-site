"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Container from "../shared/Container";
import RightArrow from "@/assets/icons/right-arrow.svg";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <nav
      className={` z-50 w-full   ${
        isHome
          ? "absolute top-0 bg-black/20 border  border-solid border-black/16"
          : "sticky top-0 bg-background backdrop-blur-sm "
      }`}
    >
      <div className="relative py-3.75">
        <Container>
          <div className="flex  mx-auto  justify-between items-center ">
            <div className="flex items-center">
              <Link href={"/"}>
                <div className="hidden md:block w-60 h-10 ">
                  <Image
                    src={
                      isHome
                        ? "/images/logo-white.png"
                        : "/images/logo-black.png"
                    }
                    width={240}
                    height={40}
                    alt="clinic-logo"
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="items-center flex md:hidden  w-35 h-6 ">
                  <Image
                    src={
                      isHome
                        ? "/images/logo-white.png"
                        : "/images/logo-black.png"
                    }
                    width={140}
                    height={24}
                    alt="clinic-logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <div
              className={`hidden md:flex items-center  ${isHome ? "text-white" : "text-black/80"}`}
            >
              <div className="menu-item">
                <Link href="/about">Ana Səhifə</Link>
              </div>
              <div className="menu-item">
                <Link href="/about">Haqqımızda</Link>
              </div>
              <div className="menu-item">
                <Link href={"/services"}>Xidmətlər</Link>
              </div>
              <div className="menu-item">
                <Link href={"/doctors"}>Həkimlər</Link>
              </div>
              <div className="menu-item">
                <Link href={"/media"}>Xəbərlər</Link>
              </div>
              <div className="menu-item">
                <Link href={"/galery"}>Qalereya</Link>
              </div>
              {/* <div className="menu-item">
                <Link href="/media">Əlaqə</Link>
              </div> */}
            </div>

            {/* <div className="hidden md:block items-center">
              <button
                onClick={handleScrollToTop}
                className={` backdrop-blur-xl  text-white ${isHome ? "bg-transparent " : " bg-primary "}   cursor-pointer   px-4 py-1.5 font-500 rounded-[48px] flex items-center gap-3 transition-colors duration-300 ease-in-out`}
              >
                <span>Randevu Al</span>
                <div
                  className={` ${isHome ? " bg-[linear-gradient(91.42deg,#7F9276_15.2%,#BFCDB4_153.04%)]" : "bg-white text-primary"}
  
    w-9 h-9 rounded-full flex items-center justify-center
    ${isHome ? " text-white" : "bg-white text-primary"}`}
                >
                  <RightArrow />
                </div>
              </button>
            </div> */}

            <div className=" my-auto block md:hidden  ">
              <button
                onClick={() => setOpen(!open)}
                className="flex flex-col justify-center items-center gap-1.5 cursor-pointer"
              >
                <span
                  className={`w-5.5 h-0.5 bg-black/60 rounded transition-all duration-500 ease-in-out ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5.5 h-0.5 bg-black/60 rounded transition-all  ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5.5 h-0.5 bg-black/60 rounded transition-all duration-500 ease-in-out ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Container>

        {open && (
          <div className="absolute top-full left-0 w-full bg-primary z-50 h-screen p-5">
            <Container className="w-full flex flex-col gap-2">
              <Link
                href="/"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Ana Səhifə
              </Link>
              <Link
                href="/about"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Haqqımızda
              </Link>
              <Link
                href="/services"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Xidmətlər
              </Link>
              <Link
                href="/doctors"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Həkimlər{" "}
              </Link>
              <Link
                href="/media"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Xəbərlər
              </Link>
              <Link
                href="/galery"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Qalereya
              </Link>
              {/* <Link
                href="/about"
                className="mobil-menu-item"
                onClick={() => setOpen(false)}
              >
                Əlaqə
              </Link> */}

              <div className=" border-b border-solid border-black/10 mt-5 mb-6 "></div>

              {/* <div className="flex">
                {" "}
                <button
                  onClick={handleScrollToTop}
                  className={` bg-background text-white border border-background   cursor-pointer   px-4 py-3 font-500 rounded-[48px] flex items-center gap-3 transition-colors duration-300 ease-in-out`}
                >
                  <span>Randevu Al</span>
                  <div
                    className={`
    w-9 h-9 rounded-full flex items-center justify-center
    bg-white text-primary
  `}
                  >
                    <RightArrow />
                  </div>
                </button>
              </div> */}
            </Container>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
