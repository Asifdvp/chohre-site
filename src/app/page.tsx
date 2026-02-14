import CountSection from "@/modules/home/containers/CountSection";
import DepartmentSection from "@/modules/home/containers/DepartmentSection";
import DoctorSection from "@/modules/home/containers/DoctorsSection";
import MainSection from "@/modules/home/containers/MainSection";
import NewsSection from "@/modules/home/containers/NewsSection";
import StepSection from "@/modules/home/containers/StepSection";
import TechnicalThings from "@/modules/home/containers/TechnicalThings";

const Home = () => {
  return (
    <>
      <MainSection />
      <CountSection />
      <DepartmentSection />
      <DoctorSection />
      <StepSection />
      <NewsSection />
      <TechnicalThings/>
    </>
  );
};

export default Home;
