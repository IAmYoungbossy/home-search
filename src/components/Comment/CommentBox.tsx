import { ICommentCard } from "./CommentCard";
import { StyledCommentBox } from "./StyledComment";
import { CommentReactions } from "./CommentReactions";

interface ICommentBox extends ICommentCard {}

export function CommentBox({
  userId,
  postId,
  comment,
  commentId,
  commentIndex,
}: ICommentBox) {
  return (
    <StyledCommentBox>
      <p>{comment}</p>
      <CommentReactions
        postId={postId}
        userId={userId}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </StyledCommentBox>
  );
}
