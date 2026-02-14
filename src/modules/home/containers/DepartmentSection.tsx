import DepartmentCard from "../components/DepartmentCard";
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
const DepartmentSection = () => {
  // const partners = await getPartnes();

  // const isFewPartners =
  //   (partners?.length ?? 0) > 0 && (partners?.length ?? 0) < 5;
  //   className={isFewPartners ? "flex justify-center" : ""}
  return (
    <div className="bg-background w-full py-7 px-2 md:py-11">
      <Container>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-black/80 text-[20px] leading-7 md:text-[32px] md:leading-8 font-bold">
            Şöbələr{" "}
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
          {partners?.length &&
            partners.map((partner) => (
              <CarouselItem
                className="lg:basis-1/4 md:basis-1/3 basis-1/2 "
                key={partner.id}
              >
                <DepartmentCard
                  img={partner.img}
                  name={partner.name}
                  text={partner.text}
                  link={"#"}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      </Container>
    
    </div>
  );
};

export default DepartmentSection;

const partners = [
  {
    id: 1,
    name: "Radiologiya",
    img: <Radiologiya />, //Radiologiya,
    text: "Müasir radiologiya ilə sürətli və etibarlı nəticə əldə edilir.",
    link: "/media",
  },
  {
    id: 2,
    name: "Urologiya",
    img: <Urolog />,
    text: "Urologiya şöbəmiz dəqiq və effektiv müalicə təqdim edir.",
    link: "/media",
  },
  {
    id: 3,
    name: "İlkin yardım",
    img: <FirstHelp />,
    text: "Yardım şöbəmiz peşəkar ilkin yardım göstərir.",
    link: "/media",
  },
  {
    id: 4,
    name: "Labarotoriya",
    img: <Lab />,
    text: "Laboratoriya sürətli və etibarlı analizlər təqdim edir.",
    link: "/media",
  },
];
