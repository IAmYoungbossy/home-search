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
  dispatch,
  navigate,
  postDesc,
  imageUrl,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IaddPostToFirestore) => {
  // Empty field validations
  const editValidation =
    postId?.trim() !== "" &&
    budget?.trim() !== "" &&
    postDesc?.trim() !== "" &&
    imageUrl?.trim() !== "" &&
    location?.trim() !== "" &&
    postTitle?.trim() !== "" &&
    userDocId?.trim() !== "" &&
    dealStatus?.trim() !== "" &&
    apartmentSize?.trim() !== "";
  const commonValidation =
    budget?.trim() !== "" &&
    postDesc?.trim() !== "" &&
    userDocId?.trim() !== "" &&
    apartmentSize?.trim() !== "";
  const agentValidation =
    imageUrl?.trim() !== "" &&
    location?.trim() !== "" &&
    postTitle?.trim() !== "" &&
    dealStatus?.trim() !== "";

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

  const postData =
    postAsAgent && commonValidation && agentValidation
      ? {
          ...commonData,
          imageUrl,
          location,
          postTitle,
          dealStatus,
        }
      : { ...commonData };

  if (!editId && commonValidation) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      postData
    );
    const postId = document.id;
    await addPostId({ db, userDocId, postId });

    // Redirects to homepage
    if (navigate) navigate("/");
  } else if (editId && editValidation) {
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
    // Redirects to homepage
    if (navigate) navigate("/");
  } else {
    if (dispatch) {
      dispatch({
        type: APP_ACTION_TYPES.POST_TYPE,
        payload: "Fill all the required fields.",
      });
      setTimeout(() => {
        dispatch({
          type: APP_ACTION_TYPES.POST_TYPE,
          payload: "",
        });
      }, 5000);
    }
  }
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
    addToPostObject(userDocId, state, editId, dispatch, navigate)
  );
};
