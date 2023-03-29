import { useContext } from "react";
import PostCard from "./ClientCard";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import { ImageContainer, StyledHouseDetails } from "./StyledAgentCard";
import { ShowPosterCardProps } from "../../utilities/types";

interface IAgentCard {
  secondary?: string;
}

export default function AgentCard({ secondary }: IAgentCard) {
  const { postTitle, bgImage } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  return (
    <PostCard secondary={secondary}>
      <>
        <h3>{postTitle}</h3>
        <ImageContainer bgImage={bgImage as string} />
        <HouseDetails />
      </>
    </PostCard>
  );
}

function HouseDetails() {
  const { budget, location, dealStatus, apartmentSize } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

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
