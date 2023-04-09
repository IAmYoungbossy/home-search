import * as SC from "./StyledHeader";
import UserButton from "./UserButton";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/header/Logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { buttonContent } from "../../constant/textConstant";
import { HeartSVG } from "../../assets/header/SvgMarkUp";

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
