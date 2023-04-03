import {
  UserSVG,
  HeartSVG,
  ArrowDownSVG,
} from "../assets/header/SvgMarkUp";
import * as SC from "./StyledHeader";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { signInObj } from "../SignIn/SignIn";
import Logo from "../assets/header/Logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { IoMdNotificationsOutline } from "react-icons/io";
import { buttonContent } from "../../constant/textConstant";
import { LOG_IN_PANEL } from "../../constant/objectConstant";
import { logout } from "../../firebaseAuth";

export function Header() {
  return (
    <SC.StyledHeaderSocial>
      <div>
        <HeaderLogo />
        <SearchBarSocial />
        <NotificationIcons />
        <CTAButtons />
        <UserIcon />
      </div>
    </SC.StyledHeaderSocial>
  );
}

export function HeaderLogo() {
  return (
    <Link to="/">
      <SC.StyledHeaderLogo>
        <img
          src={Logo}
          alt="Logo"
        />
      </SC.StyledHeaderLogo>
    </Link>
  );
}

function SearchBarSocial() {
  return (
    <SC.StyledSearchBarSocial>
      <CiSearch />
      <input
        type="search"
        name="social"
        placeholder="Search Realtor"
      />
    </SC.StyledSearchBarSocial>
  );
}

function NotificationIcons() {
  return (
    <SC.StyledNotificationIcons>
      <MdOutlineOutbond />
      <IoMdNotificationsOutline />
      <AiOutlinePlus />
    </SC.StyledNotificationIcons>
  );
}

// Call To Action Buttons
export function CTAButtons() {
  return (
    <SC.StyledCTAButtons>
      {buttonContent.map((content) => (
        <SC.Button key={content}>{content}</SC.Button>
      ))}
    </SC.StyledCTAButtons>
  );
}

export function UserIcon() {
  return (
    <SC.StyledUserIcon>
      <HeartSVG />
      <UserButton />
    </SC.StyledUserIcon>
  );
}

function UserButton() {
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
    <SC.StyledUserButton
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
    </SC.StyledUserButton>
  );
}

function LoginPanel() {
  const { dispatch, state } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);

  const handleSignInPageToggle = () =>
    dispatch(signInToggle);

  const logoutOrLogin = () => {
    if (state.user) logout();
    else handleSignInPageToggle();
  };

  return (
    <SC.StyledLoginPanel
      onClick={(e) => e.stopPropagation()}
    >
      {LOG_IN_PANEL.map((item) => {
        if (item.arrow) {
          return (
            <button key={item.name}>
              {item.icon} <span>{item.name}</span>{" "}
              {item.arrow}
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
    </SC.StyledLoginPanel>
  );
}
