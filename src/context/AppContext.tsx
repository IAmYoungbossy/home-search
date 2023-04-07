import {
  PageProps,
  contextProps,
  APP_INITIAL_STATE,
  APP_ACTION_TYPES,
} from "../utilities/types";
import { useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createContext, useReducer } from "react";
import { appReducer } from "../reducer/appReducer";
import { useAuthState } from "react-firebase-hooks/auth";

export const AppContext =
  createContext<contextProps | null>(null);

const AppDataProvider = ({ children }: PageProps) => {
  const [user, loading, error] = useAuthState(auth);

  const [state, dispatch] = useReducer(
    appReducer,
    APP_INITIAL_STATE
  );

  useEffect(() => {
    dispatch({
      payload: user,
      type: APP_ACTION_TYPES.USER,
    });
  }, [user]);

  const value = { state, dispatch, loading, error };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppDataProvider;
