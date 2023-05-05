import {
  userType,
  actionType,
  appStateType,
  IShowPostCard,
  postInterface,
  APP_ACTION_TYPES,
  APP_INITIAL_STATE,
} from "../utilities/types";
import { User } from "firebase/auth";

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
    case APP_ACTION_TYPES.POST.POST_DESC:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: {
          ...state.post,
          postDesc: action.payload as string,
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
    case APP_ACTION_TYPES.POST.imageURL:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: {
          ...state.post,
          imageURL: action.payload as string,
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

    // For DisplayButtonTags component in CreatePost Module
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
    // Closses any opened input tag field
    case APP_ACTION_TYPES.buttonTagsToggle.APP:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
        },
      };

    /*************************************************
     * dealStatus is always set to false so it doesn't
     * toggle between input and button
     ************************************************/
    case APP_ACTION_TYPES.buttonTagsToggle.DEAL_STATUS:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: {
          ...APP_INITIAL_STATE.buttonTagsToggle,
          dealStatus: false,
        },
      };

    /*************************************************
     * Toggles textarea and uplaod image buttons in
     * PostOptions component in createPost module
     *************************************************/
    case APP_ACTION_TYPES.uploadImage:
      return {
        ...JSON.parse(JSON.stringify(state)),
        uploadImage: action.payload as boolean,
      };

    case APP_ACTION_TYPES.userDocId:
      return {
        ...JSON.parse(JSON.stringify(state)),
        userDocId: action.payload as userType,
      };
    case APP_ACTION_TYPES.uploadProgress:
      return {
        ...JSON.parse(JSON.stringify(state)),
        uploadProgress: action.payload as number,
      };

    // Post feed updating
    case APP_ACTION_TYPES.postFeed:
      return {
        ...JSON.parse(JSON.stringify(state)),
        postFeed: action.payload as IShowPostCard[],
      };

    case APP_ACTION_TYPES.EditAndDeleteButton:
      return {
        ...JSON.parse(JSON.stringify(state)),
        EditAndDeleteButton: action.payload as boolean,
      };
    case APP_ACTION_TYPES.postId:
      return {
        ...JSON.parse(JSON.stringify(state)),
        postId: action.payload as boolean,
      };
    case APP_ACTION_TYPES.POST_OBJECT:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: action.payload as boolean,
      };
    case APP_ACTION_TYPES.BUTTON_TAGS_TOGGLE_OBJECT:
      return {
        ...JSON.parse(JSON.stringify(state)),
        buttonTagsToggle: action.payload as boolean,
      };

    case APP_ACTION_TYPES.POST_TYPE:
      return {
        ...JSON.parse(JSON.stringify(state)),
        postType: action.payload as "create" | "edit",
      };

    case APP_ACTION_TYPES.USER:
      return {
        ...JSON.parse(JSON.stringify(state)),
        user: action.payload as User,
      };

    case APP_ACTION_TYPES.POST_RESET:
      return {
        ...JSON.parse(JSON.stringify(state)),
        post: action.payload as postInterface,
        tagButton: APP_INITIAL_STATE.tagButton,
      };

    default:
      return state;
  }
};
