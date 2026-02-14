import Container from "@/components/shared/Container";
import DoctorDetailContent from "@/modules/doctorDetail/containers/DoctorDetailContent";
import DetailContent from "@/modules/mediaDetail/containers/DetailContent";
// import seo from "@/lib/seo";
// import DetailContent from "@/modules/mediaDetail/containers/DetailContent";
// import OtherNews from "@/modules/mediaDetail/containers/OtherNews";
// import { getMedia } from "@/modules/mediaDetail/data";
// import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const { id } = await params;

//   const media = await getMedia(id);

//   // return seo({ title: `${media?.title ? media.title : "Media"}` });
// };

const NewsDetail = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <Container>
      <DoctorDetailContent code={id}/>
      {/* <DetailContent code={id} />
      <OtherNews code={id} /> */}
    </Container>
  );
};

export default NewsDetail;
