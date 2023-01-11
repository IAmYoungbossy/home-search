import Logo from "../assets/header/Logo.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <HeaderLogo />
    </header>
  );
}

const StyledHeaderLogo = styled.div`
  img {
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
