// import seo from "@/lib/seo";
import Container from "@/components/shared/Container";
import DoctorList from "@/modules/doctors/DoctorList";
import MediaList from "@/modules/media/containers/MediaList";
import { Metadata } from "next";
import Image from "next/image";
import GoogleMapComponent from "./Map";
import ContactForm from "./Form";

// export const metadata: Metadata = seo({
//   title: "Media | Layihə Hovuzu",
// });

const About = () => {
  return (
    <Container>
      <div className="pb-8 md:pb-12">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* <div className="md:col-span-1 relative">
        <Image
    src="/images/mainSection.webp"
    alt="about"
    width={500}
    height={400}
    className="w-full h-auto object-contain"
  />
    </div> */}
          <div className="col-span-1 relative aspect-[4/3] md:aspect-auto md:h-full">
            <GoogleMapComponent />
          </div>

          <div className="md:col-span-2 rounded-lg px-4 border border-primary/12 p-3 md:px-5 text-text font-sm font-normal leading-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
