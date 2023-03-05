import {
  VoteArrow,
  ClientCard,
  VoteArrowProps,
  OriginalPoster,
} from "../PostCards/ClientCard";
import * as SC from "./StyledComment";
import { TfiComment } from "react-icons/tfi";
import AgentCard from "../PostCards/AgentCard";
import {
  Icomment,
  contextProps,
  IShowPostCard,
} from "../../utilities/typesAndInitialStateObj";
import { AiFillCaretDown } from "react-icons/ai";
import { AppContext } from "../../context/AppContext";
import { useState, useContext, Fragment } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import { addComment, getAllUserDocs } from "../../firebaseCRUD";

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
        <TextArea
          postId={postObj.data.postId}
          userId={postObj.data.userDocId}
        />
        {comments.map((comment, index) => (
          <Fragment key={index}>
            <CommentCard
              primary=""
              secondary="white"
              comment={comment.comment}
              postId={postObj.data.postId}
              userId={postObj.data.userDocId}
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
  );
}

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}

interface ICommentCard extends VoteArrowProps {
  comment: string;
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
      <p>{comment}</p>
      <ReactionButtons
        userId={userId}
        postId={postId}
        primary={primary}
        secondary={secondary}
      />
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

interface IRichTextEditor {
  userId: string;
  postId: string;
  textValue?: string;
}

interface ITextArea extends IRichTextEditor {}

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
      <RichTextEditor textValue={textValue} postId={postId} userId={userId} />
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

function RichTextEditor({ userId, postId, textValue }: IRichTextEditor) {
  const { user } = useContext(AppContext) as contextProps;
  const name = user?.displayName as string;
  const textareaValue = textValue as string;
  const handleAddComment = () => {
    if (textareaValue.length < 1) return;
    (async () => {
      await addComment({ name, userId, postId, comment: textareaValue });
    })();
  };

  return (
    <SC.StyledRichTextEditor bgColor={textareaValue.length > 0 ? true : false}>
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button onClick={handleAddComment}>Comment</button>
    </SC.StyledRichTextEditor>
  );
}
