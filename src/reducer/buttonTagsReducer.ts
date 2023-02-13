import { createContext } from "react";

export const BUTTON_TAGS_ACTION_TYPE = {
  BUDGET: "BUDGET",
  LOCATION: "LOCATION",
  APARTMENT: "APARTMENT",
  DEAL_STATUS: "DEAL STATUS",
};

export const BUTTON_TAGS_INITIAL_STATE = {
  budget: 0,
  location: "",
  apartment: "",
  dealStatus: false,
};

type buttonTagsStateType = {
  budget: number;
  location: string;
  apartment: string;
  dealStatus: boolean;
};

type buttonTagsActionType = {
  type: string;
  payload: string | number | boolean;
};

export const buttonTagsReducer = (
  state: buttonTagsStateType,
  action: buttonTagsActionType
): buttonTagsStateType => {
  switch (action.type) {
    case BUTTON_TAGS_ACTION_TYPE.BUDGET:
      return {
        ...state,
        budget: action.payload as number,
      };

    case BUTTON_TAGS_ACTION_TYPE.LOCATION:
      return {
        ...state,
        location: action.payload as string,
      };

    case BUTTON_TAGS_ACTION_TYPE.APARTMENT:
      return {
        ...state,
        apartment: action.payload as string,
      };

    case BUTTON_TAGS_ACTION_TYPE.DEAL_STATUS:
      return {
        ...state,
        dealStatus: action.payload as boolean,
      };
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
