import {
  actionType,
  appStateType,
  IAppActionTypes,
  APP_ACTION_TYPES,
  IButtonTagsToggle,
} from "./typesAndInitialStateObj";

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
) => (item["name"] === "Budget" ? false : setButtonState(state));

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
