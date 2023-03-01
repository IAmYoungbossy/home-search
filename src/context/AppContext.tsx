import { auth } from "../firebaseConfig";
import {
  PageProps,
  contextProps,
  APP_INITIAL_STATE,
} from "../utilities/typesAndInitialStateObj";
import { createContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { useAuthState } from "react-firebase-hooks/auth";

export const AppContext = createContext<contextProps | null>(null);

const AppDataProvider = ({ children }: PageProps) => {
  const [user, loading, error] = useAuthState(auth);
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);
  const value = { state, dispatch, user, loading, error };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppDataProvider;
