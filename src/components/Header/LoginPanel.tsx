import { useContext } from "react";
import { signInObj } from "../SignIn/SignIn";
import { StyledLoginPanel } from "./StyledHeader";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import logout from "../../firebase/firebaseAuth/signOut";
import { LOG_IN_PANEL } from "../../constant/objectConstant";

export default function LoginPanel() {
  const { dispatch, state } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);

  const handleSignInPageToggle = () => dispatch(signInToggle);

  const logoutOrLogin = () => {
    if (state.user) logout();
    else handleSignInPageToggle();
  };

  return (
    <StyledLoginPanel onClick={(e) => e.stopPropagation()}>
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
              onClick={logoutOrLogin}
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
