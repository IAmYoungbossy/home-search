import { Fragment } from "react";
import { CommentCard } from "./CommentCard";
import { DocumentData } from "firebase/firestore";
import { ICardProps } from "../../utilities/types";

export function DisplayCommentCard(comment: DocumentData, index: number) {
  return (postData: DocumentData | ICardProps) => (
    <Fragment key={index}>
      {comment.data.commentId && (
        <CommentCard
          commentIndex={index}
          postId={postData.postId}
          userId={postData.userDocId}
          commentId={comment.data.commentId}
          comment={comment.data.commentText}
        />
      )}
    </Fragment>
  );
}
