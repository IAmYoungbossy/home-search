import styled from "styled-components";

export const StyledHeaderSocial = styled.header`
  background-color: white;

  & > div {
    gap: 10px;
    display: flex;
    margin: 0 auto;
    padding: 8px 0;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledSocialPage = styled.div`
  background-color: #dae0e6;
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
    background-color: #f6f7f8;
    outline: 1px solid #eff1f2;
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
