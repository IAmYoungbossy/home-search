import { db } from "../../firebaseConfig";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import {
  contextProps,
  IShowPostCard,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import { getAllUserDocs } from "../../firebaseCRUD";
import ShowPostCard from "../PostFeeds/ShowPostCard";

export default function PostCards() {
  const {
    state: { postFeed },
    dispatch,
  } = useContext(AppContext) as contextProps;
  const posts = useLoaderData() as IShowPostCard[];

  useEffect(() => {
    dispatch({
      type: APP_ACTION_TYPES.postFeed,
      payload: posts,
    });
  }, [db]);

  return (
    <>
      {postFeed.map((post) => (
        <ShowPostCard
          post={post}
          key={post.id}
        />
      ))}
    </>
  );
}

export const postLoader = async () =>
  await getAllUserDocs();
