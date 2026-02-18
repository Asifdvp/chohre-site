// import seo from "@/lib/seo";
import DoctorList from "@/modules/doctors/DoctorList";
// import { Metadata } from "next";

// export const metadata: Metadata = seo({
//   title: "Media | Layihə Hovuzu",
// });

const Doctors = async () => {
  //   const params = await searchParams;
  // page={params?.page ? params?.page : 1}
  return (
    <div className="pb-8 md:pb-12">
      <DoctorList />
    </div>
  );
};

export default Doctors;
