import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
// import { getMedias } from "../data";
import Link from "next/link";
import NextIcon from "@/assets/icons/down-arrow.svg";
import PrevIcon from "@/assets/icons/up-arrow.svg";
import NewsScard from "@/modules/home/components/NewsScard";

interface MediasPageProps {
  page: number;
}

const MediaList = async ({ page = 1 }: MediasPageProps) => {
  // const medias = await getMedias({ pageCount: 9, pageIndex: page });
  return (
    <Container>
        <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {medias?.items?.length
            ? medias.items?.map((card,index) => (
                <NewsScard
                  key={index}
                  // title={card.title}
                  // description={card.description}
                  // href={card.code}
                  // imageUrl={card.imageUrl}
                />
              ))
            : ""}
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
  );
};

export default MediaList;

const medias = {
  items: [
    {
      id: 1,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 2,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 3,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 4,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
    {
      id: 5,
      title: "title",
      description: "description",
      imageUrl: "/images/tech1.jpg",
      code: "#",
    },
  ],
  haveNext:false
};
