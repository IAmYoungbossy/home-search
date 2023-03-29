import { CommentBox } from "./CommentBox";
import { DocumentData } from "firebase/firestore";
import { StyledcommentCard } from "./StyledComment";
import { ICommentReactions } from "./CommentReactions";
import { OriginalPoster } from "../Cards/OriginalPoster";

export interface ICommentCard extends ICommentReactions {
  commentText: string;
  comment: DocumentData;
}

export function CommentCard({
  userId,
  postId,
  comment,
  commentId,
  commentText,
  commentIndex,
}: ICommentCard) {
  return (
    <StyledcommentCard>
      <OriginalPoster
        commentUserId={userId}
        commentPostId={postId}
        commentId={commentId}
      />
      <CommentBox
        userId={userId}
        postId={postId}
        comment={comment}
        commentId={commentId}
        commentText={commentText}
        commentIndex={commentIndex}
      />
    </StyledcommentCard>
  );
}
