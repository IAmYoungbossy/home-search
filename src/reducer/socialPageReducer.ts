export const ACTION_TYPES = {
  TRUE: "TRUE",
  FALSE: "FALSE",
};

export type stateType = {
  showSignInpage: boolean;
};

type actionType = {
  type: string;
  payload: boolean;
};

export const INITIAL_STATE = {
  showSignInpage: false,
};

export const socialPageReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case ACTION_TYPES.FALSE:
      return {
        ...state,
        showSignInpage: action.payload,
      };
    case ACTION_TYPES.TRUE:
      return {
        ...state,
        showSignInpage: action.payload,
      };
    default:
      return state;
  }
};
