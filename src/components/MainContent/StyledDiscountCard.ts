import styled from "styled-components";

export const StyledDiscountCard = styled.div`
  padding: 70px 0;
  margin-top: -40px;
  background-color: var(--disclosure-bg-color);

  & > div {
    gap: 10px;
    display: flex;
    padding: 0 0 5px;
    margin: 0px auto;
    max-width: 1280px;
    overflow-y: hidden;
    justify-content: space-between;

    & > div {
      width: 300px;
      display: flex;
      border-radius: 5px;
      flex-direction: column;
      box-shadow: 0px 1px 6px 1px var(--discount-card-box-shadow-color);
    }

    p {
      text-align: center;
    }
  }
`;

export const StyledImageContainer = styled.div`
  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const StyledCardDetails = styled.div`
  width: 100%;
  padding: 5px;

  p {
    height: 40px;
    max-width: 100%;
    overflow: hidden;
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`;
