import { useContext } from "react";
import { StyledAgentPostTags } from "./StyledAgentCard";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export default function AgentPostTags() {
  const { budget, location, dealStatus, apartmentSize } =
    useContext(ShowPostCardContext) as ShowPosterCardProps;

  return (
    <StyledAgentPostTags>
      <ul>
        <li>{apartmentSize}</li>
        <li>{location}</li>
        <li>$ {budget}</li>
        <li>{dealStatus}</li>
      </ul>
    </StyledAgentPostTags>
  );
}
