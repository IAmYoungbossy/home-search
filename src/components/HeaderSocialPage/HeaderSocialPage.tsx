import {
  StyledHeaderSocial,
  StyledSearchBarSocial,
  StyledNotificationIcons,
} from "./StyledHeaderSocialPage";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { signInObj } from "../SignIn/SignIn";
import Logo from "../assets/header/Logo.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineOutbond } from "react-icons/md";
import { AppContext } from "../../context/AppContext";
import { IoMdNotificationsOutline } from "react-icons/io";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import { ArrowDownSVG, HeartSVG, UserSVG } from "../assets/header/SvgMarkUp";

export const StyledUserIcon = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function UserIcon() {
  const { dispatch, state } = useContext(AppContext) as contextProps;
  const { signInToggle } = signInObj(state);
  const handleSignInPageToggle = () => dispatch(signInToggle);

  return (
    <StyledUserIcon onClick={handleSignInPageToggle}>
      <HeartSVG />
      <UserButton />
    </StyledUserIcon>
  );
}

export const Button = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid #a0a0a0;
  background-color: transparent;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const StyledUserButton = styled(Button)`
  width: 80px;
  display: flex;
  padding: 2px 10px;
  align-items: center;
  border-radius: 20px;
  justify-content: space-evenly;

  &:hover {
    background: none;
    svg {
      path {
        fill: red;
      }
      &:hover {
        fill: red;
      }
    }
  }
`;

function UserButton() {
  return (
    <StyledUserButton>
      <UserSVG />
      <ArrowDownSVG />
    </StyledUserButton>
  );
}

export const StyledHeaderLogo = styled.div`
  & > img {
    width: 150px;
    cursor: pointer;
  }
`;

export function HeaderLogo() {
  return (
    <Link to="/">
      <StyledHeaderLogo>
        <img src={Logo} alt="Logo" />
      </StyledHeaderLogo>
    </Link>
  );
}

export const StyledCTAButtons = styled.div`
  gap: 20px;
  display: flex;
  width: min-content;
  align-items: center;
  justify-content: space-between;
`;

const buttonContent = ["Manage Rentals", "Advertise"];

export function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button key={content}>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}

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
