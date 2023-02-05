import {
  StyledSignIn,
  StyledSignInFields,
  StyledLoginAgreement,
  StyledSignInContainer,
} from "./StyledSignIn";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignInContainer() {
  return (
    <StyledSignInContainer>
      <SignIn />
    </StyledSignInContainer>
  );
}

export function SignIn() {
  return (
    <StyledSignIn>
      <div>
        <LoginAgreement />
        <div>
          <ProviderButton providerName="Google">
            <FcGoogle />
          </ProviderButton>
          <ProviderButton providerName="Facebook">
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
}

function ProviderButton({ providerName, children }: ProviderButtonProps) {
  return (
    <button>
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
