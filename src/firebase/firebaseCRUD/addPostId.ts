import { Firestore, doc, updateDoc } from "firebase/firestore";

export interface IAddPostId {
  db: Firestore;
  postId: string;
  userDocId: string | null;
}

async function addPostId({ db, userDocId, postId }: IAddPostId) {
  const docRef = doc(
    db,
    "USERS",
    userDocId as string,
    "POSTS",
    postId
  );
  await updateDoc(docRef, { postId: postId });
}

export default addPostId;
