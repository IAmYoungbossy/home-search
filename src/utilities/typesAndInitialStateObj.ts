import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface Icomment {
  name: string;
  comment: string;
  Likes: string[];
  Upvotes: string[];
  Downvotes: string[];
}

export interface ICardProps {
  budget: string;
  postId: string;
  Likes: string[];
  location: string;
  postDesc: string;
  imageUrl: string;
  postTitle: string;
  Upvotes: string[];
  userDocId: string;
  dealStatus: string;
  Comments: Icomment[];
  postAsAgent: boolean;
  apartmentSize: string;
}

export interface IShowPostCard {
  data: DocumentData | ICardProps;
  id: string;
}

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
  imageURL: string;
  postTitle: string;
  postAsAgent: boolean;
}

export type tagButtonType = {
  Location: string;
  "Deal Status": string;
  Budget: number | string;
  "Apartment Size": string;
};

export type userType = string | null;

export type appStateType = {
  userDocId: userType;
  post: postInterface;
  uploadImage: boolean;
  uploadProgress: number;
  showSignInPage: boolean;
  tagButton: tagButtonType;
  postFeed: IShowPostCard[] | [];
  buttonTagsToggle: IButtonTagsToggle;
};

export type actionType = {
  type: string;
  payload: boolean | string | number | userType | IShowPostCard[];
};

export type IAppActionTypes = {
  postFeed: string;
  userDocId: string;
  uploadImage: string;
  uploadProgress: string;
  POST: {
    IMAGE: string;
    imageURL: string;
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
  userDocId: "USER",
  postFeed: "POSTFEED",
  uploadImage: "UPLOAD IMAGE",
  uploadProgress: "UPLOAD PROGRESS",
  POST: {
    IMAGE: "IMAGE TRUE",
    POST_BODY: "POST BODY",
    imageURL: "IMAGE URL",
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

export const APP_INITIAL_STATE: appStateType = {
  postFeed: [],
  userDocId: null,
  post: {
    image: false,
    postBody: "",
    imageURL: "",
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
  uploadProgress: 0,
};

export interface contextProps {
  loading: boolean;
  state: appStateType;
  error: Error | undefined;
  user: User | null | undefined;
  dispatch: React.Dispatch<actionType>;
}

export interface PageProps {
  children: React.ReactNode;
}
