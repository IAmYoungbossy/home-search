import { ICommentCard } from "./CommentCard";
import { StyledCommentBox } from "./StyledComment";
import { CommentReactions } from "./CommentReactions";

interface ICommentBox extends ICommentCard {}

export function CommentBox({
  userId,
  postId,
  comment,
  commentId,
  commentText,
  commentIndex,
}: ICommentBox) {
  return (
    <StyledCommentBox>
      <p>{commentText}</p>
      <CommentReactions
        postId={postId}
        userId={userId}
        comment={comment}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </StyledCommentBox>
  );
}
