import { useContext } from "react";
import * as SC from "./StyledHeader";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { signInObj } from "../SignIn/SignIn";
import Logo from "../assets/header/Logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { AppContext } from "../../context/AppContext";
import { IoMdNotificationsOutline } from "react-icons/io";
import { buttonContent } from "../../constant/textConstant";
import { contextProps } from "../../utilities/types";
import { ArrowDownSVG, HeartSVG, UserSVG } from "../assets/header/SvgMarkUp";

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
  const { dispatch, state } = useContext(AppContext) as contextProps;
  const { signInToggle } = signInObj(state);
  const handleSignInPageToggle = () => dispatch(signInToggle);

  return (
    <SC.StyledUserIcon onClick={handleSignInPageToggle}>
      <HeartSVG />
      <UserButton />
    </SC.StyledUserIcon>
  );
}

function UserButton() {
  return (
    <SC.StyledUserButton>
      <UserSVG />
      <ArrowDownSVG />
    </SC.StyledUserButton>
  );
}
