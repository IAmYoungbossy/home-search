import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";
import { useContext, useEffect } from "react";
import { IGetPosterName } from "./GetPostName";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { StyledEditAndDeleteButtons } from "./StyledClientCard";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import deletePostOrComment from "../../firebase/firebaseCRUD/deletePostOrComment";

interface IEditAndDeleteButtons extends IGetPosterName {
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
  const { dispatch } = useContext(AppContext) as contextProps;

  const postCard = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  const { id } = useParams();

  /*******************************************************
   ** Listen for clicks outside of the edit/delete buttons
   ** and close them if necessary ************************
   *******************************************************/
  useEffect(() => {
    const removeButtons = () => setToggleButtons(false);
    document.addEventListener("click", removeButtons);

    return () => {
      document.removeEventListener("click", removeButtons);
    };
  }, [toggleButtons]);

  // Get the post card data from the ShowPostCardContext
  const { postId, userId } = postCard || {
    postId: commentPostId,
    userId: commentUserId,
  };

  // Handler for deleting a post/comment
  const deletePostHandler = async () => {
    await deletePostOrComment({
      setToggleButtons,
      postId,
      userId,
      commentId: commentId || undefined,
    });
  };

  return (
    <StyledEditAndDeleteButtons
      onClick={(e) => e.stopPropagation()}
    >
      {/* Show the edit post button only on post cards */}
      {postCard && commentCard && (
        <li>
          <Link to={`/edit-post/${postId}`}>
            <button>Edit Post</button>
          </Link>
        </li>
      )}

      {/******************************************
       ** Does not show the delete button on posts
       ** when on comment page *******************
       ******************************************/}
      {(!id || commentId) && (
        <li>
          <button onClick={deletePostHandler}>
            Delete Post
          </button>
        </li>
      )}
    </StyledEditAndDeleteButtons>
  );
}
