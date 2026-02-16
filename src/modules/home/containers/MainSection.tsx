import RightArrow from "@/assets/icons/right-arrow.svg";
import Container from "@/components/shared/Container";
import Link from "next/link";
const MainSection = () => {
  return (
    <div
      className="min-h-[calc(85vh-12rem)] bg-cover bg-center "
      style={{ backgroundImage: "url('/images/mainSection.jpg')" }}
    >
      <div className="bg-black/20">
        <Container>
          <div className="min-h-[calc(85vh-12rem)] flex items-center justify-center">
            <div className="container mx-auto px-6 text-center flex flex-col items-center  text-white ">
              <h1 className="text-2xl leading-8 mb-2 font-black   md:text-[52px] md:leading-17 max-w-4xl">
                Çöhrə Estetik Klinikası
              </h1>
              <p className="font-medium text-sm leading-5 mb-6 md:text-[16px] md:leading-6 md:mb-7 max-w-159.5">
                Yolunuzu Çöhrədən salın, çünki ən dəyərli geyiminiz dərinizdir
              </p>
              <Link
                href={"/services"}
                className="backdrop-blur-xl rounded-[48px] py-1.5 px-2 text-sm leading-5 flex  gap-2 items-center"
              >
                <span>Xidmətlər</span>
                <div
                  className={`bg-[linear-gradient(91.42deg,#7F9276.2%,#BFCDB4.04%)] w-9 h-9 rounded-full flex items-center justify-center text-white`}
                >
                  <RightArrow />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainSection;
