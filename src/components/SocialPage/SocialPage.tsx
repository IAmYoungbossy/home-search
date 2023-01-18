import styled from "styled-components";
import { HeaderLogo } from "../Header/Header";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
    </StyledSocialPage>
  );
}

function HeaderSocial() {
  return (
    <header>
      <div>
        <HeaderLogo />
      </div>
    </header>
  );
}

const StyledSocialPage = styled.div`
  background-color: #dae0e6;
`;
