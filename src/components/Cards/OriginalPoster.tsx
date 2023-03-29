import GetPosterName, {
  IGetPosterName,
} from "./GetPostName";
import { FaUserCircle } from "react-icons/fa";
import { IPostDetailsProps } from "./PostDetails";
import { StyledOriginalPoster } from "./StyledClientCard";

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {}

export function OriginalPoster({
  children,
  commentId,
  commentPostId,
  commentUserId,
}: OriginalPosterProps) {
  return (
    <StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <GetPosterName
          commentId={commentId}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </StyledOriginalPoster>
  );
}
