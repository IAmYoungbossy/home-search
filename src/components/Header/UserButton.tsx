import {
  UserSVG,
  ArrowDownSVG,
} from "../assets/header/SvgMarkUp";
import LoginPanel from "./LoginPanel";
import FallbackAvatar from "../assets/avatar.png";
import { StyledUserButton } from "./StyledHeader";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";

export default function UserButton() {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;
  const [loginPanel, setLoginPanel] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(
    null
  );

  useEffect(() => {
    const hideLoginPanel = () => setLoginPanel(false);
    document.addEventListener("click", hideLoginPanel);
    return () => {
      document.removeEventListener("click", hideLoginPanel);
    };
  }, [loginPanel]);

  useEffect(() => {
    if (user && user.photoURL) setImageUrl(user.photoURL);
    console.log(user?.photoURL);
  }, [user, user?.photoURL]);

  return (
    <StyledUserButton
      as="div"
      onClick={(e) => {
        e.stopPropagation();
        setLoginPanel(!loginPanel);
      }}
    >
      {imageUrl ? (
        <img
          width="28px"
          alt="Avatar"
          height="28px"
          src={imageUrl}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${FallbackAvatar}`;
          }}
        />
      ) : (
        <UserSVG />
      )}
      <ArrowDownSVG />
      {loginPanel && <LoginPanel />}
    </StyledUserButton>
  );
}
