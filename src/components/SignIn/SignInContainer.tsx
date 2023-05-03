import {
  appStateType,
  contextProps,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import { SignIn } from "./SignIn";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { StyledSignInContainer } from "./StyledSignIn";

export default function SignInContainer() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);
  const handleSignInPageToggle = () => dispatch(signInToggle);

  return (
    <>
      {state.showSignInPage && (
        <StyledSignInContainer onClick={handleSignInPageToggle}>
          <SignIn />
        </StyledSignInContainer>
      )}
    </>
  );
}

export function signInObj(state: appStateType) {
  const signInToggle = {
    type: APP_ACTION_TYPES.SHOW_SIGN_IN_PAGE,
    payload: state["showSignInPage"] ? false : true,
  };
  return { signInToggle };
}
