import GetPosterName, {
  IGetPosterName,
} from "./GetPostName";
import { FaUserCircle } from "react-icons/fa";
import { IPostDetailsProps } from "./PostDetails";
import { DocumentData } from "firebase/firestore";
import { StyledOriginalPoster } from "./StyledClientCard";

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {
  comment?: DocumentData;
}

export function OriginalPoster({
  comment,
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
          comment={comment}
          commentId={commentId}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </StyledOriginalPoster>
  );
}
