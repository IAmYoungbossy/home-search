import styled from "styled-components";

export const StyledNewListingContainer = styled.div`
  & > div:first-child {
    display: flex;
    line-height: 1.5;
    color: #2b2b4c;
    margin: 15px 0 11px;
    flex-direction: column;
    p {
      color: #3377d5;
    }
  }

  & > div {
    display: flex;
    padding: 5px 0;
    overflow-x: auto;
  }
`;

export const StyledNewListing = styled.div`
  margin: 0 auto;
  color: #2b2b2b;
  width: max-content;
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
    margin-left: 20px;
    font-weight: 900;
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
