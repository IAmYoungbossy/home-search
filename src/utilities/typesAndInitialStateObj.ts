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
  postId: string;
  userDocId: userType;
  post: postInterface;
  uploadImage: boolean;
  uploadProgress: number;
  showSignInPage: boolean;
  tagButton: tagButtonType;
  EditAndDeleteButton: boolean;
  postFeed: IShowPostCard[] | [];
  buttonTagsToggle: IButtonTagsToggle;
};

export type actionType = {
  type: string;
  payload:
    | boolean
    | string
    | number
    | userType
    | postInterface
    | tagButtonType
    | IShowPostCard[];
};

interface IPostType {
  IMAGE: string;
  imageURL: string;
  POST_BODY: string;
  POST_TITLE: string;
  POST_AS_AGENT: string;
}

export type IAppActionTypes = {
  postId: string;
  POST: IPostType;
  postFeed: string;
  userDocId: string;
  uploadImage: string;
  POST_OBJECT: string;
  uploadProgress: string;
  SHOW_SIGN_IN_PAGE: string;
  EditAndDeleteButton: string;
  BUTTON_TAGS_TOGGLE_OBJECT: string;

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
};

export const APP_ACTION_TYPES: IAppActionTypes = {
  userDocId: "USER",
  postId: "POST_ID",
  postFeed: "POSTFEED",
  POST_OBJECT: "POST OBJECT",
  uploadImage: "UPLOAD IMAGE",
  uploadProgress: "UPLOAD PROGRESS",
  EditAndDeleteButton: "EDIT AND DELETE",
  SHOW_SIGN_IN_PAGE: "SHOW SIGN IN PAGE",
  BUTTON_TAGS_TOGGLE_OBJECT: "BUTTON TAGS",

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
};

export const APP_INITIAL_STATE: appStateType = {
  postId: "",
  postFeed: [],
  userDocId: null,
  uploadProgress: 0,
  uploadImage: false,
  showSignInPage: false,
  EditAndDeleteButton: false,

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

export interface ShowPosterCardProps {
  postId: string;
  budget: string;
  userId: string;
  bgImage?: string;
  postDesc: string;
  location?: string;
  postTitle?: string;
  dealStatus?: string;
  apartmentSize: string;
}

export interface IAppDataProvider extends PageProps, ShowPosterCardProps {}
