import styled from "styled-components";
import { HeaderLogo } from "../Header/Header";
import { HiHome } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
    </StyledSocialPage>
  );
}

function HeaderSocial() {
  return (
    <StyledHeaderSocial>
      <div>
        <HeaderLogo />
        <HomeButton />
      </div>
    </StyledHeaderSocial>
  );
}

function HomeButton() {
  return (
    <StyledHomeButton>
      <HomeLogo />
      <FiChevronDown />
    </StyledHomeButton>
  );
}

function HomeLogo() {
  return (
    <StyledHomeLogo>
      <HiHome /> <h1>Home</h1>
    </StyledHomeLogo>
  );
}

const StyledHeaderSocial = styled.header`
  background-color: white;

  & > div {
    gap: 10px;
    display: flex;
    margin: 0 auto;
    padding: 8px 0;
    max-width: 1280px;
    align-items: center;
  }
`;

const StyledHomeButton = styled.button`
  width: 100%;
  border: none;
  height: 34px;
  display: flex;
  display: flex;
  max-width: 260px;
  border-radius: 5px;
  position: relative;
  align-items: center;
  padding: 0 56px 0 40px;
  background-color: transparent;
  justify-content: space-between;

  &:hover {
    outline: 1px solid #eff1f2;
  }

  svg {
    width: 25px;
    height: 25px;
    position: absolute;
  }

  & > svg:first-of-type {
    top: 3px;
    right: 8px;
    width: 30px;
  }
`;

const StyledHomeLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 14px;
    color: #1c1c1c;
    font-family: "IBM Plex Sans", sans-serif;
  }

  svg {
    top: 2px;
    left: 8px;
  }
`;

const StyledSocialPage = styled.div`
  background-color: #dae0e6;
`;
