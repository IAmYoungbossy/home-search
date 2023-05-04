import {
  editPost,
  preventEmptyFieldSubmition,
} from "../../utilities/helper";

import {
  contextProps,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import Tags from "./Tags";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import styled, { keyframes } from "styled-components";
import { StyleActionButtons } from "./StyledCreatePost";
import { useNavigate, useParams } from "react-router-dom";
import { findUser } from "../../firebase/firebaseCRUD/checkIfOldUser";
import { AddPostToDB } from "../../firebase/firebaseCRUD/addPostToFirestore";

const Spinner = () => (
  <StyledSpinner>
    <div />
    <div />
    <div />
    <div />
    <div />
  </StyledSpinner>
);

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

const Button = styled.button`
  width: 95px;
  height: 25px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const keyFrame = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const StyledSpinner = styled.div`
  top: 2px;
  width: 20px;
  right: 36px;
  height: 20px;
  position: absolute;
  display: inline-block;

  & div {
    width: 19px;
    height: 19px;
    display: block;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-color: #fff transparent transparent transparent;
    animation: ${keyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1)
      infinite;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
