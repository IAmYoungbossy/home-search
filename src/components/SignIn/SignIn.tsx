import {
  StyledSignIn,
  StyledSignInFields,
  StyledLoginAgreement,
  StyledSignInContainer,
} from "./StyledSignIn";

import {
  appStateType,
  contextProps,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import signInWithGoogle from "../../firebase/firebaseAuth/googleAuth";
import signInWithFacebook from "../../firebase/firebaseAuth/facebookAuth";

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

export function SignIn() {
  const { dispatch } = useContext(AppContext) as contextProps;
  const handleOnClick = (e: SyntheticEvent<HTMLElement>) =>
    e.stopPropagation();

  return (
    <StyledSignIn onClick={handleOnClick}>
      <div>
        <LoginAgreement />
        <div>
          <ProviderButton
            signIn={signInWithGoogle.bind(null, dispatch)}
            providerName="Google"
          >
            <FcGoogle />
          </ProviderButton>
          <ProviderButton
            signIn={signInWithFacebook.bind(null, dispatch)}
            providerName="Facebook"
          >
            <FaFacebook />
          </ProviderButton>
          <div>
            <div>
              <p>OR</p>
            </div>
            <hr />
          </div>
        </div>
        <SignInFields />
      </div>
    </StyledSignIn>
  );
}

function LoginAgreement() {
  return (
    <StyledLoginAgreement>
      <h2>Login</h2>
      <p>
        By continuing, you agree are setting up a Reddit account
        and agree to our <span>User Agreement</span> and{" "}
        <span>Privacy Policy</span>.
      </p>
    </StyledLoginAgreement>
  );
}

interface ProviderButtonProps {
  providerName: string;
  children: JSX.Element;
  signIn: () => Promise<void>;
}

function ProviderButton({
  signIn,
  providerName,
  children,
}: ProviderButtonProps) {
  return (
    <button onClick={signIn}>
      {children}
      <div>Continue with {providerName}</div>
    </button>
  );
}

function SignInFields() {
  return (
    <StyledSignInFields>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        <p>
          Forget your <span>username</span> or{" "}
          <span>password</span> ?
        </p>
      </div>
      <button>Log In</button>
      <p>
        New to Reddit? <span>Sign Up</span>
      </p>
    </StyledSignInFields>
  );
}
