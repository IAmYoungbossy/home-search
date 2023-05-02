import Tags from "./Tags";
import {
  editPost,
  preventEmptyFieldSubmition,
} from "../../utilities/helper";
import { useContext, useEffect } from "react";
import {
  contextProps,
  APP_ACTION_TYPES,
} from "../../utilities/types";
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

  const handleCreateOrEditPost = () => {
    if (dispatch && !allFieldsFilled) {
      dispatch({
        type: APP_ACTION_TYPES.POST_TYPE,
        payload: "Fill all the required fields.",
      });
      setTimeout(() => {
        dispatch({
          type: APP_ACTION_TYPES.POST_TYPE,
          payload: "",
        });
      }, 5000);
      return;
    }
    AddPostToDB(state, editId, dispatch, navigate);
  };

  const allFieldsFilled = preventEmptyFieldSubmition(state);

  return (
    <StyleActionButtons bg={allFieldsFilled}>
      <Tags />
      <div>
        {state.postType.trim() !== "" && (
          <small>{state.postType}</small>
        )}
        <button>Save Draft</button>
        <button onClick={handleCreateOrEditPost}>
          {!editId ? "Create Post" : "Save Edit"}
        </button>
      </div>
    </StyleActionButtons>
  );
}
