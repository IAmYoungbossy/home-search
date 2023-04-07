import { User } from "firebase/auth";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export interface IlikeOrUnlike {
  user?: User;
  userId?: string;
  postId?: string;
}

export default async function getPostDetails({
  user,
  userId,
  postId,
}: IlikeOrUnlike) {
  const userID = userId as string;
  const postID = postId as string;
  const currentUserId = user?.uid as string;
  const postDocRef = doc(db, "USERS", userID, "POSTS", postID);
  const postDocSnapshot = await getDoc(postDocRef);

  return { postDocRef, currentUserId, postDocSnapshot };
}
