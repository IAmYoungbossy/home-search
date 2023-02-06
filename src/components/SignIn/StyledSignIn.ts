import styled from "styled-components";

export const StyledSignInFields = styled.form`
  input {
    width: 100%;
    outline: none;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #dde1e8;
  }

  p {
    font-size: 11px;
    color: #1a1a1b;
    font-family: "Noto Sans", sans-serif;
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
    color: white;
    margin: 20px 0 15px;
    border-radius: 20px;
    font-weight: bolder;
    background-color: #d93a00;
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
    color: #1a1a1b;
    margin-top: 24px;
    font-family: "IBM Plex Sans", Arial, sans-serif;
  }

  p {
    margin-top: 8px;
    font-size: 11px;
    color: #1a1a1b;
    font-family: "Noto Sans", sans-serif;

    span {
      color: var(--social-secondary-font-color);
    }
  }
`;

export const StyledSignInContainer = styled.div`
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: rgb(0 0 0 / 50%);
`;

export const StyledSignIn = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 20px;
  max-width: max-content;
  box-shadow: 2px 10px 20px 0px #0000006e;
  background-color: var(--light-bg-color-primary);

  & > div {
    margin: 40px;
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
      border: 1px solid #dde1e8;
      padding: 10px 5px 10px 40px;
    }

    hr {
      border-top: none;
      border-color: #dde1e8;
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
