import { TextArea } from "./TextArea";
import * as SC from "./StyledComment";
import { db } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import SignInContainer from "../SignIn/SignIn";
import AgentCard from "../PostCards/AgentCard";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import { DisplayCommentCard } from "./DisplayCommentCard";
import { useLoaderData, useParams } from "react-router-dom";
import { IShowPostCard, tuple } from "../../utilities/types";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import { postCardProps } from "../../utilities/createPostHelperFn";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";

export default function Comment() {
  const { id } = useParams();

  // Get the post with the specified ID
  const posts = useLoaderData() as IShowPostCard[];
  const post = posts.find((p) => p.data.postId === id) as IShowPostCard;
  const postData = post.data;

  // Subscribe to the post and comment data
  const [likes, setLikes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [comments, setComments] = useState<DocumentData[]>([]);
  useEffect(() => {
    const posterId = postData.userDocId as string;
    const postId = post.id as string;

    const docRef = doc(db, "USERS", posterId, "POSTS", postId);
    const colPath: tuple = [db, "USERS", posterId, "POSTS", postId, "Comments"];
    const colRef = collection(...colPath);

    // Subscribe to comment data
    const unSubComment = onSnapshot(colRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => ({ data: doc.data() }));
      setComments(comments);
    });

    // Subscribe to post data
    const unsubPost = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      setLikes(data?.Likes || []);
      setUpvotes(data?.Upvotes || []);
      setDownvotes(data?.Downvotes || []);
    });

    return () => {
      // Unsubscribe when the component is unmounted
      unSubComment();
      unsubPost();
    };
  }, [db, postData.userDocId, post.id]);

  // Render the component
  const params = { post, likes, upvotes, postData, comments, downvotes };
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
          {comments.map((comment, index) =>
            DisplayCommentCard(comment, index)(postData)
          )}
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

export const commentLoader = async () => await getAllUserDocs();
