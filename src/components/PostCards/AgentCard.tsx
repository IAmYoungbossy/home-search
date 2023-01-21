import PostCard from "./ClientCard";
import house from "../assets/house.webp";
import { ImageContainer, StyledHouseDetails } from "./StyledAgentCard";

export default function AgentCard() {
  return (
    <PostCard>
      <>
        <h4>Furnished 2bdrm Bungalow in Pentcity Estate, Lokogoma for Sale</h4>
        <ImageContainer bgImage={house} />
        <HouseDetails />
      </>
    </PostCard>
  );
}

const houseDetailsArr = [
  "4 Bedrooms",
  "Port Harcourt",
  "N850,000",
  "Deal Open",
];

function HouseDetails() {
  return (
    <StyledHouseDetails>
      <ul>
        {houseDetailsArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledHouseDetails>
  );
}
