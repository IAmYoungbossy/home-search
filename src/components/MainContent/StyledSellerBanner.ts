import styled from "styled-components";

export const StyledSellerBanner = styled.div`
  display: flex;
  margin: 50px auto;
  width: max-content;
  background-color: #f7f7f7;

  h2 {
    font-size: 34px;
  }

  & > div:first-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 40px 0 40px 50px;
    justify-content: space-between;
  }

  button {
    color: white;
    border: none;
    font-weight: 200;
    font-size: 1rem;
    margin-top: 5px;
    padding: 15px 20px;
    border-radius: 30px;
    background-color: #d92228;
  }
`;
