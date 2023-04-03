import { useContext } from "react";
import { addComment } from "../../firebaseCRUD";
import { AppContext } from "../../context/AppContext";
import { StyledRichTextEditor } from "./StyledComment";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { contextProps } from "../../utilities/types";

export interface IAddCommentButton {
  userId: string;
  postId: string;
  textValue?: string;
}

export function AddCommentButton({
  userId,
  postId,
  textValue,
}: IAddCommentButton) {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;
  const textareaValue = textValue as string;

  const handleAddComment = () => {
    if (textareaValue.length < 1) return;
    (async () => {
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
      <button onClick={handleAddComment}>Comment</button>
    </StyledRichTextEditor>
  );
}
