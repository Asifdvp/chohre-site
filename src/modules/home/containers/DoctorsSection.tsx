import Radiologiya from "@/assets/icons/departments/radiologiya.svg";
import Urolog from "@/assets/icons/departments/urolog.svg";
import FirstHelp from "@/assets/icons/departments/firstHelp.svg";
import Lab from "@/assets/icons/departments/lab.svg";
import Container from "@/components/shared/Container";
import LinkButton from "@/components/shared/LinkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DoctorCard from "../components/DoctorCard";
import { DoctorData, doctors } from "../data/doctors";
const DoctorSection = () => {
  // const partners = await getPartnes();

  // const isFewPartners =
  //   (partners?.length ?? 0) > 0 && (partners?.length ?? 0) < 5;
  //   className={isFewPartners ? "flex justify-center" : ""}
  return (
    <div className="bg-background w-full py-7 px-2 md:py-11">
      <Container>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-black/80 text-[20px] leading-7 md:text-[32px] md:leading-8 font-bold">
            Həkimlər{" "}
          </h2>
          <LinkButton text="Hamısı" href="/media" />
        </div>

      <Carousel
        opts={{
          loop: true,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
        }}
        autoPlay
        delay={3000}
        className="w-full mt-4 max-w-[93vw] md:mt-6"
      >
        <CarouselContent >
          {doctors?.length &&
            doctors.map((doctor:DoctorData) => (
              <CarouselItem
                className="lg:basis-1/3 md:basis-1/2 basis-1/1 sm:basis-1/2 "
                key={doctor.id}
              >
                  <DoctorCard key={doctor.id} doctor={doctor} layer={true} />
             
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      </Container>
    
    </div>
  );
};

export default DoctorSection;

