import { useContext, useState } from "react";
import InputFields from "../SignIn/InputFields";
import { handleOnClick } from "../../utilities/helper";
import SignInProviders from "../SignIn/SignInProviders";
import { SignInFields, Agreement } from "../SignIn/SignIn";
import { StyledSignIn as StyledSignUp } from "../SignIn/StyledSignIn";
import { registerWithEmailAndPassword } from "../../firebase/firebaseAuth/emailAndPasswordAuth";
import { AppContext } from "../../context/AppContext";
import { contextProps } from "../../utilities/types";

export interface ISignUp {
  setSignUpToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ setSignUpToggle }: ISignUp) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AppContext) as contextProps;

  const handleSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") return;
    try {
      await registerWithEmailAndPassword(
        name,
        email,
        password,
        dispatch
      );
    } catch (err) {
      console.log(err);
    }
  };

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
            <SignUpFields
              name={name}
              setName={setName}
            />
            <InputFields
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <button onClick={handleSignUp}>Sign Up</button>
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

interface ISignUpFields {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

function SignUpFields({ name, setName }: ISignUpFields) {
  return (
    <>
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        value={name.trim()}
        onChange={(e) => setName(e.currentTarget.value)}
      />
    </>
  );
}
