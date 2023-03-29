import {
  contextProps,
  APP_ACTION_TYPES,
  ShowPosterCardProps,
} from "../../utilities/types";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { deletePostOrComment } from "../../firebaseCRUD";
import { IPosterNameAndEditButtons } from "./ClientCard";
import { editPost } from "../../utilities/createPostHelperFn";
import { StyledEditAndDeleteButtons } from "./StyledClientCard";
import { ShowPostCardContext } from "../../context/ShowPostCard";

interface IEditAndDeleteButtons
  extends IPosterNameAndEditButtons {
  toggleButtons: boolean;
  setToggleButtons: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function EditAndDelete({
  commentId,
  commentUserId,
  commentPostId,
  toggleButtons,
  setToggleButtons,
}: IEditAndDeleteButtons) {
  // Check if this is a comment card or a post card
  const commentCard =
    !commentId && !commentPostId && !commentUserId;

  // Get the dispatch function from AppContext
  const { dispatch } = useContext(
    AppContext
  ) as contextProps;

  /******************************************************
   ** Listen for clicks outside of the edit/delete buttons
   ** and close them if necessary ************************
   ******************************************************/
  useEffect(() => {
    const removeButtons = () => setToggleButtons(false);
    document.addEventListener("click", removeButtons);

    return () => {
      document.removeEventListener("click", removeButtons);
    };
  }, [toggleButtons]);

  // Get the post card data from the ShowPostCardContext
  const postCard = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  // Handler for deleting a post/comment
  const deletePostHandler = async () => {
    await deletePostOrComment({
      setToggleButtons,
      postId: postCard
        ? postCard.postId
        : (commentPostId as string),
      userId: postCard
        ? postCard.userId
        : (commentUserId as string),
      commentId: commentId ? commentId : undefined,
    });
  };

  // Handler for editing a post
  const editPostHandler = async () => {
    await editPost({
      userId: postCard.userId,
      postId: postCard.postId,
      dispatch,
    });
    dispatch({
      payload: "edit",
      type: APP_ACTION_TYPES.POST_TYPE,
    });
  };

  return (
    <StyledEditAndDeleteButtons
      onClick={(e) => e.stopPropagation()}
    >
      {/* Show the edit post button only on post cards */}
      {postCard && commentCard && (
        <li>
          <button onClick={editPostHandler}>
            <Link to={`/edit-post/${postCard.postId}`}>
              Edit Post
            </Link>
          </button>
        </li>
      )}
      <li>
        <button onClick={deletePostHandler}>
          Delete Post
        </button>
      </li>
    </StyledEditAndDeleteButtons>
  );
}
