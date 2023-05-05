import styled, { keyframes } from "styled-components";

const keyFrame = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 36px;
    opacity: 0;
    left: 36px;
  }
  4.9% {
    width: 0;
    height: 0;
    top: 36px;
    opacity: 0;
    left: 36px;
  }
  5% {
    width: 0;
    height: 0;
    top: 36px;
    opacity: 1;
    left: 36px;
  }
  100% {
    top: 0px;
    left: 0px;
    opacity: 0;
    width: 76px;
    height: 76px;
  }
`;

export const StyledPageSpinner = styled.div`
  top: 20px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: block;
  position: relative;

  & div {
    opacity: 1;
    position: absolute;
    border-radius: 50%;
    border: 4px solid red;
    animation: ${keyFrame} 1s cubic-bezier(0, 0.2, 0.8, 1)
      infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;
