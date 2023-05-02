import Tags from "./Tags";
import {
  editPost,
  preventEmptyFieldSubmition,
} from "../../utilities/helper";
import { useContext, useEffect } from "react";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyleActionButtons } from "./StyledCreatePost";
import { useNavigate, useParams } from "react-router-dom";
import { findUser } from "../../firebase/firebaseCRUD/checkIfOldUser";
import { AddPostToDB } from "../../firebase/firebaseCRUD/addPostToFirestore";

export default function CreateOrEditPostButton() {
  const editId = useParams().id;
  const navigate = useNavigate();
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  // Populates form with post details to be edited
  useEffect(() => {
    (async () => {
      if (editId && state.user) {
        const { userDocId } = await findUser(state.user.uid);
        if (userDocId)
          await editPost({
            userId: userDocId,
            postId: editId,
            dispatch,
          });
      }
    })();
  }, []);

  const allFieldsFilled = preventEmptyFieldSubmition(state);

  return (
    <StyleActionButtons bg={allFieldsFilled}>
      <Tags />
      <div>
        {state.postType.trim() !== "" && (
          <small>{state.postType}</small>
        )}
        <button>Save Draft</button>
        <button
          onClick={AddPostToDB.bind(
            null,
            state,
            editId,
            dispatch,
            navigate
          )}
        >
          {!editId ? "Create Post" : "Save Edit"}
        </button>
      </div>
    </StyleActionButtons>
  );
}
