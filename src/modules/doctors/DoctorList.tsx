import Container from "@/components/shared/Container";
// import { getMedias } from "../data";

import DoctorCard from "../home/components/DoctorCard";
import doctors from "@/data/doctors.json";

// interface MediasPageProps {
//   page: number;
// }

const DoctorList = async () => {
  // const medias = await getMedias({ pageCount: 9, pageIndex: page });
  return (
    <Container>
      <div className=" grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-6">
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
