import { User } from "firebase/auth";
import * as SC from "./StyledComment";
import { SlLike } from "react-icons/sl";
import { db } from "../../firebaseConfig";
import SignInContainer from "../SignIn/SignIn";
import AgentCard from "../PostCards/AgentCard";
import {
  contextProps,
  IShowPostCard,
} from "../../utilities/typesAndInitialStateObj";
import { AiFillCaretDown } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { useState, useContext, Fragment, useEffect } from "react";
import { ClientCard, OriginalPoster } from "../PostCards/ClientCard";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";
import { addComment, getAllUserDocs, postReaction } from "../../firebaseCRUD";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";
import { AddCommentButton, IAddCommentButton } from "./AddCommentButton";
import { CommentReactions, ICommentReaction } from "./CommentReactions";

export default function Comment() {
  const [comments, setComments] = useState<
    {
      data: DocumentData;
    }[]
  >([]);
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

interface ICommentCard extends ICommentReaction {
  comment: string;
}

function CommentCard({
  userId,
  postId,
  comment,
  commentIndex,
  commentId,
}: ICommentCard) {
  return (
    <SC.StyledcommentCard>
      <OriginalPoster />
      <CommentBox
        userId={userId}
        postId={postId}
        comment={comment}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </SC.StyledcommentCard>
  );
}

function CommentBox({
  userId,
  postId,
  comment,
  commentIndex,
  commentId,
}: ICommentCard) {
  return (
    <SC.StyledCommentBox>
      <p>{comment}</p>
      <CommentReactions
        postId={postId}
        userId={userId}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </SC.StyledCommentBox>
  );
}

interface ITextArea extends IAddCommentButton {}

export function TextArea({ postId, userId }: ITextArea) {
  const [textValue, setTextValue] = useState("");

  return (
    <SC.StyledTextArea>
      <CommentAs />
      <textarea
        cols={30}
        rows={10}
        id="textbox"
        name="textbox"
        value={textValue}
        placeholder="What are your thought?"
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
      <AddCommentButton
        textValue={textValue}
        postId={postId}
        userId={userId}
      />
      <SortBy />
    </SC.StyledTextArea>
  );
}

function CommentAs() {
  return (
    <SC.StyledCommentAs>
      <p>
        Comment as <span>Severe-Cheek2859</span>
      </p>
    </SC.StyledCommentAs>
  );
}

function SortBy() {
  return (
    <SC.StyledSortBy>
      <h6>
        Sort By: Best <AiFillCaretDown />
      </h6>
      <hr />
    </SC.StyledSortBy>
  );
}
