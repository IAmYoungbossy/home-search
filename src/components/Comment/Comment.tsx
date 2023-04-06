import {
  doc,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import {
  tuple,
  IShowPostCard,
} from "../../utilities/types";
import { TextArea } from "./TextArea";
import * as SC from "./StyledComment";
import { db } from "../../firebaseConfig";
import AgentCard from "../Cards/AgentCard";
import Warning from "../CreatePost/Warning";
import SignInContainer from "../SignIn/SignIn";
import { ClientCard } from "../Cards/ClientCard";
import { getAllUserDocs } from "../../firebaseCRUD";
import RedditRules from "../CreatePost/RedditRules";
import { useState, useEffect, Fragment } from "react";
import { DisplayCommentCard } from "./DisplayCommentCard";
import { useLoaderData, useParams } from "react-router-dom";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { postCardProps } from "../../utilities/createPostHelperFn";

export default function Comment() {
  const { id } = useParams();

  // Get the post with the specified ID
  const posts = useLoaderData() as IShowPostCard[];
  const post = posts.find(
    (p) => p.data.postId === id
  ) as IShowPostCard;
  const postData = post.data;

  // Subscribe to the post and comment data
  const [likes, setLikes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [comments, setComments] = useState<DocumentData[]>(
    []
  );
  const posterId = postData.userDocId as string;
  const postId = post.id as string;

  useEffect(() => {
    const docRef = doc(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId
    );

    // Subscribe to post data
    const unsubPost = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      setLikes(data?.Likes);
      setUpvotes(data?.Upvotes);
      setDownvotes(data?.Downvotes);
    });

    return () => {
      // Unsubscribe when the component is unmounted
      unsubPost();
    };
  }, [comments]);

  useEffect(() => {
    const colPath: tuple = [
      db,
      "USERS",
      posterId,
      "POSTS",
      postId,
      "Comments",
    ];
    const colRef = collection(...colPath);
    // Subscribe to comment data
    const unSubComment = onSnapshot(colRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => ({
        data: doc.data(),
      }));
      setComments(comments);
    });

    // Unsubscribe from comment data
    return () => {
      unSubComment();
    };
  }, [db]);

  // Render the component
  const params = {
    post,
    likes,
    upvotes,
    postData,
    comments,
    downvotes,
  };
  const { props } = postCardProps(params);

  const posterCard = !postData.postAsAgent ? (
    <ClientCard secondary="white" />
  ) : (
    <AgentCard secondary="white" />
  );
  return (
    <>
      <SC.StyledComment>
        <div>
          <ShowPosterCardProvider {...props}>
            {posterCard}
          </ShowPosterCardProvider>
          <TextArea
            postId={postData.postId}
            userId={postData.userDocId}
          />
          {comments.map((comment, index) => (
            <Fragment
              key={`{comment.data.commentId} ${index}`}
            >
              <DisplayCommentCard
                index={index}
                comment={comment}
                postData={postData}
              />
            </Fragment>
          ))}
        </div>
        <div>
          <div>
            <RedditRules />
            <Warning />
          </div>
        </div>
      </SC.StyledComment>
      <SignInContainer />
    </>
  );
}

export const commentLoader = async () =>
  await getAllUserDocs();
