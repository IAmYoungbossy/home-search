import {
  StyledSortBy,
  StyledComment,
  StyledTextArea,
  StyledCommentAs,
  StyledCommentBox,
  StyledRichTextEditor,
  StyledReactionButtons,
} from "./StyledComment";
import { TfiComment } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { ClientCard, OriginalPoster, VoteArrow } from "../PostCards/ClientCard";

export default function Comment() {
  return (
    <StyledComment>
      <ClientCard secondary="none" />
      <TextArea />
      <OriginalPoster />
      <CommentBox />
    </StyledComment>
  );
}

function CommentBox() {
  return (
    <StyledCommentBox>
      <p>
        c is a float, but 5 and 7 are not. The compiler treats 5 and 7 as ints,
        so the integer division 5/7 is done first, getting the answer 0 and then
        the float c is assigned to 0. You can tell the compiler to treat 5 or 7
        as a float and then 5/7 will also be treated as a float:
      </p>
      <ReactionButtons />
    </StyledCommentBox>
  );
}

const reactionBtnArray: (JSX.Element | string)[] = [
  <VoteArrow />,
  <>
    <TfiComment /> Reply
  </>,
  "Give award",
  "Share",
  "Report",
  "Save",
  "Follow",
];

function ReactionButtons() {
  const buttons = reactionBtnArray.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <StyledReactionButtons>
      <ul>{buttons}</ul>
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
