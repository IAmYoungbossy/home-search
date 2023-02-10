import {
  stateType,
  ACTION_TYPES,
  INITIAL_STATE,
  socialPageReducer,
} from "../reducer/socialPageReducer";
import { createContext, useReducer } from "react";

export interface SocialPageContextProps {
  state: stateType;
  handleSignInPageToggle: () => void;
}

export const SocialPageContext = createContext<SocialPageContextProps | null>(
  null
);
interface PageProps {
  children: React.ReactNode;
}

const SocialPageDataProvider = ({ children }: PageProps) => {
  const [state, dispatch] = useReducer(socialPageReducer, INITIAL_STATE);

  const handleSignInPageToggle = () => {
    dispatch({
      type: state.showSignInpage ? ACTION_TYPES.FALSE : ACTION_TYPES.TRUE,
      payload: state.showSignInpage ? false : true,
    });
  };

  const value = { handleSignInPageToggle, state };

  return (
    <SocialPageContext.Provider value={value}>
      {children}
    </SocialPageContext.Provider>
  );
};

export default SocialPageDataProvider;
