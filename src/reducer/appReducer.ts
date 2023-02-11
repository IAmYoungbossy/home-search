export const APP_ACTION_TYPES = {
  POST: {
    IMAGE: "IMAGE TRUE",
    POST_BODY: "POST BODY",
    POST_TITLE: "POST TITLE",
    POST_AS_AGENT_TRUE: "POST AS AGENT TRUE",
  },
  SHOW_SIGN_IN_PAGE: "SHOW SIGN IN PAGE",
};

interface postInterface {
  image: boolean;
  postBody: string;
  postTitle: string;
  postAsAgent: boolean;
}

export type appStateType = {
  post: postInterface;
  showSignInPage: boolean;
};

type actionType = {
  type: string;
  payload: boolean;
};

export const APP_INITIAL_STATE = {
  post: {
    image: false,
    postBody: "",
    postTitle: "",
    postAsAgent: false,
  },
  showSignInPage: false,
};

export const appReducer = (state: appStateType, action: actionType) => {
  switch (action.type) {
    case APP_ACTION_TYPES.SHOW_SIGN_IN_PAGE:
      return {
        ...state,
        showSignInPage: action.payload,
      };
    default:
      return state;
  }
};
