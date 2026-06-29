import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import StepCard from "../components/StepCard";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/right-arrow.svg";

const StepSection = () => {
  return (
    <div className="bg-white w-full pb-8 pt-2 md:py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="font-bold leading-8 text-[20px] mb-1 text-center  md:text-left  md:text-[32px] md:leading-8 md:mb-3 text-black/80">
              Addımları ardıcıl İzləyin
            </h2>
            <p className="font-sm font-normal leading-5 mb-5 text-center md:text-left text-text md:mb-7">
              Qəbul üçün randevu almaq üçün əvvəlcə istədiyiniz həkimi seçin,
              daha sonra mövcud tarix və saatlardan uyğun olanını qeyd edin.
            </p>
            <div className=" hidden md:flex">  <Link
            href={"tel:+994707086161"}
            className="py-1.5 px-4 flex items-center gap-3  bg-primary text-white rounded-[48px]"
          >
            Zəng Et{" "}
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center [&_svg_path]:fill-primary">
              <ArrowIcon />
            </div>
          </Link></div>
          </div>

          <div className="md:col-span-7 mb-6">
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
                    className="lg:basis-1/3 md:basis-1/3 basis-1/2"
                      key={step.id}
                        // className="shrink-0  max-w-80 md:"

                    >
                      <StepCard
                        step={step.step}
                        title={step.title}
                        description={step.description}
                      />
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </div>

<div className="flex md:hidden">  <Link
            href={"tel:+994707086161"}
            className="py-1.5 px-4 flex items-center gap-3  bg-primary text-white rounded-[48px]"
          >
            Zəng Et{" "}
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center [&_svg_path]:fill-primary">
              <ArrowIcon />
            </div>
          </Link></div>
        
        </div>
      </Container>
    </div>
  );
};

export default StepSection;

const steps = [
  {
    id: 1,
    step: 1,
    title: "Həkimi seçin",
    description:
      "İxtisasına və təcrübəsinə görə sizə uyğun olan həkimi seçin. Hər həkimin profili ilə tanış ola bilərsiniz.",
  },
  {
    id: 2,
    step: 2,
    title: "Tarixi seçin",
    description:
      "Mövcud tarix və saatlar arasından sizə ən uyğun olan vaxtı seçin. Zəng edərək randevu alın: 070 708 61 61.",
  },
  {
    id: 3,
    step: 3,
    title: "Konsultasiyaya gəlin",
    description:
      "Seçilmiş tarixdə klinikaya gəlin. Həkim sizi qəbul edəcək, müayinə aparacaq və fərdi müalicə planı hazırlayacaq.",
  },
];
