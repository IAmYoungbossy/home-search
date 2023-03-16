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
import { IShowPostCard } from "../../utilities/typesAndInitialStateObj";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";

interface Icomments {
  data: DocumentData;
}

export default function Comment() {
  const [comments, setComments] = useState<Icomments[]>([]);
  const { id } = useParams();
  const posts = useLoaderData() as IShowPostCard[];
  const postObj = posts.filter((post) => post.data.postId === id)[0];

  useEffect(() => {
    const postDocId = postObj.data.postId as string;
    const posterDocId = postObj.data.userDocId as string;
    const docRef = collection(
      db,
      "USERS",
      posterDocId,
      "POSTS",
      postDocId,
      "Comments"
    );

    const unsub = onSnapshot(docRef, (snapshot) => {
      const comments = snapshot.docs?.map((comment) => ({
        data: comment?.data(),
      }));
      setComments(comments);
    });

    return () => {
      unsub();
    };
  }, [db]);

  return (
    <>
      <SC.StyledComment>
        <div>
          {!postObj.data.postAsAgent && (
            <ShowPosterCardProvider
              postId={postObj.data.postId}
              budget={postObj.data.budget}
              userId={postObj.data.userDocId}
              postDesc={postObj.data.postDesc}
              apartmentSize={postObj.data.apartmentSize}
            >
              <ClientCard secondary="white" />
            </ShowPosterCardProvider>
          )}
          {postObj.data.postAsAgent && (
            <ShowPosterCardProvider
              key={postObj.data.postId}
              postId={postObj.data.postId}
              budget={postObj.data.budget}
              bgImage={postObj.data.imageUrl}
              userId={postObj.data.userDocId}
              location={postObj.data.location}
              postDesc={postObj.data.postDesc}
              postTitle={postObj.data.postTitle}
              dealStatus={postObj.data.dealStatus}
              apartmentSize={postObj.data.apartmentSize}
            >
              <AgentCard secondary="white" />
            </ShowPosterCardProvider>
          )}
          <TextArea
            postId={postObj.data.postId}
            userId={postObj.data.userDocId}
          />
          {comments.map((comment, index) => (
            <Fragment key={index}>
              {comment.data.commentId && (
                <CommentCard
                  commentIndex={index}
                  postId={postObj.data.postId}
                  userId={postObj.data.userDocId}
                  commentId={comment.data.commentId}
                  comment={comment.data.commentText}
                />
              )}
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

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}
