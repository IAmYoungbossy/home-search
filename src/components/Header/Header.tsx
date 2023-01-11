import Logo from "../assets/header/Logo.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <HeaderLogoAndNav />
    </header>
  );
}

// Header logo and Nav links container
const StyledHeaderLogoAndNav = styled.div`
  display: flex;
  align-items: center;

  & > div:first-of-type {
    margin-right: 30px;
  }
`;
function HeaderLogoAndNav() {
  return (
    <StyledHeaderLogoAndNav>
      <HeaderLogo />
      <NavLinks />
    </StyledHeaderLogoAndNav>
  );
}

// Header Logo components
const StyledHeaderLogo = styled.div`
  & > img {
    width: 150px;
  }
`;
function HeaderLogo() {
  return (
    <StyledHeaderLogo>
      <img src={Logo} alt="Logo" />
    </StyledHeaderLogo>
  );
}

// Nav links components
const navLinks = [
  "Buy",
  "Sell",
  "Rent",
  "Mortgage",
  "Find Realtors",
  "My Home",
  "News & Insights",
];
const StyledNavLinks = styled.nav`
  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > li {
      list-style: none;
    }
  }
`;
function NavLinks() {
  return (
    <StyledNavLinks>
      <ul>
        {navLinks.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </StyledNavLinks>
  );
}
