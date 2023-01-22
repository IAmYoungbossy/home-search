import styled from "styled-components";
import { OriginalPoster, VoteArrow } from "../PostCards/ClientCard";

export default function Comment() {
  return (
    <StyledComment>
      <OriginalPoster />
      <CommentBox />
      <VoteArrow />
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
    </StyledCommentBox>
  );
}

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
