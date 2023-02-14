import { appStateType } from "../reducer/appReducer";
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
  btnTagsState: buttonTagsStateType,
  dispatch: React.Dispatch<buttonTagsActionType>
) => {
  if (btnName === "Budget") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.BUDGET,
      payload: btnTagsState["budget"] ? false : true,
    });
  } else if (btnName === "Location") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.LOCATION,
      payload: btnTagsState["location"] ? false : true,
    });
  } else if (btnName === "Apartment Size") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.APARTMENT,
      payload: btnTagsState["apartment"] ? false : true,
    });
  } else if (btnName === "Deal Status") {
    dispatch({
      type: BUTTON_TAGS_ACTION_TYPE.DEAL_STATUS,
      payload: btnTagsState["dealStatus"] ? false : true,
    });
  }
};

type buttonTagsType = {
  svg: JSX.Element;
  name: string;
};

export const buttonState = (state: appStateType) =>
  state["post"].postAsAgent ? false : true;

export const makeBudgetBtnAlwaysActive = (
  item: buttonTagsType,
  state: appStateType
) => (item["name"] === "Budget" ? false : buttonState(state));
