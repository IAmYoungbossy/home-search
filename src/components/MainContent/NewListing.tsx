import {
  StyledHouseSize,
  StyledNewListing,
  StyledHouseDetails,
  StyledImageContainer,
  StyledNewListingContainer,
} from "./StyledNewListing";
import House1 from "../assets/house.webp";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";

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

function NewListingCard() {
  return (
    <StyledNewListing>
      <ImageContainer />
      <HouseDetails />
    </StyledNewListing>
  );
}

function ImageContainer() {
  return (
    <StyledImageContainer>
      <img src={House1} alt="House" />
      <HeartSaveSVG />
    </StyledImageContainer>
  );
}

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

function HouseSize() {
  return (
    <StyledHouseSize>
      <span /> Single Family Home
    </StyledHouseSize>
  );
}
