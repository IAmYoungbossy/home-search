import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";
import { useContext } from "react";
import { User } from "firebase/auth";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiComment } from "react-icons/bi";
import { postReaction } from "../../firebaseCRUD";
import { AppContext } from "../../context/AppContext";
import { StyledInteractWithPostIcons } from "./StyledClientCard";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export default function PostIconsInteraction() {
  const { userId, postId, likes, comments } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  const {
    state: { user },
  } = useContext(AppContext) as contextProps;

  const toggleLikeColor = () => {
    if (likes?.includes(user?.uid as string)) return true;
    return false;
  };

  return (
    <StyledInteractWithPostIcons liked={toggleLikeColor()}>
      <div>
        <Link to={`/comment/${postId as string}`}>
          <BiComment /> {comments?.length} Comment
        </Link>
      </div>
      <div
        onClick={() => {
          (async () =>
            await postReaction({
              userId,
              postId,
              voteType: "like",
              user: user as User,
            }))();
        }}
      >
        <SlLike /> {likes && likes.length} Like
      </div>
    </StyledInteractWithPostIcons>
  );
}
