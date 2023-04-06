import { createContext } from "react";
import {
  IAppDataProvider,
  ShowPosterCardProps,
} from "../utilities/types";

export const ShowPostCardContext =
  createContext<ShowPosterCardProps | null>(null);

const ShowPosterCardProvider = ({
  likes,
  postId,
  budget,
  userId,
  bgImage,
  upvotes,
  children,
  location,
  postDesc,
  comments,
  createdAt,
  downvotes,
  postTitle,
  dealStatus,
  apartmentSize,
}: IAppDataProvider) => {
  const value = {
    likes,
    postId,
    budget,
    userId,
    upvotes,
    postDesc,
    comments,
    createdAt,
    downvotes,
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
