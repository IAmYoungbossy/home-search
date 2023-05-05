import {
  query,
  where,
  addDoc,
  getDocs,
  arrayUnion,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import {
  actionType,
  appStateType,
  APP_ACTION_TYPES,
  APP_INITIAL_STATE,
} from "../../utilities/types";

import addPostId from "./addPostId";
import { db } from "../firebaseConfig";
import { NavigateFunction } from "react-router-dom";
import { addToPostObject } from "../../utilities/helper";
import { editPostInDatabase } from "./editPostInDatabase";

export interface IaddPostToFirestore {
  budget: string;
  postId?: string;
  postDesc: string;
  postTitle: string;
  location?: string;
  imageUrl?: string;
  dealStatus?: string;
  postAsAgent: boolean;
  apartmentSize?: string;
  userDocId: string | null;
  navigate?: NavigateFunction;
  editId?: string | undefined;
  dispatch?: React.Dispatch<actionType>;
}

export const addPostToFirestore = async ({
  budget,
  editId,
  postId,
  navigate,
  postDesc,
  dispatch,
  imageUrl,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IaddPostToFirestore) => {
  const postData = {
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
    ...(postAsAgent && {
      imageUrl,
      location,
      postTitle,
      dealStatus,
    }),
  };

  if (!editId) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      postData
    );
    const postId = document.id;
    await addPostId({ db, userDocId, postId });
  } else if (editId) {
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

  if (dispatch)
    dispatch({
      payload: APP_INITIAL_STATE.post,
      type: APP_ACTION_TYPES.POST_RESET,
    });
  if (navigate) navigate("/");
};

export const AddPostToDB = async (
  state: appStateType,
  editId: string | undefined,
  dispatch: React.Dispatch<actionType>,
  navigate: NavigateFunction
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
    addToPostObject(userDocId, state, editId, navigate, dispatch)
  );
};
