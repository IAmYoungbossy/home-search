import {
  doc,
  query,
  orderBy,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { postCardProps } from "../utilities/helper";
import AgentCard from "../components/Cards/AgentCard";
import {
  Fragment,
  useEffect,
  useState,
  useContext,
} from "react";
import Warning from "../components/CreatePost/Warning";
import {
  IShowPostCard,
  contextProps,
  tuple,
} from "../utilities/types";
import { TextArea } from "../components/Comment/TextArea";
import { useLoaderData, useParams } from "react-router-dom";
import { ClientCard } from "../components/Cards/ClientCard";
import ShowPosterCardProvider from "../context/ShowPostCard";
import RedditRules from "../components/CreatePost/RedditRules";
import { StyledComment } from "../components/Comment/StyledComment";
import getAllUserDocs from "../firebase/firebaseCRUD/getAllUserDocs";
import { DisplayCommentCard } from "../components/Comment/DisplayCommentCard";
import { AppContext } from "../context/AppContext";
import SignInContainer from "../components/SignIn/SignInContainer";

export default function Comment() {
  const { id } = useParams();
  const { state } = useContext(AppContext) as contextProps;

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
  const [comments, setComments] = useState<DocumentData[]>([]);
  const posterId = postData.userDocId as string;
  const postId = post.id as string;

  useEffect(() => {
    document.title = "Home Search | Comment";
  }, []);

  useEffect(() => {
    const docRef = doc(db, "USERS", posterId, "POSTS", postId);

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

    // Subscribe to comment data and order by createdAt field in descending order
    const unSubComment = onSnapshot(
      query(colRef, orderBy("createdAt", "desc")),
      (snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          data: doc.data(),
        }));
        setComments(comments);
      }
    );

    // Unsubscribe from comment data
    return () => {
      unSubComment();
    };
  }, [db, posterId, postId]);

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
      <StyledComment>
        <div>
          <ShowPosterCardProvider {...props}>
            {posterCard}
          </ShowPosterCardProvider>
          <TextArea
            postId={postData.postId}
            userId={postData.userDocId}
          />
          {comments.map((comment, index) => (
            <Fragment key={`{comment.data.commentId} ${index}`}>
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
      </StyledComment>
      <SignInContainer />
    </>
  );
}

export const commentLoader = async () => await getAllUserDocs();
