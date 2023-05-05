import { useContext } from "react";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyledRichTextEditor } from "./StyledComment";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import addComment from "../../firebase/firebaseCRUD/addComment";

export interface IAddCommentButton {
  userId: string;
  postId: string;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;
}

export function AddCommentButton({
  userId,
  postId,
  textValue,
  setTextValue,
}: IAddCommentButton) {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;
  const textareaValue = textValue as string;

  const handleAddComment = () => {
    if (textareaValue.length < 1) return;
    if (setTextValue) setTextValue("");
    (async () => {
      try {
        if (user) {
          const name = user.displayName as string;
          await addComment({
            name,
            userId,
            postId,
            comment: textareaValue,
            currentUser: user.uid as string,
          });
        }
      } catch (err) {
        alert("Error Posting Comment");
      }
    })();
  };

  return (
    <StyledRichTextEditor
      bgColor={textareaValue.length > 0 ? true : false}
    >
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button
        onClick={handleAddComment}
        disabled={textareaValue.length < 0 ? true : false}
      >
        Comment
      </button>
    </StyledRichTextEditor>
  );
}
