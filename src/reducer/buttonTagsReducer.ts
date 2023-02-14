import { createContext } from "react";

export const BUTTON_TAGS_ACTION_TYPE = {
  BUDGET: "BUDGET",
  LOCATION: "LOCATION",
  APARTMENT: "APARTMENT",
  DEAL_STATUS: "DEAL STATUS",
};

export const BUTTON_TAGS_INITIAL_STATE = {
  budget: false,
  location: false,
  apartment: false,
  dealStatus: false,
};

export type buttonTagsStateType = {
  budget: boolean;
  location: boolean;
  apartment: boolean;
  dealStatus: boolean;
};

export type buttonTagsActionType = {
  type: string;
  payload: boolean;
};

export const buttonTagsReducer = (
  state: buttonTagsStateType,
  action: buttonTagsActionType
): buttonTagsStateType => {
  switch (action.type) {
    case BUTTON_TAGS_ACTION_TYPE.BUDGET:
      return { ...state, budget: action.payload };
    case BUTTON_TAGS_ACTION_TYPE.LOCATION:
      return { ...state, location: action.payload };
    case BUTTON_TAGS_ACTION_TYPE.APARTMENT:
      return { ...state, apartment: action.payload };
    case BUTTON_TAGS_ACTION_TYPE.DEAL_STATUS:
      return { ...state, dealStatus: action.payload };
    default:
      return state;
  }
};

export interface ButtonTagsContextProps {
  state: buttonTagsStateType;
  dispatch: React.Dispatch<buttonTagsActionType>;
}

export const ButtonTagsContext = createContext<ButtonTagsContextProps | null>(
  null
);
