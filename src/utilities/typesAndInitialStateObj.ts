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

export interface postInterface {
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
  uploadImage: boolean;
  showSignInPage: boolean;
  tagButton: tagButtonType;
  buttonTagsToggle: IButtonTagsToggle;
};

export type actionType = {
  type: string;
  payload: boolean | string | number;
};

export type IAppActionTypes = {
  uploadImage: string;
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
    APP: string;
    BUDGET: string;
    LOCATION: string;
    APARTMENT: string;
    DEAL_STATUS: string;
  };
  SHOW_SIGN_IN_PAGE: string;
};

export const APP_ACTION_TYPES: IAppActionTypes = {
  uploadImage: "UPLOAD IMAGE",
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
    APP: "APP",
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
  uploadImage: false,
  showSignInPage: false,
};

export interface contextProps {
  state: appStateType;
  dispatch: React.Dispatch<actionType>;
}

export interface PageProps {
  children: React.ReactNode;
}
