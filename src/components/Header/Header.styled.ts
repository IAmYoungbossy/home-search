import styled from "styled-components";

export const StyledHeader = styled.header`
  & > div {
    padding: 2px;
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto, sans-serif;

    sup {
      font-size: 10px;
    }
  }
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

      & > div:first-of-type {
        position: relative;
      }

      & > div:nth-child(2) {
        display: none;
      }

      &:hover {
        padding: 13px 8px 10px;
        border-bottom: 3px solid #d92228;
        & > div:last-of-type {
          display: flex;
          border-top: 1px solid #cacaca;
        }
      }
    }

    & > li > div > sup {
      top: -3px;
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

export const DropDown = styled.div`
  left: 0;
  top: 46px;
  z-index: 1;
  width: 100%;
  /* padding: 15px 0; */
  position: absolute;
  background-color: white;
  & > div {
    width: 100%;
    display: flex;
    max-width: 1280px;
    justify-content: space-between;
    margin: 0 auto;
    section {
      flex: 0 0 33.33%;
      padding: 0px 16px 0 5px;
    }

    li {
      list-style: none;
      line-height: 28px;
    }

    hr {
      margin: 15px 0;
    }

    h4 {
      margin: 16px 0 10px;
    }
  }
`;
