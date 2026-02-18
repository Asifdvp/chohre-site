"use client";
import Container from "../shared/Container";
import Link from "next/link";
import PhoneIcon from "@/assets/icons/phone.svg";
import MailIcon from "@/assets/icons/mail.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import PointIcon from "@/assets/icons/point.svg";
import ArrowIcon from "@/assets/icons/top-arrow.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import FbIcon from "@/assets/icons/fb.svg";
import InstaIcon from "@/assets/icons/instagram.svg";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background">
      <Container>
        <div className="pt-6 pb-3 md:py-8">
          <div className="grid md:grid-cols-12 gap-6 items-start ">
            <div className="md:col-span-3">
              <h3 className="text-[20px] leading-7 md:text-2xl  md:leading-8 font-bold  text-primary mb-1">
                Çöhrə Estetik Klinikası
              </h3>
              <p className="text-sm leading-5 font-normal text-black/60 ">
                Sağlamlığınızı ciddiyə alan, sizi düşünen və daima qeydinizdə
                qalan bir normal klinika
              </p>
              <div className="flex mt-3 nd:mt-6 gap-2">
                <div className="w-6 h-6 rounded-[50%] bg-primary flex justify-center items-center">
                  <a
                    href="https://www.youtube.com/channel/UC1-IViTGbYfEWolkdmuweDg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
                <div className="w-6 h-6 rounded-[50%] bg-primary flex justify-center items-center">
                  <a
                    href="https://www.instagram.com/chohreestetic?igsh=MWVudHFqOW81dGh1dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstaIcon />
                  </a>
                </div>
                <div className="w-6 h-6 rounded-[50%] bg-primary flex justify-center items-end">
                  <a
                    href="https://www.facebook.com/share/175BwgZKWr/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FbIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex md:justify-end ">
              <div className="flex flex-col">
                <h4 className="font-medium mb-1 text-[16px] leading-6 text-black/80">
                  Klinika
                </h4>
                <ul className="space-y-1 md:space-y-2 text-sm text-black/60 leading-5 font-normal duration-500 ease-in-out">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-primary duration-300 ease-in-out "
                    >
                      Haqqımızda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-primary duration-300 ease-in-out"
                    >
                      Xidmətlər
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doctors"
                      className="hover:text-primary duration-300 ease-in-out"
                    >
                      Həkimlər
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media"
                      className="hover:text-primary duration-300 ease-in-out"
                    >
                      Xəbərlər
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/galery"
                      className="hover:text-primary duration-300 ease-in-out"
                    >
                      Qalereya
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary duration-300 ease-in-out"
                    >
                      Əlaqə
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 ">
              <h4 className="text-[16px] leading-6 text-black/80 font-medium mb-1.5">
                Əlaqə
              </h4>
              <ul className="space-y-2 text-sm leading-5 text-black/60 flex flex-col items-start ">
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  <span>070 708 61 61</span>
                </li>

                <li className="flex items-center gap-2">
                  <MailIcon />
                  <span>chohreestetic@gmail.com</span>
                </li>

                <li className="flex items-center gap-2 cursor-pointer">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kövkab+Səfərəliyeva+2,+Bakı,+Cohre+Estetik+Klinikası"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <PointIcon />
                    <span>
                      Kövkab Səfərəliyeva 2
                    </span>
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <ClockIcon />
                  <span>İş saatları və günlər: 9:00-18:00, 1-6</span>
                </li>
              </ul>
            </div>

            <div
              className="md:col-span-1 text-right w-13 h-13 rounded-[50%] bg-white flex items-center justify-center cursor-pointer transition-colors duration-300"
              onClick={handleScrollToTop}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>
        <div className="border-t border-black/10  py-4 md:py-5 text-text font-normal text-[14px] leading-5">
          © Copyright 2026. All rights are reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
