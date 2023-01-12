import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: space-around;
  font-family: Roboto, sans-serif;
`;

// Header logo and Nav links container
export const StyledHeaderLogoAndNav = styled.div`
  display: flex;
  align-items: center;

  & > div:first-of-type {
    margin-right: 30px;
  }
`;

// Header Logo components
export const StyledHeaderLogo = styled.div`
  & > img {
    width: 150px;
    cursor: pointer;
  }
`;

// Nav links components
export const StyledNavLinks = styled.nav`
  & > ul {
    gap: 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > li {
      cursor: pointer;
      font-size: 14px;
      list-style: none;
      padding: 13px 8px;
      position: relative;

      &:hover {
        padding: 13px 8px 10px;
        border-bottom: 3px solid #d92228;
      }
    }

    & > li > sup {
      top: 10px;
      font-size: 11px;
      position: absolute;
    }
  }
`;

// Call To Action component
export const StyledCTAButtons = styled.div`
  gap: 20px;
  display: flex;
  width: min-content;
  align-items: center;
  justify-content: space-between;
`;
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

// User account
export const StyledUserIcon = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Account Button
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
