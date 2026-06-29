import Container from "@/components/shared/Container";
import LinkButton from "@/components/shared/LinkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const TechnicalThings = () => {
  return (
    <div className="bg-white  py-6 md:py-12">
      <Container>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-black/80 text-[20px] leading-7 md:text-[32px] md:leading-8 font-bold">
            Qalereya{" "}
          </h2>
          <LinkButton text="Hamısı" href="/galery" />
        </div>

        <div className="hidden md:grid grid-cols-12 gap-4">
          {/* Big image */}
          <div className="col-span-12 w-full relative md:col-span-8 h-65 rounded-md ">
            <Image
              src="/images/tech1.webp"
              alt="Çöhrə Estetik Klinikasında prosedur — müasir tibbi avadanlıq"
              fill
              className="object-cover object-bottom rounded-md"
            />
          </div>

          {/* Right image */}
          <div className="col-span-12w-full relative  md:col-span-4 h-65 rounded-md ">
            <Image
              src="/images/test.jpg"
              alt="Çöhrə Estetik Klinikası — klinika interyeri Bakı"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Bottom images */}
          <div className="col-span-12 md:col-span-4 h-55 w-full relative rounded-md ">
            <Image
              src="/images/test.jpg"
              alt="Çöhrə Estetik Klinikası — müalicə kabineti"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="col-span-12 md:col-span-8 h-55  w-full relative rounded-md ">
            <Image
              src="/images/tech1.webp"
              alt="Çöhrə Estetik Klinikasında estetik prosedur — Bakı"
              fill
              className="object-cover object-bottom rounded-md"
            />
          </div>
        </div>

        <div className="block md:hidden h-65 relative ">
          {" "}
          <Carousel
            opts={{
              loop: true,
              align: "start",
              containScroll: "trimSnaps",
              dragFree: true,
            }}
            autoPlay
            delay={3000}
            className="w-full max-w-[83vw]"
          >
            <CarouselContent>
              {steps?.length &&
                steps.map((step) => (
                  <CarouselItem
                    className="lg:basis-1/3 md:basis-1/3 basis-1/1 xs:basis-1/2"
                    key={step.id}
                    //  className="shrink-0  max-w-80 md:"
                  >
                    <div className="rounded-md border border-primary/12  overflow-hidden">
                      <div className="relative w-full h-63">
                        <Image
                          src={"/images/tech1.webp"}
                          fill
                          className="object-cover"
                          alt="Çöhrə Estetik Klinikası qalereya — estetik prosedur"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default TechnicalThings;
const steps = [
  {
    id: 1,
    step: 1,
    title: "Həkimi seçin",
    description:
      "Once the blood is collected, the phlebotomist will remove the needle and apply a bandage.",
  },
  {
    id: 2,
    step: 2,
    title: "Tarixi seçin",
    description:
      "Once the blood is collected, the phlebotomist will remove the needle and apply a bandage.",
  },
  {
    id: 3,
    step: 3,
    title: "Təsdiqləyin",
    description:
      "Once the blood is collected, the phlebotomist will remove the needle and apply a bandage.",
  },
];
