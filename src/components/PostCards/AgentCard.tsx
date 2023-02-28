import PostCard from "./ClientCard";
import { ImageContainer, StyledHouseDetails } from "./StyledAgentCard";

interface IHouseDetails {
  budget: number;
  location: string;
  dealStatus: string;
  apartmentSize: string;
}
interface IAgentCard extends IHouseDetails {
  bgImage: string;
  postDesc: string;
  postTitle: string;
}

export default function AgentCard({
  budget,
  bgImage,
  location,
  postDesc,
  postTitle,
  dealStatus,
  apartmentSize,
}: IAgentCard) {
  return (
    <PostCard postDesc={postDesc} budget={budget}>
      <>
        <h3>{postTitle}</h3>
        <ImageContainer bgImage={bgImage} />
        <HouseDetails
          budget={budget}
          location={location}
          dealStatus={dealStatus}
          apartmentSize={apartmentSize}
        />
      </>
    </PostCard>
  );
}

function HouseDetails({
  budget,
  location,
  dealStatus,
  apartmentSize,
}: IHouseDetails) {
  return (
    <StyledHouseDetails>
      <ul>
        <li>{apartmentSize}</li>
        <li>{location}</li>
        <li>$ {budget}</li>
        <li>{dealStatus}</li>
      </ul>
    </StyledHouseDetails>
  );
}
