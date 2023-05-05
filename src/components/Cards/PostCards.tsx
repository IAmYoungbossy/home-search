import {
  contextProps,
  IShowPostCard,
} from "../../utilities/types";
import { db } from "../../firebase/firebaseConfig";
import ShowPostCard from "../PostFeeds/ShowPostCard";
import { AppContext } from "../../context/AppContext";
import { updatedState } from "../../utilities/helper";
import { useContext, useEffect, useState } from "react";
import PageSpinner from "../LoadingSpinners/PageSpinners";
import getAllUserDocs from "../../firebase/firebaseCRUD/getAllUserDocs";

export default function PostCards() {
  const [isLoading, setIsLoading] = useState(true);

  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  useEffect(() => {
    (async () => {
      const posts = await getAllUserDocs();
      dispatch(updatedState(posts));
      setIsLoading(false);
    })();
  }, [db]);

  return (
    <>{isLoading ? <PageSpinner /> : state.postFeed.map(post)}</>
  );
}

function post(post: IShowPostCard) {
  return (
    <ShowPostCard
      post={post}
      key={post.id}
    />
  );
}
