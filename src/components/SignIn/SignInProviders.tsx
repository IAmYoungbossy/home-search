import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { signInObj } from "./SignInContainer";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import signInWithGoogle from "../../firebase/firebaseAuth/googleAuth";
import signInWithFacebook from "../../firebase/firebaseAuth/facebookAuth";

export default function SignInProviders() {
  const { dispatch, state } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);
  const handleSignInPageToggle = () => dispatch(signInToggle);

  return (
    <>
      <ProviderButton
        signIn={signInWithGoogle.bind(
          null,
          dispatch,
          handleSignInPageToggle
        )}
        providerName="Google"
      >
        <FcGoogle />
      </ProviderButton>
      <ProviderButton
        signIn={signInWithFacebook.bind(
          null,
          dispatch,
          handleSignInPageToggle
        )}
        providerName="Facebook"
      >
        <FaFacebook />
      </ProviderButton>
    </>
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
