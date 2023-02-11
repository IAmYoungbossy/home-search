import {
  actionType,
  appReducer,
  appStateType,
  APP_INITIAL_STATE,
} from "../reducer/appReducer";
import { createContext, useReducer } from "react";

export interface AppContextProps {
  state: appStateType;
  dispatch: React.Dispatch<actionType>;
}

export const AppContext = createContext<AppContextProps | null>(null);
interface PageProps {
  children: React.ReactNode;
}

const AppDataProvider = ({ children }: PageProps) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
