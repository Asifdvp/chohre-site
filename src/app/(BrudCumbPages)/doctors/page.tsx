// import seo from "@/lib/seo";
import DoctorList from "@/modules/doctors/DoctorList";
import MediaList from "@/modules/media/containers/MediaList";
import { Metadata } from "next";

// export const metadata: Metadata = seo({
//   title: "Media | Layihə Hovuzu",
// });

const Doctors = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: number }>;
}) => {
  const params = await searchParams;

  return (
    <div className="pb-8 md:pb-12">
      <DoctorList page={params?.page ? params?.page : 1} />
    </div>
  );
};

export default Doctors;
