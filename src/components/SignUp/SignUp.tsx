import InputFields from "../SignIn/InputFields";
import { handleOnClick } from "../../utilities/helper";
import SignInProviders from "../SignIn/SignInProviders";
import { SignInFields, Agreement } from "../SignIn/SignIn";
import { StyledSignIn as StyledSignUp } from "../SignIn/StyledSignIn";

export interface ISignUp {
  setSignUpToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ setSignUpToggle }: ISignUp) {
  return (
    <StyledSignUp onClick={handleOnClick}>
      <div>
        <Agreement header="Sign Up" />
        <div>
          <SignInProviders />
          <div>
            <div>
              <p>OR</p>
            </div>
            <hr />
          </div>
        </div>
        <SignInFields color="#0079d3">
          <>
            <SignUpFields />
            <InputFields />
            <button>Sign Up</button>
            <p>
              Already Have an Account?{" "}
              <span onClick={setSignUpToggle.bind(null, false)}>
                Log in
              </span>
            </p>
          </>
        </SignInFields>
      </div>
    </StyledSignUp>
  );
}

function SignUpFields() {
  return (
    <>
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
      />
    </>
  );
}
