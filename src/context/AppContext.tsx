import {
  appStateType,
  APP_ACTION_TYPES,
  APP_INITIAL_STATE,
  appReducer,
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
      type: state.showSignInpage
        ? APP_ACTION_TYPES.FALSE
        : APP_ACTION_TYPES.TRUE,
      payload: state.showSignInpage ? false : true,
    });
  };

  const value = { handleSignInPageToggle, state };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
