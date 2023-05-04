import * as SC from "./StyledSignIn";
import InputFields from "./InputFields";
import SignInProviders from "./SignInProviders";
import { handleOnClick } from "../../utilities/helper";

export function SignIn({
  setSignUpToggle,
}: {
  setSignUpToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <SignInFields>
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

export function SignInFields({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <SC.StyledSignInFields>{children}</SC.StyledSignInFields>
  );
}

export function SignInputFields({
  setSignUpToggle,
}: {
  setSignUpToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
