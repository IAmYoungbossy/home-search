import { IlikeOrUnlike } from "../../firebaseCRUD";
import PostCard from "./ClientCard";
import { ImageContainer, StyledHouseDetails } from "./StyledAgentCard";

interface IHouseDetails {
  budget: number;
  location: string;
  dealStatus: string;
  apartmentSize: string;
}
interface IAgentCard extends IHouseDetails, IlikeOrUnlike {
  bgImage: string;
  postDesc: string;
  postTitle: string;
  secondary?: string;
}

export default function AgentCard({
  userId,
  postId,
  budget,
  bgImage,
  location,
  postDesc,
  postTitle,
  secondary,
  dealStatus,
  apartmentSize,
}: IAgentCard) {
  return (
    <PostCard
      postDesc={postDesc}
      budget={budget}
      userId={userId}
      postId={postId}
      secondary={secondary}
    >
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
