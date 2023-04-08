import { User } from "firebase/auth";
import { DocumentData, Firestore } from "firebase/firestore";

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
  createdAt: { seconds: number; nanoseconds: number };
}

export interface IShowPostCard {
  data: DocumentData | ICardProps;
  id: string;
}

export interface appActionPostType {
  IMAGE: string;
  POST_DESC: string;
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
  postDesc: string;
  imageURL: string;
  postTitle: string;
  postAsAgent: boolean;
}

export type tagButtonType = {
  Budget: string;
  Location: string;
  "Deal Status": string;
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
  postType: "create" | "edit";
  EditAndDeleteButton: boolean;
  user: User | null | undefined;
  postFeed: IShowPostCard[] | [];
  buttonTagsToggle: IButtonTagsToggle;
};

export type actionType = {
  type: string;
  payload:
    | null
    | User
    | string
    | number
    | boolean
    | userType
    | undefined
    | postInterface
    | tagButtonType
    | IShowPostCard[];
};

interface IPostType {
  IMAGE: string;
  imageURL: string;
  POST_DESC: string;
  POST_TITLE: string;
  POST_AS_AGENT: string;
}

export type IAppActionTypes = {
  USER: string;
  postId: string;
  POST: IPostType;
  postFeed: string;
  userDocId: string;
  uploadImage: string;
  POST_OBJECT: string;
  POST_TYPE: "POST TYPE";
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
  USER: "CURRENT USER",
  postFeed: "POSTFEED",
  POST_TYPE: "POST TYPE",
  POST_OBJECT: "POST OBJECT",
  uploadImage: "UPLOAD IMAGE",
  uploadProgress: "UPLOAD PROGRESS",
  EditAndDeleteButton: "EDIT AND DELETE",
  SHOW_SIGN_IN_PAGE: "SHOW SIGN IN PAGE",
  BUTTON_TAGS_TOGGLE_OBJECT: "BUTTON TAGS",

  POST: {
    IMAGE: "IMAGE TRUE",
    POST_DESC: "POST BODY",
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
  user: undefined,
  userDocId: null,
  uploadProgress: 0,
  postType: "create",
  uploadImage: false,
  showSignInPage: false,
  EditAndDeleteButton: false,

  post: {
    image: false,
    postDesc: "",
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
  dispatch: React.Dispatch<actionType>;
}

export interface PageProps {
  children: React.ReactNode;
}

export interface ShowPosterCardProps {
  postId: string;
  budget: string;
  userId: string;
  likes?: string[];
  bgImage?: string;
  postDesc: string;
  upvotes?: string[];
  location?: string;
  postTitle?: string;
  downvotes?: string[];
  dealStatus?: string;
  apartmentSize: string;
  comments?: DocumentData[];
  createdAt: { seconds: number; nanoseconds: number };
}

export type deleteTuple =
  | [Firestore, string, string, string, string]
  | [Firestore, string, string, string, string, string, string];
export type tuple = [
  Firestore,
  string,
  string,
  string,
  string,
  string
];

export interface IAppDataProvider
  extends PageProps,
    ShowPosterCardProps {}
