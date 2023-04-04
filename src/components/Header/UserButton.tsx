import {
  UserSVG,
  ArrowDownSVG,
} from "../assets/header/SvgMarkUp";
import LoginPanel from "./LoginPanel";
import { StyledUserButton } from "./StyledHeader";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";

export default function UserButton() {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;
  const [loginPanel, setLoginPanel] = useState(false);

  useEffect(() => {
    const hideLoginPanel = () => setLoginPanel(false);
    document.addEventListener("click", hideLoginPanel);
    return () => {
      document.removeEventListener("click", hideLoginPanel);
    };
  });

  return (
    <StyledUserButton
      as="div"
      onClick={(e) => {
        e.stopPropagation();
        setLoginPanel(!loginPanel);
      }}
    >
      {user?.photoURL ? (
        <img
          alt="Avatar"
          src={user?.photoURL}
        />
      ) : (
        <UserSVG />
      )}
      <ArrowDownSVG />
      {loginPanel && <LoginPanel />}
    </StyledUserButton>
  );
}
