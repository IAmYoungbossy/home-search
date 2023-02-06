import styled from "styled-components";

export const StyledSellerBanner = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 50px auto;
  background-color: var(--disclosure-bg-color);

  h2 {
    font-size: 34px;
  }

  div {
    flex: 1;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 0 40px 50px;
    justify-content: space-between;
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    font-weight: 200;
    font-size: 1rem;
    margin-top: 5px;
    padding: 15px 20px;
    border-radius: 30px;
    background-color: var(--heart-hover-color);
    color: var(--social-light-font-color-primary);
  }
`;
