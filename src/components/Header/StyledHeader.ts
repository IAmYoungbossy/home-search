import styled from "styled-components";

export const StyledHeaderSocial = styled.header`
  background-color: var(--light-bg-color-primary);

  & > div {
    gap: 10px;
    display: flex;
    margin: 0 auto;
    padding: 2px 0;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledSocialPage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--social-page-bg-color-secondary);
`;

export const StyledSearchBarSocial = styled.div`
  flex: 1;
  width: 100%;
  margin: 0 15px;
  position: relative;

  svg {
    top: 3px;
    left: 7px;
    width: 25px;
    height: 25px;
    position: absolute;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 9.7px 35px;
    border-radius: 20px;
    outline: 1px solid var(--social-page-outline-color);
    background-color: var(--social-light-secondary-bg-color);
  }
`;

export const StyledNotificationIcons = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    opacity: 0.7;
  }
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

export const StyledUserIcon = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCTAButtons = styled.div`
  gap: 20px;
  display: flex;
  width: min-content;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.div`
  & > img {
    width: 150px;
    cursor: pointer;
  }
`;