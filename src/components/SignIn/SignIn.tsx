import * as SC from "./StyledSignIn";
import { ISignUp } from "../SignUp/SignUp";
import { useState, useContext } from "react";
import SignInProviders from "./SignInProviders";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { handleOnClick } from "../../utilities/helper";
import InputFields, { IInputFields } from "./InputFields";
import logInWithEmailAndPassword from "../../firebase/firebaseAuth/emailAndPasswordAuth";

export function SignIn({ setSignUpToggle }: ISignUp) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <SignInputFields
            setSignUpToggle={setSignUpToggle}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
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

interface ISignInputFields extends ISignUp, IInputFields {}

export function SignInputFields({
  setSignUpToggle,
  email,
  password,
  setEmail,
  setPassword,
}: ISignInputFields) {
  const { dispatch } = useContext(AppContext) as contextProps;

  const handleSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    try {
      await logInWithEmailAndPassword(email, password, dispatch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <InputFields
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <div>
        <p>
          Forget your <span>username</span> or{" "}
          <span>password</span> ?
        </p>
      </div>
      <button onClick={handleSignIn}>Log In</button>
      <p>
        New to Reddit?{" "}
        <span onClick={setSignUpToggle.bind(null, true)}>
          Sign Up
        </span>
      </p>
    </>
  );
}
