import Tags from "./Tags";

import {
  editPost,
  preventEmptyFieldSubmition,
} from "../../utilities/helper";
import {
  contextProps,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import { toast } from "react-toastify";

import {
  Button,
  ButtonWrapper,
} from "../LoadingSpinners/StyledSpinner";

import { AppContext } from "../../context/AppContext";
import Spinner from "../LoadingSpinners/ButtonSpinner";
import { useContext, useEffect, useState } from "react";
import { StyleActionButtons } from "./StyledCreatePost";
import { useNavigate, useParams } from "react-router-dom";
import { findUser } from "../../firebase/firebaseCRUD/checkIfOldUser";
import { AddPostToDB } from "../../firebase/firebaseCRUD/addPostToFirestore";

export default function CreateOrEditPostButton() {
  const [loadSpinner, setLoadSpinner] = useState(false);
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
    if (state.user) {
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
      setLoadSpinner(true);
      AddPostToDB(state, editId, dispatch, navigate);
    } else {
      toast.error("Please login");
    }
  };

  const allFieldsFilled = preventEmptyFieldSubmition(state);

  return (
    <StyleActionButtons bg={allFieldsFilled}>
      <Tags />
      <ButtonWrapper>
        {state.postType.trim() !== "" && (
          <small>{state.postType}</small>
        )}
        <button>Save Draft</button>
        <Button
          onClick={handleCreateOrEditPost}
          disabled={loadSpinner}
        >
          {loadSpinner ? (
            <Spinner />
          ) : !editId ? (
            "Create Post"
          ) : (
            "Save Edit"
          )}
        </Button>
      </ButtonWrapper>
    </StyleActionButtons>
  );
}
