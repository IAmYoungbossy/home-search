import styled from "styled-components";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import House1 from "../assets/house.webp";

const StyledNewListingContainer = styled.div`
  & > div:first-child {
    display: flex;
    line-height: 1.5;
    color: #2b2b4c;
    margin: 20px 0 16px;
    flex-direction: column;

    p {
      color: #3377d5;
    }
  }

  & > div {
    display: flex;
    overflow-x: auto;
  }
`;

export default function NewListingContainer() {
  return (
    <StyledNewListingContainer>
      <div>
        <h2>New Listings in Surprise, AZ</h2>
        <p>View All 356 New Listings</p>
      </div>
      <div>
        <NewListingCard />
        <NewListingCard />
        <NewListingCard />
        <NewListingCard />
      </div>
    </StyledNewListingContainer>
  );
}

const StyledNewListing = styled.div`
  margin: 0 auto;
  color: #2b2b2b;
  width: max-content;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 15%);
`;

function NewListingCard() {
  return (
    <StyledNewListing>
      <ImageContainer />
      <HouseDetails />
    </StyledNewListing>
  );
}

const StyledImageContainer = styled.div`
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

function ImageContainer() {
  return (
    <StyledImageContainer>
      <img src={House1} alt="House" />
      <HeartSaveSVG />
    </StyledImageContainer>
  );
}

const StyledHouseDetails = styled.div`
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

function HouseDetails() {
  return (
    <StyledHouseDetails>
      <HouseSize />
      <h2>$544,990</h2>
      <p>
        <span>4</span> bed <span>2</span> bath <span>2,325</span> sqft
      </p>
      <p>11910 N 189th Ln</p>
      <p>Surprise, AZ 85388</p>
    </StyledHouseDetails>
  );
}

const StyledHouseSize = styled.p`
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

function HouseSize() {
  return (
    <StyledHouseSize>
      <span /> Single Family Home
    </StyledHouseSize>
  );
}
