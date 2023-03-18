import { Fragment } from "react";
import { CommentCard } from "./CommentCard";
import { DocumentData } from "firebase/firestore";
import { ICardProps } from "../../utilities/types";

interface IDisplayCommentCard {
  index: number;
  comment: DocumentData;
  postData: DocumentData | ICardProps;
}

export function DisplayCommentCard({
  index,
  comment,
  postData,
}: IDisplayCommentCard) {
  return (
    <Fragment key={comment.data.commentId}>
      {comment.data.commentId && (
        <CommentCard
          comment={comment}
          commentIndex={index}
          postId={postData.postId}
          userId={postData.userDocId}
          commentId={comment.data.commentId}
          commentText={comment.data.commentText}
        />
      )}
    </Fragment>
  );
}
