// import seo from "@/lib/seo";
import Container from "@/components/shared/Container";
import DepartmentCard from "@/modules/home/components/DepartmentCard";
import Radiologiya from "@/assets/icons/departments/radiologiya.svg";
import Urolog from "@/assets/icons/departments/urolog.svg";
import Lab from "@/assets/icons/departments/lab.svg";
import FirstHelp from "@/assets/icons/departments/firstHelp.svg";
// export const metadata: Metadata = seo({
//   title: "Media | Layihə Hovuzu",
// });

const Services = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: number }>;
}) => {
  // const params = await searchParams;

  return (
    <div className="pb-8 md:pb-12">
      <Container>
        <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partners?.map((partner, index) => (
            <DepartmentCard
              img={partner.img}
              key={index}
              name={partner.name}
              text={partner.text}
              link={partner.link}
            />
          ))}
        </div>
        {/* <div className="flex justify-end mt-5  bg-red-500 h-40 w-40">
               <div className="flex gap-[10px]">
                 <Button variant={"outline"} disabled={page == 1} size={"xs"}>
                   <Link href={`/media?page=${+page - 1}`}>
                     <PrevIcon />
                   </Link>
                 </Button>
                 <Button
                   variant={"outline"}
                   disabled={!medias?.haveNext}
                   size={"xs"}
                 >
                   <Link href={`/media?page=${+page + 1}`}>
                     <NextIcon />
                   </Link>
                 </Button>
               </div>
             </div> */}
      </Container>
    </div>
  );
};

export default Services;

const partners = [
  {
    id: 1,
    name: "Üz və bədən estetikası",
    img: <Radiologiya />,
    text: "Üz və bədən estetikası",
    link: "/services/1",
  },
  {
    id: 2,
    name: "Dəri problemlərinin müalicəsi",
    img: <Urolog />,
    text: "Akne, pigmentasiya, çapıq və s.",
    link: "/services/2",
  },
  {
    id: 3,
    name: "İnyeksiyon prosedurlar",
    img: <FirstHelp />,
    text: "Botoks, dolğu və s.",
    link: "/services/3",
  },
  {
    id: 4,
    name: "Aparat kosmetologiyası",
    img: <Lab />,
    text: "Aparat kosmetologiyası",
    link: "/services/4",
  },
];
