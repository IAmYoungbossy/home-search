import {
  VoteArrow,
  ClientCard,
  VoteArrowProps,
  OriginalPoster,
} from "../PostCards/ClientCard";
import * as SC from "./StyledComment";
import { TfiComment } from "react-icons/tfi";
import AgentCard from "../PostCards/AgentCard";
import { AiFillCaretDown } from "react-icons/ai";
import { getAllUserDocs } from "../../firebaseCRUD";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import {
  Icomment,
  IShowPostCard,
} from "../../utilities/typesAndInitialStateObj";
import { Fragment } from "react";

export default function Comment() {
  const { id } = useParams();
  const posts = useLoaderData() as IShowPostCard[];
  const postObj = posts.filter((post) => post.data.postId === id)[0];
  const comments = postObj.data.Comments as Icomment[];
  console.log(comments);

  return (
    <SC.StyledComment>
      <div>
        {!postObj.data.postAsAgent && (
          <ClientCard
            secondary="white"
            key={postObj.data.postId}
            postId={postObj.data.postId}
            budget={postObj.data.budget}
            userId={postObj.data.userDocId}
            postDesc={postObj.data.postDesc}
            apartmentSize={postObj.data.apartmentSize}
          />
        )}
        {postObj.data.postAsAgent && (
          <AgentCard
            secondary="white"
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
          />
        )}
        <TextArea />
        <CommentCard
          primary=""
          secondary="white"
          comment={comments}
          postId={postObj.data.postId}
          userId={postObj.data.userDocId}
        />
      </div>
      <div>
        <div>
          <RedditRules />
          <Warning />
        </div>
      </div>
    </SC.StyledComment>
  );
}

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}

interface ICommentCard extends VoteArrowProps {
  comment: Icomment[];
}

function CommentCard({
  userId,
  postId,
  primary,
  secondary,
  comment,
}: ICommentCard) {
  return (
    <SC.StyledcommentCard>
      <OriginalPoster />
      <CommentBox
        userId={userId}
        postId={postId}
        comment={comment}
        primary={primary}
        secondary={secondary}
      />
    </SC.StyledcommentCard>
  );
}

function CommentBox({
  userId,
  postId,
  primary,
  comment,
  secondary,
}: ICommentCard) {
  return (
    <SC.StyledCommentBox>
      {comment.map((comment, index) => (
        <Fragment key={index}>
          <p>{comment.comment}</p>
          <ReactionButtons
            userId={userId}
            postId={postId}
            primary={primary}
            secondary={secondary}
          />
        </Fragment>
      ))}
    </SC.StyledCommentBox>
  );
}

const reactionBtnArray: (JSX.Element | string)[] = [
  <>
    <TfiComment /> Reply
  </>,
];

function ReactionButtons({
  userId,
  postId,
  primary,
  secondary,
}: VoteArrowProps) {
  const buttons = reactionBtnArray.map((item, index) => (
    <li key={index + 2}>{item}</li>
  ));

  return (
    <SC.StyledReactionButtons>
      <ul>
        <li>
          <VoteArrow
            userId={userId}
            postId={postId}
            primary={primary}
            secondary={secondary}
          />
        </li>
        {buttons}
      </ul>
    </SC.StyledReactionButtons>
  );
}

export function TextArea() {
  return (
    <SC.StyledTextArea>
      <CommentAs />
      <textarea
        name="textbox"
        id="textbox"
        cols={30}
        rows={10}
        placeholder="What are your thought?"
      ></textarea>
      <RichTextEditor />
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

function RichTextEditor() {
  return (
    <SC.StyledRichTextEditor>
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button>Comment</button>
    </SC.StyledRichTextEditor>
  );
}
