import { useContext } from "react";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import {
  ImageContainer,
  StyledHouseDetails,
} from "./StyledAgentCard";
import { ShowPosterCardProps } from "../../utilities/types";
import CardContainer from "./CardContainer";

interface IAgentCard {
  secondary?: string;
}

export default function AgentCard({
  secondary,
}: IAgentCard) {
  const { postTitle, bgImage } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  return (
    <CardContainer secondary={secondary}>
      <>
        <h3>{postTitle}</h3>
        <ImageContainer bgImage={bgImage as string} />
        <HouseDetails />
      </>
    </CardContainer>
  );
}

function HouseDetails() {
  const { budget, location, dealStatus, apartmentSize } =
    useContext(ShowPostCardContext) as ShowPosterCardProps;

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
