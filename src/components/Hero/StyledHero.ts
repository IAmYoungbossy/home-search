import styled from "styled-components";

export const StyledHero = styled.div`
  color: white;
  position: relative;
  img {
    width: 100%;
  }
`;

export const StyledHeroText = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 56px;
    font-size: 56px;
    line-height: 1.5;
    text-shadow: rgb(0 0 0 / 40%) 0px 1px 3px;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
    margin: 4px 0 32px;
    text-shadow: rgb(0 0 0 / 50%) 0px 1px 3px;
  }

  div {
    /* margin: 0 auto 35px; */
    text-align: center;
    width: max-content;
    margin-bottom: 35px;
    ul {
      gap: 10px;
      display: flex;
      padding: 0 25px;
      margin-bottom: 25px;
      text-align: center;
      justify-content: space-evenly;
    }

    li {
      font-size: 14px;
      font-weight: 900;
      list-style: none;
      padding: 0 0 7px;
      text-shadow: rgb(0 0 0 / 100%) 0px 1px 3px;

      &:hover {
        padding: 0 0 4px;
        border-bottom: 3px solid #d92228;
      }
    }
  }

  & > div > div:last-of-type {
    width: 100%;
    height: fit-content;
    /* margin-top: 50px; */
    position: relative;

    button {
      top: 8px;
      right: 7px;
      width: 40px;
      height: 40px;
      border: none;
      display: flex;
      position: absolute;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background-color: #d92228;

      &:hover {
        background-color: rgb(184, 29, 34);
        border-color: rgb(184, 29, 34);
      }
    }
  }

  input {
    width: 100%;
    height: 55px;
    border: none;
    outline: none;
    display: flex;
    font-weight: 200;
    font-size: 1.2rem;
    align-items: center;
    border-radius: 50px;
    padding: 20px 50px 20px 13px;

    &::placeholder {
      color: #470000;
      font-weight: 200;
      font-size: 1.2rem;
    }
  }
`;
