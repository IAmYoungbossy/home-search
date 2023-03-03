import {
  StyledSortBy,
  StyledComment,
  StyledTextArea,
  StyledCommentAs,
  StyledCommentBox,
  StyledRichTextEditor,
  StyledReactionButtons,
  StyledcommentCard,
} from "./StyledComment";
import { TfiComment } from "react-icons/tfi";
import AgentCard from "../PostCards/AgentCard";
import { AiFillCaretDown } from "react-icons/ai";
import { getAllUserDocs } from "../../firebaseCRUD";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import { IShowPostCard } from "../../utilities/typesAndInitialStateObj";
import {
  ClientCard,
  OriginalPoster,
  VoteArrow,
  VoteArrowProps,
} from "../PostCards/ClientCard";

export default function Comment() {
  const { id } = useParams();
  const posts = useLoaderData() as IShowPostCard[];
  const postObj = posts.filter((post) => post.data.postId === id)[0];

  return (
    <StyledComment>
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
          postId={postObj.data.postId}
          userId={postObj.data.userDocId}
        />
        <CommentCard
          primary=""
          secondary="white"
          postId={postObj.data.postId}
          userId={postObj.data.userDocId}
        />
        <CommentCard
          primary=""
          secondary="white"
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
    </StyledComment>
  );
}

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}

function CommentCard({ userId, postId, primary, secondary }: VoteArrowProps) {
  return (
    <StyledcommentCard>
      <OriginalPoster />
      <CommentBox
        userId={userId}
        postId={postId}
        primary={primary}
        secondary={secondary}
      />
    </StyledcommentCard>
  );
}

function CommentBox({ userId, postId, primary, secondary }: VoteArrowProps) {
  return (
    <StyledCommentBox>
      <p>
        c is a float, but 5 and 7 are not. The compiler treats 5 and 7 as ints,
        so the integer division 5/7 is done first, getting the answer 0 and then
        the float c is assigned to 0. You can tell the compiler to treat 5 or 7
        as a float and then 5/7 will also be treated as a float:
      </p>
      <ReactionButtons
        userId={userId}
        postId={postId}
        primary={primary}
        secondary={secondary}
      />
    </StyledCommentBox>
  );
}

const reactionBtnArray: (JSX.Element | string)[] = [
  <>
    <TfiComment /> Reply
  </>,
  "Give award",
  "Share",
  "Report",
  "Save",
  "Follow",
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
    <StyledReactionButtons>
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
    </StyledReactionButtons>
  );
}

export function TextArea() {
  return (
    <StyledTextArea>
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
    </StyledTextArea>
  );
}

function CommentAs() {
  return (
    <StyledCommentAs>
      <p>
        Comment as <span>Severe-Cheek2859</span>
      </p>
    </StyledCommentAs>
  );
}

function SortBy() {
  return (
    <StyledSortBy>
      <h6>
        Sort By: Best <AiFillCaretDown />
      </h6>
      <hr />
    </StyledSortBy>
  );
}

function RichTextEditor() {
  return (
    <StyledRichTextEditor>
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button>Comment</button>
    </StyledRichTextEditor>
  );
}
