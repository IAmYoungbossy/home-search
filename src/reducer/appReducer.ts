import {
  actionType,
  appStateType,
  APP_ACTION_TYPES,
  APP_INITIAL_STATE,
} from "../utilities/typesAndInitialStateObj";

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

    /**
     * dealStatus is always set to false so it doesn't
     * toggle between input and button
     */
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
