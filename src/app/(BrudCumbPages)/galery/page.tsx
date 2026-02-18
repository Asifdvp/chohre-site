// import seo from "@/lib/seo";
import GaleryTabs from "@/modules/galery/GaleryTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qalereya",
  description: "...",
};

const Galery = () => {
  return (
  <GaleryTabs/>
  );
};

export default Galery;
