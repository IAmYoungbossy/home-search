import {
  addDoc,
  arrayUnion,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import {
  actionType,
  APP_ACTION_TYPES,
  appStateType,
} from "../../utilities/types";
import addPostId from "./addPostId";
import { db } from "../firebaseConfig";
import { editPostInDatabase } from "./editPostInDatabase";
import { addToPostObject } from "../../utilities/createPostHelperFn";

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
  postType?: "create" | "edit";
  dispatch?: React.Dispatch<actionType>;
}

export const addPostToFirestore = async ({
  budget,
  postId,
  postDesc,
  dispatch,
  postType,
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
    postTitle,
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
        dealStatus,
      }
    : { ...commonData };

  if (postType === "create") {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      postData
    );
    const postId = document.id;
    await addPostId({ db, userDocId, postId });
  }

  if (postType === "edit" && dispatch) {
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
    dispatch({
      payload: "create",
      type: APP_ACTION_TYPES.POST_TYPE,
    });
  }
};

export const AddPostToDB = async (
  state: appStateType,
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
    addToPostObject(userDocId, state, dispatch)
  );
};
