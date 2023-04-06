import enGB from "date-fns/locale/en-GB";
import { CommentBox } from "./CommentBox";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns/esm";
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
  const [date, setDate] = useState<Date>(new Date());
  const createdAt = comment.createdAt;

  useEffect(() => {
    if (createdAt) {
      const timestamp = createdAt;
      const date = new Date(
        timestamp.seconds * 1000 +
          timestamp.nanoseconds / 1000000
      );
      setDate(date);
    }
  }, [createdAt]);

  const timeCreated = formatDistanceToNow(date, {
    locale: enGB,
    includeSeconds: true,
  });

  return (
    <StyledcommentCard>
      <OriginalPoster
        timeCreated={timeCreated}
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
