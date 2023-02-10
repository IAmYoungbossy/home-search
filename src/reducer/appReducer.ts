export const APP_ACTION_TYPES = {
  TRUE: "TRUE",
  FALSE: "FALSE",
};

export type appStateType = {
  showSignInpage: boolean;
};

type actionType = {
  type: string;
  payload: boolean;
};

export const APP_INITIAL_STATE = {
  showSignInpage: false,
};

export const appReducer = (state: appStateType, action: actionType) => {
  switch (action.type) {
    case APP_ACTION_TYPES.FALSE:
      return {
        ...state,
        showSignInpage: action.payload,
      };
    case APP_ACTION_TYPES.TRUE:
      return {
        ...state,
        showSignInpage: action.payload,
      };
    default:
      return state;
  }
};
