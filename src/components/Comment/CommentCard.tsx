import { CommentBox } from "./CommentBox";
import { StyledcommentCard } from "./StyledComment";
import { ICommentReactions } from "./CommentReactions";
import { OriginalPoster } from "../PostCards/ClientCard";

export interface ICommentCard extends ICommentReactions {
  comment: string;
}

export function CommentCard({
  userId,
  postId,
  comment,
  commentId,
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
        commentIndex={commentIndex}
      />
    </StyledcommentCard>
  );
}
