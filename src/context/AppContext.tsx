import {
  appReducer,
  appStateType,
  APP_ACTION_TYPES,
  APP_INITIAL_STATE,
} from "../reducer/appReducer";
import { createContext, useReducer } from "react";

export interface AppContextProps {
  state: appStateType;
  handleSignInPageToggle: () => void;
}

export const AppContext = createContext<AppContextProps | null>(null);
interface PageProps {
  children: React.ReactNode;
}

const AppDataProvider = ({ children }: PageProps) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);

  const handleSignInPageToggle = () => {
    dispatch({
      type: APP_ACTION_TYPES.SHOW_SIGN_IN_PAGE,
      payload: state.showSignInPage ? false : true,
    });
  };

  const value = { handleSignInPageToggle, state };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
