import {
  Button,
  StyledHeader,
  StyledNavLinks,
  StyledUserIcon,
  StyledCTAButtons,
  StyledUserButton,
  StyledHeaderLogo,
  StyledHeaderLogoAndNav,
} from "./Header.styled";
import Logo from "../assets/header/Logo.svg";
import { ArrowDownSVG, HeartSVG, UserSVG } from "../assets/header/SvgMarkUp";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogoAndNav />
      <CTAButtons />
      <UserIcon />
    </StyledHeader>
  );
}

function HeaderLogoAndNav() {
  return (
    <StyledHeaderLogoAndNav>
      <HeaderLogo />
      <NavLinks />
    </StyledHeaderLogoAndNav>
  );
}

function HeaderLogo() {
  return (
    <StyledHeaderLogo>
      <img src={Logo} alt="Logo" />
    </StyledHeaderLogo>
  );
}

const navLinks = [
  "Buy",
  "Sell",
  "Rent",
  "Mortgage",
  "Find Realtors",
  "My Home",
  "News & Insights",
];

function NavLinks() {
  const showList = (link: string) => {
    if (link === "Find Realtors")
      return (
        <li key={link}>
          {link}
          <sup>&reg;</sup>
        </li>
      );
    return <li key={link}>{link}</li>;
  };

  return (
    <StyledNavLinks>
      <ul>{navLinks.map(showList)}</ul>
    </StyledNavLinks>
  );
}

const buttonContent = ["Manage Rentals", "Advertise"];

function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button key={content}>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}

function UserIcon() {
  return (
    <StyledUserIcon>
      <HeartSVG />
      <UserButton />
    </StyledUserIcon>
  );
}

function UserButton() {
  return (
    <StyledUserButton>
      <UserSVG />
      <ArrowDownSVG />
    </StyledUserButton>
  );
}
