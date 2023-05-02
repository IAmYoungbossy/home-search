import {
  actionType,
  ICardProps,
  appStateType,
  IShowPostCard,
  IAppActionTypes,
  APP_ACTION_TYPES,
  IButtonTagsToggle,
  APP_INITIAL_STATE,
} from "./types";

import {
  doc,
  getDoc,
  DocumentData,
  DocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { NavigateFunction } from "react-router-dom";

type buttonTagsType = {
  name: string;
  svg: JSX.Element;
};

interface IToggleDealStatus {
  dealStatus: string;
  dispatch: React.Dispatch<actionType>;
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

export const setButtonState = (state: appStateType) =>
  state["post"].postAsAgent ? false : true;

export const isAlwaysActive = (
  item: buttonTagsType,
  state: appStateType
) =>
  item["name"] === "Budget" || item["name"] === "Apartment Size"
    ? false
    : setButtonState(state);

export const toggleDealStatus = ({
  e,
  dispatch,
  dealStatus,
}: IToggleDealStatus) => {
  const btnContent = e.currentTarget.children[1].textContent;
  const status =
    btnContent === "Deal Status" && dealStatus === "Deal Status";
  const open =
    btnContent === "Deal Open" && dealStatus === "Deal Open";
  const updateStateObj = (textContent: string) => ({
    type: APP_ACTION_TYPES.tagButton["Deal Status"],
    payload: textContent,
  });
  if (status) dispatch(updateStateObj("Deal Open"));
  else if (open) dispatch(updateStateObj("Deal Status"));
};

export const setInputType = (btn: string) =>
  btn === "Budget" ? "number" : "text";

export const toggleBtnAndInputField = (
  btnName: string,
  btnTagsState: IButtonTagsToggle
) => {
  if (btnName === "Budget") {
    return btnTagsState["budget"] ? false : true;
  }
  if (btnName === "Location") {
    return btnTagsState["location"] ? false : true;
  }
  if (btnName === "Apartment Size") {
    return btnTagsState["apartment"] ? false : true;
  }
  if (btnName === "Deal Status") {
    return btnTagsState["dealStatus"] ? false : true;
  }
  return true;
};

export const updateTagButtonsState = (
  btnName: string,
  boolean: boolean,
  dispatch: React.Dispatch<actionType>
) => {
  const BUTTON_TAGS_TYPES = APP_ACTION_TYPES.buttonTagsToggle;
  const updateStateObj = (type: string) =>
    dispatch({ type, payload: boolean });
  if (btnName === "App") {
    updateStateObj(BUTTON_TAGS_TYPES.APP);
  } else if (btnName === "Budget") {
    updateStateObj(BUTTON_TAGS_TYPES.BUDGET);
  } else if (btnName === "Location") {
    updateStateObj(BUTTON_TAGS_TYPES.LOCATION);
  } else if (btnName === "Apartment Size") {
    updateStateObj(BUTTON_TAGS_TYPES.APARTMENT);
  } else if (btnName === "Deal Status") {
    updateStateObj(BUTTON_TAGS_TYPES.DEAL_STATUS);
  }
};

export const dispatchType = (
  obj: IAppActionTypes | appStateType,
  name: string
): string | number => {
  if (obj.tagButton.Budget === name) {
    return obj.tagButton.Budget;
  }
  if (obj.tagButton.Location === name) {
    return obj.tagButton.Location;
  }
  if (obj.tagButton["Apartment Size"] === name) {
    return obj.tagButton["Apartment Size"];
  }
  return "Error";
};

export const inputValue = (
  actionType: appStateType,
  name: string
): string | number => {
  if (name === "Location") {
    return actionType.tagButton.Location;
  }
  if (name === "Budget") {
    return actionType.tagButton.Budget;
  }
  if (name === "Apartment Size") {
    return actionType.tagButton["Apartment Size"];
  }
  return "Error";
};

// Checks all fields before activating post button
export const preventEmptyFieldSubmition = (
  state: appStateType
) => {
  const postDesc = state.post.postDesc;
  const postTitle = state.post.postTitle;
  const generallTags =
    state.tagButton["Apartment Size"].trim() !== "" &&
    state.tagButton.Budget.trim() !== "";

  const tags = state.post.postAsAgent
    ? state.tagButton.Location.trim() !== "" &&
      state.post.imageURL.trim() !== "" &&
      postTitle.trim() !== "" &&
      postDesc.trim() !== "" &&
      generallTags
    : generallTags;

  return postDesc.trim() !== "" && tags;
};

export const onChangeSetPostAs = (
  e: React.ChangeEvent<HTMLSelectElement>,
  dispatch: React.Dispatch<actionType>
) => {
  const postAsValue = {
    type: APP_ACTION_TYPES.POST.POST_AS_AGENT,
    payload: e.target.value === "client" ? false : true,
  };

  const imageUploadValue = {
    type: APP_ACTION_TYPES.uploadImage,
    payload: e.target.value === "client" ? false : true,
  };

  dispatch(postAsValue);
  dispatch(imageUploadValue);
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  dispatch: React.Dispatch<actionType>
) => {
  const updateObj = {
    type: APP_ACTION_TYPES.POST.POST_DESC,
    payload: e.target.value,
  };
  dispatch(updateObj);
};

export const showTags = (state: appStateType) => {
  const tagButton = state.tagButton;
  const postAsAgent = state.post.postAsAgent;
  const buttonTagsToggle = state.buttonTagsToggle;
  const showBudget =
    !buttonTagsToggle.budget && tagButton.Budget !== "";
  const showLocation =
    !buttonTagsToggle.location &&
    postAsAgent &&
    tagButton.Location !== "";
  const showApartment =
    !buttonTagsToggle.apartment &&
    tagButton["Apartment Size"] !== "";
  return {
    showBudget,
    showLocation,
    showApartment,
    buttonTagsToggle,
    tagButton,
  };
};

export const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<actionType>
) => {
  const updateObj = {
    type: APP_ACTION_TYPES.POST.POST_TITLE,
    payload: e.target.value,
  };
  dispatch(updateObj);
};

export const updateStateObj = (
  e: React.ChangeEvent<HTMLInputElement>,
  name: string,
  dispatch: React.Dispatch<actionType>
) => {
  const updatedObj = {
    payload: e.target.value,
    type: dispatchType(APP_ACTION_TYPES, name) as string,
  };
  dispatch(updatedObj);
};

export const disableButton = (
  btnName: string,
  state: appStateType
) =>
  btnName === "Post" ||
  (btnName === "Images & Video" && state.post.postAsAgent)
    ? false
    : true;

export const toggleTextarea = (
  name: string,
  state: appStateType,
  dispatch: React.Dispatch<actionType>
) => {
  if (name === "Images & Video" && state.post.postAsAgent) {
    dispatch({
      type: APP_ACTION_TYPES.uploadImage,
      payload: true,
    });
  }
  if (name === "Post") {
    dispatch({
      payload: false,
      type: APP_ACTION_TYPES.uploadImage,
    });
  }
};

export function onClickToggleButtonTags(
  dispatch: React.Dispatch<actionType>,
  e?: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  if (e !== undefined) e.stopPropagation();
  updateTagButtonsState("App", false, dispatch);
  dispatch({
    payload: false,
    type: APP_ACTION_TYPES.EditAndDeleteButton,
  });
}

interface IEditCard {
  postId: string;
  dispatch: React.Dispatch<actionType>;
  snapshot: DocumentSnapshot<DocumentData>;
}

export function editAgentCard({
  dispatch,
  snapshot,
  postId,
}: IEditCard) {
  const {
    budget,
    imageUrl,
    postDesc,
    location,
    postTitle,
    userDocId,
    postAsAgent,
    apartmentSize,
  } = snapshot.data() as DocumentData;
  dispatch({
    type: APP_ACTION_TYPES.tagButton["Apartment Size"],
    payload: apartmentSize,
  });
  dispatch({
    type: APP_ACTION_TYPES.tagButton.Location,
    payload: location,
  });
  dispatch({
    type: APP_ACTION_TYPES.tagButton.Budget,
    payload: budget,
  });
  dispatch({
    type: APP_ACTION_TYPES.POST_OBJECT,
    payload: {
      ...APP_INITIAL_STATE.post,
      image: true,
      postDesc: postDesc,
      imageURL: imageUrl,
      postTitle: postTitle,
      postAsAgent: postAsAgent,
    },
  });
  dispatch({
    payload: userDocId,
    type: APP_ACTION_TYPES.userDocId,
  });
  dispatch({
    payload: postId,
    type: APP_ACTION_TYPES.postId,
  });
}

export function editClientCard({
  dispatch,
  snapshot,
  postId,
}: IEditCard) {
  const {
    budget,
    postDesc,
    postTitle,
    userDocId,
    postAsAgent,
    apartmentSize,
  } = snapshot.data() as DocumentData;
  dispatch({
    type: APP_ACTION_TYPES.tagButton["Apartment Size"],
    payload: apartmentSize,
  });
  dispatch({
    type: APP_ACTION_TYPES.tagButton.Budget,
    payload: budget,
  });
  dispatch({
    type: APP_ACTION_TYPES.POST_OBJECT,
    payload: {
      ...APP_INITIAL_STATE.post,
      postDesc: postDesc,
      postTitle: postTitle,
      postAsAgent: postAsAgent,
    },
  });
  dispatch({
    payload: userDocId,
    type: APP_ACTION_TYPES.userDocId,
  });
  dispatch({
    payload: postId,
    type: APP_ACTION_TYPES.postId,
  });
}

interface IEditPost {
  userId: string;
  postId: string;
  dispatch: React.Dispatch<actionType>;
}

// Function checks which post card type to edit
export const editPost = async ({
  userId,
  postId,
  dispatch,
}: IEditPost) => {
  const snapshot = await getDoc(
    doc(db, "USERS", userId, "POSTS", postId)
  );
  const { postAsAgent } = snapshot.data() as DocumentData;

  if (postAsAgent) editAgentCard({ dispatch, snapshot, postId });
  if (!postAsAgent)
    editClientCard({ dispatch, snapshot, postId });
};

interface IPostCardProps {
  likes: string[];
  upvotes: string[];
  downvotes: string[];
  post: IShowPostCard;
  comments: DocumentData[];
  postData: DocumentData | ICardProps;
}

export function postCardProps({
  post,
  likes,
  upvotes,
  postData,
  comments,
  downvotes,
}: IPostCardProps) {
  const props = {
    likes,
    postId: post.id,
    upvotes: upvotes,
    comments: comments,
    downvotes: downvotes,
    budget: postData.budget,
    bgImage: postData.imageUrl,
    userId: postData.userDocId,
    location: postData.location,
    postDesc: postData.postDesc,
    postTitle: postData.postTitle,
    createdAt: postData.createdAt,
    dealStatus: postData.dealStatus,
    apartmentSize: postData.apartmentSize,
  };
  return { props };
}

export const addToPostObject = (
  userDocId: string,
  state: appStateType,
  editId: string | undefined,
  dispatch: React.Dispatch<actionType>,
  navigate: NavigateFunction
) => ({
  editId,
  dispatch,
  navigate,
  userDocId,
  postId: state.postId,
  postDesc: state.post.postDesc,
  imageUrl: state.post.imageURL,
  budget: state.tagButton.Budget,
  postTitle: state.post.postTitle,
  location: state.tagButton.Location,
  postAsAgent: state.post.postAsAgent,
  dealStatus: state.tagButton["Deal Status"],
  apartmentSize: state.tagButton["Apartment Size"],
});

export function sortPostByCreatedAt(
  posts: IShowPostCard[],
  dispatch: React.Dispatch<actionType>
) {
  posts.sort((a, b) => {
    if (a.data.createdAt && b.data.createdAt) {
      const dateA = new Date(
        a.data.createdAt.seconds * 1000 +
          a.data.createdAt.nanoseconds / 1000000
      );
      const dateB = new Date(
        b.data.createdAt.seconds * 1000 +
          b.data.createdAt.nanoseconds / 1000000
      );
      return dateB.getTime() - dateA.getTime();
    }
    return b.data.postId - a.data.postId;
  });

  dispatch({
    type: APP_ACTION_TYPES.postFeed,
    payload: posts,
  });
}

export const updatedState = (posts: IShowPostCard[]) => ({
  payload: posts,
  type: APP_ACTION_TYPES.postFeed,
});
