import {
  SocialPageContext,
  SocialPageContextProps,
} from "../../context/socialPageContext";
import {
  StyledSignIn,
  StyledSignInFields,
  StyledLoginAgreement,
  StyledSignInContainer,
} from "./StyledSignIn";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SyntheticEvent, useContext } from "react";
import { signInWithFacebook, signInWithGoogle } from "../../firebaseAuth";

export default function SignInContainer() {
  const { showSignInPage, handlerToggleSignInPage } = useContext(
    SocialPageContext
  ) as SocialPageContextProps;

  return (
    <>
      {showSignInPage && (
        <StyledSignInContainer onClick={handlerToggleSignInPage}>
          <SignIn />
        </StyledSignInContainer>
      )}
    </>
  );
}

export function SignIn() {
  const handleOnClick = (e: SyntheticEvent<HTMLElement>) => e.stopPropagation();

  return (
    <StyledSignIn onClick={handleOnClick}>
      <div>
        <LoginAgreement />
        <div>
          <ProviderButton signIn={signInWithGoogle} providerName="Google">
            <FcGoogle />
          </ProviderButton>
          <ProviderButton signIn={signInWithFacebook} providerName="Facebook">
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
        By continuing, you agree are setting up a Reddit account and agree to
        our <span>User Agreement</span> and <span>Privacy Policy</span>.
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
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <p>
          Forget your <span>username</span> or <span>password</span> ?
        </p>
      </div>
      <button>Log In</button>
      <p>
        New to Reddit? <span>Sign Up</span>
      </p>
    </StyledSignInFields>
  );
}
