// import seo from "@/lib/seo";
"use client";
import Container from "@/components/shared/Container";
import ImageList from "@/modules/galery/ImageList";
import VideoList from "@/modules/galery/VideoList";
// import { Metadata } from "next";
import { useState } from "react";
import { GaleryTab } from "./components/Tab";

const GaleryTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <Container className=" mb-3 flex justify-between gap-4">
        <h1 className="text-[20px] text-black/80  leading-7 font-bold md:text-[32px] md:leading-10 mb-3 md:mb-4">
          Qalereya
        </h1>{" "}
        <div className="flex gap-2 items-center">
          <GaleryTab
            label="Səkillər"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
          />
          <GaleryTab
            label="Videolar"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
          />
        </div>
      </Container>
      <div className="pb-8 md:pb-12">
        {activeTab === 1 && <ImageList />}
        {activeTab === 2 && <VideoList />}
      </div>
    </>
  );
};

export default GaleryTabs;
