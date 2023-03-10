import styled from "styled-components";

export const StyledNewListingContainer = styled.div`
  margin-top: 50px;
  & > div {
    max-width: 1280px;
    margin: 15px auto 11px;

    & > div:first-child {
      display: flex;
      color: #2b2b4c;
      line-height: 1.5;
      flex-direction: column;

      p {
        color: #3377d5;
      }
    }

    & > div {
      gap: 10px;
      display: flex;
      padding: 5px;
      overflow-x: auto;
      justify-content: space-between;
    }
  }
`;

export const StyledNewListing = styled.div`
  width: max-content;
  color: var(--footer-bg-color);
  box-shadow: 0px 0px 8px rgb(0 0 0 / 15%);
`;

export const StyledImageContainer = styled.div`
  width: 290px;
  position: relative;

  img {
    width: 100%;
  }

  svg {
    bottom: 0;
    right: 20px;
    width: 40px;
    fill: white;
    stroke: white;
    cursor: pointer;
    position: absolute;
  }

  g path:first-of-type {
    fill: transparent;
  }

  g path:first-of-type:hover {
    fill: #ff00003e;
  }
`;

export const StyledHouseDetails = styled.div`
  line-height: 1.3;
  padding: 5px 15px 5px;

  span {
    font-weight: 900;
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const StyledHouseSize = styled.p`
  gap: 4px;
  display: flex;
  align-items: center;

  span:first-of-type {
    width: 10px;
    height: 10px;
    display: block;
    border-radius: 25%;
    background-color: #36b396;
  }
`;
