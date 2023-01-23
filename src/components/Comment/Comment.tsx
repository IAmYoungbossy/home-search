import styled from "styled-components";
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
  return (
    <StyledReactionButtons>
      <ul>
        {reactionBtnArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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

const StyledRichTextEditor = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  margin: 0 auto;
  font-size: 12px;
  max-width: 600px;
  align-items: center;
  background-color: #f6f7f8;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid grey;
  border-top: none;

  div {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  p {
    cursor: no-drop;
    color: #ff66ac;
  }

  button {
    border: none;
    outline: none;
    color: #bebebe;
    padding: 3px 10px;
    font-weight: bold;
    border-radius: 20px;
    background-color: #a1a1a1;
  }
`;

const StyledSortBy = styled.div`
  h6 {
    display: flex;
    color: #ff66ac;
    align-items: center;
    padding: 20px 0 10px;
  }

  svg {
    font-size: 15px;
    margin-left: 5px;
  }
`;

const StyledCommentAs = styled.div`
  p {
    padding: 5px 0;
    font-size: 11px;
    font-family: "Noto sans", Arial, sans-serif;
  }
  span {
    color: #ff66ac;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const StyledTextArea = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  margin-top: -11px;
  flex-direction: column;
  background-color: white;
  padding: 30px 32px 40px 61px;

  textarea {
    width: 100%;
    padding: 5px;
    resize: vertical;
    border-bottom: none;
  }
`;

const StyledReactionButtons = styled.div`
  padding: 5px 0;
  ul,
  li {
    gap: 5px;
    display: flex;
    font-size: 12px;
    max-width: 400px;
    align-items: center;
    justify-content: space-between;
  }

  li {
    list-style: none;
  }
`;

const StyledCommentBox = styled.div`
  padding-left: 20px;
  margin: -5px 21px 0;
  border-left: 1px solid darkgray;
`;

const StyledComment = styled.div`
  background-color: white;
  max-width: 600px;
  width: 100%;
  margin: -10px auto 0 auto;
`;
