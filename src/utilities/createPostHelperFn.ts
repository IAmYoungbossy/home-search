import { appStateType, IAppActionTypes } from "../reducer/appReducer";
import {
  buttonTagsActionType,
  buttonTagsStateType,
  BUTTON_TAGS_ACTION_TYPE,
} from "../reducer/buttonTagsReducer";

export const toggleBtnAndInputField = (
  btnName: string,
  btnTagsState: buttonTagsStateType
) => {
  if (btnName === "Budget") return btnTagsState["budget"] ? false : true;
  if (btnName === "Location") return btnTagsState["location"] ? false : true;
  if (btnName === "Apartment Size")
    return btnTagsState["apartment"] ? false : true;
  if (btnName === "Deal Status")
    return btnTagsState["dealStatus"] ? false : true;
  return true;
};

export const btnTagsOnClick = (
  btnName: string,
  boolean: boolean,
  dispatch: React.Dispatch<buttonTagsActionType>
) => {
  if (btnName === "Budget") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.BUDGET,
      payload: boolean,
    });
  } else if (btnName === "Location") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.LOCATION,
      payload: boolean,
    });
  } else if (btnName === "Apartment Size") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.APARTMENT,
      payload: boolean,
    });
  } else if (btnName === "Deal Status") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.DEAL_STATUS,
      payload: boolean,
    });
  }
};

type buttonTagsType = {
  svg: JSX.Element;
  name: string;
};

export const setButtonState = (state: appStateType) =>
  state["post"].postAsAgent ? false : true;

export const makeBudgetBtnAlwaysActive = (
  item: buttonTagsType,
  state: appStateType
) => (item["name"] === "Budget" ? false : setButtonState(state));

export const toggleDealStatus = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  dealStatus: string,
  setDealStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  if (
    e.currentTarget.children[1].textContent === "Deal Status" &&
    dealStatus === "Deal Status"
  )
    setDealStatus("Deal Open");
  else if (
    e.currentTarget.children[1].textContent === "Deal Open" &&
    dealStatus === "Deal Open"
  )
    setDealStatus("Deal Status");
};

export const setInputType = (btn: string) =>
  btn === "Budget" ? "number" : "text";

export const dispatchType = (
  obj: IAppActionTypes | appStateType,
  name: string
): string | number => {
  if (obj.tagButton.Budget === name) return obj.tagButton.Budget;
  if (obj.tagButton.Location === name) return obj.tagButton.Location;
  if (obj.tagButton["Apartment Size"] === name)
    return obj.tagButton["Apartment Size"];
  return "Error";
};

export const inputValue = (
  actionType: appStateType,
  name: string
): string | number => {
  if (name === "Location") return actionType.tagButton.Location;
  if (name === "Budget") return actionType.tagButton.Budget as number;
  if (name === "Apartment Size") return actionType.tagButton["Apartment Size"];
  return "Error";
};
