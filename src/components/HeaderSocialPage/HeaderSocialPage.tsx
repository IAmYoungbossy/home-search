import {
  StyledHeaderSocial,
  StyledNotificationIcons,
  StyledSearchBarSocial,
} from "./StyledHeaderSocialPage";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CTAButtons, HeaderLogo, UserIcon } from "../Header/Header";

export function HeaderSocial() {
  return (
    <StyledHeaderSocial>
      <div>
        <HeaderLogo />
        <SearchBarSocial />
        <NotificationIcons />
        <CTAButtons />
        <UserIcon />
      </div>
    </StyledHeaderSocial>
  );
}

function SearchBarSocial() {
  return (
    <StyledSearchBarSocial>
      <CiSearch />
      <input type="search" name="social" placeholder="Search Realtor" />
    </StyledSearchBarSocial>
  );
}

function NotificationIcons() {
  return (
    <StyledNotificationIcons>
      <MdOutlineOutbond />
      <IoMdNotificationsOutline />
      <AiOutlinePlus />
    </StyledNotificationIcons>
  );
}
