import { useContext } from "react";
import { addComment } from "../../firebaseCRUD";
import { AppContext } from "../../context/AppContext";
import { StyledRichTextEditor } from "./StyledComment";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { contextProps } from "../../utilities/typesAndInitialStateObj";

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
    <StyledRichTextEditor bgColor={textareaValue.length > 0 ? true : false}>
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button onClick={handleAddComment}>Comment</button>
    </StyledRichTextEditor>
  );
}