import Container from "@/components/shared/Container";
import NewsScard from "@/modules/home/components/NewsScard";
import news from "@/data/news.json";

const MediaList = async () => {

  return (
    <Container>
      <div className=" grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {news?.length
          ? news.map((card, index) => (
              <NewsScard
                key={index}
                card={card}
              />
            ))
          : ""}
      </div>
    </Container>
  );
};

export default MediaList;
