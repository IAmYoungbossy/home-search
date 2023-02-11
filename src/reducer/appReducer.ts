export const APP_ACTION_TYPES = {
  POST: {
    IMAGE: "IMAGE TRUE",
    POST_BODY: "POST BODY",
    POST_TITLE: "POST TITLE",
    POST_AS_AGENT: "POST AS AGENT",
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

export type actionType = {
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
    // case APP_ACTION_TYPES.POST.POST_AS_AGENT:
    //   return {
    //     ...state,
    //     post: { ...APP_INITIAL_STATE.post, postAsAgent: action.payload },
    //   };
    // case APP_ACTION_TYPES.POST.POST_TITLE:
    //   return {
    //     ...state,
    //     post: { ...APP_INITIAL_STATE.post, postTitle: action.payload },
    //   };
    // case APP_ACTION_TYPES.POST.POST_BODY:
    //   return {
    //     ...state,
    //     post: { ...APP_INITIAL_STATE.post, postBody: action.payload },
    //   };
    // case APP_ACTION_TYPES.POST.IMAGE:
    //   return {
    //     ...state,
    //     post: { ...APP_INITIAL_STATE.post, image: action.payload },
    //   };
    default:
      return state;
  }
};
