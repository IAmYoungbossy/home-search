export interface appActionPostType {
  IMAGE: string;
  POST_BODY: string;
  POST_TITLE: string;
  POST_AS_AGENT: string;
}

export type IAppActionTypes = {
  POST: {
    IMAGE: string;
    POST_BODY: string;
    POST_TITLE: string;
    POST_AS_AGENT: string;
  };
  tagButton: {
    Budget: string;
    Location: string;
    "Deal Status": string;
    "Apartment Size": string;
  };
  SHOW_SIGN_IN_PAGE: string;
};

export const APP_ACTION_TYPES: IAppActionTypes = {
  POST: {
    IMAGE: "IMAGE TRUE",
    POST_BODY: "POST BODY",
    POST_TITLE: "POST TITLE",
    POST_AS_AGENT: "POST AS AGENT",
  },
  tagButton: {
    Budget: "Budget",
    Location: "Location",
    "Deal Status": "Deal Open",
    "Apartment Size": "Apartment Size",
  },
  SHOW_SIGN_IN_PAGE: "SHOW SIGN IN PAGE",
};

interface postInterface {
  image: boolean;
  postBody: string;
  postTitle: string;
  postAsAgent: boolean;
}

export type tagButtonType = {
  Location: string;
  "Deal Status": string;
  Budget: number | string;
  "Apartment Size": string;
};

export type appStateType = {
  post: postInterface;
  showSignInPage: boolean;
  tagButton: tagButtonType;
};

export type actionType = {
  type: string;
  payload: boolean | string | number;
};

export const APP_INITIAL_STATE = {
  post: {
    image: false,
    postBody: "",
    postTitle: "",
    postAsAgent: false,
  },
  tagButton: {
    Budget: "",
    Location: "",
    "Apartment Size": "",
    "Deal Status": "Deal Open",
  },
  showSignInPage: false,
};

export const appReducer = (
  state: appStateType,
  action: actionType
): appStateType => {
  switch (action.type) {
    case APP_ACTION_TYPES.SHOW_SIGN_IN_PAGE:
      return {
        ...state,
        showSignInPage: action.payload as boolean,
      };

    case APP_ACTION_TYPES.POST.POST_AS_AGENT:
      return {
        ...state,
        post: {
          ...state.post,
          postAsAgent: action.payload as boolean,
        },
      };

    case APP_ACTION_TYPES.POST.POST_TITLE:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: {
          ...state.post,
          postTitle: action.payload as string,
        },
      };

    case APP_ACTION_TYPES.POST.POST_BODY:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: {
          ...state.post,
          postBody: action.payload as string,
        },
      };

    case APP_ACTION_TYPES.POST.IMAGE:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: {
          ...state.post,
          image: action.payload as boolean,
        },
      };

    case APP_ACTION_TYPES.tagButton.Budget:
      return {
        ...JSON.parse(JSON.stringify(state)),
        tagButton: {
          ...state.tagButton,
          Budget: action.payload as number,
        },
      };

    case APP_ACTION_TYPES.tagButton.Location:
      return {
        ...JSON.parse(JSON.stringify(state)),
        tagButton: {
          ...state.tagButton,
          Location: action.payload as string,
        },
      };

    case APP_ACTION_TYPES.tagButton["Apartment Size"]:
      return {
        ...JSON.parse(JSON.stringify(state)),
        tagButton: {
          ...state.tagButton,
          "Apartment Size": action.payload as string,
        },
      };
    default:
      return state;
  }
};
