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

const services = [
  {
    id: 1,
    name: "Üz və bədən estetikası",
    img: <Radiologiya />,
    text: "Dəri problemlərinin müalicəsi (akne, pigmentasiya, çapıq və s.)",
    link: "/services/1",
  },
  {
    id: 2,
    name: "Dəri problemlərinin müalicəsi",
    img: <Urolog />,
    text: "İnyeksiyon prosedurlar (botoks, dolğu və s.)",
    link: "/services/2",
  },
  {
    id: 3,
    name: "İnyeksiyon prosedurlar",
    img: <FirstHelp />,
    text: "Botoks, mezoterapiya, biorevitalizasiya və digər inyeksion müalicələr",
    link: "/services/3",
  },
  {
    id: 4,
    name: "Aparat kosmetologiyası",
    img: <Lab />,
    text: "Lazer epilyasiya, RF qaldırma, ultrasəs kavitasiya prosedurları",
    link: "/services/4",
  },
];

const DepartmentSection = () => {
  return (
    <section aria-label="Xidmətlərimiz" className="bg-background w-full py-7 md:py-11">
      <Container>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-black/80 text-[20px] leading-7 md:text-[32px] md:leading-8 font-bold">
            Xidmətlərimiz
          </h2>
          <LinkButton text="Hamısı" href="/services" />
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
          className="w-full mt-4 md:mt-6"
        >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <DepartmentCard
                  img={service.img}
                  name={service.name}
                  text={service.text}
                  link={service.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default DepartmentSection;
