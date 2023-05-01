import {
  contextProps,
  IShowPostCard,
} from "../../utilities/types";
import { useContext, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import ShowPostCard from "../PostFeeds/ShowPostCard";
import { AppContext } from "../../context/AppContext";
import { updatedState } from "../../utilities/helper";
import getAllUserDocs from "../../firebase/firebaseCRUD/getAllUserDocs";

export default function PostCards() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  useEffect(() => {
    (async () => {
      const posts = await getAllUserDocs();
      dispatch(updatedState(posts));
    })();
  }, [db]);

  return <>{state.postFeed.map(post)}</>;
}

function post(post: IShowPostCard) {
  return (
    <ShowPostCard
      post={post}
      key={post.id}
    />
  );
}
