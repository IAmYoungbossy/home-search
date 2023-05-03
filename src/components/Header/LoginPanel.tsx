import { useContext } from "react";
import { StyledLoginPanel } from "./StyledHeader";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import logout from "../../firebase/firebaseAuth/signOut";
import { LOG_IN_PANEL } from "../../constant/objectConstant";
import { signInObj } from "../SignIn/SignInContainer";

interface ILoginPanel {
  loginPanel: boolean;
  setLoginPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginPanel({
  loginPanel,
  setLoginPanel,
}: ILoginPanel) {
  const { dispatch, state } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);

  const handleSignInPageToggle = () => dispatch(signInToggle);

  const logoutOrLogin = () => {
    if (state.user) logout();
    else handleSignInPageToggle();
  };

  const getCurrentUserName = (() =>
    state.user && state.user.displayName
      ? state.user.displayName.split(" ")[0]
      : null)();

  return (
    <StyledLoginPanel onClick={(e) => e.stopPropagation()}>
      {getCurrentUserName && (
        <button>Hi {getCurrentUserName}</button>
      )}
      {LOG_IN_PANEL.map((item) => {
        if (item.arrow) {
          return (
            <button key={item.name}>
              {item.icon} <span>{item.name}</span> {item.arrow}
            </button>
          );
        }
        if (item.name === "Log In / Sign Up") {
          return (
            <button
              key={item.name}
              onClick={() => {
                logoutOrLogin();
                setLoginPanel(!loginPanel);
              }}
            >
              {item.icon}{" "}
              <span>
                {state.user ? "Logout" : `${item.name}`}
              </span>
            </button>
          );
        }
        return (
          <button key={item.name}>
            {item.icon} <span>{item.name}</span>
          </button>
        );
      })}
    </StyledLoginPanel>
  );
}
