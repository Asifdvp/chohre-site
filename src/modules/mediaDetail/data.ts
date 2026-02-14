import { fetchWrapper } from "@/lib/fetchWrapper";
import { MediaDetailType } from "@/types";

export const getMedia = async (
  code: string
): Promise<MediaDetailType | null> => {
  const data = await fetchWrapper<MediaDetailType>({
    endpoint: "Medias/GetMedia",
    options: {
      query: { code },
    },
  });
  return data;
};
