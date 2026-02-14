import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
// import { getMedias } from "../data";
import Link from "next/link";
import NextIcon from "@/assets/icons/down-arrow.svg";
import PrevIcon from "@/assets/icons/up-arrow.svg";
import NewsScard from "@/modules/home/components/NewsScard";
import DoctorCard from "../home/components/DoctorCard";
import { doctors } from "../home/data/doctors";

interface MediasPageProps {
  page: number;
}

const DoctorList = async ({ page = 1 }: MediasPageProps) => {
  // const medias = await getMedias({ pageCount: 9, pageIndex: page });
  return (
    <Container>
      <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {doctors?.length
          ? doctors.map((card, index) => (
              <DoctorCard
                layer={false}
                key={index}
                doctor={card} // title={card.title}
                // description={card.description}
                // href={card.code}
                // imageUrl={card.imageUrl}
              />
            ))
          : ""}
      </div>
    </Container>
  );
};

export default DoctorList;
