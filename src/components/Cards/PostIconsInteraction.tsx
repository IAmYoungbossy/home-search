import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";
import { useContext } from "react";
import { User } from "firebase/auth";
import { toast } from "react-toastify";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiComment } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";
import { StyledInteractWithPostIcons } from "./StyledClientCard";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import postReaction from "../../firebase/firebaseCRUD/postReaction";

export default function PostIconsInteraction() {
  const { userId, postId, likes, comments } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  const {
    state: { user },
  } = useContext(AppContext) as contextProps;

  const toggleLikeColor = () => {
    if (user && likes?.includes(user?.uid as string))
      return true;
    return false;
  };

  return (
    <StyledInteractWithPostIcons liked={toggleLikeColor()}>
      <div>
        <Link to={`/comment/${postId as string}`}>
          <BiComment /> {comments?.length} <span>Comment</span>
        </Link>
      </div>
      <div
        onClick={() => {
          (async () => {
            if (user) {
              await postReaction({
                userId,
                postId,
                voteType: "like",
                user: user as User,
              });
            } else {
              toast.error("Please login");
            }
          })();
        }}
      >
        <SlLike /> {likes && likes.length} <span>Like</span>
      </div>
    </StyledInteractWithPostIcons>
  );
}
