import {
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { IlikeOrUnlike } from "./postDetails";

interface IAddComment extends IlikeOrUnlike {
  name: string;
  comment: string;
  currentUser: string;
}

export default async function addComment({
  name,
  userId,
  postId,
  comment,
  currentUser,
}: IAddComment) {
  const userID = userId as string;
  const postID = postId as string;

  const commentCollection = collection(
    db,
    "USERS",
    userID,
    "POSTS",
    postID,
    "Comments"
  );

  const commentFields = {
    name,
    Likes: arrayUnion(),
    commentText: comment,
    Upvotes: arrayUnion(),
    Comments: arrayUnion(),
    Downvotes: arrayUnion(),
    createdAt: serverTimestamp(),
  };

  const document = await addDoc(
    commentCollection,
    commentFields
  );

  const commentId = document.id;

  updateDoc(
    doc(
      db,
      "USERS",
      userID,
      "POSTS",
      postID,
      "Comments",
      commentId
    ),
    {
      commentId,
      currentUser,
    }
  );
}
