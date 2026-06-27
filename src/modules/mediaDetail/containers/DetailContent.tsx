// import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import ShowHTMLContent from "@/components/shared/ShowHTMLContent";
import ImageGallery from "../components/ImageGallery";
import news from "@/data/news.json";

interface Props {
  id: string;
}

const DetailContent = async ({ id }: Props) => {
  const newsId = parseInt(id, 10);
  if (isNaN(newsId)) return <div>Tapılmadı</div>;
  const newsData = news.find((d) => d.id === newsId);
  return (
    <div className="pb-8 md:pb-12 ">
      <div className=" flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-full md:w-1/3 ">
          {newsData?.images?.length ? <ImageGallery images={newsData?.images} /> : ""}
        </div>

        <div className="rounded-lg  px-4  border border-primary/12 w-full md:w-2/3 p-3  md:px-5 ">
          <div className="font-medium text-black/60 leading-4 text-xs mb-1 flex items-center ">
            5 fevral, 2026{" "}
            <span className="block mx-1.5 w-1 h-1 rounded-full bg-[#666666]/12"></span>{" "}
            272 baxış
          </div>
          <h2 className="  text-base leading-5  md:text-[18px] md:leading-6 font-medium text-black/80 mb-1">
            {newsData?.title}
          </h2>

          
            {newsData?.description && (
              <ShowHTMLContent content={newsData?.description} />
            )}
        
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
