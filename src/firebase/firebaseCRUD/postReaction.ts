import {
  doc,
  getDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import getPostDetails, { IlikeOrUnlike } from "./postDetails";
import updatePostReactionArray from "./updatePostReactionArray";

export interface IVote extends IlikeOrUnlike {
  commentId?: string;
  commentIndex?: number;
  voteType: "upvote" | "downvote" | "like";
}

export default async function postReaction({
  user,
  userId,
  postId,
  voteType,
  commentIndex,
  commentId,
}: IVote) {
  const props = { user, userId, postId };
  const { postDocRef, currentUserId, postDocSnapshot } =
    await getPostDetails(props);

  let votes = voteType === "upvote" ? "Upvotes" : "Downvotes";
  let oppositeVotes =
    voteType === "upvote" ? "Downvotes" : "Upvotes";
  if (voteType === "like") votes = "Likes";

  if (commentIndex !== undefined) {
    const commentDocRef = doc(
      db,
      "USERS",
      userId as string,
      "POSTS",
      postId as string,
      "Comments",
      commentId as string
    );
    const commentDocSnapshot = await getDoc(commentDocRef);
    if (
      commentDocSnapshot.exists() &&
      commentDocSnapshot.data()[votes].includes(currentUserId)
    ) {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayRemove(currentUserId) },
        postDocRef: commentDocRef,
      });
    } else {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayUnion(currentUserId) },
        postDocRef: commentDocRef,
      });
      if (voteType === "downvote" || voteType === "upvote") {
        await updatePostReactionArray({
          updatedObj: {
            [oppositeVotes]: arrayRemove(currentUserId),
          },
          postDocRef: commentDocRef,
        });
      }
    }
  }

  if (commentIndex === undefined) {
    if (
      postDocSnapshot.exists() &&
      postDocSnapshot.data()[votes].includes(currentUserId)
    ) {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayRemove(currentUserId) },
        postDocRef,
      });
    } else {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayUnion(currentUserId) },
        postDocRef,
      });
      if (voteType === "downvote" || voteType === "upvote") {
        await updatePostReactionArray({
          updatedObj: {
            [oppositeVotes]: arrayRemove(currentUserId),
          },
          postDocRef,
        });
      }
    }
  }
}
