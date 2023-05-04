import * as SC from "./StyledSignIn";
import InputFields from "./InputFields";
import { ISignUp } from "../SignUp/SignUp";
import SignInProviders from "./SignInProviders";
import { handleOnClick } from "../../utilities/helper";

export function SignIn({ setSignUpToggle }: ISignUp) {
  return (
    <SC.StyledSignIn onClick={handleOnClick}>
      <div>
        <Agreement header="Login" />
        <div>
          <SignInProviders />
          <div>
            <div>
              <p>OR</p>
            </div>
            <hr />
          </div>
        </div>
        <SignInFields color="#d93a00">
          <SignInputFields setSignUpToggle={setSignUpToggle} />
        </SignInFields>
      </div>
    </SC.StyledSignIn>
  );
}

export function Agreement({ header }: { header: string }) {
  return (
    <SC.StyledLoginAgreement>
      <h2>{header}</h2>
      <p>
        By continuing, you agree are setting up a Reddit account
        and agree to our <span>User Agreement</span> and{" "}
        <span>Privacy Policy</span>.
      </p>
    </SC.StyledLoginAgreement>
  );
}

interface ISignInFields {
  color: string;
  children: JSX.Element;
}

export function SignInFields({
  children,
  color,
}: ISignInFields) {
  return (
    <SC.StyledSignInFields color={color}>
      {children}
    </SC.StyledSignInFields>
  );
}

export function SignInputFields({ setSignUpToggle }: ISignUp) {
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
        New to Reddit?{" "}
        <span onClick={setSignUpToggle.bind(null, true)}>
          Sign Up
        </span>
      </p>
    </>
  );
}
