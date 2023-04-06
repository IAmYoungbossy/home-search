import GetPosterName, {
  IGetPosterName,
} from "./GetPostName";
import { FaUserCircle } from "react-icons/fa";
import { IPostDetailsProps } from "./PostDetails";
import { StyledOriginalPoster } from "./StyledClientCard";

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {
  timeCreated?: string;
}

export function OriginalPoster({
  children,
  commentId,
  timeCreated,
  commentPostId,
  commentUserId,
}: OriginalPosterProps) {
  return (
    <StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <GetPosterName
          commentId={commentId}
          timeCreated={timeCreated}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </StyledOriginalPoster>
  );
}
