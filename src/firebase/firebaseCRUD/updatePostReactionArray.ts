import {
  updateDoc,
  FieldValue,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";

interface IUpdatePostReactionArray {
  updatedObj: {
    Likes?: FieldValue;
    Upvotes?: FieldValue;
    Comments?: FieldValue;
  };
  postDocRef: DocumentReference<DocumentData>;
}

export default async function updatePostReactionArray({
  updatedObj,
  postDocRef,
}: IUpdatePostReactionArray) {
  const addUserId = updatedObj;
  await updateDoc(postDocRef, addUserId);
}
