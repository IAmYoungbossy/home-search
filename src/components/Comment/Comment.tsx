import { TextArea } from "./TextArea";
import * as SC from "./StyledComment";
import { db } from "../../firebaseConfig";
import { CommentCard } from "./CommentCard";
import SignInContainer from "../SignIn/SignIn";
import AgentCard from "../PostCards/AgentCard";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import { useState, Fragment, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import { ICardProps, IShowPostCard } from "../../utilities/types";
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
    const colRef = collection(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId,
      "Comments"
    );

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
            CreateCommentCard(comment, index)(postData)
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

function CreateCommentCard(comment: DocumentData, index: number) {
  return (postData: DocumentData | ICardProps) => (
    <Fragment key={index}>
      {comment.data.commentId && (
        <CommentCard
          commentIndex={index}
          postId={postData.postId}
          userId={postData.userDocId}
          commentId={comment.data.commentId}
          comment={comment.data.commentText}
        />
      )}
    </Fragment>
  );
}

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}
