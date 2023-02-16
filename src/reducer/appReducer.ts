export interface appActionPostType {
  IMAGE: string;
  POST_BODY: string;
  POST_TITLE: string;
  POST_AS_AGENT: string;
}

export interface IButtonTagsToggle {
  budget: boolean;
  location: boolean;
  apartment: boolean;
  dealStatus: boolean;
}

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
  buttonTagsToggle: IButtonTagsToggle;
};

export type actionType = {
  type: string;
  payload: boolean | string | number;
};

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
  buttonTagsToggle: {
    BUDGET: string;
    LOCATION: string;
    APARTMENT: string;
    DEAL_STATUS: string;
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
  buttonTagsToggle: {
    BUDGET: "BUDGET",
    LOCATION: "LOCATION",
    APARTMENT: "APARTMENT",
    DEAL_STATUS: "DEAL STATUS",
  },
  SHOW_SIGN_IN_PAGE: "SHOW SIGN IN PAGE",
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
    "Deal Status": "Deal Status",
  },
  buttonTagsToggle: {
    budget: false,
    location: false,
    apartment: false,
    dealStatus: false,
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
    case APP_ACTION_TYPES.tagButton["Deal Status"]:
      return {
        ...JSON.parse(JSON.stringify(state)),
        tagButton: {
          ...state.tagButton,
          "Deal Status": action.payload as string,
        },
      };

    // For ButtonTags component in CreatePost Module
    case APP_ACTION_TYPES.buttonTagsToggle.BUDGET:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
          budget: action.payload,
        },
      };
    case APP_ACTION_TYPES.buttonTagsToggle.LOCATION:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
          location: action.payload,
        },
      };
    case APP_ACTION_TYPES.buttonTagsToggle.APARTMENT:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
          apartment: action.payload,
        },
      };
    // dealStatus is always set to false so it doesn't
    // toggle between input and button
    case APP_ACTION_TYPES.buttonTagsToggle.DEAL_STATUS:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
          dealStatus: false,
        },
      };
    default:
      return state;
  }
};
