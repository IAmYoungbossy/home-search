import styled from "styled-components";
import { TfiComment } from "react-icons/tfi";
import { OriginalPoster, VoteArrow } from "../PostCards/ClientCard";

export default function Comment() {
  return (
    <StyledComment>
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
