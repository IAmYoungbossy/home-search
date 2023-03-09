import { createContext } from "react";
import {
  IAppDataProvider,
  ShowPosterCardProps,
} from "../utilities/typesAndInitialStateObj";

export const ShowPostCardContext = createContext<ShowPosterCardProps | null>(
  null
);

const ShowPosterCardProvider = ({
  postId,
  budget,
  userId,
  bgImage,
  children,
  location,
  postDesc,
  postTitle,
  dealStatus,
  apartmentSize,
}: IAppDataProvider) => {
  const value = {
    postId,
    budget,
    userId,
    postDesc,
    apartmentSize,
    ...(bgImage && { bgImage }),
    ...(location && { location }),
    ...(postTitle && { postTitle }),
    ...(dealStatus && { dealStatus }),
  };
  return (
    <ShowPostCardContext.Provider value={value}>
      {children}
    </ShowPostCardContext.Provider>
  );
};

export default ShowPosterCardProvider;
