import { CommentBox } from "./CommentBox";
import { StyledcommentCard } from "./StyledComment";
import { ICommentReaction } from "./CommentReactions";
import { OriginalPoster } from "../PostCards/ClientCard";

export interface ICommentCard extends ICommentReaction {
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
