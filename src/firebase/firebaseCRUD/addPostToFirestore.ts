import {
  query,
  where,
  addDoc,
  getDocs,
  arrayUnion,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { actionType, appStateType } from "../../utilities/types";
import addPostId from "./addPostId";
import { db } from "../firebaseConfig";
import { editPostInDatabase } from "./editPostInDatabase";
import { addToPostObject } from "../../utilities/helper";

export interface IaddPostToFirestore {
  postId?: string;
  postDesc: string;
  postTitle: string;
  location?: string;
  imageUrl?: string;
  dealStatus?: string;
  postAsAgent: boolean;
  apartmentSize?: string;
  budget: string | number;
  userDocId: string | null;
  editId?: string | undefined;
  dispatch?: React.Dispatch<actionType>;
}

export const addPostToFirestore = async ({
  budget,
  editId,
  postId,
  postDesc,
  imageUrl,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IaddPostToFirestore) => {
  const commonData = {
    budget,
    postDesc,
    userDocId,
    postAsAgent,
    apartmentSize,
    Likes: arrayUnion(),
    Upvotes: arrayUnion(),
    Comments: arrayUnion(),
    Downvotes: arrayUnion(),
    createdAt: serverTimestamp(),
  };

  const postData = postAsAgent
    ? {
        ...commonData,
        imageUrl,
        location,
        postTitle,
        dealStatus,
      }
    : { ...commonData };

  if (!editId) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      postData
    );
    const postId = document.id;
    await addPostId({ db, userDocId, postId });
  }
  console.log(editId);

  if (editId) {
    await editPostInDatabase({
      budget,
      postId,
      postDesc,
      imageUrl,
      location,
      postTitle,
      userDocId,
      dealStatus,
      postAsAgent,
      apartmentSize,
    });
  }
};

export const AddPostToDB = async (
  state: appStateType,
  editId: string | undefined,
  dispatch: React.Dispatch<actionType>
) => {
  // Checks if there's signed in user
  if (!state.user) return;

  // Gets current user doc id
  const q = query(
    collection(db, "USERS"),
    where("userId", "==", state.user?.uid)
  );

  const documents = await getDocs(q);
  const userDocId = documents.docs[0].data().docId;

  addPostToFirestore(
    addToPostObject(userDocId, state, editId, dispatch)
  );
};
