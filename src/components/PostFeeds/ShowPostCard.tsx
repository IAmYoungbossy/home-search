import {
  doc,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import AgentCard from "../Cards/AgentCard";
import { ClientCard } from "../Cards/ClientCard";
import { db } from "../../firebase/firebaseConfig";
import { useState, useEffect, Fragment } from "react";
import { IShowPostCard } from "../../utilities/types";
import { postCardProps } from "../../utilities/helper";
import ShowPosterCardProvider from "../../context/ShowPostCard";

export default function ShowPostCard({
  post,
}: {
  post: IShowPostCard;
}) {
  const postData = post.data;
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [likes, setLikes] = useState<string[]>([]);

  useEffect(() => {
    const postId = post.id as string;
    const posterId = postData.userDocId as string;
    const docRef = doc(db, "USERS", posterId, "POSTS", postId);
    const colRef = collection(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId,
      "Comments"
    );

    const unSubComment = onSnapshot(colRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => doc.data());
      setComments(comments);
    });
    const unsubDownvotes = onSnapshot(docRef, (snapshot) => {
      setDownvotes(snapshot.data()?.Downvotes);
    });
    const unsubUpvotes = onSnapshot(docRef, (snapshot) => {
      setUpvotes(snapshot.data()?.Upvotes);
    });
    const unsubLike = onSnapshot(docRef, (snapshot) => {
      setLikes(snapshot.data()?.Likes);
    });

    return () => {
      unsubLike();
      unsubUpvotes();
      unSubComment();
      unsubDownvotes();
    };
  }, [db, post.id, postData.userDocId]);

  const params = {
    post,
    likes,
    upvotes,
    postData,
    comments,
    downvotes,
  };
  const { props } = postCardProps(params);

  return (
    <Fragment key={post.id}>
      {upvotes && downvotes && (
        <ShowPosterCardProvider {...props}>
          {post &&
            (post.data.postAsAgent ? (
              <AgentCard />
            ) : (
              <ClientCard secondary="" />
            ))}
        </ShowPosterCardProvider>
      )}
    </Fragment>
  );
}
