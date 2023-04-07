import {
  contextProps,
  IShowPostCard,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import ShowPostCard from "../PostFeeds/ShowPostCard";
import { AppContext } from "../../context/AppContext";
import getAllUserDocs from "../../firebase/firebaseCRUD/getAllUserDocs";

export default function PostCards() {
  const {
    state: { postFeed },
    dispatch,
  } = useContext(AppContext) as contextProps;
  const posts = useLoaderData() as IShowPostCard[];

  const updatedState = {
    payload: posts,
    type: APP_ACTION_TYPES.postFeed,
  };

  useEffect(() => dispatch(updatedState), [db]);

  const post = (post: IShowPostCard) => (
    <ShowPostCard
      post={post}
      key={post.id}
    />
  );

  return <>{postFeed.map(post)}</>;
}

export const postLoader = async () => await getAllUserDocs();
