import {
  actionType,
  appStateType,
  IAppActionTypes,
  APP_ACTION_TYPES,
  IButtonTagsToggle,
  APP_INITIAL_STATE,
} from "./typesAndInitialStateObj";
import { db } from "../firebaseConfig";
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";

type buttonTagsType = {
  svg: JSX.Element;
  name: string;
};

interface IToggleDealStatus {
  dealStatus: string;
  dispatch: React.Dispatch<actionType>;
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

export const setButtonState = (state: appStateType) =>
  state["post"].postAsAgent ? false : true;

export const makeBudgetBtnAlwaysActive = (
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
  const status = btnContent === "Deal Status" && dealStatus === "Deal Status";
  const open = btnContent === "Deal Open" && dealStatus === "Deal Open";
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

export const btnTagsOnClick = (
  btnName: string,
  boolean: boolean,
  dispatch: React.Dispatch<actionType>
) => {
  const BUTTON_TAGS_TYPES = APP_ACTION_TYPES.buttonTagsToggle;
  const updateStateObj = (type: string) => dispatch({ type, payload: boolean });
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
    return actionType.tagButton.Budget as number;
  }
  if (name === "Apartment Size") {
    return actionType.tagButton["Apartment Size"];
  }
  return "Error";
};

export const preventEmptyFieldSubmition = (state: appStateType) => {
  const postBody = state.post.postBody;
  const postTitle = state.post.postTitle;
  return (
    postBody.length > 0 &&
    postTitle.length > 0 &&
    postBody.trim() !== "" &&
    postTitle.trim() !== ""
  );
};

export const onChangeSetPostAs = (
  e: React.ChangeEvent<HTMLSelectElement>,
  dispatch: React.Dispatch<actionType>
) => {
  const postAsValue = {
    type: APP_ACTION_TYPES.POST.POST_AS_AGENT,
    payload: e.target.value === "client" ? false : true,
  };
  dispatch(postAsValue);
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  dispatch: React.Dispatch<actionType>
) => {
  const updateObj = {
    type: APP_ACTION_TYPES.POST.POST_BODY,
    payload: e.target.value,
  };
  dispatch(updateObj);
};

export const showTags = (state: appStateType) => {
  const tagButton = state.tagButton;
  const postAsAgent = state.post.postAsAgent;
  const buttonTagsToggle = state.buttonTagsToggle;
  const showBudget = !buttonTagsToggle.budget && tagButton.Budget !== "";
  const showLocation =
    !buttonTagsToggle.location && postAsAgent && tagButton.Location !== "";
  const showApartment =
    !buttonTagsToggle.apartment &&
    postAsAgent &&
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

export const disableButton = (btnName: string, state: appStateType) =>
  btnName === "Post" || (btnName === "Images & Video" && state.post.postAsAgent)
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
  btnTagsOnClick("App", false, dispatch);
  dispatch({
    payload: false,
    type: APP_ACTION_TYPES.EditAndDeleteButton,
  });
}

interface IEditCard {
  dispatch: React.Dispatch<actionType>;
  snapshot: DocumentSnapshot<DocumentData>;
}

export function editAgentCard({ dispatch, snapshot }: IEditCard) {
  const {
    budget,
    postId,
    imageUrl,
    postDesc,
    location,
    postTitle,
    userDocId,
    postAsAgent,
    apartmentSize,
  } = snapshot.data() as DocumentData;

  dispatch({
    type: APP_ACTION_TYPES.POST_OBJECT,
    payload: {
      ...APP_INITIAL_STATE.post,
      image: true,
      postBody: postDesc,
      imageURL: imageUrl,
      postTitle: postTitle,
      postAsAgent: postAsAgent,
    },
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
    type: APP_ACTION_TYPES.tagButton["Apartment Size"],
    payload: apartmentSize,
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

export function editClientCard({ dispatch, snapshot }: IEditCard) {
  const {
    budget,
    postId,
    postDesc,
    postTitle,
    userDocId,
    postAsAgent,
    apartmentSize,
  } = snapshot.data() as DocumentData;

  dispatch({
    type: APP_ACTION_TYPES.POST_OBJECT,
    payload: {
      ...APP_INITIAL_STATE.post,
      postBody: postDesc,
      postTitle: postTitle,
      postAsAgent: postAsAgent,
    },
  });
  dispatch({
    type: APP_ACTION_TYPES.tagButton.Budget,
    payload: budget,
  });
  dispatch({
    type: APP_ACTION_TYPES.tagButton["Apartment Size"],
    payload: apartmentSize,
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
export const editPost = async ({ userId, postId, dispatch }: IEditPost) => {
  const snapshot = await getDoc(doc(db, "USERS", userId, "POSTS", postId));
  const { postAsAgent } = snapshot.data() as DocumentData;

  if (postAsAgent) editAgentCard({ dispatch, snapshot });
  if (!postAsAgent) editClientCard({ dispatch, snapshot });
};
