import RightArrow from "@/assets/icons/right-arrow.svg";
import Container from "@/components/shared/Container";
const MainSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/images/mainSection.jpg')" }}
    >
      <div className="bg-black/20">
        <Container>
          <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center flex flex-col items-center  text-white ">
              <h1 className="text-2xl leading-8 mb-2 font-black   md:text-[52px] md:leading-17 max-w-4xl">
                Çöhrə Estetik Klinikası - Tibbin Mərkəzi
              </h1>
              <p className="font-medium text-sm leading-5 mb-6 md:text-[16px] md:leading-6 md:mb-7 max-w-159.5">
                Sağlamlığınıza qayğı ilə yanaşan etibarlı tibbi mərkəzdir.
                Burada hər pasiyent diqqət və anlayışla qarşılanır. Sağlam həyat
                yolunda sizinləyik.
              </p>
              <button className="backdrop-blur-xl rounded-[48px] py-1.5 px-2 text-sm leading-5 flex  gap-2 items-center">
                <span>Xidmətlər</span>
                <div
                  className={`bg-[linear-gradient(91.42deg,#7F9276.2%,#BFCDB4.04%)] w-9 h-9 rounded-full flex items-center justify-center text-white`}
                >
                  <RightArrow />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainSection;
