import { useContext } from "react";
import CardContainer from "./CardContainer";
import AgentPostTags from "./AgentPostTags";
import { ImageContainer } from "./StyledAgentCard";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

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
        <AgentPostTags />
      </>
    </CardContainer>
  );
}
