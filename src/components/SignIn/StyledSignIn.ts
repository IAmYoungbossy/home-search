import styled from "styled-components";

export const StyledSignInFields = styled.form`
  input {
    width: 100%;
    outline: none;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid var(--social-sign-in-border-color);
  }

  p {
    font-size: 11px;
    font-family: "Noto Sans", sans-serif;
    color: var(--social-font-color-primary);
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    color: var(--social-secondary-font-color);
  }

  button {
    width: 100%;
    border: none;
    padding: 12px;
    margin: 20px 0 15px;
    border-radius: 20px;
    font-weight: bolder;
    background-color: #d93a00;
    color: var(--social-light-font-color-primary);
  }

  & > div:first-child {
    margin-bottom: 20px;

    & > input:first-child {
      margin-bottom: 15px;
    }
  }
`;

export const StyledLoginAgreement = styled.div`
  h2 {
    font-size: 20px;
    margin-top: 24px;
    color: var(--social-font-color-primary);
    font-family: var(--social-ibm-plex-sans-font-family);
  }

  p {
    margin-top: 8px;
    font-size: 11px;
    color: var(--social-font-color-primary);
    font-family: var(--social-noto-sans-font-family);

    span {
      color: var(--social-secondary-font-color);
    }
  }
`;

export const StyledSignInContainer = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  padding: 0.5rem;
  position: absolute;
  background-color: rgb(0 0 0 / 50%);
  min-height: -webkit-fill-available;
`;

export const StyledSignIn = styled.div`
  top: 100px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: max-content;
  border-radius: 20px;
  max-width: max-content;
  box-shadow: 2px 10px 20px 0px #0000006e;
  background-color: var(--light-bg-color-primary);

  & > div {
    margin: 20px;
    max-width: 280px;
    background-color: var(--light-bg-color-primary);
  }

  & > div > div:nth-child(2) {
    gap: 10px;
    display: flex;
    margin: 32px 0 7px;
    flex-direction: column;

    button {
      gap: 20px;
      display: flex;
      border-radius: 20px;
      background-color: inherit;
      padding: 10px 5px 10px 20px;
      border: 1px solid var(--social-sign-in-border-color);
    }

    hr {
      border-top: none;
      border-color: var(--social-sign-in-border-color);
    }

    svg {
      font-size: 20px;
    }

    & > div {
      display: flex;
      position: relative;
      margin: 20px 0 24px;
      flex-direction: column;
      justify-content: center;

      & > div {
        width: 100%;
        display: flex;
        position: absolute;
        justify-content: center;
      }
    }

    p {
      padding: 5px 10px;
      background-color: var(--light-bg-color-primary);
    }
  }
`;
