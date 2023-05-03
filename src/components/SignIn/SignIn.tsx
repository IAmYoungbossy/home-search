import * as SC from "./StyledSignIn";
import { SyntheticEvent } from "react";
import InputFields from "./InputFields";
import SignInProviders from "./SignInProviders";

export function SignIn() {
  const handleOnClick = (e: SyntheticEvent<HTMLElement>) =>
    e.stopPropagation();

  return (
    <SC.StyledSignIn onClick={handleOnClick}>
      <div>
        <LoginAgreement />
        <div>
          <SignInProviders />
          <div>
            <div>
              <p>OR</p>
            </div>
            <hr />
          </div>
        </div>
        <SignInFields>
          <SignInputFields />
        </SignInFields>
      </div>
    </SC.StyledSignIn>
  );
}

function LoginAgreement() {
  return (
    <SC.StyledLoginAgreement>
      <h2>Login</h2>
      <p>
        By continuing, you agree are setting up a Reddit account
        and agree to our <span>User Agreement</span> and{" "}
        <span>Privacy Policy</span>.
      </p>
    </SC.StyledLoginAgreement>
  );
}

function SignInFields({ children }: { children: JSX.Element }) {
  return (
    <SC.StyledSignInFields>{children}</SC.StyledSignInFields>
  );
}

function SignInputFields() {
  return (
    <>
      <InputFields />
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
    </>
  );
}
