import styled from "styled-components";

export const StyledImage = styled.div<{ bgImage: string }>`
  height: 500px;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ bgImage }) => bgImage});
`;

export const StyledWrapper = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }

  input {
    border: 1px solid #c4c4c4;
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  & > div {
    padding: 0 50px;
  }

  & > div > div {
    max-width: 500px;
  }

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 20px;
    padding: 10px 0 0 0;
    margin-bottom: 30px;
  }

  & > div > button {
    border: none;
    font-size: 16px;
    padding: 10px 24px;
    border-radius: 20px;
    background-color: var(--heart-hover-color);
    color: var(--social-light-font-color-primary);
  }

  small {
    left: 50px;
    bottom: 50px;
    cursor: pointer;
    position: absolute;
    text-decoration: underline;
  }
`;
