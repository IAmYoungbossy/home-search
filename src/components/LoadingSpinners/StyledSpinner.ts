import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  width: 95px;
  height: 25px;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const keyFrame = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const StyledSpinner = styled.div`
  top: 2px;
  width: 20px;
  right: 36px;
  height: 20px;
  position: absolute;
  display: inline-block;

  & div {
    width: 19px;
    height: 19px;
    display: block;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-color: #fff transparent transparent transparent;
    animation: ${keyFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1)
      infinite;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
