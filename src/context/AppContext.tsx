import {
  PageProps,
  contextProps,
  APP_INITIAL_STATE,
} from "../utilities/typesAndInitialStateObj";
import { createContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";

export const AppContext = createContext<contextProps | null>(null);

const AppDataProvider = ({ children }: PageProps) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
