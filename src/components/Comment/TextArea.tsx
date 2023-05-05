import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  AddCommentButton,
  IAddCommentButton,
} from "./AddCommentButton";
import {
  StyledCommentAs,
  StyledSortBy,
  StyledTextArea,
} from "./StyledComment";

interface ITextArea extends IAddCommentButton {}

export function TextArea({ postId, userId }: ITextArea) {
  const [textValue, setTextValue] = useState("");

  return (
    <StyledTextArea>
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
        postId={postId}
        userId={userId}
        textValue={textValue}
        setTextValue={setTextValue}
      />
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
