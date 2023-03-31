import {
  UserSVG,
  HeartSVG,
  ArrowDownSVG,
} from "../assets/header/SvgMarkUp";
import * as SC from "./StyledHeader";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { signInObj } from "../SignIn/SignIn";
import Logo from "../assets/header/Logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { buttonContent } from "../../constant/textConstant";
import { LOG_IN_PANEL } from "../../constant/objectConstant";

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
  const { dispatch, state } = useContext(
    AppContext
  ) as contextProps;

  const { signInToggle } = signInObj(state);

  const handleSignInPageToggle = () =>
    dispatch(signInToggle);

  return (
    <SC.StyledUserIcon onClick={handleSignInPageToggle}>
      <HeartSVG />
      <UserButton />
    </SC.StyledUserIcon>
  );
}

function UserButton() {
  const [avatarUrl, setAvatarUrl] = useState<
    string | boolean
  >(false);

  const {
    state: { user },
  } = useContext(AppContext) as contextProps;

  useEffect(() => {
    if (user?.photoURL) setAvatarUrl(user.photoURL);
  }, [user]);

  return (
    <SC.StyledUserButton>
      {typeof avatarUrl === "string" ? (
        <img
          alt="Avatar"
          src={avatarUrl}
        />
      ) : (
        <UserSVG />
      )}
      <ArrowDownSVG />
    </SC.StyledUserButton>
  );
}

function LoginPanel() {
  return (
    <div>
      {LOG_IN_PANEL.map((item) => {
        if (item.arrow) {
          return (
            <button>
              {item.icon} <span>{item.name}</span>{" "}
              {item.arrow}
            </button>
          );
        }
        return (
          <button>
            {item.icon} <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
}
