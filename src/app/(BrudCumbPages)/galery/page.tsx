// import seo from "@/lib/seo";
"use client";
import Container from "@/components/shared/Container";
import ImageList from "@/modules/galery/ImageList";
import VideoList from "@/modules/galery/VideoList";
// import { Metadata } from "next";
import { useState } from "react";


const Galery = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <Container className=" mb-3 flex justify-between gap-4">
        <h1 className="text-[20px] text-black/80  leading-7 font-bold md:text-[32px] md:leading-10 mb-3 md:mb-4">
          Qalereya
        </h1>{" "}
        <div className="flex gap-2 items-center">
          <div
            onClick={() => {
              setActiveTab(1);
            }}
            className={`font-medium text-sm leading-5 md:text-base md:leading-6 cursor-pointer rounded-[48px] border border-text/20 text-text py-1.5 px-3 flex items-center ${activeTab === 1 && "bg-primary/10 text-primary border-primary"}`}
          >
            Şəkillər
          </div>
          <div
            onClick={() => {
              setActiveTab(2);
            }}
            className={` font-medium text-sm leading-5 md:text-base md:leading-6 cursor-pointer rounded-[48px] border border-text/20 text-text py-1.5 px-3 flex items-center ${activeTab === 2 && "bg-primary/10 text-primary border-primary"}`}
          >
            Videolar
          </div>
        </div>
      </Container>
      <div className="pb-8 md:pb-12">
        {activeTab === 1 && <ImageList />}
        {activeTab === 2 && <VideoList />}
      </div>
    </>
  );
};

export default Galery;
