import Logo from "../assets/header/Logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogoAndNav />
      <CTAButtons />
    </StyledHeader>
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
    cursor: pointer;
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
    gap: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > li {
      padding: 0 8px;
      cursor: pointer;
      font-size: 14px;
      list-style: none;
      font-family: Roboto, sans-serif;
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

// Call To Action component
const StyledCTAButtons = styled.div`
  gap: 20px;
  display: flex;
  width: min-content;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid #a0a0a0;
  background-color: transparent;

  &:hover {
    background-color: #f4f4f4;
  }
`;
const buttonContent = ["Manage Rentals", "Advertise"];

function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}
